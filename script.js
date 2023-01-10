//***********************************************  ROUTER  *********************************************//

const rootCase = (x) => {Controller.PlayCase(x);}
const rootPlay = () => {Controller.NewGame();} 
const rootMode = (x) => {Controller.ChangeMode(x);} 

//***********************************************  MODELS  *********************************************//

class Case 
{ 
  constructor(isPlayed,value)
  {
    this.isPlayed = isPlayed;
    this.value = value;
  }

  play()
  {
    this.isPlayed = true;
    this.value = currentPlayer.value;
  }
}

class Player 
{ 
  constructor(name,value,isWinner,color,scores,isComputer)
  {
    this.name = name;
    this.value = value;
    this.isWinner = isWinner;
    this.color = color;
    this.scores = scores;
    this.isComputer = isComputer;
  }
  Victory() { this.isWinner = true; }
  Init() { this.isWinner = false; }
}

//***********************************************  DATABASE  *********************************************//

// DOM
const topHTML = document.getElementById("topText");
const caseHTML = document.getElementsByClassName("case");
const bottomHTML = document.getElementById("bottomText");
const newGameHTML = document.getElementById("newGame");
const computerModeHTML = document.getElementById("computerMode");
const playersModeHTML = document.getElementById("playersMode");
const scoreHTML = document.getElementsByClassName("Scores");
const scoreP1HTML = document.getElementById("Player1Score");
const scoreP2HTML = document.getElementById("Player2Score");

// Musics
const clickSong = "click";
const looseSong = "loose";
const drawSong = "draw";
const winSong = "win";

// Arrow Text
const arrowText = " → ";

// Buttons Text
const buttonComputerText = "VS COMPUTER";
const isOnText = "➜ ";
const button2PlayersText = "2 PLAYERS";
const buttonNewGameText1 = "PLAY";
const buttonNewGameText2 = "NEW PARTY";
const buttonNewGameText3 = "PLAY AGAIN";

// EndGame Text
const winTopText = "CHEER !";
const winBottomText = " WIN !";
const drawTopText = "... MATCH NUL";
const drawBottomText = "NO WINNER ...";
const looseTopText = "... OH NO !";
const looseBottomText = "YOU LOOSE ...";

// CaseHTML COLORS
const caseHTMLwinColor = "white";
const caseHTMLwinShadow = "0px 0px 20px red";
const caseHTMLpartyColor = "antiquewhite";
const caseHTMLpartyShadow = "0px 0px 15px black";
const caseHTMLstandStart = "rgb(9, 95, 95)";

// PARTY Text COLORS
const partyTextShadow = "3px 3px 3px black";

// END's Text COLORS
const winTextColor = "white";
const looseTextColor = "antiquewhite";
const endTextShadow = "0px 0px 20px fuchsia";

// BackGround COLORS
const bckGrdPartyColor = "teal";
const bckGrdWinColor = "rgb(250, 220, 70)";
const bckGrdLooseColor = "#374046";

// Buttons COLORS
const buttonsSuggestColor = "black";
const buttonsSelectColor = "rgb(68, 42, 32)";
const buttonsPartyColor = "rgb(250, 250, 170)";
const buttonsModeOnColor = "rgb(211, 176, 131)";
const buttonsModeOffColor = "antiquewhite";

// Scores COLORS
const scoreTextPartyColor = "black";
const scoreTextLooseColor = "white";

// SETS
const partyColors = [bckGrdPartyColor,"",partyTextShadow,"","",buttonsPartyColor,buttonsPartyColor,buttonsPartyColor,scoreTextPartyColor];
const winColors = [bckGrdWinColor,winTextColor,endTextShadow,winTextColor,endTextShadow,buttonsSelectColor,buttonsSelectColor,buttonsSelectColor,scoreTextPartyColor];
const looseOrDrawColors = [bckGrdLooseColor,looseTextColor,endTextShadow,looseTextColor,endTextShadow,buttonsSelectColor,buttonsSelectColor,buttonsSelectColor,scoreTextLooseColor];
const modeVsComputerButtonSet = [isOnText + buttonComputerText,buttonsSelectColor,buttonsModeOnColor,button2PlayersText,buttonsPartyColor,buttonsModeOffColor];
const mode2PlayersButtonSet = [buttonComputerText,buttonsPartyColor,buttonsModeOffColor,isOnText + button2PlayersText,buttonsSelectColor,buttonsModeOnColor];
const playButtonSet = [buttonNewGameText1,buttonsSuggestColor];
const newPartyButtonSet = [buttonNewGameText2,buttonsPartyColor];
const playAgainButtonSet = [buttonNewGameText3,buttonsSuggestColor];

