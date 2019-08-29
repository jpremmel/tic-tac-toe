// FRONT END
// global var, creates an instance of the game object called myGame
var myGame = new Game();

// this attaches click listeners to the cards in our html
function attachClickListeners() {
  $(".card").on("click", function() {
    determineClickedSpace(this.id);
  });
}

// this is how we stop the same space from getting clicked twice.
function determineClickedSpace(id) {
  // id refers to the parameter of this function, this function is called above, but defined here
  if (!$("." + id).text()) {
    myGame.logClicks(id);
  }
}
// this pushes an X or O (depending on who clicked) onto the html
function displayMark(id, symbol) {
  $("." + id).text(symbol);
}

$(document).ready(function() {
  // click listener is what tells us which space on the board has been clicked
  attachClickListeners();
  $(".gameForm").submit(function(event) {
    event.preventDefault();
    // this is where we take the input values (player's names) and assign them to the name property of each player object
    myGame.playerX.name = $("#playerXname").val();
    myGame.playerO.name = $("#playerOname").val();
    $(".grid").show();
  });
});


// BACK END
// game constructor
function Game() {
  this.board = new Board();
  this.playerX = new Player();
  this.playerO = new Player();
  // this is an empty number var we start at zero so that we can add "clicks" to it
  this.clickCounter = 0;
}

// this method logs the clicks and increase 1 to the clickCounter var.
Game.prototype.logClicks = function(htmlID) {
  console.log(this.clickCounter++);
  // the % will return a 0 or a 1 depending on whether the clickCounter is even or odd
  if (this.clickCounter % 2 === 0) {
    this.playerX.clicks.push(htmlID);
    // loops through playerX's click array to mark clicked spaces with an X
    for (var i = 0; i < this.playerX.clicks.length; i++) {
      displayMark(this.playerX.clicks[i], "X");
    }
    if (this.playerX.findWinner()) {
    console.log("PLAYER X WINS");
    }
  } else if (this.clickCounter % 2 === 1) {
    this.playerO.clicks.push(htmlID);
    for (var i = 0; i < this.playerO.clicks.length; i++) {
      displayMark(this.playerO.clicks[i], "O");
    }
    if (this.playerO.findWinner()) {
      console.log("PLAYER O WINS");
    }
  }
}

Player.prototype.findWinner = function() {
  console.log(this.clicks);
  if (this.clicks.includes("c1r1") && this.clicks.includes("c2r1") && this.clicks.includes("c3r1") ||
      this.clicks.includes("c3r1") && this.clicks.includes("c3r2") && this.clicks.includes("c3r3") ||
      this.clicks.includes("c1r3") && this.clicks.includes("c2r3") && this.clicks.includes("c3r3") ||
      this.clicks.includes("c1r1") && this.clicks.includes("c1r2") && this.clicks.includes("c1r3") ||
      this.clicks.includes("c2r1") && this.clicks.includes("c2r2") && this.clicks.includes("c2r3") ||
      this.clicks.includes("c1r2") && this.clicks.includes("c2r2") && this.clicks.includes("c3r2") ||
      this.clicks.includes("c1r1") && this.clicks.includes("c2r2") && this.clicks.includes("c3r3") ||
      this.clicks.includes("c3r1") && this.clicks.includes("c2r2") && this.clicks.includes("c1r3")) {
    return true;
  } else {
    return false;
  }
}

function Player() {
  this.name;
  this.symbol;
  this.clicks = [];
}


Player.prototype.assignSymbol = function() {

}

// ths is our grid- we made coords. based off the cols and rows
function Board() {
  this.spaceC1R1 = "c1r1";
  this.spaceC2R1 = "c2r1";
  this.spaceC3R1 = "c3r1";
  this.spaceC1R2 = "c1r2";
  this.spaceC2R2 = "c2r2";
  this.spaceC3R2 = "c3r2";
  this.spaceC1R3 = "c1r3";
  this.spaceC2R3 = "c2r3";
  this.spaceC3R3 = "c3r3";
}

Board.prototype.emptyGrid = function() {
  //method to create 3x3 grid of spaces
}

Board.prototype.findWinner = function() {
  //look for three in a row
}

// Board.prototype.mark = function(htmlID) {
//
// }
