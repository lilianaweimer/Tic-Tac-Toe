class Game {
  constructor(playerOne, playerTwo) {
    this.gameboard = {
      A1: {num: 0, player: undefined},
      A2: {num: 0, player: undefined},
      A3: {num: 0, player: undefined},
      B1: {num: 0, player: undefined},
      B2: {num: 0, player: undefined},
      B3: {num: 0, player: undefined},
      C1: {num: 0, player: undefined},
      C2: {num: 0, player: undefined},
      C3: {num: 0, player: undefined}
    };
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentPlayer = playerOne;
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
    this.gameboard[tile].num = this.currentPlayer.id;
    this.gameboard[tile].player = this.currentPlayer.token;
  }

  checkWinConditions() {
    var board = this.gameboard;
    var winConditions = [
      (board.A1.num + board.A2.num + board.A3.num),
      (board.B1.num + board.B2.num + board.B3.num),
      (board.C1.num + board.C2.num + board.C3.num),
      (board.A1.num + board.B1.num + board.C1.num),
      (board.A2.num + board.B2.num + board.C2.num),
      (board.A3.num + board.B3.num + board.C3.num),
      (board.A1.num + board.B2.num + board.C3.num),
      (board.A3.num + board.B2.num + board.C1.num)
    ];

    for (var i = 0; i < winConditions.length; i++) {
      if (winConditions[i] === 3) {
        this.playerOne.wins.push(board);
        // this.saveWinningBoard(playerOne);
        this.winner = playerOne;
        this.resetGameBoard();
      } else if (winConditions[i] === 30) {
        this.playerTwo.wins.push(board);
        // this.saveWinningBoard(playerTwo);
        this.winner = playerTwo;
        this.resetGameBoard();
      } else {
      } this.detectDraw();
    }
  }

  detectDraw() {
    var board = this.gameboard;
    var wholeBoard = (board.A1.num + board.A2.num + board.A3.num + board.B1.num + board.B2.num + board.B3.num + board.C1.num + board.C2.num + board.C3.num);
    if (wholeBoard === 45 && this.winner === undefined) {
      this.winner = null;
      this.resetGameBoard();
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
        A1: {num: 0, player: undefined},
        A2: {num: 0, player: undefined},
        A3: {num: 0, player: undefined},
        B1: {num: 0, player: undefined},
        B2: {num: 0, player: undefined},
        B3: {num: 0, player: undefined},
        C1: {num: 0, player: undefined},
        C2: {num: 0, player: undefined},
        C3: {num: 0, player: undefined}
      };
    }
  }
}
