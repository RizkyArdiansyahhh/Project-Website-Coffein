const navbar = document.querySelector(".navbar-nav");
const menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