// GAME VARS
let gameModeVsComputer = true;
let gameIsNotFinish = true;
let gameIsNotStart = true;
let player1 = new Player("PLAYER 1","O",false,"salmon",[0,0],false); 
let player2 = new Player("PLAYER 2","X",false,"aquamarine",[0],false);
let computer = new Player("COMPUTER","X",false,"black",[0,0],true);
let currentPlayer = player2; // to bascul first player at NewGame()
let playerStartTurn = currentPlayer;
let gridCase = [null]; // => to start at gridCase[1]
let line = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
let lineWinner = null;

//***********************************************  CONTROLLERS  *********************************************//

class Controller
{
  // ANALYSES

  static AnalyseGame()
  {
    Controller.SearchIfWin(currentPlayer.value);
    if (gameIsNotFinish == true) { gameIsNotFinish = Controller.SearchEmptyCase(); }
    if (gameIsNotFinish == false) { Controller.GameEnding(); }
  }

  static SearchIfWin(val)
  {
    for (let l in line )
    {
      if (Controller.TestLine(l, val))
      {
        gameIsNotFinish = false;
        currentPlayer.Victory();
        lineWinner = l;
        break;
      }
    }
  }

  static TestLine(l, val)
  {
    if ( (gridCase[line[l][0]].value == gridCase[line[l][1]].value
      && gridCase[line[l][0]].value == gridCase[line[l][2]].value
      && gridCase[line[l][0]].value == val) ) { return true; }
  }

  static SearchEmptyCase()
  {
    let emptyCase = [];
    for (let i = 1 ; i < 10 ; i++) { emptyCase.push(gridCase[i].value); }
    return emptyCase.includes(null);
  }

  // ASSIGNMENTS

  static StartTurnAssignment()
  {
    if (playerStartTurn == computer || playerStartTurn == player2)
    {
      playerStartTurn = player1;
    }
    else
    {
      if (gameModeVsComputer) {playerStartTurn = computer;}
      else {playerStartTurn = player2;}
    }
    currentPlayer = playerStartTurn;
  }

  static ChangePlayer()
  {
    if (currentPlayer == computer || currentPlayer == player2) { currentPlayer = player1; }
    else
    { if (gameModeVsComputer) {currentPlayer = computer;}
      else {currentPlayer = player2;} }
    if (gameIsNotFinish) { View.PlayerTurn();}
  }

  // PLAYER'S PLAY

  static PlayCase(c)
  {
    if (gridCase[c].isPlayed == false && gameIsNotFinish && !gameIsNotStart)
    {
      gridCase[c].play();
      View.GridCasePlayed(c);
      Controller.PlayMusic(clickSong);
      Controller.AnalyseGame();
      if (gameIsNotFinish && gameModeVsComputer) { Controller.ComputerPlayCase(); }
      if (gameIsNotFinish && !gameModeVsComputer) { Controller.ChangePlayer(); }
    }
  }

  // COMPUTER'S PLAY

  static ComputerPlayCase()
  {
    currentPlayer = computer;
    let caseToPlay = Controller.FindCaseToPlay();
    View.GridCasePlayed(caseToPlay);
    gridCase[caseToPlay].play();
    Controller.AnalyseGame();
    Controller.ChangePlayer();
  }

  static FindCaseToPlay()
  {
      let a = Controller.SearchBestCaseToPlay(computer.value);
      let b = Controller.SearchBestCaseToPlay(player1.value);
      let c = Controller.RandomCase();
      if (a != undefined) { return a ; }
      else if (a == undefined && b != undefined) { return b ; }
      else { return c ; }
  }

  static RandomCase()
  {
    let c = Math.floor(Math.random() * 9) + 1 ;
    while (gridCase[c].isPlayed) { c = Math.floor(Math.random() * 9) + 1 ; }
    return c ;
  }

  static SearchBestCaseToPlay(val)
  {
    for (let l in line) 
    { 
      if (gridCase[line[l][1]].value == val && gridCase[line[l][2]].value == val && gridCase[line[l][0]].isPlayed == false) { return line[l][0]; }
      if (gridCase[line[l][0]].value == val && gridCase[line[l][2]].value == val && gridCase[line[l][1]].isPlayed == false) { return line[l][1]; }
      if (gridCase[line[l][0]].value == val && gridCase[line[l][1]].value == val && gridCase[line[l][2]].isPlayed == false) { return line[l][2]; }
    }
  }

  // END GAME

  static GameEnding()
  {
    if (currentPlayer.isWinner && !currentPlayer.isComputer)
    {
      if (gameModeVsComputer) {currentPlayer.scores[1] += 1 ;}
      else {currentPlayer.scores[0] += 1 ;}
      View.TopBottomText(winTopText,currentPlayer.name + winBottomText);
      View.WinnersCases();
      View.Colors(winColors);
      Controller.PlayMusic(winSong);
    }
    else 
    {
      if (currentPlayer.isWinner && currentPlayer.isComputer)
      {
        currentPlayer.scores[1] += 1 ;
        View.WinnersCases();
        View.TopBottomText(looseTopText,looseBottomText);
        Controller.PlayMusic(looseSong);
      }
      else
      {
        View.TopBottomText(drawTopText,drawBottomText);
        Controller.PlayMusic(drawSong);
      }
      View.Colors(looseOrDrawColors);
    }
    View.Buttons();
    View.Scores();
  }

