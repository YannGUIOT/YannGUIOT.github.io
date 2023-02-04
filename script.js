
let imgSlide = document.getElementById("slide");
let imgBan = document.getElementById("ban-img");
const root = document.documentElement;
let darkMode = false;

const clickMode = () => {
  darkMode = !darkMode;
  const ban = darkMode ? "0" : "1";
  imgBan.src = `../src/assets/img/welcome-ban-${ban}.jpg`;
  imgSlide.src = `../src/assets/img/mode-${ban}.png`;
  root.classList.toggle("dark-mode");
}

imgSlide.addEventListener("click",clickMode);