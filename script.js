window.addEventListener("scroll", function () {
  var header = document.getElementById("nav__container");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled"); 
  }
});
// toggler
const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.querySelector(".mobile__nav");

hamburgerBtn.addEventListener("click", () => {
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
});