  // INIT

  static InitAll()
  {
    gameIsNotStart = false;
    gameIsNotFinish = true;
    View.TopBottomText(null,null);
    gridCase = [null];
    player1.Init();
    player2.Init();
    computer.Init();
    Controller.CasesInit();
  }

  static CasesInit()
  {
    for (let i = 0 ; i < 9 ; i++) 
    { gridCase.push(new Case(false,null)); }
  }

  static NewGame()
  {
    Controller.InitAll();
    Controller.StartTurnAssignment();
    View.Init();
    if (currentPlayer.isComputer) {Controller.ComputerPlayCase();}
  }

  // MODES

  static ChangeMode(m)
  {
    if (m == 1) {gameModeVsComputer = true;}
    if (m == 2) {gameModeVsComputer = false;}
    gameIsNotStart = true;
    View.TopBottomText(null,null);
    View.Init();
  }

  // MUSIC

  static PlayMusic(zic)
  {
    let sample = new Audio('assets/audio/'+zic+'.mp3');
    sample.play();
  }

}

//***********************************************  VIEWS  *********************************************//

class View
{
  // BUTTONS 

  static Buttons()
  {
    if (gameIsNotStart) 
      { View.PlayButton(playButtonSet) } 
    else
    {
      if (gameIsNotFinish) 
      { View.PlayButton(newPartyButtonSet) }
      else 
      { View.PlayButton(playAgainButtonSet) }
    }

    if (gameModeVsComputer)
    { View.ButtonsMode(modeVsComputerButtonSet); }
    else
    { View.ButtonsMode(mode2PlayersButtonSet); }
  }

  static PlayButton(buttonPlay)
  {
    newGameHTML.innerHTML = buttonPlay[0];
    newGameHTML.style.color = buttonPlay[1];
  }

  static ButtonsMode(buttonsMode)
  {
    computerModeHTML.innerHTML = buttonsMode[0];
    computerModeHTML.style.color = buttonsMode[1];
    computerModeHTML.style.backgroundColor = buttonsMode[2];
    playersModeHTML.innerHTML = buttonsMode[3];
    playersModeHTML.style.color = buttonsMode[4];
    playersModeHTML.style.backgroundColor = buttonsMode[5];
  }

  // GAME COLORS

  static Colors(colors)
  {
    document.body.style.backgroundColor = colors[0];
    topHTML.style.color = colors[1];
    topHTML.style.textShadow = colors[2];
    bottomHTML.style.color = colors[3];
    bottomHTML.style.textShadow = colors[4];
    newGameHTML.style.color = colors[5];
    playersModeHTML.style.color = colors[6];
    computerModeHTML.style.color = colors[7];
    scoreHTML[0].style.color = colors[8];
  }

  // GRID CASES

  static GridCasePlayed(c)
  {
    caseHTML[c-1].innerHTML = currentPlayer.value ;
  }


  static WinnersCases()
  {
    for (let i = 0 ; i < 3 ; i++) 
    { 
      caseHTML[(line[lineWinner][i])-1].style.color = caseHTMLwinColor; 
      caseHTML[(line[lineWinner][i])-1].style.textShadow = caseHTMLwinShadow;
    }
  }

  static GridReset()
  {
    for (let i = 0 ; i < 9 ; i++)
    {
      caseHTML[i].innerHTML = null;
      caseHTML[i].style.color = caseHTMLpartyColor; 
      caseHTML[i].style.textShadow = caseHTMLpartyShadow;
      if (gameIsNotStart) 
      { caseHTML[i].style.backgroundColor = caseHTMLstandStart; }
      else 
      { caseHTML[i].style.backgroundColor = caseHTMLpartyColor; }
    }
  }

  // INIT

  static Init()
  {
    View.GridReset();
    View.Colors(partyColors);
    View.Buttons();
    View.Scores();
    if (!gameIsNotStart) { View.PlayerTurn(); }
  }

  // SCORES

  static Scores()
  {
    if (gameModeVsComputer)
    { View.ScoresText(player1,computer,1); }
    else
    { View.ScoresText(player1,player2,0); }
  }

  static ScoresText(p1,p2,mode)
  {
    scoreP1HTML.innerHTML = p1.name + arrowText + p1.scores[mode];
    scoreP2HTML.innerHTML = p2.name + arrowText + p2.scores[mode];
  }

  // TEXTS

  static PlayerTurn()
  {
    topHTML.style.color = currentPlayer.color;
    topHTML.innerHTML = currentPlayer.name + arrowText + currentPlayer.value;
  }

  static TopBottomText(topText,bottomText)
  {
    topHTML.innerHTML = topText;
    bottomHTML.innerHTML = bottomText;
  }

}

//***************************  STARTING LAUNCH  ***************************//

View.Init();