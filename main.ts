// Snooze Button Roast — one line roasting an alarm clock that rings at 6 AM on a Saturday.
// Writes the roast to /output/entry.txt (gate: UTF-8, 1-200 chars, single line).
// Angle: the clock is a rooster promoted to middle management — fresh, concrete,
// and the punchline ("meetings before sunrise") lands in the last few words.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My alarm clock rang at 6 AM on a Saturday, like a rooster that got a middle-management job and now holds meetings before sunrise.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`roast must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim() !== LINE || LINE.trim().length === 0) {
  throw new Error("roast must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
