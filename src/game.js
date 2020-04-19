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
    this.currentPlayer = playerOne;
    this.defaultCobweb = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png";
    this.winner = undefined;
  }

  changePlayerTurn() {
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else {
      this.currentPlayer = this.playerOne;
    }
  }

  changeGameboardTile(tile) {
    this.gameboard[tile] = this.currentPlayer.id;
    console.log(this.gameboard);
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
        this.playerOne.wins.push(board);
        // this.saveWinningBoard(playerOne);
        console.log("Player One Wins!");
        this.winner = playerOne;
        this.resetGameBoard();
      } else if (winConditions[i] === 30) {
        this.playerTwo.wins.push(board);
        // this.saveWinningBoard(playerTwo);
        console.log("Player Two Wins!");
        this.winner = playerTwo;
        this.resetGameBoard();
      } else {
      }
    }
  }

  detectDraw() {
    var board = this.gameboard;
    var wholeBoard = (board.A1 + board.A2 + board.A3 + board.B1 + board.B2 + board.B3 + board.C1 + board.C2 + board.C3);
    if (wholeBoard === 45 && this.winner === undefined) {
      console.log("It's a draw!");
    }
  }

  // saveWinningBoard(winningPlayer) {
  //   //if a player has won
  //   winningPlayer.wins.push(this.gameboard);
  //
  //   localStorage.setItem(winningPlayer.wins, JSON.stringify(this.gameboard));
  //   //take the current board data--local storage?
  //   //put it into their winning board array
  //   //and add it to local storage
  // }

  resetGameBoard() {
    if (this.winner !== undefined) {
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
    }
  }
}
