#!/usr/bin/env node
"use strict";
import fs from "fs";
import path from "path";

const platformDirectory = process.argv[2];
const version = process.argv[3];
if (!platformDirectory || !version) {
  console.error("Platform directory and version must be provided as arguments");
  process.exit(1);
}

const platformFileName = "platform.txt";
const platformFile = path.join(platformDirectory, platformFileName);

const platformDefinition = fs.readFileSync(platformFile, { encoding: "utf-8" });

const nameRegex = /^name=(.*)/m;
const versionRegex = /^version=(.*)/m;

const name = platformDefinition.match(nameRegex)[1];
// GitHub Actions output (set-output is deprecated); print as fallback when run locally
if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `platform=${name}\n`);
} else {
  console.log(`platform=${name}`);
}

const newPlatformDefinition = platformDefinition.replace(
  versionRegex,
  `version=${version}`
);

fs.writeFileSync(platformFile, newPlatformDefinition);
