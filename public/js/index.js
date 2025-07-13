const Login = document.querySelector(".Login");
const arrow = document.querySelector(".arrow");

Login.addEventListener("mouseenter", () => {
  arrow.style.transform = "rotate(180deg)";
});

Login.addEventListener("mouseleave", () => {
  arrow.style.transform = "rotate(0deg)";
});

//for slider movement 
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider img");
let index = 0;
let interval = setInterval(autoSlide, 3000); // Slide every 3s

function autoSlide() {
  index++;
  if (index >= slides.length) index = 0;
  slider.scrollTo({
    left: slides[index].offsetLeft,
    behavior: "smooth",
  });
}

// Pause autoplay on hover
slider.addEventListener("mouseenter", () => clearInterval(interval));
slider.addEventListener("mouseleave", () => {
  interval = setInterval(autoSlide, 3000);
});

// Reset autoplay if user scrolls manually
let isScrolling;
slider.addEventListener("scroll", () => {
  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    const scrollLeft = slider.scrollLeft;
    slides.forEach((slide, i) => {
      if (Math.abs(slide.offsetLeft - scrollLeft) < slide.clientWidth / 2) {
        index = i;
      }
    });
  }, 100);
});