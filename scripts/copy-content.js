import { cpSync, mkdirSync, existsSync, readdirSync, statSync } from "fs";
import { join } from "path";

const src = join(process.cwd(), "content");
const dest = join(process.cwd(), "public", "content");

console.log("Current working directory:", process.cwd());
console.log("Source directory:", src);
console.log("Destination directory:", dest);
console.log("Source exists:", existsSync(src));

// Check source contents more thoroughly
if (existsSync(src)) {
  console.log("Source contents (non-recursive):", readdirSync(src));
  
  // Check posts directory specifically
  const postsDir = join(src, "posts");
  if (existsSync(postsDir)) {
    console.log("Posts directory contents:", readdirSync(postsDir));
    
    // Check individual post directories
    const postDirs = readdirSync(postsDir);
    postDirs.forEach(postDir => {
      const postPath = join(postsDir, postDir);
      if (statSync(postPath).isDirectory()) {
        const postContents = readdirSync(postPath);
        console.log(`Post ${postDir} contents:`, postContents);
        
        // Check if post.md exists
        const postMdPath = join(postPath, "post.md");
        console.log(`Post ${postDir}/post.md exists:`, existsSync(postMdPath));
      }
    });
  }
}

if (!existsSync(dest)) {
  console.log("Creating destination directory");
  mkdirSync(dest, { recursive: true });
}

console.log("Destination exists:", existsSync(dest));

cpSync(src, dest, { recursive: true });

console.log("Copy completed");
console.log("Destination contents after copy:", readdirSync(dest));

// Verify the specific file we need
const targetFile = join(dest, "posts", "album-release", "post.md");
console.log("Target file path:", targetFile);
console.log("Target file exists after copy:", existsSync(targetFile));
console.log("Copied /content -> /public/content");
