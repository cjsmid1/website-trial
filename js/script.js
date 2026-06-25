// =============================
// script.js
// =============================

// Active tag filter
let activeTag = null;

// DOM references
const postsContainer = document.getElementById("posts");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("categoryFilter");
const postContainer = document.getElementById("post");
const singleUpdateContainer = document.getElementById("single-update");
const singlePlantContainer = document.getElementById("single-plant");

// -----------------------------
// DARK MODE + ICON SWAP
// -----------------------------
function getTheme() {
  return localStorage.getItem("theme") || "light";
}

function applyTheme() {
  const isDark = getTheme() === "dark";

  document.documentElement.classList.toggle("dark", isDark);

  const btn = document.querySelector("#themeToggle");
  if (!btn) return;

  btn.dataset.mode = isDark ? "dark" : "light";
}

function toggleTheme() {
  const isDark = !document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("#themeToggle");
  if (!btn) return;

  toggleTheme();
});


// -----------------------------
// NAVIGATION
// -----------------------------
function loadNavigation() {
  if (document.querySelector(".nav")) return;

  const navigationHTML = `
    <nav class="nav">
      <div class="nav-box">
        <div class="nav-left">
          <a href="/about/index.html">About</a>
		  <div class="nav-dropdown">
            <button class="nav-dropdown-toggle" type="button">
              Explore
            </button>
          
            <div class="nav-dropdown-menu">
              <a href="/garden/index.html">The Garden</a>
			        <a href="/kitchen/index.html">The Kitchen</a>
              <a href="/library/index.html">The Library</a>
              <a href="/study/index.html">The Study</a>
            </div>
          </div>
        </div>

        <a class="nav-logo" href="/index.html">
          <img id="alchemyLogo" src="/images/handwriting/writing-soft-alchemy.gif" alt="Soft Alchemy">
        </a>

        <div class="nav-right">
          <a href="/archive/index.html">Archive</a>
          <a href="/about/index.html#contact">Contact</a>
        </div>
      </div>
    </nav>
  `;

  document.body.insertAdjacentHTML("afterbegin", navigationHTML);
}

document.addEventListener("click", (e) => {
  const toggle = e.target.closest(".nav-dropdown-toggle");
  const dropdown = e.target.closest(".nav-dropdown");

  document.querySelectorAll(".nav-dropdown.open").forEach(menu => {
    if (menu !== dropdown) menu.classList.remove("open");
  });

  if (toggle && dropdown) {
    dropdown.classList.toggle("open");
  }
});

// -----------------------------
// ABOUT EXPLORATION
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

let activeRoom = null;

document.addEventListener("click", (e) => {
  const button = e.target.closest("[data-room]");
  if (!button) return;

  const result = document.getElementById("interestResult");
  if (!result) return;

  const roomKey = button.dataset.room;

  document.querySelectorAll(".interest-options button")
    .forEach(btn => btn.classList.remove("active-room"));

  button.classList.add("active-room");

  // SECOND CLICK = GO THERE
  if (activeRoom === roomKey) {

    const room = roomData[roomKey];
    if (!room) return;

    window.location.href = room.url;
    return;
  }

  // FIRST CLICK = REVEAL
  activeRoom = roomKey;

  // Echo interruption
  if (roomKey === "interruption") {
    result.innerHTML = `
      <a class="interest-result echo-interruption" href="/post/echo-collage">
        <h2>
          <img class="emoji" src="/images/paw-print.png" alt="">
          Echo Interruption!
        </h2>

        <p>He insisted this was important.</p>

        <figure class="card-figure">
          <div class="card-image">
            <img src="/images/echo/echo-cute-with-text.jpg" alt="Echo looking cute">
          </div>

          <figcaption>
            I refuse to use the paw pun - you can't make me!
          </figcaption>
        </figure>
      </a>
    `;
    return;
  }

  // Normal room cards
  const room = roomData[roomKey];
  if (!room) return;

  result.innerHTML = `
    <a class="interest-result" href="${room.url}">
      <h3>${room.emoji} ${room.title}</h3>
      <p>${room.description}</p>
    </a>
  `;
});


// -----------------------------
// POPULATE CATEGORY FILTER
// -----------------------------
const archiveFilterMenu = document.getElementById("archiveFilterMenu");
const archiveFilterToggle = archiveFilterMenu?.querySelector(".archive-filter-toggle");
const categoryOptions = document.getElementById("categoryOptions");
const showPostsInput = document.getElementById("showPosts");
const showUpdatesInput = document.getElementById("showUpdates");

let activeCategory = "";

if (categoryOptions) {
  const categories = [...new Set(posts.map(post => post.category))];

  categoryOptions.innerHTML = categories.map(category => `
  <label>
    <input type="radio" name="archiveCategory" value="${category}">
    <span>${category}</span>
  </label>
`).join("");
}

archiveFilterToggle?.addEventListener("click", () => {
  archiveFilterMenu.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!archiveFilterMenu?.contains(e.target)) {
    archiveFilterMenu?.classList.remove("open");
  }
});

document.addEventListener("change", (e) => {
  if (e.target.name === "archiveCategory") {
    activeCategory = e.target.value;

    filterPosts();
    updateFilterButtonState();

    archiveFilterMenu.classList.remove("open");
  }

  if (e.target.id === "showPosts" ||
    e.target.id === "showUpdates") {
    filterPosts();
    updateFilterButtonState();
  }

});

// -----------------------------
// FORMAT TAGS
// -----------------------------
function formatTag(tag) {
  return tag
    .replace(/-/g, " ")              // replace hyphens with spaces
    .replace(/\b\w/g, c => c.toUpperCase()); // capitalise each word
}

