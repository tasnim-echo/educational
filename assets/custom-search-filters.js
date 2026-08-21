document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.querySelector("#CustomFilterOpen");
  const closeButton = document.querySelector("#CustomFilterClose");
  const overlay = document.querySelector("#CustomFilterOverlay");
  const drawer = document.querySelector("#CustomFilterDrawer");

  if (!openButton || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    openButton.classList.add("is-active");
  };

  const closeDrawer = () => {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    openButton.classList.remove("is-active");
  };

  openButton.addEventListener("click", openDrawer);
  closeButton?.addEventListener("click", closeDrawer);
  overlay?.addEventListener("click", closeDrawer);
});
