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

function setGameBoard() {

}

function takeTurn(gameTile) {
  //player chooses a tile, a key in Game.BOARD
  
  //that tile changes to their token
  //that tile is deactivated
  //toggle to other player, so the next time it places a different token
}