function getUpdateTags(update) {
  const parentPost = posts.find(
    post => post.id === update.originalPost
  );

  return [
    ...(parentPost?.tags || []),
    ...(update.tags || [])
  ];
}

// -----------------------------
// RENDER BLOG POSTS
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

function createUpdatePreviewHTML(update) {
  const category = update.category || update.room || "Update";
  return `

    <div class="angled-title">Update</div>

    <div class="title-row">

    <p class="update-preview-meta">
      ${formatDate(update.date)}${update.status ? ` · ${update.status}` : ""}
    </p>

      <div class="category-title ${category.toLowerCase()}">
        ${category}
      </div>
    </div>

    <h2>${update.title}</h2>
    <p>${update.excerpt || update.summary || ""}</p>

    <div class="tag-list">
  ${getUpdateTags(update).map(tag => `
    <span class="tag ${tag === activeTag ? "active" : ""}" data-tag="${tag}">
      ${formatTag(tag)}
    </span>
  `).join("")}
</div>
  `;
}

function addTagClickHandlers(container, callback) {
  container.querySelectorAll(".tag").forEach(el => {
    el.addEventListener("click", () => {
      callback(el.dataset.tag);
    });
  });
}

function renderArchiveItems(items) {
  if (!postsContainer) return;

  postsContainer.innerHTML = "";

  items.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = `card fade-in ${item.type === "update" ? "archive-update-card" : ""}`;
    card.style.animationDelay = `${i * 50}ms`;
    card.setAttribute("tabindex", "0");

    if (item.type === "update") {
      card.dataset.updateId = item.data.id;
      card.setAttribute("role", "button");
    }

    if (item.type === "post") {
      card.dataset.postId = item.data.id;
      card.setAttribute("role", "link");
    }

    card.innerHTML = item.type === "update"
      ? createUpdatePreviewHTML(item.data)
      : createPostPreviewHTML(item.data, { activeTag });

    postsContainer.appendChild(card);
  });

  addTagClickHandlers(postsContainer, setTagFilter);
}

document.addEventListener("click", (e) => {
  const card = e.target.closest(".card[data-post-id]");
  if (!card) return;

  if (e.target.closest(".tag")) return;
  if (e.target.closest("a")) return;

  window.location.href = `/post/${card.dataset.postId}`;
});

document.addEventListener("keydown", (e) => {
  const card = e.target.closest(".card[data-post-id], .archive-update-card");
  if (!card) return;
  if (e.key !== "Enter" && e.key !== " ") return;

  e.preventDefault();
  card.click();
});

document.addEventListener("click", (e) => {
  const card = e.target.closest(".archive-update-card");
  if (!card) return;

  if (e.target.closest(".tag")) return;

  const updateId = card.dataset.updateId;
  const updateIndex = updates.findIndex(update => update.id === updateId);

  if (updateIndex === -1) {
    console.warn("No update found for:", updateId);
    return;
  }

  if (typeof renderFullUpdateCard !== "function") {
    console.warn("renderFullUpdateCard is not loaded");
    return;
  }

  openSiteModal("", {
    contentClass: "card update-modal-content",
    items: updates,
    currentIndex: updateIndex,
    renderItem: renderFullUpdateCard
  });
});

function renderLatestPost(containerId, category = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const latestPost = category
    ? posts.find(post => post.category.toLowerCase() === category.toLowerCase())
    : posts[0];

  if (!latestPost) return;

  container.innerHTML = createPostPreviewHTML(latestPost);

  addTagClickHandlers(container, tag => {
    window.location.href = `/archive/index.html?tag=${encodeURIComponent(tag)}`;
  });
}

function renderFeaturedPost(postId, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const post = posts.find(p => p.id === postId);
  if (!post) return;

  container.innerHTML = createPostPreviewHTML(post);

  addTagClickHandlers(container, tag => {
    window.location.href = `/archive/index.html?tag=${encodeURIComponent(tag)}`;
  });
}

function getRelatedPost(currentPost) {
  const currentTags = new Set(currentPost.tags || []);

  const scoredPosts = posts
    .filter(post => post.id !== currentPost.id)
    .map(post => {
      const matchingTags = (post.tags || []).filter(tag => currentTags.has(tag));
      const sameCategory =
        post.category?.toLowerCase() === currentPost.category?.toLowerCase();

      return {
        post,
        tagScore: matchingTags.length,
        categoryScore: sameCategory ? 1 : 0,
        totalScore: matchingTags.length * 10 + (sameCategory ? 1 : 0)
      };
    })
    .filter(item => item.tagScore > 0 || item.categoryScore > 0);

  if (!scoredPosts.length) return null;

  const highestScore = Math.max(...scoredPosts.map(item => item.totalScore));

  const bestMatches = scoredPosts
    .filter(item => item.totalScore === highestScore)
    .map(item => item.post);

  return bestMatches[Math.floor(Math.random() * bestMatches.length)];
}

// -----------------------------
// RANDOM POST
// -----------------------------
function getRandomPost(excludeId = null) {
  const candidates = posts.filter(post => post.id !== excludeId);
  if (!candidates.length) return null;

  return candidates[Math.floor(Math.random() * candidates.length)];
}

function goToRandomPost(excludeId = null) {
  const randomPost = getRandomPost(excludeId);
  if (!randomPost) return;

  window.location.href = `/post/${randomPost.id}`;
}

document.addEventListener("click", (e) => {
  const randomBtn = e.target.closest("#randomPostBtn, [random-post]");
  if (!randomBtn) return;

  e.preventDefault();

  const excludeId = randomBtn.dataset.excludeId || null;
  goToRandomPost(excludeId);
});


