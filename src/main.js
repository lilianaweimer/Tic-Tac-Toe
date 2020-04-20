var playerOne = new Player("Spider", 1, "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider_1f577.png");
var playerTwo = new Player("Fly", 10, "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojipedia/240/fly_1fab0.png");
var newGame = new Game(playerOne, playerTwo);

//QUERY SELECTORS HERE
var boardHeading = document.querySelector(".gameboard-header-text");
var board = document.querySelector(".gameboard");
var gameTile = document.querySelector(".gameboard-tile");

//EVENT LISTENERS
board.addEventListener("click", takeTurn);

//EVENT HANDLERS
function takeTurn() {
  if (event.target.className = ".gameboard-tile" && event.target.src === "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png"){
    console.log(event.target);
    var tile = event.target.getAttribute("data-id");
    event.target.closest(".gameboard-tile");
    event.target.src = newGame.currentPlayer.token;
    newGame.changeGameboardTile(tile);
    checkForWin();
    startNewTurn();
  }
}

function startNewTurn() {
  newGame.changePlayerTurn();
  if (newGame.winner === undefined) {
  boardHeading.innerText = `${newGame.currentPlayer.name}'s turn`;
  }
}

function checkForWin() {
  newGame.checkWinConditions();
  if (newGame.winner === "nobody") {
    boardHeading.innerText = "Draw!";
    startNewRound();
  } else if (newGame.winner !== undefined) {
    boardHeading.innerText = `${newGame.winner.name} won!`
    displayWins(newGame.winner);
    startNewRound();
  }
}

function startNewRound() {
}

function displayWins(winner) {
  
}
