// =============================
// build.js
// Generates pretty pages:
// /post/post-id/index.html
// /update/update-id/index.html
// /plant/plant-id/index.html
// =============================

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SITE_URL = "https://softalchemy.uk";

const POST_OUTPUT_DIR = path.join(__dirname, "post");
const UPDATE_OUTPUT_DIR = path.join(__dirname, "update");
const PLANT_OUTPUT_DIR = path.join(__dirname, "plant");
const SITEMAP_PATH = path.join(__dirname, "sitemap.xml");

[POST_OUTPUT_DIR, UPDATE_OUTPUT_DIR, PLANT_OUTPUT_DIR].forEach(dir => {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
});

if (fs.existsSync(SITEMAP_PATH)) {
  fs.rmSync(SITEMAP_PATH, { force: true });
}

// ---------- Load js data files ----------
const postsFile = fs.readFileSync(
  path.join(__dirname, "js", "posts.js"),
  "utf8"
);
const updatesFile = fs.readFileSync(
  path.join(__dirname, "js", "updates.js"),
  "utf8"
);
const plantsFile = fs.readFileSync(
  path.join(__dirname, "js", "plants.js"),
  "utf8"
);

const sandbox = {};
vm.createContext(sandbox);

vm.runInContext(postsFile + "\nthis.posts = posts;", sandbox);
vm.runInContext(updatesFile + "\nthis.updates = updates;", sandbox);
vm.runInContext(plantsFile + "\nthis.plantResidents = plantResidents;", sandbox);

const posts = sandbox.posts;
const updates = sandbox.updates;
const plants = sandbox.plantResidents;

if (!Array.isArray(posts)) {
  throw new Error("Could not load posts from js/posts.js");
}
if (!Array.isArray(updates)) {
  throw new Error("Could not load updates from js/updates.js");
}
if (!Array.isArray(plants)) {
  throw new Error("Could not load plants from js/plants.js");
}

// ---------- Load template ----------
const template = fs.readFileSync(
  path.join(__dirname, "templates", "post-template.html"),
  "utf8"
);

const updateTemplate = fs.readFileSync(
  path.join(__dirname, "templates", "update-template.html"),
  "utf8"
);

const plantTemplate = fs.readFileSync(
  path.join(__dirname, "templates", "plant-template.html"),
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

function jsonLdScript(data) {
  return `<script type="application/ld+json">
${JSON.stringify(data, null, 2)}
</script>`;
}

function siteEntity() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "url": `${SITE_URL}/`,
    "name": "Soft Alchemy",
    "description": "Gentle experiments in everyday life, from gardening and fermentation to self-improvement and dog-approved adventures."
  };
}

function authorEntity() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/about/#claire-smid`,
    "name": "Claire Smid",
    "url": `${SITE_URL}/about/`
  };
}

