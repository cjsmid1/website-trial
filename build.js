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
const gardenTimelineFile = fs.readFileSync(
  path.join(__dirname, "js", "garden-timeline.js"),
  "utf8"
);

const structuredDataFile = fs.existsSync(path.join(__dirname, "js", "structured-data.js"))
  ? fs.readFileSync(path.join(__dirname, "js", "structured-data.js"), "utf8")
  : "const structuredData = {};";

const sandbox = {};
vm.createContext(sandbox);

vm.runInContext(postsFile + "\nthis.posts = posts;", sandbox);
vm.runInContext(updatesFile + "\nthis.updates = updates;", sandbox);
vm.runInContext(plantsFile + "\nthis.plantResidents = plantResidents;", sandbox);
vm.runInContext(structuredDataFile + "\nthis.structuredData = structuredData;", sandbox);
vm.runInContext(gardenTimelineFile + "\nthis.gardenTimeline = gardenTimeline;", sandbox);

const posts = sandbox.posts;
const updates = sandbox.updates;
const plants = sandbox.plantResidents;
const structuredDataExtras = sandbox.structuredData || {};
const gardenTimeline = sandbox.gardenTimeline || [];

if (!Array.isArray(posts)) {
  throw new Error("Could not load posts from js/posts.js");
}
if (!Array.isArray(updates)) {
  throw new Error("Could not load updates from js/updates.js");
}
if (!Array.isArray(plants)) {
  throw new Error("Could not load plants from js/plants.js");
}
if (!Array.isArray(gardenTimeline)) {
  throw new Error("Could not load gardenTimeline from js/garden-timeline.js");
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

function organisationEntity() {
  return {
    "@type": "Organization",
      "@id": "https://softalchemy.uk/#organization",
        "name": "Soft Alchemy",
          "url": "https://softalchemy.uk/",
            "logo": {
      "@type": "ImageObject",
        "url": "https://softalchemy.uk/favicon.png"
    }
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

function cleanTitle(value = "") {
  return String(value).replace(/^[^\w]+/, "");
}

function keywordsText(value, fallback = "") {
  if (Array.isArray(value)) return value.filter(Boolean).join(", ");
  return value || fallback;
}

function recipeInstructionSteps(instructions = []) {
  return instructions.map((instruction, index) => {
    if (typeof instruction === "object") return instruction;

    return {
      "@type": "HowToStep",
      "position": index + 1,
      "text": instruction
    };
  });
}

function faqEntity(canonicalUrl, faqItems = []) {
  if (!Array.isArray(faqItems) || !faqItems.length) return null;

  return {
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    "url": canonicalUrl,
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

function buildBaseGraph() {
  return [
    siteEntity(),
    authorEntity(),
    organisationEntity()
  ];
}

function pushIfPresent(array, item) {
  if (item) array.push(item);
}

function toDateOnly(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString().slice(0, 10);
}

function latestDate(...values) {
  const dates = values
    .flat()
    .map(toDateOnly)
    .filter(Boolean)
    .sort();

  return dates.at(-1) || null;
}

function timelineDatesForTag(timeline = [], tag) {
  return timeline
    .filter(entry => entry.tags?.includes(tag))
    .map(entry => entry.updated || entry.date);
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
  const extras = structuredDataExtras.posts?.[post.id] || {};
  const recipeExtras = extras.recipe || {};

  const fallbackKeywords = (post.tags || []).join(", ");

  const articleEntity = {
    "@type": isRecipe ? "Recipe" : "BlogPosting",
    "@id": `${canonicalUrl}#article`,
    "mainEntityOfPage": canonicalUrl,
    "headline": metaTitle,
    "name": cleanTitle(post.title),
    "description": metaDescription,
    "image": [ogImage],
    "author": { "@id": `${SITE_URL}/about/#claire-smid` },
    "publisher": { "@id": `${SITE_URL}/#organization` },
    "datePublished": post.date,
    "dateModified": post.updated || post.date,
    ...(isRecipe ? {
      "recipeCategory": recipeExtras.recipeCategory || (post.tags?.includes("sweet") ? "Dessert" : "Main course"),
      "recipeCuisine": recipeExtras.recipeCuisine || (post.tags?.includes("asian") ? "Asian" : undefined),
      "keywords": keywordsText(recipeExtras.keywords, fallbackKeywords),
      ...recipeExtras,
      ...(recipeExtras.recipeInstructions ? {
        "recipeInstructions": recipeInstructionSteps(recipeExtras.recipeInstructions)
      } : {})
    } : {
      "keywords": fallbackKeywords,
      "articleSection": post.category
    })
  };

  const graph = buildBaseGraph();

  graph.push(articleEntity);
  graph.push(
    breadcrumbEntity([
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Archive", url: `${SITE_URL}/archive/` },
      { name: cleanTitle(post.title), url: canonicalUrl }
    ])
  );

  pushIfPresent(graph, faqEntity(canonicalUrl, extras.faq));

  const structuredData = jsonLdScript({
    "@context": "https://schema.org",
    "@graph": graph
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
    `An update from Soft Alchemy${parentPost ? ` about ${cleanTitle(parentPost.title)}` : ""}.`;

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
  const extras = structuredDataExtras.updates?.[update.id] || {};

  const articleEntity = {
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#article`,
    "mainEntityOfPage": canonicalUrl,
    "headline": metaTitle,
    "name": cleanTitle(update.title),
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
  };

  const graph = buildBaseGraph();

  graph.push(articleEntity);
  graph.push(
    breadcrumbEntity([
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Archive", url: `${SITE_URL}/archive/` },
      { name: cleanTitle(update.title), url: canonicalUrl }
    ])
  );

  pushIfPresent(graph, faqEntity(canonicalUrl, extras.faq));

  const structuredData = jsonLdScript({
    "@context": "https://schema.org",
    "@graph": graph
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
        "url": canonicalUrl,
        "name": `${plant.name} | Soft Alchemy Plant Profile`,
        "description": metaDescription,
        "image": [ogImage],
        "dateCreated": `${plant.started}T00:00:00Z`,
        "mainEntity": {
          "@type": "Thing",
          "@id": `${canonicalUrl}#plant`,
          "name": plant.variety && plant.variety !== "-"
            ? `${plant.name} (${plant.variety.replace(/<br>/g, ", ")})`
            : plant.name,
          "description": metaDescription,
          "image": ogImage
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
    { url: "/", lastmod: latestDate(posts.map(p => p.updated || p.date), updates.map(u => u.updated || u.date)) },
    { url: "/about/", lastmod: null },
    { url: "/kitchen/", lastmod: latestDate(posts.filter(p => p.category === "Recipe").map(p => p.updated || p.date)) },
    { url: "/kitchen/fermentation/", lastmod: latestDate(updates.filter(u => u.room === "fermentation" || u.tags?.includes("fermentation")).map(u => u.updated || u.date)) },
    { url: "/study/", lastmod: latestDate(posts.filter(p => p.category === "Study").map(p => p.updated || p.date), updates.filter(u => u.room === "study").map(u => u.updated || u.date)) },
    { url: "/study/timeline/", lastmod: latestDate(updates.filter(u => u.room === "study").map(u => u.updated || u.date)) },
    { url: "/garden/", lastmod: latestDate(gardenTimeline.map(e => e.updated || e.date)) },
    {
      url: "/garden/residents/", lastmod: latestDate(
        plants.map(p => p.updated || p.started),
        gardenTimeline.map(e => e.updated || e.date)
      ) },
    { url: "/library/", lastmod: latestDate(posts.filter(p => p.tags?.includes("books")).map(p => p.updated || p.date)) },
    { url: "/archive/", lastmod: latestDate(posts.map(p => p.updated || p.date), updates.map(u => u.updated || u.date)) }
  ];

  const postUrls = posts.map(post => {
    const linkedUpdates = updates
      .filter(update => update.originalPost === post.id)
      .map(update => update.updated || update.date);

    return {
      url: `/post/${post.id}/`,
      lastmod: latestDate(post.updated || post.date, linkedUpdates)
    };
  });

  const updateUrls = updates.map(update => ({
    url: `/update/${update.id}/`,
    lastmod: latestDate(update.updated || update.date)
  }));

  const plantUrls = plants.map(plant => ({
    url: `/plant/${plant.id}/`,
    lastmod: latestDate(
      plant.updated,
      plant.started,
      timelineDatesForTag(gardenTimeline, plant.id)
    )
  }));

  const allUrls = [
    ...staticUrls,
    ...postUrls,
    ...updateUrls,
    ...plantUrls
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(entry => `
  <url>
    <loc>${SITE_URL}${entry.url}</loc>
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ""}
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