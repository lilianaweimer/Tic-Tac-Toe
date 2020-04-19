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
      A1: 0,
      A2: 0,
      A3: 0,
      B1: 0,
      B2: 0,
      B3: 0,
      C1: 0,
      C2: 0,
      C3: 0
    };
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.playerOneTurn = true;
    this.playerTwoTurn = false;
  }

  changePlayerTurn() {
    this.playerOneTurn = (this.playerOneTurn === true) ? false : true;
    this.playerTwoTurn = (this.playerTwoTurn === true) ? false : true;
  }

  checkWinConditions() {
    var board = this.gameboard;
    var winConditions = [
      (board.A1 + board.A2 + board.A3),
      (board.B1 + board.B2 + board.B3),
      (board.C1 + board.C2 + board.C3),
      (board.A1 + board.B1 + board.C1),
      (board.A2 + board.B2 + board.C2),
      (board.A3 + board.B3 + board.C3),
      (board.A1 + board.B2 + board.C3),
      (board.A3 + board.B2 + board.C1)
    ];

    for (var i = 0; i < winConditions.length; i++) {
      if (winConditions[i] === 3) {
        return "Player One Wins!";
      } else if (winConditions[i] === 30) {
        return "Player Two Wins!";
      }
    }
  }

  detectDraw() {
    var gameboardLayout = Object.values(this.gameboard);
    for (var i = 0; i < gameboardLayout.length; i++) {
        if (gameboardLayout[i] === 0) {
          break;
        } else {
          return "It's a draw!"
        }
    }
  }

  saveWinningBoard() {
    //if a player has won
    //take the current board data--local storage?
    //put it into their winning board array
    //and add it to local storage
  }

  resetGameBoard() {
  for (var i = 0; i < this.gameboard.length; i++) {
    board[i] = 0;
  }
  }
}
