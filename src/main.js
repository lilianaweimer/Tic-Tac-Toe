var playerOne = new Player(1, "spider");
var playerTwo = new Player(10, "fly");
var newGame = new Game(playerOne, playerTwo);

function takeTurn() {
  //change game tile
  newGame.changePlayerTurn();
  return newGame.checkWinConditions();

}

function startNewRound() {

  newGame.resetGameBoard();
}
