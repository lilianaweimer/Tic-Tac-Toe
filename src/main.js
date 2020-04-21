var playerOne = new Player("Spider", 1, "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider_1f577.png");
var playerTwo = new Player("Fly", 10, "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojipedia/240/fly_1fab0.png");
var newGame = new Game(playerOne, playerTwo);

var boardHeading = document.querySelector(".gameboard-header-text");
var board = document.querySelector(".gameboard");

board.addEventListener("click", takeTurn);
window.onload = displaySavedBoards();


function takeTurn() {
  if (newGame.winner === "nobody" || newGame.winner === playerOne || newGame.winner === playerTwo) {
    startNewRound();
    startNewTurn();
  } else if (event.target.className = "gameboard-tile") {
    var tile = event.target.getAttribute("data-id");
    event.target.closest("gameboard-tile");
    event.target.innerHTML = `
      <img src=${newGame.currentPlayer.token} class="gameboard-tile" alt=${newGame.currentPlayer.name}/>
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
  if (newGame.winner === "nobody") {
    boardHeading.innerText = "Draw!";
  } else if (newGame.winner !== undefined) {
    boardHeading.innerText = `${newGame.winner.name} won!`
    displayWin();
    updateWinCount();
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
  if (newGame.winner === playerOne) {
    var playerWins = document.getElementById("player-one-wins-grid");
  } else if (newGame.winner === playerTwo) {
    var playerWins = document.getElementById("player-two-wins-grid");
  }
  playerWins.innerText = "";
  displayAllMiniBoards(newGame.winner, playerWins);
}

function displaySavedBoards() {
  if (window.localStorage.length > 0) {
    playerOne.retrieveWinsFromStorage();
    var playerOneWins = document.getElementById("player-one-wins-grid");
    displayAllMiniBoards(playerOne, playerOneWins);
    playerTwo.retrieveWinsFromStorage();
    var playerTwoWins = document.getElementById("player-two-wins-grid");
    displayAllMiniBoards(playerTwo, playerTwoWins);
  }
}

function displayAllMiniBoards(player, playerWins) {
  if (player.wins.length !== null) {
    for (var i = 0; i < player.wins.length; i++) {
      var win = player.wins[i];
        var miniBoard = `
          <section class="miniboard">
            <img src="${win[0].player || "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png"}" class="mini-gameboard-tile" id="A1" alt="game board tile"/>
            <img src="${win[1].player || "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png"}" class="mini-gameboard-tile" id="A2" alt="game board tile"/>
            <img src="${win[2].player || "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png"}" class="mini-gameboard-tile" id="A3" alt="game board tile"/>
            <img src="${win[3].player || "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png"}" class="mini-gameboard-tile" id="B1" alt="game board tile"/>
            <img src="${win[4].player || "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png"}" class="mini-gameboard-tile" id="B2" alt="game board tile"/>
            <img src="${win[5].player || "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png"}" class="mini-gameboard-tile" id="B3" alt="game board tile"/>
            <img src="${win[6].player || "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png"}" class="mini-gameboard-tile" id="C1" alt="game board tile"/>
            <img src="${win[7].player || "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png"}" class="mini-gameboard-tile" id="C2" alt="game board tile"/>
            <img src="${win[8].player || "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/spider-web_1f578.png"}" class="mini-gameboard-tile" id="C3" alt="game board tile"/>
          </section>
        `;
        playerWins.insertAdjacentHTML("beforeend", miniBoard);
        updateWinCount();
    }
  } else {
    takeTurn();
  }
}

function updateWinCount() {
  var oneWinCount = document.querySelector(".player-one-win-count");
  var twoWinCount = document.querySelector(".player-two-win-count");
  oneWinCount.innerText = `${playerOne.wins.length} wins`;
  twoWinCount.innerText = `${playerTwo.wins.length} wins`;
}
