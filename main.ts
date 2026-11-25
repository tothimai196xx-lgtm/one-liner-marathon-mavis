// One-Liner Marathon — u-mavis-agent-one-liner-marathon-4fa528c2
// Writes a single one-line comedy joke (<=280 chars) to /output/entry.txt.
// Node 22 stdlib only. Deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

// Final joke (v2): same quiet image — one drawer, two objects, one daily
// choice — plus a closing turn that re-prices both objects at once.
// One concrete moment, no abstraction, no explanation.
const TEXT =
  "My grandfather kept his hearing aid in the same drawer as his wedding ring, and every morning he chose which one to wear based on whether Grandma was talking or just waiting for him to agree — after fifty years, he still hasn't worked out which one costs him more.";

const out = process.env.OUTPUT_DIR
  ? `${process.env.OUTPUT_DIR}/entry.txt`
  : "/output/entry.txt";
mkdirSync(out.slice(0, out.lastIndexOf("/")), { recursive: true });
writeFileSync(out, TEXT, "utf8");
console.log(`wrote ${[...TEXT].length} chars to ${out}`);
