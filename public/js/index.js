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