function breadcrumbEntity(items) {
  return {
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
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

  const author = post.author || "Claire Smid";
  const publishedTime = post.date || "";

  const tagsHtml = (post.tags || [])
    .map(tag => `
      <span class="tag" data-tag="${escapeHtml(tag)}">
        ${escapeHtml(formatTag(tag))}
      </span>
    `)
    .join("");

  const isRecipe = post.category === "Recipe";

  const structuredData = jsonLdScript({
    "@context": "https://schema.org",
    "@graph": [
      siteEntity(),
      authorEntity(),
      {
        "@type": isRecipe ? "Recipe" : "BlogPosting",
        "@id": `${canonicalUrl}#article`,
        "mainEntityOfPage": canonicalUrl,
        "headline": metaTitle,
        "name": post.title.replace(/^[^\w]+/, ""),
        "description": metaDescription,
        "image": [ogImage],
        "author": { "@id": `${SITE_URL}/about/#claire-smid` },
        "publisher": { "@id": `${SITE_URL}/#organization` },
        "datePublished": post.date,
        "dateModified": post.updated || post.date,
        ...(isRecipe ? {
          "recipeCategory": post.tags?.includes("sweet") ? "Dessert" : "Main course",
          "recipeCuisine": post.tags?.includes("asian") ? "Asian" : undefined,
          "keywords": (post.tags || []).join(", ")
        } : {
          "keywords": (post.tags || []).join(", "),
          "articleSection": post.category
        })
      },
      breadcrumbEntity([
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Archive", url: `${SITE_URL}/archive/` },
        { name: post.title.replace(/^[^\w]+/, ""), url: canonicalUrl }
      ])
    ]
  });  

  const html = template
    .replaceAll("{{META_TITLE}}", escapeHtml(metaTitle))
    .replaceAll("{{META_DESCRIPTION}}", escapeHtml(metaDescription))
    .replaceAll("{{CANONICAL_URL}}", canonicalUrl)
    .replaceAll("{{OG_IMAGE}}", ogImage)
    .replaceAll("{{IMAGE_ALT}}", escapeHtml(post.imageAlt || post.title))
    .replaceAll("{{CATEGORY_CLASS}}", escapeHtml((post.category || "").toLowerCase()))
    .replaceAll("{{AUTHOR}}", escapeHtml(author))
    .replaceAll("{{PUBLISHED_TIME}}", escapeHtml(publishedTime))
    .replaceAll("{{STRUCTURED_DATA}}", structuredData)
    .replaceAll("{{POST_ID}}", escapeHtml(post.id));

  fs.writeFileSync(path.join(outputDir, "index.html"), html, "utf8");
}

// ---------- Build one update ----------
function buildUpdate(update) {
  const outputDir = path.join(UPDATE_OUTPUT_DIR, update.id);
  fs.mkdirSync(outputDir, { recursive: true });

  const parentPost = posts.find(post => post.id === update.originalPost);

  const metaTitle =
    update.metaTitle ||
    `${update.title} | Soft Alchemy Update`;

  const metaDescription =
    update.metaDescription ||
    update.excerpt ||
    update.summary ||
    `An update from Soft Alchemy${parentPost ? ` about ${parentPost.title.replace(/^[^\w]+/, "")}` : ""}.`;

  const canonicalUrl = `${SITE_URL}/update/${update.id}/`;

  const ogImage = absoluteImageUrl(
    update.image ||
    parentPost?.image ||
    "/images/soft-alchemy-preview.jpg"
  );

  const imageAlt =
    update.imageAlt ||
    parentPost?.imageAlt ||
    update.title;

  const author = update.author || "Claire Smid";
  const publishedTime = update.date || "";

  const structuredData = jsonLdScript({
    "@context": "https://schema.org",
    "@graph": [
      siteEntity(),
      authorEntity(),
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#article`,
        "mainEntityOfPage": canonicalUrl,
        "headline": metaTitle,
        "name": update.title.replace(/^[^\w]+/, ""),
        "description": metaDescription,
        "image": [ogImage],
        "author": { "@id": `${SITE_URL}/about/#claire-smid` },
        "publisher": { "@id": `${SITE_URL}/#organization` },
        "datePublished": update.date,
        "dateModified": update.updated || update.date,
        "articleSection": update.category || update.room || "Update",
        "keywords": [
          update.project,
          update.status,
          ...(update.tags || [])
        ].filter(Boolean).join(", ")
      },
      breadcrumbEntity([
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Archive", url: `${SITE_URL}/archive/` },
        { name: update.title.replace(/^[^\w]+/, ""), url: canonicalUrl }
      ])
    ]
  });

  const html = updateTemplate
    .replaceAll("{{META_TITLE}}", escapeHtml(metaTitle))
    .replaceAll("{{META_DESCRIPTION}}", escapeHtml(metaDescription))
    .replaceAll("{{CANONICAL_URL}}", canonicalUrl)
    .replaceAll("{{OG_IMAGE}}", ogImage)
    .replaceAll("{{IMAGE_ALT}}", escapeHtml(imageAlt))
    .replaceAll("{{AUTHOR}}", escapeHtml(author))
    .replaceAll("{{PUBLISHED_TIME}}", escapeHtml(publishedTime))
    .replaceAll("{{STRUCTURED_DATA}}", structuredData)
    .replaceAll("{{UPDATE_ID}}", escapeHtml(update.id));

  fs.writeFileSync(path.join(outputDir, "index.html"), html, "utf8");
}