// -----------------------------
// METADATA
// -----------------------------
function updatePostMetadata(post) {
  const title = post.metaTitle || `${post.title} | Soft Alchemy`;
  const description = post.metaDescription || post.excerpt || "A Soft Alchemy post about gentle experiments in everyday life.";
  const image = post.image
    ? `https://softalchemy.uk/${post.image.replace(/^\/+/, "")}`
    : "https://softalchemy.uk/images/soft-alchemy-preview.jpg";
  const url = `https://softalchemy.uk/post/${post.id}`;

  setCanonical(url);

  document.title = title;

  setMeta("description", description);

  setMetaProperty("og:site_name", "Soft Alchemy");
  setMetaProperty("og:title", title);
  setMetaProperty("og:description", description);
  setMetaProperty("og:type", "article");
  setMetaProperty("og:url", url);
  setMetaProperty("og:image", image);
  setMetaProperty("article:published_time", post.date);
  
  setMeta("author", "Claire Smid");
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);
  setMeta("twitter:image", image);

  if (post.imageAlt) {
    setMetaProperty("og:image:alt", post.imageAlt);
    setMeta("twitter:image:alt", post.imageAlt);
  }
}

function updateUpdateMetadata(update) {
  const title = update.metaTitle || `${update.title} | Soft Alchemy`;
  const description =
    update.metaDescription ||
    update.excerpt ||
    update.summary ||
    "A Soft Alchemy update about an ongoing experiment, project or gentle domestic adventure.";

  const image = update.image
    ? `https://softalchemy.uk/${update.image.replace(/^\/+/, "")}`
    : "https://softalchemy.uk/images/soft-alchemy-preview.jpg";

  const url = `https://softalchemy.uk/update/${update.id}/`;

  setCanonical(url);

  document.title = title;

  setMeta("description", description);
  setMeta("author", "Claire Smid");

  setMetaProperty("og:site_name", "Soft Alchemy");
  setMetaProperty("og:title", title);
  setMetaProperty("og:description", description);
  setMetaProperty("og:type", "article");
  setMetaProperty("og:url", url);
  setMetaProperty("og:image", image);
  setMetaProperty("article:published_time", update.date);

  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);
  setMeta("twitter:image", image);

  if (update.imageAlt) {
    setMetaProperty("og:image:alt", update.imageAlt);
    setMeta("twitter:image:alt", update.imageAlt);
  }
}

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setMetaProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(url) {
  let canonical = document.querySelector("link[rel='canonical']");

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = url;
}

