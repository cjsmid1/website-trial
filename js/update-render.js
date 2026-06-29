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

function renderTimelineUpdateCard(update) {
  return renderUpdateNote(update, {
    extraClass: "timeline-update-note",
    dateFormatter: formatTimelineDate
  });
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

      const update = visibleUpdates[currentIndex];

      trackLightboxOpen(update, "update");

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