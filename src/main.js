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
    <div class="gameboard-tile-div" id="A1" data-id="0"></div>
    <div class="gameboard-tile-div" id="A2" data-id="1"></div>
    <div class="gameboard-tile-div" id="A3" data-id="2"></div>
    <div class="gameboard-tile-div" id="B1" data-id="3"></div>
    <div class="gameboard-tile-div" id="B2" data-id="4"></div>
    <div class="gameboard-tile-div" id="B3" data-id="5"></div>
    <div class="gameboard-tile-div" id="C1" data-id="6"></div>
    <div class="gameboard-tile-div" id="C2" data-id="7"></div>
    <div class="gameboard-tile-div" id="C3" data-id="8"></div>
  `;
}

function displayWin() {
  for (var i = 0; i < newGame.winner.wins.length; i++) {
    var win = newGame.winner.wins[i];
    if (win[i].player === undefined) {
      win[i].player = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png";
    }
      var miniBoard = `
        <section class="miniboard">
          <div class="mini-gameboard-tile-div"><img src="${win[0].player}" class="mini-gameboard-tile" id="A1" alt="game board tile"/></div>
          <div class="mini-gameboard-tile-div"><img src="${win[1].player}" class="mini-gameboard-tile" id="A2" alt="game board tile"/></div>
          <div class="mini-gameboard-tile-div"><img src="${win[2].player}" class="mini-gameboard-tile" id="A3" alt="game board tile"/></div>
          <div class="mini-gameboard-tile-div"><img src="${win[3].player}" class="mini-gameboard-tile" id="B1" alt="game board tile"/></div>
          <div class="mini-gameboard-tile-div"><img src="${win[4].player}" class="mini-gameboard-tile" id="B2" alt="game board tile"/></div>
          <div class="mini-gameboard-tile-div"><img src="${win[5].player}" class="mini-gameboard-tile" id="B3" alt="game board tile"/></div>
          <div class="mini-gameboard-tile-div"><img src="${win[6].player}" class="mini-gameboard-tile" id="C1" alt="game board tile"/></div>
          <div class="mini-gameboard-tile-div"><img src="${win[7].player}" class="mini-gameboard-tile" id="C2" alt="game board tile"/></div>
          <div class="mini-gameboard-tile-div"><img src="${win[8].player}" class="mini-gameboard-tile" id="C3" alt="game board tile"/></div>
        </section>
      `;
      if (newGame.winner === playerOne) {
        playerOneWins.innerText = "";
        playerOneWins.insertAdjacentHTML("beforeend", miniBoard);
    } else if (newGame.winner === playerTwo) {
      playerTwoWins.innerText = "";
      playerTwoWins.insertAdjacentHTML("beforeend", miniBoard);
    }
  }
}
