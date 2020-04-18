// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to save a winning Game’s board data to the correct player’s wins array
// A way to reset the Game’s board to begin a new game
class Game {
  constructor() {
  this.playerOne = new Player("Player One", /*spidertoken*/);
  this.playerTwo = new Player("Player Two", /*flytoken*/);

  checkWinConditions() {
    //if there is a row, column, or diagonal that all are the same token
    //then that player wins--so update their win count
    //and reset the board
  }

  detectDraw() {
    //if all tiles are full
    //do not modify scores
    //change head text to "draw!"
    //reset the board
  }

  saveWinningBoard() {
    //if a player has won
    //take the current board data--local storage?
    //put it into their winning board array
    //and add it to local storage
  }

  resetGameBoard() {
    //when win conditions are met OR there is a draw
    //clear the board of all tokens
    //and reactivate click functionality on the tiles
  }
}
