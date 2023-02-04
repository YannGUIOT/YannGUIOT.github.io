
let imgSlide = document.getElementById("slide");
let imgBan = document.getElementById("ban-img");
let imgFolder = document.getElementById("folder-logo");
let imgTel = document.getElementById("tel-icon");
const imgMail = document.getElementById("mail-icon");
const root = document.documentElement;
let darkMode = false;

const clickMode = () => {
  darkMode = !darkMode;
  const ban = darkMode ? "0" : "1";
  imgBan.src = `./assets/img/welcome-ban-${ban}.jpg`;
  imgSlide.src = `./assets/img/mode-${ban}.png`;
  imgFolder.src = `./assets/img/mini-folder-icon-${ban}.png`;
  imgTel.src = `./assets/img/smartphone-icon-${ban}.png`;
  root.classList.toggle("dark-mode");
}

imgSlide.addEventListener("click",clickMode);

imgMail.addEventListener('mouseover', () => {
  document.getElementsByClassName("mail hidden-text")[0].style.visibility = 'visible';
});
imgTel.addEventListener('mouseover', () => {
  document.getElementsByClassName("tel hidden-text")[0].style.visibility = 'visible';
});
imgMail.addEventListener('mouseout', () => {
  document.getElementsByClassName("mail hidden-text")[0].style.visibility = 'hidden';
});
imgTel.addEventListener('mouseout', () => {
  document.getElementsByClassName("tel hidden-text")[0].style.visibility = 'hidden';
});