const Login = document.querySelector(".Login");
const arrow = document.querySelector(".arrow");

Login.addEventListener("mouseenter", () => {
  arrow.style.transform = "rotate(180deg)";
});
Login.addEventListener("mouseleave", () => {
  arrow.style.transform = "rotate(0deg)";
});

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider img");
const navLinks = document.querySelectorAll(".slider-nav a");

let index = 0;
let interval = setInterval(autoSlide, 3000);

function autoSlide() {
  index = (index + 1) % slides.length;
  slider.scrollTo({
    left: slides[index].offsetLeft,
    behavior: "smooth",
  });
  updateActiveNav(index);
}

slider.addEventListener("mouseenter", () => clearInterval(interval));
slider.addEventListener("mouseleave", () => {
  interval = setInterval(autoSlide, 3000);
});

navLinks.forEach((link, i) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    index = i;
    slider.scrollTo({
      left: slides[i].offsetLeft,
      behavior: "smooth",
    });
    updateActiveNav(index);
  });
});

let isScrolling;
slider.addEventListener("scroll", () => {
  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    const scrollLeft = slider.scrollLeft;
    slides.forEach((slide, i) => {
      if (Math.abs(slide.offsetLeft - scrollLeft) < slide.clientWidth / 2) {
        index = i;
        updateActiveNav(index);
      }
    });
  }, 100);
});

function updateActiveNav(index) {
  navLinks.forEach((link, i) => {
    link.classList.toggle("active-dot", i === index);
  });
}
  const adImages = [
    "https://rukminim2.flixcart.com/fk-p-flap/1060/1620/image/e56681e42c1ed95c.jpeg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/1060/1620/image/c1b2d38a68c48c63.jpeg?q=60"
  ];

  let currentAd = 0;
  const adImageElement = document.querySelector('.ad-image');

  setInterval(() => {
    currentAd = (currentAd + 1) % adImages.length;
    adImageElement.src = adImages[currentAd];
  }, 6000); // Switch every 3 seconds