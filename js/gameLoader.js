const scoreBoard = $('.scoreboard');
const playground = $('.playground');
const startButton = $('.player__select-button');
startButton.click(startGame);

function loadGame() {
  const startScreen = $('.start-screen');
  startScreen.hide();
  scoreBoard.show();
  playground.show();
  cellPositioning(10);
  createNewPlayers();
}

function startGame() {
  boardGenerator(10);
  loadGame();
  thug.play();
  police.play();
}