document.getElementById("menu-icon").addEventListener("click", function () {
  document.getElementById("slide-menu").classList.toggle("show");
});

document.getElementById("close-menu").addEventListener("click", function () {
  document.getElementById("slide-menu").classList.remove("show");
});

document.getElementById("menu-icon1").addEventListener("click", function () {
  document.getElementById("slide-menu1").classList.toggle("show");
});

document.getElementById("close-menu1").addEventListener("click", function () {
  document.getElementById("slide-menu1").classList.remove("show");
});

const chart = document.querySelector("#chart");

// creating a new chart instance
new Chart(chart, {
  type: "line",
  data: {
    labels: ["Feb", "Mar", "April", "May", "Jun", "July"],

    datasets: [
      {
        label: "WPPOOL",
        data: [
          21.59, 3.01, 45.85, 74.7, 87.3, 27.47, 10.27, 97.37, 87.84, 23.96,
          51.15, 46.35, 82.43, 48.21, 70.86, 62.96, 94.76, 7.15, 90.69, 80.94,
        ],
        borderColor: "rgb(75,192,192)",
        tension: 0.1,
        borderWidth: 2,
      },
      {
        label: "Google",
        data: [
          12.95, 49.01, 85.93, 16.8, -6.33, 68.78, -1.85, 26.0, 79.24, 74.55,
          80.93, 38.06, 13.0, 85.95, 25.45, 36.72, 31.15, 18.28, 6.99, 99.28,
        ],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "Microsoft",
        data: [
          17.08, 92.31, 22.54, 74.05, 2.1, -8.01, 19.62, -0.91, 84.97, 43.59,
          60.79, 44.08, -0.52, -6.63, -2.59, 86.84, 5.85, 18.93, 97.53, 6.3,
        ],
        borderColor: "green",
        borderWidth: 2,
      },
      {
        label: "Twitter",
        data: [
          0, 91.01, 56.04, 50.53, 71.23, 59.65, 48.85, 46.48, 21.96, 3.47,
          80.89, 86.19, 41.8, 72.42, 90.22, 54.61, 94.44, 30.66, 49.05, 37.6,
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// code for carousel item

const carousel = document.getElementById("carousel");
const items = carousel.querySelectorAll(".carousel-item");
let currentIndex = 0;

document.getElementById("prev").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = items.length - 2; // Set to the second last item
  }
  updateCarousel();
});

document.getElementById("next").addEventListener("click", () => {
  if (currentIndex < items.length - 2) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 50;
  items.forEach((item) => {
    item.style.transform = `translateX(${offset}%)`;
  });
}
