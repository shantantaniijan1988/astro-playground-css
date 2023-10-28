const $burger: HTMLElement | null = document.querySelector(".burger");
const $drawerMenu: HTMLElement | null = document.querySelector(".drawer-menu");

$burger?.addEventListener("click", () => {
  $burger.classList.toggle("js-active");
  $drawerMenu?.classList.toggle("js-active");
});
