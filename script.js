window.addEventListener("scroll", function () {
  var header = document.getElementById("nav");
  if (window.scrollY > 0) {
    header.classList.add("scrolled"); // Add a CSS class to change the background color
  } else {
    header.classList.remove("scrolled"); // Remove the CSS class when scrolled to the top
  }
});
