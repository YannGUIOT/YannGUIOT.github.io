/********************************************************************************************************/
//**********************************************  DATABASE  ********************************************//
/********************************************************************************************************/

const dom = {
  "case"         : document.getElementsByClassName("case"),
  "score"        : document.getElementsByClassName("Scores"),
  "top"          : document.getElementById("topText"),
  "bottom"       : document.getElementById("bottomText"),
  "newGame"      : document.getElementById("newGame"),
  "computerMode" : document.getElementById("computerMode"),
  "playersMode"  : document.getElementById("playersMode"),
  "scoreP1"      : document.getElementById("Player1Score"),
  "scoreP2"      : document.getElementById("Player2Score")
};

const musics = {
  "clickSong" : "click",
  "looseSong" : "loose",
  "drawSong"  : "draw",
  "winSong"   : "win"
};

const texts = {
  "player1Name"    : "PLAYER 1",
  "player2Name"    : "PLAYER 2",
  "computerName"   : "COMPUTER",
  "player1Value"   : "O",
  "player2Value"   : "X",
  "isOn"           : "➜ ",
  "arrow"          : " → ",
  "winTop"         : "BRAVO !",
  "winBottom"      : " WIN !",
  "drawTop"        : "... MATCH NUL",
  "drawBottom"     : "NO WINNER ...",
  "looseTop"       : "... OH NO !",
  "looseBottom"    : "YOU LOOSE ...",
  "buttonComputer" : "VS COMPUTER",
  "button2Players" : "2 PLAYERS",
  "buttonNewGame1" : "PLAY",
  "buttonNewGame2" : "NEW PARTY",
  "buttonNewGame3" : "PLAY AGAIN"
};

const colors = {
  "player1"        : "salmon",
  "player2"        : "aquamarine",
  "computer"       : "black",
  "caseWin"        : "white",
  "caseParty"      : "antiquewhite",
  "caseStandby"    : "rgb(9, 95, 95)",
  "winText"        : "white",
  "looseText"      : "antiquewhite",
  "bckGrdParty"    : "teal",
  "bckGrdWin"      : "rgb(250, 220, 70)",
  "bckGrdLoose"    : "#374046",
  "buttonSuggest"  : "black",
  "buttonSelect"   : "rgb(68, 42, 32)",
  "buttonParty"    : "rgb(250, 250, 170)",
  "buttonModeOn"   : "rgb(211, 176, 131)",
  "buttonModeOff"  : "antiquewhite",
  "scoreTextParty" : "black",
  "scoreTextLoose" : "white"
};

const shadows = {
  "caseWin"   : "0rem 0rem 1rem red",
  "caseParty" : "0rem 0rem 0.75rem black",
  "partyText" : "0.18rem 0.18rem 0.18rem black",
  "endText"   : "0rem 0rem 1rem fuchsia"
};

const sets = {
  "line"                 : [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],
  "playButton"           : [texts.buttonNewGame1, colors.buttonSuggest],
  "newPartyButton"       : [texts.buttonNewGame2, colors.buttonParty],
  "playAgainButton"      : [texts.buttonNewGame3, colors.buttonSuggest],
  "modeVsComputerButton" : [texts.isOn + texts.buttonComputer, colors.buttonSelect, colors.buttonModeOn, texts.button2Players, colors.buttonParty, colors.buttonModeOff],
  "mode2PlayersButton"   : [texts.buttonComputer, colors.buttonParty, colors.buttonModeOff, texts.isOn + texts.button2Players, colors.buttonSelect, colors.buttonModeOn],
  "party"                : [colors.bckGrdParty, "", shadows.partyText, "", "", colors.buttonParty,colors.buttonParty, colors.buttonParty,colors.scoreTextParty],
  "looseOrDraw"          : [colors.bckGrdLoose, colors.looseText, shadows.endText, colors.looseText, shadows.endText, colors.buttonSelect, colors.buttonSelect, colors.buttonSelect, colors.scoreTextLoose],
  "win"                  : [colors.bckGrdWin, colors.winText, shadows.endText, colors.winText, shadows.endText, colors.buttonSelect, colors.buttonSelect, colors.buttonSelect, colors.scoreTextParty]
};

