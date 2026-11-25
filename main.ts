import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Morning, boss. Pak Slamet's rooster learned my alarm sound and has been crowing it at 3 a.m. since Tuesday. I have not slept. The rooster has.";

// The gate wants one line of 1-200 characters: fail loudly instead of
// silently shipping a line the judge would never see.
if (!line || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry line must be 1-200 characters on one line, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
