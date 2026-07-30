#!/usr/bin/env node

import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;

const palette = {
  sage: "#aeb79a",
  espresso: "#342822",
  cream: "#f1e6d3",
  secondary: "#5f695a",
  accent: "#d83222",
};

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const logoPath = path.join(projectRoot, "public/assets/brand/logo-d.png");
const outputPath = path.join(
  projectRoot,
  "public/assets/brand/dade-studio-og.png",
);

const svg = String.raw;

function artwork() {
  return Buffer.from(
    svg`<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${WIDTH}" height="${HEIGHT}" fill="${palette.sage}"/>

      <!-- Offset paper shapes keep the approved Printroom character. -->
      <path d="M50 63 L689 35 L724 559 L76 591 Z" fill="${palette.espresso}" opacity=".18"/>
      <path d="M38 49 L676 27 L710 545 L64 576 Z" fill="${palette.espresso}"/>

      <path d="M754 39 L1165 19 L1188 589 L732 607 Z" fill="${palette.espresso}" opacity=".2"/>
      <path d="M769 25 L1178 9 L1194 575 L747 592 Z" fill="${palette.cream}"/>

      <!-- Registration details suggest an active print table, not a portfolio mockup. -->
      <g fill="${palette.sage}">
        <circle cx="91" cy="104" r="4"/>
        <circle cx="110" cy="104" r="4"/>
        <circle cx="129" cy="104" r="4"/>
        <circle cx="148" cy="104" r="4"/>
        <circle cx="167" cy="104" r="4"/>
      </g>
      <g fill="none" stroke="${palette.cream}" stroke-width="2" opacity=".76">
        <path d="M85 174 H127"/>
        <path d="M106 153 V195"/>
      </g>

      <g fill="${palette.cream}" font-family="Arial, Helvetica, sans-serif">
        <text x="84" y="146" font-size="16" font-weight="700" letter-spacing="3.1">INDEPENDENT CREATIVE + DIGITAL STUDIO</text>
        <text x="80" y="278" font-size="78" font-weight="800" letter-spacing="-3.8">Websites that</text>
        <text x="80" y="359" font-size="72" font-weight="800" letter-spacing="-3.6">make your business</text>
        <text x="80" y="440" font-size="78" font-weight="800" letter-spacing="-3.8">easier to choose.</text>
        <text x="84" y="512" font-size="25" font-weight="500" letter-spacing="-.4">Clear work. Useful results. One close collaborator.</text>
      </g>

      <path d="M80 535 H688" stroke="${palette.cream}" stroke-width="2" opacity=".42"/>
      <text x="84" y="558" fill="${palette.sage}" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" letter-spacing="2">DADE.STUDIO</text>

      <!-- Honest capability menu. These are services, not speculative projects. -->
      <g font-family="Arial, Helvetica, sans-serif">
        <text x="797" y="87" fill="${palette.secondary}" font-size="14" font-weight="700" letter-spacing="2.7">PRIMARY SERVICES</text>
        <text x="1082" y="87" fill="${palette.secondary}" font-size="12" font-weight="700" letter-spacing="1.5">01–04</text>

        <path d="M797 106 H1142" stroke="${palette.espresso}" stroke-width="2"/>

        <rect x="797" y="132" width="40" height="40" fill="${palette.accent}"/>
        <text x="808" y="158" fill="#fff" font-size="13" font-weight="700">01</text>
        <text x="858" y="151" fill="${palette.espresso}" font-size="25" font-weight="800">Web design + builds</text>
        <text x="858" y="174" fill="${palette.secondary}" font-size="12" font-weight="700" letter-spacing="1">CLEAR OFFER / RESPONSIVE BUILD</text>
        <path d="M797 197 H1142" stroke="${palette.espresso}" stroke-width="1" opacity=".45"/>

        <rect x="797" y="219" width="40" height="40" fill="${palette.espresso}"/>
        <text x="808" y="245" fill="${palette.cream}" font-size="13" font-weight="700">02</text>
        <text x="858" y="238" fill="${palette.espresso}" font-size="25" font-weight="800">Branding + graphics</text>
        <text x="858" y="261" fill="${palette.secondary}" font-size="12" font-weight="700" letter-spacing="1">IDENTITY / USEFUL VISUAL PIECES</text>
        <path d="M797 284 H1142" stroke="${palette.espresso}" stroke-width="1" opacity=".45"/>

        <rect x="797" y="306" width="40" height="40" fill="${palette.espresso}"/>
        <text x="808" y="332" fill="${palette.cream}" font-size="13" font-weight="700">03</text>
        <text x="858" y="325" fill="${palette.espresso}" font-size="25" font-weight="800">Tailored digital tools</text>
        <text x="858" y="348" fill="${palette.secondary}" font-size="12" font-weight="700" letter-spacing="1">DASHBOARDS / PRACTICAL WORKFLOWS</text>
        <path d="M797 371 H1142" stroke="${palette.espresso}" stroke-width="1" opacity=".45"/>

        <rect x="797" y="393" width="40" height="40" fill="${palette.espresso}"/>
        <text x="808" y="419" fill="${palette.cream}" font-size="13" font-weight="700">04</text>
        <text x="858" y="412" fill="${palette.espresso}" font-size="25" font-weight="800">Coaching + guidance</text>
        <text x="858" y="435" fill="${palette.secondary}" font-size="12" font-weight="700" letter-spacing="1">PATIENT HELP / CLEARER DECISIONS</text>

        <path d="M797 473 H1142" stroke="${palette.espresso}" stroke-width="2"/>
        <rect x="797" y="499" width="345" height="50" fill="${palette.secondary}"/>
        <text x="810" y="530" fill="${palette.cream}" font-size="12" font-weight="700" letter-spacing="1.15">RECURRING WORK? REMAINFRAME.COM</text>
      </g>
    </svg>`,
  );
}

async function makeLogoTile() {
  const logo = await sharp(logoPath)
    .resize(100, 100, { fit: "cover" })
    .png()
    .toBuffer();

  const tile = await sharp({
    create: {
      width: 112,
      height: 112,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      {
        input: Buffer.from(
          svg`<svg width="112" height="112" xmlns="http://www.w3.org/2000/svg">
            <rect x="7" y="8" width="100" height="100" fill="${palette.espresso}" opacity=".22"/>
          </svg>`,
        ),
      },
      { input: logo, left: 0, top: 0 },
    ])
    .png()
    .toBuffer();

  return sharp(tile)
    .rotate(-3.5, {
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
}

async function generate() {
  await mkdir(path.dirname(outputPath), { recursive: true });
  const logoTile = await makeLogoTile();

  await sharp(artwork())
    .composite([{ input: logoTile, left: 640, top: 64 }])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outputPath);

  const metadata = await sharp(outputPath).metadata();
  if (metadata.width !== WIDTH || metadata.height !== HEIGHT) {
    throw new Error(
      `Unexpected output dimensions: ${metadata.width}x${metadata.height}`,
    );
  }

  console.log(`Generated ${path.relative(projectRoot, outputPath)}`);
  console.log(`${metadata.width}x${metadata.height} ${metadata.format}`);
}

await generate();
