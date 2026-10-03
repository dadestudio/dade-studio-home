// Run against a local dev or production server. No screenshots or live submissions.
// PLAYWRIGHT_MODULE may point to an existing installation instead of adding a dependency.
import assert from "node:assert/strict";
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || "playwright");

const baseURL = process.env.STUDIO_TEST_URL || "http://127.0.0.1:4313";
assert.match(baseURL, /^http:\/\/(127\.0\.0\.1|localhost):\d+$/);
const homeTitle = "Make your business easier to understand and choose.";
const services = [
  ["Discuss a website", "Website design + build"],
  ["Discuss the graphics", "Graphic design"],
  ["Plan a merch store", "Merch-store design + setup"],
];

(async () => {
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.STUDIO_BROWSER_PATH ? { executablePath: process.env.STUDIO_BROWSER_PATH } : {}),
  });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
  await context.route("**/*", (route) => {
    const url = new URL(route.request().url());
    return ["127.0.0.1", "localhost"].includes(url.hostname) ? route.continue() : route.abort();
  });
  const page = await context.newPage();
  const errors = [];
  let executedScenarios = 0;
  page.on("pageerror", (error) => errors.push(error.message));
  page.setDefaultTimeout(10000);
  const test = async (name, run) => {
    if (process.env.STUDIO_TEST_MATCH && !name.includes(process.env.STUDIO_TEST_MATCH)) return;
    await run();
    executedScenarios++;
    console.log(`PASS ${name}`);
  };
  const home = async (hash = "") => {
    await page.goto(`${baseURL}/${hash}`);
    // goto to another fragment can be a same-document browser navigation.
    // Reload here to exercise a direct document load separately from link clicks.
    await page.reload();
    await page.waitForLoadState("networkidle");
    await page.waitForFunction((title) => document.querySelector("h1")?.textContent === title, homeTitle);
  };
  const expectHome = async (hash) => {
    await page.waitForURL(`${baseURL}/${hash}`);
    await page.waitForFunction((title) => document.querySelector("h1")?.textContent === title, homeTitle);
    assert.equal(await page.locator("#contact").count(), 1);
  };
  const privacy = async () => {
    await page.getByRole("link", { name: "Bot privacy", exact: true }).click();
    await page.waitForURL(`${baseURL}/bot-privacy`);
    await page.getByRole("heading", { name: "Bot Privacy Policy", exact: true }).waitFor();
  };
  try {
    await test("contact → privacy → Back restores homepage; repeated Back/Forward", async () => {
      await home();
      await page.getByRole("link", { name: "Tell me what you need made", exact: true }).click();
      await expectHome("#contact");
      assert.equal(await page.evaluate(() => history.state?.__NA), true);
      for (let index = 0; index < 4; index++) {
        await privacy();
        await page.goBack();
        await expectHome("#contact");
        await page.goForward();
        await page.getByRole("heading", { name: "Bot Privacy Policy", exact: true }).waitFor();
        await page.goBack();
        await expectHome("#contact");
      }
      await page.goBack();
      await expectHome("");
      await page.goForward();
      await expectHome("#contact");
    });

    await test("every primary fragment restores correct content after privacy", async () => {
      for (const [label, hash] of [["Services", "#services"], ["Process", "#process"], ["About", "#about"], ["Shop", "#shop"], ["RemainFrame", "#remainframe"]]) {
        await home();
        await page.getByRole("navigation", { name: "Primary navigation" }).getByRole("link", { name: label, exact: true }).click();
        await expectHome(hash);
        await privacy();
        await page.goBack();
        await expectHome(hash);
      }
      await home("#contact");
      await privacy();
      await page.goBack();
      await expectHome("#contact");
    });

    await test("all service CTAs select editable service, preserve brief, invalidate old draft, and repeat", async () => {
      await home();
      await page.getByLabel("Your name", { exact: true }).fill("Local test");
      await page.getByLabel("Your email", { exact: true }).fill("local@example.invalid");
      await page.getByLabel("Tell me what you need made", { exact: true }).fill("Preserve this local-only project brief.");
      for (const [cta, service] of services) {
        await page.getByRole("link", { name: cta, exact: true }).click();
        await expectHome("#contact");
        assert.equal(await page.getByLabel("What do you need?", { exact: true }).inputValue(), service);
        assert.equal(await page.getByLabel("Your name", { exact: true }).inputValue(), "Local test");
        assert.equal(await page.getByLabel("Tell me what you need made", { exact: true }).inputValue(), "Preserve this local-only project brief.");
        await page.getByRole("button", { name: "Prepare email draft" }).click();
        const draft = page.getByLabel("Email draft", { exact: true });
        await draft.waitFor();
        assert.match(await draft.inputValue(), new RegExp(`Service: ${service.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`));
        const href = await page.getByRole("link", { name: "Open email app" }).getAttribute("href");
        assert.equal(new URL(href).searchParams.get("subject"), `${service} inquiry — Dade Studio`);
        await page.getByLabel("What do you need?", { exact: true }).selectOption("Not sure yet");
        assert.equal(await draft.count(), 0);
        // Same CTA, same #contact URL: selecting must still happen.
        await page.getByRole("link", { name: cta, exact: true }).click();
        assert.equal(await page.getByLabel("What do you need?", { exact: true }).inputValue(), service);
      }
      await page.getByLabel("What do you need?", { exact: true }).selectOption("Graphic design");
      await page.getByRole("button", { name: "Prepare email draft" }).click();
      await page.getByLabel("Email draft", { exact: true }).waitFor();
      assert.match(await page.getByLabel("Email draft", { exact: true }).inputValue(), /Service: Graphic design/);
      await page.getByRole("link", { name: "Discuss a website", exact: true }).click();
      assert.equal(await page.getByLabel("Email draft", { exact: true }).count(), 0);
      assert.equal(await page.getByLabel("What do you need?", { exact: true }).inputValue(), "Website design + build");
    });

    await test("unsent inquiry survives Privacy, Back/Forward, service changes and mobile; reload resets memory", async () => {
      const fields = {
        "inquiry-name": "Unsent local test",
        "inquiry-email": "unsent@example.invalid",
        "inquiry-link": "https://example.invalid/local-work",
        "inquiry-project": "Keep this unsent brief.\nIt is only a local regression fixture.",
        "inquiry-deadline": "Local test timing",
      };
      const expectBrief = async (service) => {
        for (const [id, value] of Object.entries(fields)) {
          assert.equal(await page.locator(`#${id}`).inputValue(), value, `${id} retained`);
        }
        assert.equal(await page.getByLabel("What do you need?", { exact: true }).inputValue(), service);
      };
      const storage = () => page.evaluate(() => JSON.stringify({ local: { ...localStorage }, session: { ...sessionStorage } }));
      for (const width of [1440, 390]) {
        await page.setViewportSize({ width, height: 900 });
        await home("#contact");
        const beforeStorage = await storage();
        for (const [id, value] of Object.entries(fields)) await page.locator(`#${id}`).fill(value);
        await page.getByLabel("What do you need?", { exact: true }).selectOption("Website design + build");
        await privacy();
        await page.goBack();
        await expectHome("#contact");
        await expectBrief("Website design + build");
        assert.equal(await page.getByLabel("Email draft", { exact: true }).count(), 0);
        await page.goForward();
        await page.getByRole("heading", { name: "Bot Privacy Policy", exact: true }).waitFor();
        await page.goBack();
        await expectHome("#contact");
        await expectBrief("Website design + build");

        await page.getByRole("link", { name: "Plan a merch store", exact: true }).click();
        await expectBrief("Merch-store design + setup");
        await page.getByRole("button", { name: "Prepare email draft" }).click();
        await page.getByLabel("Email draft", { exact: true }).waitFor();
        const draft = await page.getByLabel("Email draft", { exact: true }).inputValue();
        await privacy();
        await page.getByRole("link", { name: "Back to dade.studio", exact: true }).click();
        await expectHome("");
        await expectBrief("Merch-store design + setup");
        assert.equal(await page.getByLabel("Email draft", { exact: true }).inputValue(), draft);
        await page.goBack();
        await page.getByRole("heading", { name: "Bot Privacy Policy", exact: true }).waitFor();
        await page.goBack();
        await expectHome("#contact");
        await expectBrief("Merch-store design + setup");
        assert.equal(await page.getByLabel("Email draft", { exact: true }).inputValue(), draft);

        if (width === 390) {
          await page.getByRole("button", { name: "Open site menu" }).click();
          await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Services", exact: true }).click();
          await expectHome("#services");
          await expectBrief("Merch-store design + setup");
        }
        await page.getByRole("link", { name: "Discuss the graphics", exact: true }).click();
        await expectHome("#contact");
        await expectBrief("Graphic design");
        assert.equal(await page.getByLabel("Email draft", { exact: true }).count(), 0);
        await page.getByRole("button", { name: "Prepare email draft" }).click();
        await page.getByLabel("Email draft", { exact: true }).waitFor();
        assert.match(await page.getByLabel("Email draft", { exact: true }).inputValue(), /Service: Graphic design/);
        await privacy();
        await page.goBack();
        await expectHome("#contact");
        await expectBrief("Graphic design");
        assert.match(await page.getByLabel("Email draft", { exact: true }).inputValue(), /Service: Graphic design/);
        assert.equal(await storage(), beforeStorage, "inquiry never enters localStorage or sessionStorage");

        await page.reload();
        await page.waitForLoadState("networkidle");
        for (const id of Object.keys(fields)) assert.equal(await page.locator(`#${id}`).inputValue(), "", `${id} resets on reload`);
        assert.equal(await page.getByLabel("What do you need?", { exact: true }).inputValue(), "Not sure yet");
        assert.equal(await page.getByLabel("Email draft", { exact: true }).count(), 0);
      }
      await page.setViewportSize({ width: 1440, height: 900 });
    });

    await test("keyboard skip link, service CTA, form validation and draft focus", async () => {
      await home();
      await page.keyboard.press("Tab");
      assert.equal(await page.evaluate(() => document.activeElement?.textContent?.trim()), "Skip to main content");
      await page.keyboard.press("Enter");
      await expectHome("#main");
      assert.equal(await page.evaluate(() => document.activeElement?.id), "main");
      const cta = page.getByRole("link", { name: "Discuss the graphics", exact: true });
      await cta.focus();
      await page.keyboard.press("Enter");
      await expectHome("#contact");
      assert.equal(await page.getByLabel("What do you need?", { exact: true }).inputValue(), "Graphic design");
      await page.getByRole("button", { name: "Prepare email draft" }).click();
      assert.equal(await page.getByLabel("Email draft", { exact: true }).count(), 0);
      assert.equal(await page.evaluate(() => document.activeElement?.id), "inquiry-name");
      await page.getByLabel("Your name", { exact: true }).fill("Keyboard test");
      await page.getByLabel("Your email", { exact: true }).fill("keyboard@example.invalid");
      await page.getByLabel("Tell me what you need made", { exact: true }).fill("Local keyboard verification.");
      await page.getByRole("button", { name: "Prepare email draft" }).focus();
      await page.keyboard.press("Enter");
      await page.getByLabel("Email draft", { exact: true }).waitFor();
      assert.equal(await page.evaluate(() => document.activeElement?.getAttribute("aria-labelledby")), "inquiry-draft-title");
    });

    await test("mobile dialog traps focus, Escape restores trigger, repeated links release scroll lock", async () => {
      await page.setViewportSize({ width: 390, height: 844 });
      await home();
      const menu = page.getByRole("button", { name: "Open site menu" });
      for (let index = 0; index < 3; index++) {
        await menu.focus();
        await page.keyboard.press("Enter");
        await page.getByRole("dialog").waitFor();
        assert.equal(await page.evaluate(() => document.body.style.overflow), "hidden");
        for (let tab = 0; tab < 10; tab++) {
          await page.keyboard.press("Tab");
          // Chromium may move focus to browser chrome at the end of the dialog,
          // represented by body. The modal must never focus underlying page controls.
          assert.equal(await page.evaluate(() => document.activeElement === document.body || !!document.activeElement?.closest("dialog")), true);
        }
        await page.keyboard.press("Escape");
        await page.waitForFunction(() => !document.querySelector("dialog").open);
        assert.equal(await menu.getAttribute("aria-expanded"), "false");
        assert.equal(await page.evaluate(() => document.activeElement?.getAttribute("aria-controls")), "site-menu");
        assert.equal(await page.evaluate(() => document.body.style.overflow), "");
        await menu.click();
        await page.getByRole("dialog").waitFor();
        await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Services", exact: true }).click();
        await expectHome("#services");
        await page.waitForFunction(() => !document.querySelector("dialog").open);
        assert.equal(await page.evaluate(() => document.body.style.overflow), "");
      }
      await menu.click();
      await page.getByRole("dialog").getByRole("link", { name: "Start a project" }).click();
      await expectHome("#contact");
      await privacy();
      await page.goBack();
      await expectHome("#contact");
      assert.equal(await page.evaluate(() => document.body.style.overflow), "");
      // Reopen before the native queued close event is dispatched.
      await menu.click();
      await page.getByRole("dialog").waitFor();
      await page.evaluate(() => {
        document.querySelector("#site-menu button").click();
        document.querySelector("button[aria-controls=site-menu]").click();
      });
      await page.waitForFunction(() => document.querySelector("dialog").open);
      await page.waitForTimeout(100);
      assert.equal(await menu.getAttribute("aria-expanded"), "true");
      assert.equal(await page.evaluate(() => document.querySelector("dialog").open), true);
      assert.equal(await page.evaluate(() => document.body.style.overflow), "hidden");
      await page.keyboard.press("Escape");
      await page.waitForFunction(() => !document.querySelector("dialog").open);
    });

    await test("320/390/768/1440 widths: no document overflow, usable inquiry and service actions", async () => {
      for (const width of [320, 390, 768, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        await home();
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `overflow at ${width}px`);
        await page.getByRole("link", { name: "Plan a merch store", exact: true }).click();
        await expectHome("#contact");
        assert.equal(await page.getByLabel("What do you need?", { exact: true }).inputValue(), "Merch-store design + setup");
        const box = await page.getByLabel("What do you need?", { exact: true }).boundingBox();
        assert.ok(box.width > 100 && box.height >= 44 && box.x >= 0 && box.x + box.width <= width);
      }
    });

    await test("Back interrupts a delayed privacy navigation without stale privacy content", async () => {
      let release;
      let markStarted;
      const paused = new Promise((resolve) => { release = resolve; });
      const started = new Promise((resolve) => { markStarted = resolve; });
      await page.route("**/bot-privacy*", async (route) => {
        // Force an uncached navigation so this tests an in-flight request on
        // production too, where Link would otherwise prefetch the destination.
        if (route.request().headers()["next-router-prefetch"]) return route.abort();
        markStarted();
        await paused;
        await route.continue().catch(() => {});
      });
      await home();
      await page.getByRole("link", { name: "Tell me what you need made", exact: true }).click();
      await expectHome("#contact");
      await page.getByRole("link", { name: "Bot privacy", exact: true }).click();
      await started;
      await page.goBack();
      release();
      await expectHome("");
      await page.waitForLoadState("networkidle");
      await expectHome("");
      await page.unroute("**/bot-privacy*");
      await privacy();
      await page.goBack();
      await expectHome("");
    });
    assert.ok(executedScenarios > 0, `No matching tests for STUDIO_TEST_MATCH=${JSON.stringify(process.env.STUDIO_TEST_MATCH || "")}`);
    assert.deepEqual(errors, [], "browser runtime errors");
    console.log(`PASS ${executedScenarios} scenario groups; no browser runtime errors; no screenshots, email app launches, or external requests permitted`);
  } finally {
    await browser.close();
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
