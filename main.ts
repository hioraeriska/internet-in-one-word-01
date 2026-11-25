import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "captcha";

function gate(word: string): string {
  const text = word.trim();
  if (text.length < 1 || text.length > 30) {
    throw new Error("entry must be 1 to 30 characters");
  }
  return text;
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, gate(WORD), "utf8");
