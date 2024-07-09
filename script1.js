window.addEventListener("scroll", function () {
  const firstDiv = document.getElementById("first-div");
  const secondNavbar = document.getElementById("second-navbar");
  const secondDiv = document.getElementById("second-div");

  const firstDivBottom = firstDiv.getBoundingClientRect().bottom;
  const secondDivTop = secondDiv.getBoundingClientRect().top;

  if (firstDivBottom <= 0) {
    secondNavbar.classList.remove("hidden");
    secondNavbar.classList.add("fixed", "flex", "top-0", "left-0", "right-0");
  } else {
    secondNavbar.classList.add("hidden");
    secondNavbar.classList.remove("fixed", "top-0", "left-0", "right-0");

    // when the user goes to the first section or div opening the togle slider then it will close it automatically
    document.getElementById("slide-menu1").classList.remove("show");
  }
});
