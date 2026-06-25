function getUpdatesByRoom(room) {
  return updates
    .filter(update => update.room === room)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getLatestUpdatePerProject(room) {
  const roomUpdates = getUpdatesByRoom(room);
  const latest = {};

  roomUpdates.forEach(update => {
    if (!latest[update.project]) {
      latest[update.project] = update;
    }
  });

  return Object.values(latest);
}

function getUpdatesForPost(postId) {
  if (typeof updates === "undefined") return [];

  return updates
    .filter((update) => update.originalPost === postId)
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

function renderTimelineUpdateCard(update) {
  return renderUpdateNote(update, {
    extraClass: "timeline-update-note",
    dateFormatter: formatTimelineDate
  });
}

function renderUpdateCard(update) {
  return `
    <li>
      ${renderUpdateNote(update)}
    </li>
  `;
}

function renderPostUpdateSection(postId) {
  const relatedUpdates = getUpdatesForPost(postId);

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
` : renderRoomLink(update)
}

    </article>
  `;
}

function setupUpdateCardModals(container) {
  const buttons = [...container.querySelectorAll(".update-note")];

  const visibleUpdates = buttons
    .map((button) => updates.find((item) => item.id === button.dataset.updateId))
    .filter(Boolean);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentIndex = visibleUpdates.findIndex(
        (update) => update.id === button.dataset.updateId
      );

      openSiteModal("", {
        contentClass: "card update-modal-content",
        items: visibleUpdates,
        currentIndex,
        renderItem: renderFullUpdateCard
      });
    });
  });
}

function renderRoomUpdateBoard(containerId, room) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const latestUpdates = getLatestUpdatePerProject(room);

  container.innerHTML = latestUpdates
    .map(renderUpdateCard)
    .join("");

  setupUpdateCardModals(container);
}