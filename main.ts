// makefun-x-promo — copy the entry's POST.json into the output directory.
// Runs on Node 22, standard library only: no network, no clock, no files
// outside the repository.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const postJson = readFileSync(join(repoRoot, "POST.json"), "utf8");
// The entry is one JSON object naming the post; fail loudly if it is not.
const parsed = JSON.parse(postJson) as unknown;
if (typeof parsed !== "object" || parsed === null || !("url" in parsed)) {
  throw new Error("POST.json must be an object with a url field");
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "POST.json"), postJson);
