import { cpSync, mkdirSync, existsSync, readdirSync } from "fs";
import { join } from "path";

const src = join(process.cwd(), "content");
const dest = join(process.cwd(), "public", "content");

console.log("Current working directory:", process.cwd());
console.log("Source directory:", src);
console.log("Destination directory:", dest);
console.log("Source exists:", existsSync(src));
console.log("Source contents:", existsSync(src) ? readdirSync(src, { recursive: true }) : "N/A");

if (!existsSync(dest)) {
  console.log("Creating destination directory");
  mkdirSync(dest, { recursive: true });
}

console.log("Destination exists:", existsSync(dest));
console.log("Destination contents before copy:", existsSync(dest) ? readdirSync(dest, { recursive: true }) : "N/A");

cpSync(src, dest, { recursive: true });

console.log("Destination contents after copy:", existsSync(dest) ? readdirSync(dest, { recursive: true }) : "N/A");
console.log("Copied /content -> /public/content");