// -----------------------------
// FILTER POSTS
// -----------------------------
function filterPosts(updateURL = true) {
  const search = searchInput?.value.toLowerCase().trim() || "";
  const showPosts = showPostsInput?.checked ?? true;
  const showUpdates = showUpdatesInput?.checked ?? false;

  let archiveItems = [];

  if (showPosts) {
    const postItems = posts.map(post => ({
      type: "post",
      date: post.date,
      data: post
    }));

    archiveItems.push(...postItems);
  }

  if (showUpdates && typeof updates !== "undefined") {
    const updateItems = updates.map(update => ({
      type: "update",
      date: update.date,
      data: update
    }));

    archiveItems.push(...updateItems);
  }

  // Search should include updates even if Show Updates is off
  if (search && typeof updates !== "undefined") {
    const existingUpdateIds = new Set(
      archiveItems
        .filter(item => item.type === "update")
        .map(item => item.data.id)
    );

    const matchingUpdates = updates
      .filter(update => !existingUpdateIds.has(update.id))
      .map(update => ({
        type: "update",
        date: update.date,
        data: update
      }));

    archiveItems.push(...matchingUpdates);
  }

  if (search) {
    archiveItems = archiveItems.filter(item => {
      const entry = item.data;

      const searchableText = [
        entry.title,
        entry.excerpt,
        entry.summary,
        entry.status,
        entry.category,
        entry.room,
        entry.project,
        ...(entry.tags || []),
        ...(item.type === "update"
          ? getUpdateTags(entry)
          : (entry.tags || []))
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(search);
    });
  }

  if (activeCategory) {
    archiveItems = archiveItems.filter(item => {
      const entry = item.data;
      const entryCategory = entry.category || entry.room;

      return entryCategory === activeCategory;
    });
  }

  if (activeTag) {
    archiveItems = archiveItems.filter(item => {

      if (item.type === "post") {
        return item.data.tags?.includes(activeTag);
      }

      if (item.type === "update") {
        return getUpdateTags(item.data).includes(activeTag);
      }

      return false;
    });
  }

  archiveItems.sort((a, b) => new Date(b.date) - new Date(a.date));

  renderArchiveItems(archiveItems);

  if (updateURL) {
    const params = new URLSearchParams(window.location.search);

    if (activeTag) params.set("tag", activeTag);
    else params.delete("tag");

    if (activeCategory) params.set("category", activeCategory);
    else params.delete("category");

    if (showUpdates) params.set("updates", "true");
    else params.delete("updates");

    window.history.replaceState({}, "", `${location.pathname}?${params}`);
  }
}

function updateFilterButtonState() {
  const hasActiveFilter =
    activeCategory !== "";

  archiveFilterToggle?.classList.toggle(
    "has-active-filter",
    hasActiveFilter
  );
}

searchInput?.addEventListener("input", () => filterPosts());

// -----------------------------
// RECOMMENDED NEXT POST
// -----------------------------
function renderRelatedPost(currentPost) {
  const relatedPost = getRelatedPost(currentPost);
  const randomPost = getRandomPost(currentPost.id);

  if (!relatedPost && !randomPost) return;

  const relatedSection = document.createElement("section");
  relatedSection.className = "card related-post fade-in";

  relatedSection.innerHTML = `
    <div class="related-header">
      <h3>You may also enjoy...</h3>
    </div>

    ${relatedPost
      ? createPostPreviewHTML(relatedPost)
      : `<p>No logical match today. Guess your only option is...</p>`
    }

    ${randomPost
      ? `
    <div class="related-footer">
      <h3>or follow the paw prints...</h3>

      <button
        class="archive-paw-button"
        type="button"
        random-post
        data-exclude-id="${currentPost.id}"
        aria-label="Open a random post"
      >
        <img src="/images/handwriting/paw-print-handwritten.png" alt="">
      </button>
    </div>
  `
      : ""
    }
  `;

  postContainer.insertAdjacentElement("afterend", relatedSection);

  addTagClickHandlers(relatedSection, tag => {
    window.location.href = `/archive/index.html?tag=${encodeURIComponent(tag)}`;
  });
}

// -----------------------------
// POST ROOM LINK
// -----------------------------
const postRoomMap = {
  Recipe: "kitchen",
  Garden: "garden",
  Study: "study",
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

  const roomLinkText = {
    kitchen: "Raid more kitchen experiments →",
    garden: "See what else is growing →",
    study: "Continue exploring the Study →",
    library: "Wander into the library →",
    echo: "Visit Echo’s corner →"
  };

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
// TAG CLICK HANDLER
// -----------------------------
function setTagFilter(tag) {
  activeTag = activeTag === tag ? null : tag; // toggle
  filterPosts();
}

// -----------------------------
// INITIAL BLOG RENDER
// -----------------------------
if (postsContainer) {
  const urlParams = new URLSearchParams(window.location.search);

  const tagFromUrl = urlParams.get("tag");
  const categoryFromUrl = urlParams.get("category");
  const showUpdatesFromUrl = urlParams.get("updates") === "true";

  if (tagFromUrl) activeTag = tagFromUrl;

  if (categoryFromUrl) {
    activeCategory = categoryFromUrl;

    const matchingRadio = document.querySelector(
      `input[name="archiveCategory"][value="${categoryFromUrl}"]`
    );

    if (matchingRadio) matchingRadio.checked = true;
  }

  if (showUpdatesInput) {
    showUpdatesInput.checked = showUpdatesFromUrl;
  }

  filterPosts(false);
  updateFilterButtonState();

}

// -----------------------------
// SINGLE POST PAGE
// -----------------------------
if (postContainer) {
  const params = new URLSearchParams(window.location.search);
  const id =
    new URLSearchParams(window.location.search).get("id") ||
    document.body.dataset.postId;
  const post = posts.find(p => p.id === id);

  if (post) {
    updatePostMetadata(post);
    // Inject HTML
    postContainer.innerHTML = `
      <div class="title-row">
        <h1>${post.title}</h1>
        <div class="category-title ${post.category.toLowerCase()}">${post.category}</div>
      </div>
      <div class="tag-list">
        ${post.tags.map(tag => `
          <span class="tag" data-tag="${tag}">${formatTag(tag)}</span>
        `).join("")}
      </div>
      <div class="content">${post.content}</div>

      ${typeof renderPostUpdateSection === "function"
        ? renderPostUpdateSection(post.id)
        : ""}
      ${renderRoomLink(post)}
    `;

    const pageTitle = post.metaTitle || `${post.title} | Soft Alchemy`;

    document.title = pageTitle;

    if (typeof gtag === "function") {
      gtag("event", "page_view", {
        page_title: pageTitle,
        page_location: window.location.href,
        page_path: `/post/${post.id}`
      });
    }

    // Force reflow + fade-in animation
    requestAnimationFrame(() => {
      void postContainer.offsetWidth; // ensures reflow
      postContainer.classList.add("fade-in");
    });

    // Add tag click event to go to filtered blog
    postContainer.querySelectorAll(".tag").forEach(el => {
      el.addEventListener("click", () => {
        const tag = el.dataset.tag;
        window.location.href = `/archive/index.html?tag=${encodeURIComponent(tag)}`;
      });
    });

    renderRelatedPost(post);
    if (id === "quote-page") { initFlyingQuotes(); }
    if (id === "echo-collage") { renderEchoGallery(); }
    if (typeof setupUpdateCardModals === "function") {
      setupUpdateCardModals(postContainer);
    }
    if (id === "sourdough-starter") {
      const starterTimelineContainer = document.getElementById("sourdoughStarterTimeline");

      if (starterTimelineContainer) {
        renderTimeline("sourdoughStarterTimeline", sourdoughStarterTimeline, { timelineMode: "process", showMonthMarker: false });
      }
    }
    if (id === "sourdough-bread") {
      renderTimeline("sourdoughBreadTimeline", sourdoughBreadTimeline, { timelineMode: "process", showMonthMarker: false });
    }
  }
}

document.querySelectorAll(".chaos-list li").forEach(el => {
  const rotate = (Math.random() * 6) - 3;
  const yShift = (Math.random() * 6) - 3;
  const size = 0.95 + Math.random() * 0.25; // 0.95 → 1.10

  el.dataset.rotate = rotate;
  el.dataset.y = yShift;

  el.style.transform = `
    rotate(${rotate}deg)
    translateY(${yShift}px)
    scale(${size})
  `;

});


// -----------------------------
// Update Container
// -----------------------------
if (singleUpdateContainer) {
  const updateId = document.body.dataset.updateId;
  const update = updates.find(u => u.id === updateId);

  if (update && typeof renderFullUpdateCard === "function") {
    updateUpdateMetadata(update);

    singleUpdateContainer.innerHTML = renderFullUpdateCard(update, {
      showPageLink: false
    });
  }
}

// -----------------------------
// Plant Container
// -----------------------------
if (singlePlantContainer) {
  const plantId = document.body.dataset.plantId;
  const plant = plantResidents.find(p => p.id === plantId);

  if (plant) {
    singlePlantContainer.innerHTML = renderPlantProfile(plant, {
      showPageLink: false
    });
  }
}


// -----------------------------
// FUNCTION TO GO TO TAG (USED IN SINGLE POST)
// -----------------------------
function goToTag(tag) {
  window.location.href = `/archive/index.html?tag=${encodeURIComponent(tag)}`;
}


// -----------------------------
// GALLERIES
// -----------------------------
function shuffleArray(array) {
  return array
    .map(item => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function createLinkedCollageItem(item) {
  const link = document.createElement("a");
  link.href = item.href;
  link.dataset.title = item.title || "";

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.alt || item.title || "";

  link.appendChild(img);

  if (item.pawStamp) {
    const paw = document.createElement("img");
    paw.className = "paw-stamp";
    paw.src = item.pawStamp;
    paw.alt = "";
    link.appendChild(paw);
  }

  return link;
}

function createPlainCollageImage(item) {
  const button = document.createElement("button");
  button.className = `collage-item ${item.className || ""}`.trim();
  button.type = "button";
  button.dataset.title = item.note || "";

  const isVideo = /\.(mp4|webm|mov)$/i.test(item.image);

  let media;

  function setHoverScale(width, height) {
    const ratio = width / height;

    if (ratio > 1.5) {
      button.style.setProperty("--hover-scale", "2.2");
    } else if (ratio < 0.85) {
      button.style.setProperty("--hover-scale", "1.2");
    } else {
      button.style.setProperty("--hover-scale", "1.6");
    }
  }

  if (isVideo) {
    button.classList.add("is-video");
    media = document.createElement("video");

    media.src = item.image;
    media.autoplay = true;
    media.muted = true;
    media.loop = false;
    media.playsInline = true;
    media.preload = "metadata";
    media.loading = "lazy";

    media.setAttribute("muted", "");
    media.setAttribute("playsinline", "");

    media.addEventListener("loadedmetadata", () => {
      setHoverScale(media.videoWidth, media.videoHeight);
    });
  } else {
    media = document.createElement("img");

    media.src = item.image;
    media.alt = item.alt || item.note || "Echo photo";
    media.loading = "lazy";
    media.decoding = "async";

    media.addEventListener("load", () => {
      setHoverScale(media.naturalWidth, media.naturalHeight);
    });
  }

  button.appendChild(media);

  button.addEventListener("mouseenter", () => {
    if (isVideo) {
      media.loop = true;
      media.play();
    }
  });

  button.addEventListener("mouseleave", () => {
    if (isVideo) {
      media.loop = false;
    }
  });

  button.addEventListener("click", () => {
    if (item.plantId && typeof plantResidents !== "undefined") {
      const plantIndex = plantResidents.findIndex(
        plant => plant.id === item.plantId
      );

      if (plantIndex !== -1) {
        openSiteModal("", {
          contentClass: "card update-modal-content",
          items: plantResidents,
          currentIndex: plantIndex,
          renderItem: renderPlantProfile
        });

        return;
      }
    }

    button.classList.toggle("show-note");

    if (isVideo) {
      media.currentTime = 0;
      media.play();
    }
  });

  return button;
}

function renderEchoGallery() {
  const collage = document.getElementById("echo-gallery");
  if (!collage) return;

  if (typeof echoGalleryImages === "undefined") {
    console.warn("echoGalleryImages is not loaded. Check echo.js is loaded before script.js.");
    return;
  }

  const galleryItems = shuffleArray(echoGalleryImages);

  collage.innerHTML = "";
  galleryItems.forEach(item => {
    collage.appendChild(createPlainCollageImage({
      image: `/images/echo/${item.file}`,
      alt: item.alt || item.note || "Echo photo",
      note: item.note,
      className: item.className || ""
    }));
  });
}

function renderPlantGallery() {
  const collage = document.getElementById("plant-gallery");
  if (!collage) return;

  if (typeof plantResidents === "undefined") {
    console.warn("plantResidents is not loaded. Check plants.js is loaded before script.js.");
    return;
  }

  const galleryItems = shuffleArray(plantResidents);

  collage.innerHTML = "";
  galleryItems.forEach(item => {
    collage.appendChild(createPlainCollageImage({
      image: item.image,
      alt: item.alt || item.name || "Plant photo",
      note: `${item.emoji} ${item.name}`,
      plantId: item.id
    }));
  });
}

function renderRecipeCollage() {
  const collage = document.getElementById("recipe-collage");
  if (!collage) return;

  const recipePosts = posts
    .filter(post => post.category === "Recipe")
    .map(post => ({
      title: post.title,
      href: `/post/${post.id}`,
      image: post.image,
      alt: post.imageAlt || post.title
    }))
    .filter(item => item.image);

  const manualAdditions = [
    {
      title: "🐕 Dog birthday cake",
      href: "/post/echo-first-birthday#birthday-cake",
      image: "/images/cake-cutting.jpg",
      alt: "Dog birthday cake",
      pawStamp: "/images/handwriting/paw-print-handwritten.png"
    }
  ];

  const collageItems = shuffleArray([
    ...recipePosts,
    ...manualAdditions
  ]);

  collage.innerHTML = "";
  collageItems.forEach(item => {
    collage.appendChild(createLinkedCollageItem(item));
  });
}

// -----------------------------
// AUTO-GENERATE STUDY POSTS CHAOS LIST
// -----------------------------
const studyContainer = document.getElementById("study-posts");

if (studyContainer) {
  const studyPosts = posts.filter(
    post => post.category === "Study"
  );

  studyPosts.forEach(post => {
    const li = document.createElement("li");

    li.innerHTML = `
      <a href="/post/${post.id}">
        ${post.title.replace(/^[^\w]+/, "")}
      </a>
    `;

    studyContainer.appendChild(li);
  });
}

// -----------------------------
// BOOKSHELF
// -----------------------------
function renderBookshelf(shelfId, books, allowEcho = false) {
  const shelf = document.getElementById(shelfId);
  if (!shelf) return;

  const eligibleBooks = books
    .map((book, index) => ({ book, index }))
    .filter(({ book }) => !book.note && !book.featured);

  const echoIndex = allowEcho && eligibleBooks.length > 0
    ? eligibleBooks[Math.floor(Math.random() * eligibleBooks.length)].index
    : -1;

  shelf.innerHTML = books.map((book, index) => {
    const linkedUpdates = getBookLinkedUpdates(book);
    const hasPlantProfile =
      typeof plantResidents !== "undefined" &&
      plantResidents.some(plant =>
        normaliseProjectName(plant.id) === normaliseProjectName(book.project || book.title)
      );

    const hasLinkedUpdates =
      !book.url && (linkedUpdates.length > 0 || hasPlantProfile);

    const tag = book.url ? "a" : hasLinkedUpdates ? "button" : "div";

    const hasNote = Boolean(book.note);
    const hasGenre = Boolean(book.genre);

    const isExternalUrl = book.url && !(
      book.url.startsWith("/") ||
      book.url.startsWith("#") ||
      book.url.includes("softalchemy.uk")
    );

    const linkAttributes = book.url
      ? `
    href="${book.url}"
    ${isExternalUrl ? `target="_blank" rel="noopener noreferrer"` : ""}
  `
      : "";

    return `
      <${tag}
        class="book-card
        ${index === echoIndex ? "echo-interruption-card" : ""}
        ${hasNote ? "has-note" : ""}
        ${hasGenre ? "has-genre" : ""}
        ${book.featured ? "is-featured" : ""}
        ${hasLinkedUpdates ? "has-linked-updates" : ""}
        "
        ${linkAttributes}

        ${hasLinkedUpdates ? `
          type="button"
          data-book-project="${normaliseProjectName(book.project || book.title)}"
        ` : ""}

        data-original-title="${book.title}"
        data-original-author="${book.author || ""}"
        data-original-image="${book.image}"
        data-original-alt="${book.title} cover"

        data-echo-image="/images/echo/echo-book.jpg"
        data-echo-title="🐾 Echo Interruption!"
        data-echo-author="Every library needs a familiar"
      >
        <img src="${book.image}" alt="${book.title} cover">

        <div class="book-info">
          <h3>${book.title}</h3>

          <p class="book-author">
            ${book.author || ""}
          </p>

          ${book.status
        ? `<span class="book-status">${book.status}</span>`
        : ""}

          ${book.genre
        ? `<span class="book-genre-stamp">${book.genre}</span>`
        : ""}
        </div>

        ${book.note
        ? `<p class="book-note">${book.note}</p>`
        : ""}
      </${tag}>
    `;
  }).join("");

  addEchoInterruption(shelf);
  setupBookshelfUpdateModals(shelf);
}

function setupBookshelfUpdateModals(shelf) {
  if (!shelf) return;

  shelf.querySelectorAll(".book-card.has-linked-updates").forEach((card) => {
    card.addEventListener("click", () => {
      const project = card.dataset.bookProject;

      const linkedUpdates = typeof updates !== "undefined"
        ? updates
          .filter(update =>
            normaliseProjectName(update.project) === project
          )
          .sort((a, b) => new Date(b.date) - new Date(a.date))
        : [];

      if (linkedUpdates.length) {
        openSiteModal("", {
          contentClass: "card update-modal-content",
          items: linkedUpdates,
          currentIndex: 0,
          renderItem: renderFullUpdateCard
        });

        return;
      }

      const plantIndex = typeof plantResidents !== "undefined"
        ? plantResidents.findIndex(plant =>
          normaliseProjectName(plant.id) === project
        )
        : -1;

      if (plantIndex === -1) return;

      openSiteModal("", {
        contentClass: "card update-modal-content",
        items: plantResidents,
        currentIndex: plantIndex,
        renderItem: renderPlantProfile
      });
    });
  });
}

function renderBookshelvesForPage(configs = []) {
  const validShelves = configs.filter(config =>
    Array.isArray(config.books) && document.getElementById(config.id)
  );

  // Only add Echo if there are more than 2 shelves
  const echoShelfIndex = validShelves.length > 2
    ? Math.floor(Math.random() * validShelves.length)
    : -1;

  validShelves.forEach((config, index) => {
    renderBookshelf(config.id, config.books, index === echoShelfIndex);
  });
}

function normaliseProjectName(value = "") {
  return value
    .toLowerCase()
    .replace(/<br>/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getBookLinkedUpdates(book) {
  if (typeof updates === "undefined") return [];

  const bookProject = normaliseProjectName(book.project || book.title);

  return updates
    .filter(update =>
      normaliseProjectName(update.project) === bookProject
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function addEchoInterruption(shelf) {
  const echoCard = shelf.querySelector(".echo-interruption-card");
  if (!echoCard) return;

  const img = echoCard.querySelector("img");
  const title = echoCard.querySelector("h3");
  const author = echoCard.querySelector(".book-author");

  function showEcho() {
    img.src = echoCard.dataset.echoImage;
    img.alt = "Echo interrupting the bookshelf";
    title.innerHTML = echoCard.dataset.echoTitle;
    author.textContent = echoCard.dataset.echoAuthor;
    echoCard.classList.add("is-echo");
  }

  function hideEcho() {
    img.src = echoCard.dataset.originalImage;
    img.alt = echoCard.dataset.originalAlt;
    title.innerHTML = echoCard.dataset.originalTitle;
    author.textContent = echoCard.dataset.originalAuthor;
    echoCard.classList.remove("is-echo");
  }

  echoCard.addEventListener("mouseenter", showEcho);
  echoCard.addEventListener("mouseleave", hideEcho);

  echoCard.addEventListener("focus", showEcho);
  echoCard.addEventListener("blur", hideEcho);

  echoCard.addEventListener("touchstart", showEcho, { passive: true });
}


// -----------------------------
// FLYING QUOTES
// -----------------------------
function initFlyingQuotes() {
  const flyingQuotes = document.getElementById("flyingQuotes");
  const quoteReveal = document.getElementById("quoteReveal");
  const quoteCategoryFilter = document.getElementById("quoteCategoryFilter");

  if (!flyingQuotes || !quoteReveal || !quoteCategoryFilter || typeof quotes === "undefined") {
    return;
  }


  const revealText = document.getElementById("revealText");
  const revealAuthor = document.getElementById("revealAuthor");
  const revealCommentary = document.getElementById("revealCommentary");
  const closeQuote = document.querySelector(".close-quote");

  let activeCategory = "All";
  let animationStarted = false;
  const floatingObjects = [];

  function createFlyingQuotes() {
    flyingQuotes.innerHTML = "";
    floatingObjects.length = 0;

    const filteredQuotes = activeCategory === "All"
      ? quotes
      : quotes.filter(quote => quote.category === activeCategory);

    filteredQuotes.forEach((quote) => {
      const el = document.createElement("button");

      el.className = "flying-quote";
      el.type = "button";
      el.textContent = `“${quote.preview}...”`;

      const speed = 0.25 + Math.random() * 0.85;

      const obj = {
        el,
        quote,
        x: Math.random() * Math.max(1, flyingQuotes.clientWidth - 180),
        y: Math.random() * Math.max(1, flyingQuotes.clientHeight - 80),
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        rotation: Math.random() * 20 - 10,
        rotationSpeed: (Math.random() - 0.5) * 0.08,
        paused: false
      };

      el.addEventListener("mouseenter", () => obj.paused = true);
      el.addEventListener("mouseleave", () => obj.paused = false);
      el.addEventListener("focus", () => obj.paused = true);
      el.addEventListener("blur", () => obj.paused = false);
      el.addEventListener("click", () => showQuoteByObject(quote));

      flyingQuotes.appendChild(el);
      floatingObjects.push(obj);
    });

    if (!animationStarted) {
      animationStarted = true;
      animateQuotes();
    }
  }

  function showQuoteByObject(quote) {
    revealText.textContent = `“${quote.text}”`;
    revealAuthor.textContent = `— ${quote.author}`;

    if (quote.commentary) {
      revealCommentary.innerHTML = quote.commentary;
      revealCommentary.style.display = "block";
    } else {
      revealCommentary.innerHTML = "";
      revealCommentary.style.display = "none";
    }

    quoteReveal.classList.add("is-visible");
  }

  function animateQuotes() {
    const containerWidth = flyingQuotes.clientWidth;
    const containerHeight = flyingQuotes.clientHeight;

    floatingObjects.forEach(obj => {
      if (!obj.paused) {
        obj.x += obj.vx;
        obj.y += obj.vy;
        obj.rotation += obj.rotationSpeed;

        if (obj.rotation > 30 || obj.rotation < -30) {
          obj.rotationSpeed *= -1;
        }
      }

      const width = obj.el.offsetWidth;
      const height = obj.el.offsetHeight;

      if (obj.x <= 0 || obj.x + width >= containerWidth) obj.vx *= -1;
      if (obj.y <= 0 || obj.y + height >= containerHeight) obj.vy *= -1;

      obj.x = Math.max(0, Math.min(obj.x, containerWidth - width));
      obj.y = Math.max(0, Math.min(obj.y, containerHeight - height));

      obj.el.style.left = `${obj.x}px`;
      obj.el.style.top = `${obj.y}px`;
      obj.el.style.transform = `rotate(${obj.rotation}deg)`;
    });

    requestAnimationFrame(animateQuotes);
  }

  function createCategoryFilters() {
    const categories = [
      "All",
      ...new Set(quotes.map(quote => quote.category))
    ];

    quoteCategoryFilter.innerHTML = "";

    categories.forEach(category => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category === "All" ? "All Categories" : category;
      quoteCategoryFilter.appendChild(option);
    });

    quoteCategoryFilter.value = activeCategory;
  }

  closeQuote?.addEventListener("click", () => {
    quoteReveal.classList.remove("is-visible");
  });

  quoteCategoryFilter.addEventListener("change", () => {
    activeCategory = quoteCategoryFilter.value;
    quoteReveal.classList.remove("is-visible");
    createFlyingQuotes();
  });

  createCategoryFilters();
  createFlyingQuotes();
}

// -----------------------------
// POP OUT MODAL
// -----------------------------
function openSiteModal(contentHtml, options = {}) {
  const modal = document.createElement("div");
  modal.className = options.modalClass || "site-modal";

  const hasNavigation =
    Array.isArray(options.items) &&
    typeof options.currentIndex === "number" &&
    typeof options.renderItem === "function";

  let currentIndex = options.currentIndex || 0;

  function getModalInnerHtml() {
    const currentContent = hasNavigation
      ? options.renderItem(options.items[currentIndex])
      : contentHtml;

    return `
      <div class="site-modal-frame">
    ${hasNavigation && options.items.length > 1 ? `
      <button class="site-modal-nav site-modal-prev">
        <svg viewBox="0 0 24 24" width="24" height="24"><path d="M15 18L9 12L15 6" /></svg>
      </button>
    ` : ""}

    <div class="${options.contentClass || "site-modal-content"}">
      <button class="site-modal-close" type="button" aria-label="Close">×</button>

      <div class="site-modal-body">
        ${currentContent}
      </div>

      ${hasNavigation && options.items.length > 1 ? `
  <div class="site-modal-footer-nav">
    <button class="site-modal-footer-prev" type="button">
      ← Previous
    </button>

    <button class="site-modal-footer-next" type="button">
      Next →
    </button>
  </div>
` : ""}
    </div>

    ${hasNavigation && options.items.length > 1 ? `
      <button class="site-modal-nav site-modal-next" type="button" aria-label="Next">
  <svg viewBox="0 0 24 24">
    <path d="M9 18L15 12L9 6" />
  </svg>
</button>
    ` : ""}
  </div>
    `;
  }

  function renderModal() {
    modal.innerHTML = getModalInnerHtml();
  }

  function moveModal(direction) {
    if (!hasNavigation) return;

    currentIndex =
      (currentIndex + direction + options.items.length) % options.items.length;

    renderModal();
  }

  renderModal();

  document.body.appendChild(modal);
  document.body.classList.add("lightbox-open");

  function closeModal() {
    modal.remove();
    document.body.classList.remove("lightbox-open");
    document.removeEventListener("keydown", handleKeydown);
  }

  function handleKeydown(event) {
    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowLeft") moveModal(-1);
    if (event.key === "ArrowRight") moveModal(1);
  }

  modal.addEventListener("click", (event) => {
    const lightboxImage = event.target.closest(".update-modal-card img, .lightbox-image");

    if (lightboxImage) {
      event.stopPropagation();

      openSiteModal(
        `<img src="${lightboxImage.src}" alt="${lightboxImage.alt || ""}" class="timeline-lightbox-image">`,
        {
          contentClass: "timeline-lightbox-content"
        }
      );

      return;
    }

    if (event.target === modal || event.target.classList.contains("site-modal-close")) {
      closeModal();
      return;
    }

    if (event.target.closest(".site-modal-prev, .site-modal-footer-prev")) {
      moveModal(-1);
      return;
    }

    if (event.target.closest(".site-modal-next, .site-modal-footer-next")) {
      moveModal(1);
    }
  });

  document.addEventListener("keydown", handleKeydown);
}

document.addEventListener("click", (e) => {
  const img = e.target.closest(".lightbox-image");
  if (!img) return;

  openSiteModal(
    `<img src="${img.src}" alt="${img.alt || ""}" class="timeline-lightbox-image">`,
    {
      contentClass: "timeline-lightbox-content"
    }
  );
});

// -----------------------------
// PLANT PROFILES
// -----------------------------
function renderPlantProfile(plant, options = {}) {
  const relatedEntries = getPlantTimelineEntries(plant.id);
  const timelineId = `plant-timeline-${plant.id}`;
  const imageSize = plant.imageSize || "landscape";
  const usesSideBySideLayout = ["portrait", "square"].includes(imageSize);
  const { showPageLink = true } = options;

  setTimeout(() => {
    if (relatedEntries.length) {
      renderTimeline(timelineId, relatedEntries, {
        order: "asc",
        timelineMode: "compact",
        showMonthMarker: true
      });
    }
  }, 0);

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

  const storyHtml = relatedEntries.length ? `
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

function getPlantTimelineEntries(plantId) {
  if (typeof gardenTimeline === "undefined") return [];

  return gardenTimeline
    .filter(entry => entry.tags?.includes(plantId))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

function renderPlantTimelineEntry(entry) {
  return `
    <article class="plant-mini-timeline-entry timeline-${entry.type}">
      ${renderTimelineItem({
    ...entry,
    timelineMode: "date"
  })}
    </article>
  `;
}

// -----------------------------
// FOOTER
// -----------------------------
function loadFooter() {
  const footerHTML = `
    <footer>
      <div class="footer-meta">

        <button id="themeToggle" class="theme-toggle" aria-label="Toggle theme">
          <span class="icon sun">☀️</span>
          <span class="icon moon">🌙</span>
        </button>

        <div class="footer-center">
          <span class="footer-text">
            Soft Alchemy | Built with Tea & Puppy Distractions
          </span>

          <div class="paw-trail">
            <img class="paw-print" style="--i:1" src="/images/paw-print.png" alt="">
            <img class="paw-print" style="--i:2" src="/images/paw-print.png" alt="">
            <img class="paw-print" style="--i:3" src="/images/paw-print.png" alt="">
            <img class="paw-print" style="--i:4" src="/images/paw-print.png" alt="">
            <img class="paw-print" style="--i:5" src="/images/paw-print.png" alt="">
			<img class="paw-print" style="--i:6" src="/images/paw-print.png" alt="">
            <img class="paw-print" style="--i:7" src="/images/paw-print.png" alt="">
            <img class="paw-print" style="--i:8" src="/images/paw-print.png" alt="">
            <img class="paw-print" style="--i:9" src="/images/paw-print.png" alt="">
            <img class="paw-print" style="--i:10" src="/images/paw-print.png" alt="">
			<img class="paw-print" style="--i:11" src="/images/paw-print.png" alt="">
            <img class="paw-print" style="--i:12" src="/images/paw-print.png" alt="">
            <img class="paw-print" style="--i:13" src="/images/paw-print.png" alt="">
			<img class="paw-print" style="--i:14" src="/images/paw-print.png" alt="">
            <img class="paw-print" style="--i:15" src="/images/paw-print.png" alt="">
            <img class="paw-print" style="--i:16" src="/images/paw-print.png" alt="">
          </div>
        </div>

      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener("DOMContentLoaded", () => {
  loadNavigation();

  const logo = document.getElementById("alchemyLogo");
  if (logo) {
    setTimeout(() => {
      logo.src = `/images/handwriting/soft-alchemy-handwritten.png`;
    }, 5500);
  }

  loadFooter();
  applyTheme();
  initFlyingQuotes();
});


// -----------------------------
// UTILS
// -----------------------------
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}