// ---------- Build one plant ----------
function buildPlant(plant) {
  const outputDir = path.join(PLANT_OUTPUT_DIR, plant.id);
  fs.mkdirSync(outputDir, { recursive: true });

  const metaTitle =
    plant.metaTitle ||
    `${plant.emoji || "🌱"} ${plant.name} | Soft Alchemy Plant Profile`;

  const metaDescription =
    plant.metaDescription ||
    plant.note ||
    `${plant.name} in the Soft Alchemy garden.`;

  const canonicalUrl = `${SITE_URL}/plant/${plant.id}/`;

  const ogImage = absoluteImageUrl(
    plant.image ||
    "/images/soft-alchemy-preview.jpg"
  );

  const imageAlt =
    plant.imageAlt ||
    plant.alt ||
    plant.name;

  const structuredData = jsonLdScript({
    "@context": "https://schema.org",
    "@graph": [
      siteEntity(),
      {
        "@type": "ProfilePage",
        "@id": `${canonicalUrl}#profile`,
        "mainEntityOfPage": canonicalUrl,
        "name": plant.name,
        "description": metaDescription,
        "image": [ogImage],
        "dateCreated": plant.started,
        "about": {
          "@type": "Thing",
          "name": plant.name,
          "description": metaDescription
        }
      },
      breadcrumbEntity([
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Garden Residents", url: `${SITE_URL}/garden/residents/` },
        { name: plant.name, url: canonicalUrl }
      ])
    ]
  });  

  const html = plantTemplate
    .replaceAll("{{META_TITLE}}", escapeHtml(metaTitle))
    .replaceAll("{{META_DESCRIPTION}}", escapeHtml(metaDescription))
    .replaceAll("{{CANONICAL_URL}}", canonicalUrl)
    .replaceAll("{{OG_IMAGE}}", ogImage)
    .replaceAll("{{IMAGE_ALT}}", escapeHtml(imageAlt))
    .replaceAll("{{STRUCTURED_DATA}}", structuredData)
    .replaceAll("{{PLANT_ID}}", escapeHtml(plant.id));

  fs.writeFileSync(path.join(outputDir, "index.html"), html, "utf8");
}

// ---------- Generate Sitemap ----------
function buildSitemap() {
  const staticUrls = [
    "/",
    "/about/",
    "/kitchen/",
    "/kitchen/fermentation/",
    "/study/",
    "/study/timeline/",
    "/garden/",
    "/garden/residents/",
    "/library/",
    "/archive/"
  ];

  const postUrls = posts.map(post => `/post/${post.id}/`);

  const updateUrls = updates.map(update => `/update/${update.id}/`);

  const plantUrls = plants.map(plant => `/plant/${plant.id}/`);

  const allUrls = [
    ...staticUrls,
    ...postUrls,
    ...updateUrls,
    ...plantUrls
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `
  <url>
    <loc>${SITE_URL}${url}</loc>
  </url>`).join("")}
</urlset>
`;

  fs.writeFileSync(
    path.join(__dirname, "sitemap.xml"),
    sitemap,
    "utf8"
  );
}

// ---------- Run build ----------
posts.forEach(buildPost);

if (typeof updates !== "undefined") {
  updates.forEach(buildUpdate);
}

if (typeof plants !== "undefined") {
  plants.forEach(buildPlant);
}

buildSitemap();

console.log(`Built ${posts.length} post pages.`);
console.log(`Built ${typeof updates !== "undefined" ? updates.length : 0} update pages.`);
console.log(`Built ${typeof plants !== "undefined" ? plants.length : 0} plant pages.`);
console.log("Built sitemap.xml.");