/********************************************************************************************************/
//***********************************************  ROUTER  *********************************************//
/********************************************************************************************************/

const rootMode = (x) => {Controller.ChangeMode(x);}
const rootCase = (x) => {Controller.PlayCase(x);}
const rootPlay = ( ) => {Controller.NewGame();}

/********************************************************************************************************/
//***********************************************  MODELS  *********************************************//
/********************************************************************************************************/

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

/********************************************************************************************************/
//***********************************************  VIEWS  **********************************************//
/********************************************************************************************************/

class View
{
  // INIT

  static Init()
  {
    View.GridReset();
    View.Colors(sets.party);
    View.Buttons();
    View.Scores();
    if (!gameIsNotStart) { View.PlayerTurn(); }
  }

  // GAME COLORS

  static Colors(setColors)
  {
    document.body.style.backgroundColor = setColors[0];
    dom.top.style.color = setColors[1];
    dom.top.style.textShadow = setColors[2];
    dom.bottom.style.color = setColors[3];
    dom.bottom.style.textShadow = setColors[4];
    dom.newGame.style.color = setColors[5];
    dom.playersMode.style.color = setColors[6];
    dom.computerMode.style.color = setColors[7];
    dom.score[0].style.color = setColors[8];
  }

  // GRID CASES

  static GridCasePlayed(c)
  {
    dom.case[c-1].innerHTML = currentPlayer.value ;
  }


  static WinnersCases()
  {
    for (let i = 0 ; i < 3 ; i++) 
    { 
      dom.case[(sets.line[lineWinner][i])-1].style.color = colors.caseWin; 
      dom.case[(sets.line[lineWinner][i])-1].style.textShadow = shadows.caseWin;
    }
  }

  static GridReset()
  {
    for (let i = 0 ; i < 9 ; i++)
    {
      dom.case[i].innerHTML = null;
      dom.case[i].style.color = colors.caseParty; 
      dom.case[i].style.textShadow = shadows.caseParty;
      if (gameIsNotStart) 
      { dom.case[i].style.backgroundColor = colors.caseStandby; }
      else 
      { dom.case[i].style.backgroundColor = colors.caseParty; }
    }
  }

  // BUTTONS 

  static Buttons()
  {
    if (gameIsNotStart) 
      { View.PlayButton(sets.playButton) } 
    else
    {
      if (gameIsNotFinish) 
      { View.PlayButton(sets.newPartyButton) }
      else 
      { View.PlayButton(sets.playAgainButton) }
    }

    if (gameModeVsComputer)
    { View.ButtonsMode(sets.modeVsComputerButton); }
    else
    { View.ButtonsMode(sets.mode2PlayersButton); }
  }

  static PlayButton(buttonPlay)
  {
    dom.newGame.innerHTML = buttonPlay[0];
    dom.newGame.style.color = buttonPlay[1];
  }

  static ButtonsMode(buttonsMode)
  {
    dom.computerMode.innerHTML = buttonsMode[0];
    dom.computerMode.style.color = buttonsMode[1];
    dom.computerMode.style.backgroundColor = buttonsMode[2];
    dom.playersMode.innerHTML = buttonsMode[3];
    dom.playersMode.style.color = buttonsMode[4];
    dom.playersMode.style.backgroundColor = buttonsMode[5];
  }

  // TEXTS

  static PlayerTurn()
  {
    dom.top.style.color = currentPlayer.color;
    dom.top.innerHTML = currentPlayer.name + texts.arrow + currentPlayer.value;
  }

