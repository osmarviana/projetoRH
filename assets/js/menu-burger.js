const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
