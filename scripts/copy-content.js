import { cpSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const src = join(process.cwd(), "content");
const dest = join(process.cwd(), "public", "content");

if (!existsSync(dest)) mkdirSync(dest, { recursive: true });
cpSync(src, dest, { recursive: true });

console.log("Copied /content -> /public/content");
