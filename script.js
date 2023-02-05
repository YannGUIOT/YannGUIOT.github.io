let darkMode = false;

const racing = ["./assets/img/previews/racing.jpg","Teamwork - Organization of tasks, Drafting of specifications, signs of graphic models, class diagram and data models, Realization of an authentication system with tokens, API Management - Payments (Stripe), API Management - Sending Automated Emails, Admin panel ..."];
const morpion = ["./assets/img/previews/morpion.jpg","Tic-Tac-Toe Game - following the MVC Model"];
const code = ["./assets/img/previews/code.jpg","code snippet"];
const minesweeper = ["./assets/img/previews/minesweeper.jpg","Minesweeper Game"];

const root = document.documentElement;
const imgSlide = document.getElementById("slide");
const imgBan = document.getElementById("ban-img");
const imgFolder = document.getElementById("folder-logo");
const imgTel = document.getElementById("tel-icon");
const imgMail = document.getElementById("mail-icon");
const mailText = document.getElementsByClassName("mail hidden-text")[0];
const telText = document.getElementsByClassName("tel hidden-text")[0];
const linkRacing = document.getElementById("link-racing");
const linkMorpion = document.getElementById("link-morpion");
const linkMinesweeper = document.getElementById("link-minesweeper");
const previewImg = document.getElementById("preview-img");
const previewText = document.getElementById("preview-text");
const preview = document.getElementById("preview");

// Dark/Light Mode 
const clickMode = () => {
  darkMode = !darkMode;
  const ban = darkMode ? "0" : "1";
  imgBan.src = `./assets/img/welcome-${ban}.jpg`;
  imgSlide.src = `./assets/img/icons/mode-${ban}.png`;
  imgFolder.src = `./assets/img/icons/folder-${ban}.png`;
  imgTel.src = `./assets/img/icons/smartphone-${ban}.png`;
  root.classList.toggle("dark-mode");
}
imgSlide.addEventListener("click",clickMode);


const renderVisible = (e) => { e.style.visibility = 'visible';}
const renderHidden = (e) => { e.style.visibility = 'hidden';}

// Mail Adress Display 
imgMail.addEventListener('mouseover', function() {renderVisible(mailText);});
imgMail.addEventListener('mouseout', function() {renderHidden(mailText);});

// Tel Number Display 
imgTel.addEventListener('mouseover', function() {renderVisible(telText);});
imgTel.addEventListener('mouseout', function() {renderHidden(telText);});


const previewDisplay = (x) => {
  previewImg.src = x[0];
  previewText.innerHTML = x[1];
  renderVisible(preview);
}

linkRacing.addEventListener('mouseover', function() {previewDisplay(racing);});
linkRacing.addEventListener('mouseout', function() {renderHidden(preview);});

linkMorpion.addEventListener('mouseover', function() {previewDisplay(morpion);});
linkMorpion.addEventListener('mouseout', function() {renderHidden(preview);});

linkMinesweeper.addEventListener('mouseover', function() {previewDisplay(minesweeper);});
linkMinesweeper.addEventListener('mouseout', function() {renderHidden(preview);});

imgFolder.addEventListener('mouseover', function() {previewDisplay(code);});
imgFolder.addEventListener('mouseout', function() {renderHidden(preview);});


