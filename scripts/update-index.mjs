#!/usr/bin/env node
"use strict";
import fs from "fs";

const metadataJson = process.argv[2];
if (!metadataJson) {
  console.error("Metadata json must be provided as first argument");
  process.exit(1);
}
const metadata = JSON.parse(metadataJson);

const indexFileName =
  "package_Legion2_CorsairLightingProtocolBoards_index.json";

const index = JSON.parse(fs.readFileSync(indexFileName));

const defaultPackage = index.packages.find((p) => p.name === "Legion2");
if (!defaultPackage) {
  console.error("Package not found in index");
  process.exit(1);
}

const platformTemplate = defaultPackage.platforms
  .slice()
  .reverse()
  .find((platform) => platform.name === metadata.platform);
if (!platformTemplate) {
  console.error("No platform found with name:", metadata.platform);
  process.exit(1);
}

const newPlatformVersion = {
  ...platformTemplate,
  version: metadata.version,
  url: metadata.url,
  archiveFileName: metadata.archiveFileName,
  checksum: metadata.checksum,
  size: metadata.size,
};

defaultPackage.platforms.push(newPlatformVersion);

fs.writeFileSync(indexFileName, JSON.stringify(index, null, 4));
