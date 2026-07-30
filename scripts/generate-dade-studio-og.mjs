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
  secondary: "#6f7c67",
  accent: "#d83222",
  accentText: "#ffffff",
};

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const merchPath = path.join(
  projectRoot,
  "public/assets/merch/rave-owl.jpg",
);
const logoPath = path.join(
  projectRoot,
  "public/assets/brand/logo-d.png",
);
const outputPath = path.join(
  projectRoot,
  "public/assets/brand/dade-studio-og.png",
);

const svg = String.raw;

function paperBase() {
  return Buffer.from(
    svg`<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${WIDTH}" height="${HEIGHT}" fill="${palette.sage}"/>

      <!-- Offset paper shadows and deliberately imperfect cut edges. -->
      <path d="M56 66 L726 38 L770 550 L82 592 Z" fill="${palette.espresso}" opacity=".2"/>
      <path d="M43 50 L716 28 L756 536 L68 577 Z" fill="${palette.espresso}"/>

      <path d="M782 18 L1179 0 L1200 576 L752 615 Z" fill="${palette.secondary}" opacity=".2"/>
      <path d="M797 5 L1187 0 L1200 565 L767 600 Z" fill="${palette.secondary}"/>

      <circle cx="736" cy="69" r="116" fill="${palette.cream}"/>
      <circle cx="736" cy="69" r="74" fill="${palette.sage}"/>
      <path d="M687 0 H785 L785 151 L736 180 L687 151 Z" fill="${palette.espresso}"/>

      <!-- Registration marks and ruled details evoke a working print table. -->
      <g fill="${palette.sage}">
        <circle cx="104" cy="105" r="4"/>
        <circle cx="123" cy="105" r="4"/>
        <circle cx="142" cy="105" r="4"/>
        <circle cx="161" cy="105" r="4"/>
        <circle cx="180" cy="105" r="4"/>
      </g>
      <path d="M92 498 H703" stroke="${palette.cream}" stroke-width="2" opacity=".45"/>
      <path d="M92 506 H520" stroke="${palette.cream}" stroke-width="1" opacity=".24"/>

      <g fill="${palette.cream}" font-family="Arial, Helvetica, sans-serif">
        <text x="92" y="153" font-size="17" font-weight="700" letter-spacing="3.4">INDEPENDENT CREATIVE PRACTICE</text>
        <text x="86" y="300" font-size="94" font-weight="800" letter-spacing="-4">Dade</text>
        <text x="86" y="389" font-size="94" font-weight="800" letter-spacing="-4">Studio</text>
        <text x="92" y="449" font-size="31" font-weight="500" letter-spacing="-.5">Creative work, made useful.</text>
        <text x="92" y="548" font-size="18" font-weight="700" letter-spacing="1.7">Branding · Design · Merch · Web · Guidance</text>
      </g>

      <g fill="none" stroke="${palette.cream}" stroke-width="2" opacity=".8">
        <path d="M92 187 H134"/>
        <path d="M113 166 V208"/>
      </g>

      <g fill="${palette.espresso}" opacity=".7">
        <path d="M1129 581 l22 -14 l14 22 l-22 14 Z"/>
        <circle cx="1087" cy="589" r="8"/>
      </g>
    </svg>`,
  );
}

async function makePhotoCard() {
  const photo = await sharp(merchPath)
    .resize(330, 440, { fit: "cover", position: "centre" })
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();

  const caption = Buffer.from(
    svg`<svg width="360" height="500" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="500" rx="2" fill="${palette.cream}"/>
      <rect x="17" y="17" width="326" height="435" fill="${palette.espresso}" opacity=".12"/>
      <text x="18" y="480" fill="${palette.espresso}" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" letter-spacing="2.5">ORIGINAL ART / LIVE MERCH</text>
    </svg>`,
  );

  return sharp(caption)
    .composite([{ input: photo, left: 15, top: 15 }])
    .rotate(1.4, {
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
}

async function makeLogoTile() {
  const logo = await sharp(logoPath)
    .resize(100, 100, { fit: "cover" })
    .png()
    .toBuffer();
  const tile = await sharp({
    create: {
      width: 108,
      height: 108,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      {
        input: Buffer.from(
          svg`<svg width="108" height="108" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="5" width="100" height="99" fill="${palette.espresso}" opacity=".2"/>
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

  const [photoCard, logoTile] = await Promise.all([
    makePhotoCard(),
    makeLogoTile(),
  ]);

  await sharp(paperBase())
    .composite([
      { input: photoCard, left: 803, top: 58 },
      { input: logoTile, left: 612, top: 74 },
      {
        input: Buffer.from(
          svg`<svg width="150" height="38" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7 L145 0 L150 27 L8 38 Z" fill="${palette.accent}" opacity=".94"/>
          </svg>`,
        ),
        left: 906,
        top: 44,
      },
    ])
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
