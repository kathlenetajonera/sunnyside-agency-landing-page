const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");
let windowWidth = window.innerWidth;

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--active");
});

window.addEventListener("resize", () => {
  if (windowWidth !== window.innerWidth) {
    windowWidth = window.innerWidth;

    if (windowWidth >= 768) {
      nav.classList.remove("nav--active");
    }
  }
});
