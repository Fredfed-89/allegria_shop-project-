const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__nav-inner");
// const mobileMenuClose = document.querySelectorAll(".header__item");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  navMenu.classList.toggle("is-active");
});

// navMenu.addEventListener("click", function () {
//   mobileMenuClose.classList.toggle("is-active");
// });
