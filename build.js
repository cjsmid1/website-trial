// =============================
// build.js
// Generates pretty post pages:
// /post/post-id/index.html
// =============================

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SITE_URL = "https://softalchemy.uk";

const POST_OUTPUT_DIR = path.join(__dirname, "post");

if (fs.existsSync(POST_OUTPUT_DIR)) {
  fs.rmSync(POST_OUTPUT_DIR, { recursive: true, force: true });
}

fs.mkdirSync(POST_OUTPUT_DIR, { recursive: true });

// ---------- Load posts.js ----------
const postsFile = fs.readFileSync(
  path.join(__dirname, "js", "posts.js"),
  "utf8"
);

const sandbox = {};
vm.createContext(sandbox);

vm.runInContext(postsFile + "\nthis.posts = posts;", sandbox);

const posts = sandbox.posts;

if (!Array.isArray(posts)) {
  throw new Error("Could not load posts from js/posts.js");
}

// ---------- Load template ----------
const template = fs.readFileSync(
  path.join(__dirname, "templates", "post-template.html"),
  "utf8"
);

// ---------- Helpers ----------
function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function formatTag(tag = "") {
  return tag
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

function absoluteImageUrl(imagePath) {
  if (!imagePath) {
    return `${SITE_URL}/images/soft-alchemy-preview.jpg`;
  }

  if (imagePath.startsWith("http")) {
    return imagePath;
  }

  return `${SITE_URL}/${imagePath.replace(/^\/+/, "")}`;
}

// ---------- Build one post ----------
function buildPost(post) {
  const outputDir = path.join(POST_OUTPUT_DIR, post.id);
  fs.mkdirSync(outputDir, { recursive: true });

  const metaTitle = post.metaTitle || `${post.title} | Soft Alchemy`;
  const metaDescription =
    post.metaDescription || post.excerpt || "A Soft Alchemy post.";

  const canonicalUrl = `${SITE_URL}/post/${post.id}/`;
  const ogImage = absoluteImageUrl(post.image);

  const tagsHtml = (post.tags || [])
    .map(tag => `
      <span class="tag" data-tag="${escapeHtml(tag)}">
        ${escapeHtml(formatTag(tag))}
      </span>
    `)
    .join("");

  const html = template
    .replaceAll("{{META_TITLE}}", escapeHtml(metaTitle))
    .replaceAll("{{META_DESCRIPTION}}", escapeHtml(metaDescription))
    .replaceAll("{{CANONICAL_URL}}", canonicalUrl)
    .replaceAll("{{OG_IMAGE}}", ogImage)
    .replaceAll("{{IMAGE_ALT}}", escapeHtml(post.imageAlt || post.title))
    .replaceAll("{{CATEGORY_CLASS}}", escapeHtml((post.category || "").toLowerCase()))
    .replaceAll("{{POST_ID}}", escapeHtml(post.id));

  fs.writeFileSync(path.join(outputDir, "index.html"), html, "utf8");
}

// ---------- Run build ----------
posts.forEach(buildPost);

console.log(`Built ${posts.length} post pages.`);