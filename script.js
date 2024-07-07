document.getElementById("menu-icon").addEventListener("click", function () {
  document.getElementById("slide-menu").classList.toggle("show");
});

document.getElementById("close-menu").addEventListener("click", function () {
  document.getElementById("slide-menu").classList.remove("show");
});
