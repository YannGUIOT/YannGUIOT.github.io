let darkMode = false;

const racing = ["./assets/img/previews/racing.jpg","Teamwork - Organization of tasks, Drafting of specifications, signs of graphic models, class diagram and data models, Realization of an authentication system with tokens, API Management - Payments (Stripe), API Management - Sending Automated Emails, Admin panel ..."];
const morpion = ["./assets/img/previews/morpion.jpg","Tic-Tac-Toe Game - following the MVC Model"];
const tph = ["./assets/img/previews/tph.jpg","Web 3 & NFT's Final Project"];
const minesweeper = ["./assets/img/previews/minesweeper.jpg","Minesweeper Game"];
const kaagame = ["./assets/img/previews/kaagame.jpg","Personal Kaamelott Game"];
const boutique = ["./assets/img/previews/boutique.jpg","Personal Online Store Example, with React JS & Supabase."];
const velib = ["./assets/img/previews/velib.jpg","API Example of Velib disponibility on Île-de-France, with React JS"];
const pokemon = ["./assets/img/previews/pokemon.jpg","Pokemon App Exercice with Angular"];
const visitcard = ["./assets/img/previews/visitcard.jpg","Exercice in POO with React JS, to create your visit card, responsive with Grid & Flex CSS display"];
const github_pokemon = ["./assets/img/previews/github-pokemon.jpg","POO with Angular & TypeScript"];
const github_racing = ["./assets/img/previews/github-racing.jpg","Project GitHub Group Page"];
const github_tph = ["./assets/img/previews/github-tph.jpg","Web 3 Final Project GitHub Group Page"];
const github_morpion = ["./assets/img/previews/github-morpion.jpg","code snippet"];
const github_visitcard = ["./assets/img/previews/github-visitcard.jpg","POO with React JS"];

const root = document.documentElement;
const imgSlide = document.getElementById("slide");
const imgBan = document.getElementById("ban-img");
const imgFolder1 = document.getElementById("folder-logo1");
const imgFolder2 = document.getElementById("folder-logo2");
const imgFolder3 = document.getElementById("folder-logo3");
const imgFolder4 = document.getElementById("folder-logo4");
const imgFolder5 = document.getElementById("folder-logo5");
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
const linkVisitcard = document.getElementById("link-visitcard");
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
  imgFolder5.src = `./assets/img/icons/folder-${ban}.png`;
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
linksEventListeners(linkVisitcard, visitcard);
linksEventListeners(imgFolder1, github_racing);
linksEventListeners(imgFolder2, github_tph);
linksEventListeners(imgFolder3, github_morpion);
linksEventListeners(imgFolder4, github_pokemon);
linksEventListeners(imgFolder5, github_visitcard);


//***** CV *****// 

const popup = document.createElement('div');
popup.classList.add('popup');

popup.innerHTML = `
  <div class="popup-content">

    <div class="close-button">
      <img 
        src="./assets/img/icons/close.svg"
        class="close-icon"
        onclick="closePopUpCV()"
      >
    </div>

    <h3>Location</h3>
    <ul>
      <li><a href="https://www.google.fr/maps/place/Perpignan/@42.666332,2.7840618,11z/data=!4m6!3m5!1s0x12b06e4e80fd88fd:0x1c83306520f2dd4f!8m2!3d42.6886591!4d2.8948332!16zL20vMDlua3E?entry=ttu" target="_blank">France | Occitanie | Perpignan (66)</a></li> 
    </ul>
    <div class="separate"></div>
    <div class="formations">
      <h3>Formations</h3>
      <div class="line">
        <li></li>[ Sept 2022 - Mai 2023 ] <a href="https://www.thehackingproject.org/" target="_blank"><strong>T</strong>he <strong>H</strong>acking <strong>P</strong>roject</a>
      </div>
      <div class="details">
        <span><i><strong>Formation Dev++</strong></i></span><br />
        <span><i>Peer Learning Bootcamp</i></span><br />
        <span><i>Titre RNCP 34779 Développeur Web (Niv Bac+2)</i></span><br />
      </div>
      <div class="line">
        <li></li>BTS informatique industriel [ Sept 2000 - Juin 2002 ]
      </div>
      <div class="details">
        <span><i>Programming C & C++</i></span><br />
      </div>
    </div>
    <div class="separate"></div>
    <h3>Skills</h3>
    <ul>
      <li>React Js, Node.js, Angular</li>
      <li>Svelte, SvelteKit, Ruby On Rails</li>
      <li>HTML, CSS, Sass, Bootstrap</li>
      <li>Javascript ES6, TypeScript</li>
      <li>Python, Ruby, PHP</li>
      <li>PostgreSQL, MySQL, Supabase</li>
      <li>Git, GitHub, WSL, VS Code</li>
    </ul>
  </div>
`;

document.body.appendChild(popup);

const openPopUpCV = () => {
  popup.classList.add('show');
};

const closePopUpCV = () => {
  popup.classList.remove('show'); 
};

popup.querySelector('.popup-content').addEventListener('click', e => {
  e.stopPropagation();
});