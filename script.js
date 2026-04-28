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

// -----------------------------
// DARK MODE
// -----------------------------
const toggleBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

toggleBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// -----------------------------
// POPULATE CATEGORY FILTER
// -----------------------------
if (categoryFilter) {
  const categories = [...new Set(posts.map(p => p.category))];
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

// -----------------------------
// FORMAT TAGS
// -----------------------------
function formatTag(tag) {
  return tag
    .replace(/-/g, " ")              // replace hyphens with spaces
    .replace(/\b\w/g, c => c.toUpperCase()); // capitalise each word
}

// -----------------------------
// RENDER BLOG POSTS
// -----------------------------
function renderPosts(filteredPosts) {
  if (!postsContainer) return;

  postsContainer.innerHTML = ""; // clear old posts

  filteredPosts.forEach((post, i) => {
    const card = document.createElement("div");
    card.className = "card fade-in";
    card.style.animationDelay = `${i * 50}ms`; // staggered animation

    card.innerHTML = `
  <div class="title-row">
    <h2><a href="post.html?id=${post.id}">${post.title}</a></h2>
    <div class="category-title ${post.category.toLowerCase()}">${post.category}</div>
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

    postsContainer.appendChild(card);
  });

  // Add click event to tags
  document.querySelectorAll(".tag").forEach(el => {
    el.addEventListener("click", () => {
      const tag = el.dataset.tag;
      setTagFilter(tag);
    });
  });
}

// -----------------------------
// FILTER POSTS
// -----------------------------
function filterPosts(updateURL = true) {
  let filtered = posts;

  const search = searchInput?.value.toLowerCase() || "";
  const category = categoryFilter?.value;

  if (search) {
    filtered = filtered.filter(
      p => p.title.toLowerCase().includes(search) ||
           p.tags.some(t => t.includes(search))
    );
  }

  if (category) {
    filtered = filtered.filter(p => p.category === category);
  }

  if (activeTag) {
    filtered = filtered.filter(p => p.tags.includes(activeTag));
  }

  renderPosts(filtered);

  // Update URL without reloading
  if (updateURL) {
    const params = new URLSearchParams(window.location.search);
    if (activeTag) params.set("tag", activeTag);
    else params.delete("tag");
    window.history.replaceState({}, "", `${location.pathname}?${params}`);
  }
}

// -----------------------------
// TAG CLICK HANDLER
// -----------------------------
function setTagFilter(tag) {
  activeTag = activeTag === tag ? null : tag; // toggle
  filterPosts();
}

// -----------------------------
// EVENT LISTENERS
// -----------------------------
searchInput?.addEventListener("input", () => filterPosts());
categoryFilter?.addEventListener("change", () => filterPosts());

// -----------------------------
// INITIAL BLOG RENDER
// -----------------------------
if (postsContainer) {
  // Apply tag from URL on load
  const urlParams = new URLSearchParams(window.location.search);
  const tagFromUrl = urlParams.get("tag");
  if (tagFromUrl) activeTag = tagFromUrl;

  filterPosts(false);
}

// -----------------------------
// SINGLE POST PAGE
// -----------------------------
if (postContainer) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const post = posts.find(p => p.id === id);

  if (post) {
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
`;

    // Force reflow + fade-in animation
    requestAnimationFrame(() => {
      void postContainer.offsetWidth; // ensures reflow
      postContainer.classList.add("fade-in");
    });

    // Add tag click event to go to filtered blog
    postContainer.querySelectorAll(".tag").forEach(el => {
      el.addEventListener("click", () => {
        const tag = el.dataset.tag;
        window.location.href = `blog.html?tag=${encodeURIComponent(tag)}`;
      });
    });
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
// FUNCTION TO GO TO TAG (USED IN SINGLE POST)
// -----------------------------
function goToTag(tag) {
  window.location.href = `blog.html?tag=${encodeURIComponent(tag)}`;
}

function loadFooter() {
  const footerHTML = `
    <footer>
      <p>© Claire Smid | Built with Tea and Puppy Distractions 🐾</p>
    </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

loadFooter();