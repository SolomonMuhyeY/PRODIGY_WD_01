window.addEventListener("scroll", function () {
  var header = document.getElementById("nav__container");
});
// toggler
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.querySelector(".mobile__nav");
const navLinks = document.querySelector(".mobile__nav");
hamburgerBtn.addEventListener("click", () => {
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
});
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && e.target !== hamburgerBtn) {
    mobileMenu.style.display = "none";
  }
});
