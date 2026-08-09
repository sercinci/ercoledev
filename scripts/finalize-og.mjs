/**
 * Next emits the generated Open Graph images as extensionless files (out/opengraph-image,
 * out/cv/opengraph-image). GitHub Pages serves those with the wrong content type, which makes
 * social scrapers drop the preview. Rename them to real .png files and keep a copy in public/
 * so the committed asset stays in sync with the source in src/app/**\/opengraph-image.tsx.
 */
import { copyFile, rename, access } from "node:fs/promises";
import { constants } from "node:fs";

const cards = [
  { generated: "out/opengraph-image", published: "out/og.png", tracked: "public/og.png" },
  { generated: "out/cv/opengraph-image", published: "out/og-cv.png", tracked: "public/og-cv.png" },
];

const exists = async path =>
  access(path, constants.F_OK).then(
    () => true,
    () => false
  );

let failed = false;

for (const card of cards) {
  if (!(await exists(card.generated))) {
    console.error(`finalize-og: expected ${card.generated}, but Next did not generate it`);
    failed = true;
    continue;
  }

  await rename(card.generated, card.published);
  await copyFile(card.published, card.tracked);
  console.log(`finalize-og: ${card.generated} -> ${card.published} (synced to ${card.tracked})`);
}

if (failed) {
  process.exit(1);
}
