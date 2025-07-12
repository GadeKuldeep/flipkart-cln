const Login = document.querySelector(".Login");
const arrow = document.querySelector(".arrow");

Login.addEventListener("mouseenter", () => {
  arrow.style.transform = "rotate(180deg)";
});

Login.addEventListener("mouseleave", () => {
  arrow.style.transform = "rotate(0deg)";
});
