
let imgSlide = document.getElementById("slide");
let imgBan = document.getElementById("ban-img");
let imgFolder = document.getElementById("folder-logo");
const root = document.documentElement;
let darkMode = false;

const clickMode = () => {
  darkMode = !darkMode;
  const ban = darkMode ? "0" : "1";
  imgBan.src = `./assets/img/welcome-ban-${ban}.jpg`;
  imgSlide.src = `./assets/img/mode-${ban}.png`;
  imgFolder.src = `./assets/img/mini-folder-icon-${ban}.png`;
  root.classList.toggle("dark-mode");
}

imgSlide.addEventListener("click",clickMode);