  static TopBottomText(topText,bottomText)
  {
    dom.top.innerHTML = topText;
    dom.bottom.innerHTML = bottomText;
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
    dom.scoreP1.innerHTML = p1.name + texts.arrow + p1.scores[mode];
    dom.scoreP2.innerHTML = p2.name + texts.arrow + p2.scores[mode];
  }
}

/********************************************************************************************************/
//*******************************************  CONTROLLERS  ********************************************//
/********************************************************************************************************/

class Controller
{
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
      Controller.PlayMusic(musics.clickSong);
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
    for (let l in sets.line) 
    { 
      if (gridCase[sets.line[l][1]].value == val && gridCase[sets.line[l][2]].value == val && gridCase[sets.line[l][0]].isPlayed == false) { return sets.line[l][0]; }
      if (gridCase[sets.line[l][0]].value == val && gridCase[sets.line[l][2]].value == val && gridCase[sets.line[l][1]].isPlayed == false) { return sets.line[l][1]; }
      if (gridCase[sets.line[l][0]].value == val && gridCase[sets.line[l][1]].value == val && gridCase[sets.line[l][2]].isPlayed == false) { return sets.line[l][2]; }
    }
  }

  // ANALYSES

  static AnalyseGame()
  {
    Controller.SearchIfWin(currentPlayer.value);
    if (gameIsNotFinish == true) { gameIsNotFinish = Controller.SearchEmptyCase(); }
    if (gameIsNotFinish == false) { Controller.GameEnding(); }
  }

  static SearchIfWin(val)
  {
    for (let l in sets.line )
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
    if ( (gridCase[sets.line[l][0]].value == gridCase[sets.line[l][1]].value
      && gridCase[sets.line[l][0]].value == gridCase[sets.line[l][2]].value
      && gridCase[sets.line[l][0]].value == val) ) { return true; }
  }

  static SearchEmptyCase()
  {
    let emptyCase = [];
    for (let i = 1 ; i < 10 ; i++) { emptyCase.push(gridCase[i].value); }
    return emptyCase.includes(null);
  }

  // END GAME

  static GameEnding()
  {
    if (currentPlayer.isWinner && !currentPlayer.isComputer)
    {
      if (gameModeVsComputer) {currentPlayer.scores[1] += 1 ;}
      else {currentPlayer.scores[0] += 1 ;}
      View.TopBottomText(texts.winTop,currentPlayer.name + texts.winBottom);
      View.WinnersCases();
      View.Colors(sets.win);
      Controller.PlayMusic(musics.winSong);
    }
    else 
    {
      if (currentPlayer.isWinner && currentPlayer.isComputer)
      {
        currentPlayer.scores[1] += 1 ;
        View.WinnersCases();
        View.TopBottomText(texts.looseTop,texts.looseBottom);
        Controller.PlayMusic(musics.looseSong);
      }
      else
      {
        View.TopBottomText(texts.drawTop,texts.drawBottom);
        Controller.PlayMusic(musics.drawSong);
      }
      View.Colors(sets.looseOrDraw);
    }
    View.Buttons();
    View.Scores();
  }

  // MUSIC

  static PlayMusic(zic)
  {
    let sample = new Audio('assets/audio/'+zic+'.mp3');
    sample.play();
  }
}

/********************************************************************************************************/
//***********************************************  CONFIG  *********************************************//
/********************************************************************************************************/

let player1 = new Player(texts.player1Name, texts.player1Value, false, colors.player1, [0,0], false); 
let player2 = new Player(texts.player2Name, texts.player2Value, false, colors.player2, [0,null], false);
let computer = new Player(texts.computerName, texts.player2Value, false, colors.computer, [0,0], true);
let currentPlayer = player2;
let playerStartTurn = currentPlayer;
let gameModeVsComputer = true;
let gameIsNotFinish = true;
let gameIsNotStart = true;
let lineWinner = null;
let gridCase = [null]; // to start at gridCase[1]
View.Init();