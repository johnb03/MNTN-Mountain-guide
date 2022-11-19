const navToggle = document.querySelector(".ham");
const NavMenu = document.querySelector(".nav__contain");

navToggle.addEventListener("click", () => {
  NavMenu.classList.toggle("nav__contain-visible");
  if (NavMenu.classList.contains("nav__contain-visible")) {
    navToggle.setAttribute("aria-label", "Cerrar-menu");
  } else {
    navToggle.setAttribute("aria-label", "Abrir-menu");
  }
});
