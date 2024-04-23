window.addEventListener("scroll", function () {
  var header = document.getElementById("nav");
  if (window.scrollY > 0) {
    header.classList.add("scrolled"); // Add a CSS class to change the background color
  } else {
    header.classList.remove("scrolled"); // Remove the CSS class when scrolled to the top
  }
});
// toggler
const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.querySelector(".ul");

hamburgerBtn.addEventListener("click", () => {
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
});
