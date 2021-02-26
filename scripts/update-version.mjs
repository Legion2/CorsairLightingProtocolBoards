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
console.log(`::set-output name=platform::${name}`);

const newPlatformDefinition = platformDefinition.replace(
  versionRegex,
  `version=${version}`
);

fs.writeFileSync(platformFile, newPlatformDefinition);
