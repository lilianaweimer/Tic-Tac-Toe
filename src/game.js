// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to save a winning Game’s board data to the correct player’s wins array
// A way to reset the Game’s board to begin a new game

class Game {
  constructor(playerOne, playerTwo) {
    this.gameboard = {
      A1: null,
      A2: null,
      A2: null,
      B1: null,
      B2: null,
      B3: null,
      C1: null,
      C2: null,
      C3: null
    };
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
  }

  checkWinConditions() {
    //if there is a row, column, or diagonal that all are the same token
    return this.players;
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
    this.board = {
      A1: null,
      A2: null,
      A2: null,
      B1: null,
      B2: null,
      B3: null,
      C1: null,
      C2: null,
      C3: null
    }
  }
}
