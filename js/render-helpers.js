// =============================
// render-helpers.js
//
// Pure, data-in/string-out rendering functions shared between:
//   - the browser (loaded as a plain <script>, same as posts.js/updates.js)
//   - build.js (loaded into a vm sandbox the same way posts.js/updates.js are)
//
// IMPORTANT: nothing in this file may touch the DOM, window, document,
// localStorage, etc. If a function needs that, it doesn't belong here —
// it stays in script.js. This file only builds and returns HTML strings
// from plain data (post objects, update objects, ids).
// =============================

// -----------------------------
// DATE FORMATTING
// -----------------------------
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

// -----------------------------
// TAGS
// -----------------------------
function formatTag(tag) {
  return tag
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

// -----------------------------
// ROOM LINKS
// -----------------------------
const roomData = {
  garden: {
    emoji: "🌿",
    title: "The Garden",
    url: "/garden/index.html",
    description: "Container gardening, hopeful seedlings, and occasional slug negotiations."
  },
  kitchen: {
    emoji: "🍯",
    title: "The Kitchen",
    url: "/kitchen/index.html",
    description: "Ferments bubbling, cosy recipes, and experiments that may or may not be edible."
  },
  study: {
    emoji: "📝",
    title: "The Study",
    url: "/study/index.html",
    description: "Journal reflections, organisational systems, and attempts to turn chaos into something useful."
  },
  echo: {
    emoji: "🐾",
    title: "Echo's Corner",
    url: "/archive/index.html?tag=dog-approved",
    description: "Dog-approved adventures, a very strange birthday cake, and important announcements about birds outside."
  },
  library: {
    emoji: "📚",
    title: "The Library",
    url: "/library/index.html",
    description: "Story recommendations, board games, and book-related joy."
  },
  archive: {
    emoji: "📜",
    title: "The Archive",
    url: "/archive/index.html",
    description: "Every recipe, experiment, recommendation, success, failure, and curious detour collected in one place."
  },
  dungeon: {
    emoji: "⚔️",
    title: "The Dungeon",
    url: "#",
    description: "Here be dragons: a deep dive into D&D is still being summoned."
  }
};

const postRoomMap = {
  Recipe: "kitchen",
  Garden: "garden",
  Study: "study",
};

const roomLinkText = {
  kitchen: "Raid more kitchen experiments →",
  garden: "See what else is growing →",
  study: "Continue exploring the Study →",
  library: "Wander into the library →",
  echo: "Visit Echo's corner →"
};

function getPostRoomKey(post) {
  if (post.tags?.includes("books")) return "library";
  if (post.tags?.includes("dog-approved")) return "echo";

  return postRoomMap[post.category] || null;
}

function renderRoomLink(post) {
  const roomKey = getPostRoomKey(post);
  if (!roomKey) return "";

  const room = roomData[roomKey];
  if (!room) return "";

  const linkText = roomLinkText[roomKey] || `More from ${room.title} →`;

  return `
    <div class="related-footer">
      <h3><a href="${room.url}">
        ${room.emoji} ${linkText}
      </a></h3>
    </div>
  `;
}

// -----------------------------
// POST PREVIEW CARDS (archive / latest / featured / related)
// -----------------------------
function createPostPreviewHTML(post, options = {}) {
  const { activeTag = null } = options;

  return `
    <div class="title-row">
      <h2>
        <a href="/post/${post.id}">${post.title}</a>
      </h2>

      <div class="category-title ${post.category.toLowerCase()}">
        ${post.category}
      </div>
    </div>

    <p>${post.excerpt}</p>

    <div class="tag-list">
      ${post.tags.map(tag => `
        <span class="tag ${tag === activeTag ? "active" : ""}" data-tag="${tag}">
          ${formatTag(tag)}
        </span>
      `).join("")}
    </div>
  `;
}

// -----------------------------
// UPDATE NOTES / CARDS (depends on `updates`, passed in explicitly —
// see note below on why this isn't read from a global here)
// -----------------------------
function getUpdatesForPost(postId, updates) {
  if (!Array.isArray(updates)) return [];

  return updates
    .filter(update => update.originalPost === postId)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function renderUpdateNote(update, options = {}) {
  const {
    extraClass = "",
    dateFormatter = formatDate
  } = options;

  return `
    <button class="update-note ${extraClass}" type="button" data-update-id="${update.id}">
      <span class="update-note-meta">
        ${dateFormatter(update.date)} • ${update.status}
      </span>

      <h4 class="update-note-title">
        ${update.previewTitle || update.title}
      </h4>
    </button>
  `;
}

function renderUpdateCard(update) {
  return `
    <li>
      ${renderUpdateNote(update)}
    </li>
  `;
}

function renderPostUpdateSection(postId, updates) {
  const relatedUpdates = getUpdatesForPost(postId, updates);

  if (!relatedUpdates.length) return "";

  return `
    <details class="post-update-drawer">
      <summary>
        What happened next?
        <span>${relatedUpdates.length} update${relatedUpdates.length === 1 ? "" : "s"}</span>
      </summary>

      <div class="post-update-board">
        <ul class="chaos-list update-note-list">
          ${relatedUpdates.map(renderUpdateCard).join("")}
        </ul>
      </div>
    </details>
  `;
}

// -----------------------------
// FULL POST BODY (the bit that was missing from server-rendered HTML)
// -----------------------------
function renderPostBody(post, updates) {
  return `
    <div class="title-row">
      <h1>${post.title}</h1>
      <div class="category-title ${post.category.toLowerCase()}">${post.category}</div>
    </div>
    <div class="tag-list">
      ${(post.tags || []).map(tag => `
        <span class="tag" data-tag="${tag}">${formatTag(tag)}</span>
      `).join("")}
    </div>
    <div class="content">${post.content}</div>

    ${renderPostUpdateSection(post.id, updates)}
    ${renderRoomLink(post)}
  `;
}

// -----------------------------
// PLANT TIMELINE ENTRY LOOKUP (gardenTimeline passed in explicitly, same
// reasoning as getUpdatesForPost above — no implicit globals)
// -----------------------------
function getPlantTimelineEntries(plantId, gardenTimeline) {
  if (!Array.isArray(gardenTimeline)) return [];

  return gardenTimeline
    .filter(entry => entry.tags?.includes(plantId))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

// -----------------------------
// FULL UPDATE CARD (used by the standalone /update/{id}/ page AND by the
// in-page modal/lightbox when an update-note is clicked elsewhere on the
// site — same function, two call sites, which is exactly why it needs to
// live here rather than duplicated)
// -----------------------------
function renderFullUpdateCard(update, options = {}) {
  const { showPageLink = true } = options;

  return `
    <article class="update-modal-card">
      <span class="update-note-meta">
        ${formatDate(update.date)} • ${update.status}
      </span>

      <h2>${update.title}</h2>

      ${update.originalPost?.trim() ? `
  <p>
    <a href="/post/${update.originalPost}">
      Start the experiment from the beginning →
    </a>
  </p>
  ` : ""}

      ${update.body}
      ${showPageLink ? `
  <p>
    <a href="/update/${update.id}/">Open as page →</a>
  </p>
` : renderRoomLink(update)}

    </article>
  `;
}

// -----------------------------
// PLANT PROFILE — static content only.
//
// NOTE: the deferred "story so far" timeline (renderTimeline / setTimeout
// call in script.js) is deliberately NOT reproduced here. renderTimeline()
// is a genuinely DOM-bound widget (direct innerHTML writes, hover listeners,
// SVG thread drawing, lightbox wiring) — it can't run in build.js, and
// trying to fake that would reintroduce the exact "two implementations
// drift apart" problem this refactor exists to avoid. The empty timeline
// container is left in the server-rendered output and filled in by
// script.js on load, exactly as it is today. That's an existing, deliberate
// lazy-render — not the bug we're fixing (which was the ENTIRE body being
// empty, not one nested supplementary section).
//
// relatedEntries is passed in explicitly (computed via getPlantTimelineEntries
// above, with gardenTimeline passed by the caller) rather than read from a
// gardenTimeline global, so this stays a pure function of its arguments.
// -----------------------------
function renderPlantProfile(plant, relatedEntries = [], options = {}) {
  const timelineId = `plant-timeline-${plant.id}`;
  const imageSize = plant.imageSize || "landscape";
  const usesSideBySideLayout = ["portrait", "square"].includes(imageSize);
  const { showPageLink = true } = options;

  const factGrid = `
    <div class="plant-profile-facts">
      <p><strong>Started:</strong><br>${formatDate(plant.started)}</p>
      <p><strong>Status:</strong><br>${plant.status}</p>
      ${plant.variety ? `<p><strong>Variety:</strong><br>${plant.variety}</p>` : ""}
      <p><strong>Type:</strong><br>${plant.type}</p>
    </div>
  `;

  const imageHtml = `
    <img
      src="${plant.image}"
      alt="${plant.name}"
      class="lightbox-image plant-profile-image"
    >
  `;

  const noteHtml = `<p class="plant-profile-note">${plant.note}</p>`;

  // Container is intentionally always rendered when there are entries (so
  // script.js can find it and fill it via renderTimeline), but its
  // *contents* are not — those stay client-rendered, same as before.
  const storyHtml = relatedEntries.length > 0 ? `
    <details class="post-update-drawer">
      <summary>
        The story so far...
        <span>${relatedEntries.length} ${relatedEntries.length === 1 ? "entry" : "entries"}</span>
      </summary>

      <div
        id="${timelineId}"
        class="garden-timeline plant-profile-timeline-render"
      ></div>
      </details>
  ` : "";

  const pageLinkHtml = showPageLink ? `
  <p>
    <a href="/plant/${plant.id}/">Open plant page →</a>
  </p>
` : "";

  const moreGardenResidents = !showPageLink ? `
  <div class="related-footer"><h3><a href="/garden/residents/index.html">🪴 More from the garden residents →</a></h3></div>
` : "";

  const profileBody = usesSideBySideLayout ? `
    <div class="plant-profile-main">
      <div class="plant-profile-photo">
        ${imageHtml}
      </div>

      <div class="plant-profile-info">
        ${factGrid}
        ${noteHtml}
      </div>
    </div>

    ${storyHtml}
  ` : `
    ${factGrid}
    ${imageHtml}
    ${noteHtml}
    ${storyHtml}
  `;

  return `
    <article class="plant-profile-card plant-profile-card--${imageSize}">
      <h2>${plant.emoji} ${plant.name}</h2>
      ${profileBody}
      ${pageLinkHtml}
      ${moreGardenResidents}
    </article>
  `;
}

// -----------------------------
// EXPORT (Node only — in the browser these just stay as globals,
// exactly like posts.js/updates.js already do)
// -----------------------------
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    formatDate,
    formatTag,
    roomData,
    postRoomMap,
    roomLinkText,
    getPostRoomKey,
    renderRoomLink,
    createPostPreviewHTML,
    getUpdatesForPost,
    renderUpdateNote,
    renderUpdateCard,
    renderPostUpdateSection,
    renderPostBody,
    renderFullUpdateCard,
    renderPlantProfile,
    getPlantTimelineEntries
  };
}