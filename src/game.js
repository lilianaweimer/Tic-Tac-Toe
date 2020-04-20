class Game {
  constructor(playerOne, playerTwo) {
    this.gameboard = [
      {num: 0, player: undefined},
      {num: 0, player: undefined},
      {num: 0, player: undefined},
      {num: 0, player: undefined},
      {num: 0, player: undefined},
      {num: 0, player: undefined},
      {num: 0, player: undefined},
      {num: 0, player: undefined},
      {num: 0, player: undefined}
    ];
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
      (board[0].num + board[1].num + board[2].num),
      (board[3].num + board[4].num + board[5].num),
      (board[6].num + board[7].num + board[8].num),
      (board[0].num + board[3].num + board[6].num),
      (board[1].num + board[4].num + board[7].num),
      (board[2].num + board[5].num + board[8].num),
      (board[0].num + board[4].num + board[8].num),
      (board[2].num + board[4].num + board[6].num)
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
    var wholeBoard = (board[0].num + board[1].num + board[2].num + board[3].num + board[4].num + board[5].num + board[6].num + board[7].num + board[8].num);
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
      this.gameboard = [
        {num: 0, player: undefined},
        {num: 0, player: undefined},
        {num: 0, player: undefined},
        {num: 0, player: undefined},
        {num: 0, player: undefined},
        {num: 0, player: undefined},
        {num: 0, player: undefined},
        {num: 0, player: undefined},
        {num: 0, player: undefined}
      ];
    }
  }
}
