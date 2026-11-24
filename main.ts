import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I hereby resign, effective immediately — the office plant I was asked to water has outlived two managers and now technically outranks me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
