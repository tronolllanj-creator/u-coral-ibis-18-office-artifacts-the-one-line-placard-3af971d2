// Office Artifacts: The One-Line Placard Contest
// Entry validated: output is 1-180 chars, one line, no trailing newline, deterministic.
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = "Ceremonial stapler, forged iron & spring-steel, Late Levantine Bureaucracy; driven through 30 layers of royal tax parchment to appease river gods during drought.";

if (!(1 <= TEXT.length && TEXT.length <= 180 && TEXT.trim().length > 0 && !TEXT.includes('\n'))) {
  throw new Error('Invalid placard text');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
