// basic pseudocode for game logic:
// 1. EACH CLICK ON GAME BOARD:
// - change targeted tile to an IMAGE
// - toggle which image appears per CLICK
// - toggle text to 'it's _'s turn' depending on which image will be placed on BOARD
// - check for victory checkWinConditions
//
// 2. checking for victory checkWinConditions
// - possible combos: [A1, A2, A3], [B1, B2, B3], [C1, C2, C3], [A1, C1, C3], [A2, B2, C2], [A3, B3, C3], [A1, B2, C3], [A3, B2, C1]
// - keep those in a variable?
// - if the win conditions are met:
// -- move current board layout to victor's wins array
// -- clear BOARD
// -- add ++ to victor's wins
// - if not met && board is full
// -- declare draw
// -- clear BOARD
// - if not met && board NOT full
// -- carry on with the game (how?)
var winConditions = [
  [A1, A2, A3],
  [B1, B2, B3],
  [C1, C2, C3],
  [A1, B1, C1],
  [A2, B2, C2],
  [A3, B3, C3],
  [A1, B2, C3],
  [A3, B2, C1]
];

var playerOne = new Player(1, "spider");
var playerTwo = new Player(10, "fly");
var newGame = new Game(playerOne, playerTwo);

function testFunction() {
  newGame.checkWinConditions();
}

function takeTurn() {
  var board = newGame.gameboard;
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
    } else if (winConditions[i] === 30) {
      return 'Player Two Wins!';
    }
  }
}

function startNewRound() {

  newGame.resetGameBoard();
}
