// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to save a winning Game’s board data to the correct player’s wins array
// A way to reset the Game’s board to begin a new game
// var winConditions = [
//   (board.A1 + boardA2 + board.A3),
//   (board.B1 + boardB2 + board.B3),
//   (board.C1 + boardC2 + board.C3),
//   (board.A1 + board.B1 + board.C1),
//   (board.A2 + board.B2 + board.C2),
//   (board.A3 + board.B3 + board.C3),
//   (board.A1 + board.B2 + board.C3),
//   (board.A3 + board.B2 + board.C1)
// ];

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
        return 'Player One Wins!';
      } else if (winConditions[i] === 6) {
        return 'Player Two Wins!';
      }
    }
  }

  detectDraw() {
    //if all tiles are full
    for 
    // for (var i = 0; i < winConditions.length; i++) {
    //   if (winConditions[i] === 0)
    // }
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
  for (var i = 0; i < this.gameboard.length; i++) {
    board[i] = 0;
  }
  }
}
