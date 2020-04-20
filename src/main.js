var playerOne = new Player("Spider", 1, "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider_1f577.png");
var playerTwo = new Player("Fly", 10, "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojipedia/240/fly_1fab0.png");
var newGame = new Game(playerOne, playerTwo);

//QUERY SELECTORS HERE
var boardHeading = document.querySelector(".gameboard-header-text");
var board = document.querySelector(".gameboard");
var gameTile = document.querySelector(".gameboard-tile");
var playerOneWins = document.getElementById("player-one-wins-grid")
var playerTwoWins = document.getElementById("player-two-wins-grid");

//EVENT LISTENERS
board.addEventListener("click", takeTurn);

//EVENT HANDLERS
function takeTurn() {
  if (newGame.winner === null || newGame.winner === playerOne || newGame.winner === playerTwo) {
    startNewRound();
    startNewTurn();
  } else if (event.target.className = ".gameboard-tile-div") {
    var tile = event.target.getAttribute("data-id");
    event.target.closest(".gameboard-tile");
    event.target.innerHTML = `
    <img src="${newGame.currentPlayer.token}" class="gameboard-tile" id="A1" data-id="A1" alt="${newGame.currentPlayer.name}"/>
    `;
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
  if (newGame.winner === null) {
    boardHeading.innerText = "Draw!";
  } else if (newGame.winner !== undefined) {
    boardHeading.innerText = `${newGame.winner.name} won!`
    displayWin();
  }
}

function startNewRound() {
  newGame.winner = undefined;
  newGame.resetGameBoard();
  board.innerHTML = `
    <div class="gameboard-tile-div" id="A1" data-id="A1"></div>
    <div class="gameboard-tile-div" id="A2" data-id="A2"></div>
    <div class="gameboard-tile-div" id="A3" data-id="A3"></div>
    <div class="gameboard-tile-div" id="B1" data-id="B1"></div>
    <div class="gameboard-tile-div" id="B2" data-id="B2"></div>
    <div class="gameboard-tile-div" id="B3" data-id="B3"></div>
    <div class="gameboard-tile-div" id="C1" data-id="C1"></div>
    <div class="gameboard-tile-div" id="C2" data-id="C2"></div>
    <div class="gameboard-tile-div" id="C3" data-id="C3"></div>
  `;
}

function displayWin() {
  for (objects in newGame.winner.wins) {

  }
  if (newGame.winner === playerOne) {
    playerOneWins.innerText = "";
    for (var i = 0; i < playerOne.wins.length; i++) {
      var miniBoard = `
        <section class="mini-gameboard">
          <div class="mini-gameboard-tile-div"></div>
          <div class="mini-gameboard-tile-div"></div>
          <div class="mini-gameboard-tile-div"></div>
          <div class="mini-gameboard-tile-div"></div>
          <div class="mini-gameboard-tile-div"></div>
          <div class="mini-gameboard-tile-div"></div>
          <div class="mini-gameboard-tile-div"></div>
          <div class="mini-gameboard-tile-div"></div>
          <div class="mini-gameboard-tile-div"></div>
        </section>
        `;
      playerOneWins.insertAdjacentHTML("beforeend", miniBoard);
    }
  }
  // if (newGame.winner === playerOne) {
  //   for (var i = 0; i < newGame.playerOne.wins.length; i++) {
  //     console.log(newGame.playerOne.wins);
  //     var winHTML = `

  //       `;
  //   }
  // }
}
// <img src=`${newGame.winner.wins[i].id}` class="mini-gameboard-tile" id="A1" alt="game board tile"/>
// <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png" class="mini-gameboard-tile" id="A2" alt="game board tile"/>
// <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png" class="mini-gameboard-tile" id="A3" alt="game board tile"/>
// <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png" class="mini-gameboard-tile" id="B1" alt="game board tile"/>
// <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png" class="mini-gameboard-tile" id="B2" alt="game board tile"/>
// <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png" class="mini-gameboard-tile" id="B3" alt="game board tile"/>
// <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png" class="mini-gameboard-tile" id="C1" alt="game board tile"/>
// <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png" class="mini-gameboard-tile" id="C2" alt="game board tile"/>
// <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png" class="mini-gameboard-tile" id="C3" alt="game board tile"/>
