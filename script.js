let darkMode = false;

const racing = ["./assets/img/previews/racing.jpg","Teamwork - Organization of tasks, Drafting of specifications, signs of graphic models, class diagram and data models, Realization of an authentication system with tokens, API Management - Payments (Stripe), API Management - Sending Automated Emails, Admin panel ..."];
const morpion = ["./assets/img/previews/morpion.jpg","Tic-Tac-Toe Game - following the MVC Model"];
const code = ["./assets/img/previews/code.jpg","code snippet"];
const minesweeper = ["./assets/img/previews/minesweeper.jpg","Minesweeper Game"];
const kaagame = ["./assets/img/previews/kaagame.jpg","Personal Kaamelott Game"];
const boutique = ["./assets/img/previews/boutique.jpg","Personal Online Store Example, with React JS & Supabase."];
const velib = ["./assets/img/previews/velib.jpg","API Example of Velib disponibility on Île-de-France, with React JS"];
const pokemon = ["./assets/img/previews/pokemon.jpg","Pokemon App Exercice with Angular"];
const github_pokemon = ["./assets/img/previews/github-pokemon.jpg","POO with Angular & TypeScript"];
const github = ["./assets/img/previews/github.jpg","Project GitHub Group Page"];
const githubTph = ["./assets/img/previews/github-tph.jpg","Web 3 Final Project GitHub Group Page"];
const tph = ["./assets/img/previews/tph.jpg","Web 3 & NFT's Final Project"];

const root = document.documentElement;
const imgSlide = document.getElementById("slide");
const imgBan = document.getElementById("ban-img");
const imgFolder1 = document.getElementById("folder-logo1");
const imgFolder2 = document.getElementById("folder-logo2");
const imgFolder3 = document.getElementById("folder-logo3");
const imgFolder4 = document.getElementById("folder-logo4");
const imgTel = document.getElementById("tel-icon");
const imgMail = document.getElementById("mail-icon");
const linkRacing = document.getElementById("link-racing");
const linkTph = document.getElementById("link-tph");
const linkMorpion = document.getElementById("link-morpion");
const linkMinesweeper = document.getElementById("link-minesweeper");
const linkKaagame = document.getElementById("link-kaagame");
const linkBoutique = document.getElementById("link-boutique");
const linkVelib = document.getElementById("link-velib");
const linkPokemon = document.getElementById("link-pokemon");
const previewImg = document.getElementById("preview-img");
const previewText = document.getElementById("preview-text");
const preview = document.getElementById("preview");

// Dark/Light Mode 
const clickMode = () => {
  darkMode = !darkMode;
  const ban = darkMode ? "0" : "1";
  imgBan.src = `./assets/img/welcome-${ban}.jpg`;
  imgSlide.src = `./assets/img/icons/mode-${ban}.png`;
  imgFolder1.src = `./assets/img/icons/folder-${ban}.png`;
  imgFolder2.src = `./assets/img/icons/folder-${ban}.png`;
  imgFolder3.src = `./assets/img/icons/folder-${ban}.png`;
  imgFolder4.src = `./assets/img/icons/folder-${ban}.png`;
  imgTel.src = `./assets/img/icons/smartphone-${ban}.png`;
  root.classList.toggle("dark-mode");
}
imgSlide.addEventListener("click",clickMode);

const renderVisible = (e) => { e.style.visibility = 'visible';}
const renderHidden = (e) => { e.style.visibility = 'hidden';}

const previewDisplay = (x) => {
  previewImg.src = x[0];
  previewText.innerHTML = x[1];
  renderVisible(preview);
}

const linksEventListeners = (element, img) => {
  element.addEventListener('mouseover', function() { previewDisplay(img); });
  element.addEventListener('mouseout', function() { renderHidden(preview); });
}

linksEventListeners(linkRacing, racing);
linksEventListeners(linkTph, tph);
linksEventListeners(linkMorpion, morpion);
linksEventListeners(linkMinesweeper, minesweeper);
linksEventListeners(linkKaagame, kaagame);
linksEventListeners(linkBoutique, boutique);
linksEventListeners(linkVelib, velib);
linksEventListeners(linkPokemon, pokemon);
linksEventListeners(imgFolder1, github);
linksEventListeners(imgFolder2, githubTph);
linksEventListeners(imgFolder3, code);
linksEventListeners(imgFolder4, github_pokemon);