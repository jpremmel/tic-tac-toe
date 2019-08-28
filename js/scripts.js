// FRONT END
var myGame = new Game();
console.log(myGame);

function attachClickListeners() {
  $(".col-xs-4").on("click", ".card", function() {
    var clicked = this.id;
    myGame.logClicks(clicked);
    console.log(clicked);
    console.log(myGame.increaseClickCount());
  });
}

function displayMark(id, symbol) {
  $("." + id).text(symbol);
}

$(document).ready(function() {
  attachClickListeners();
  $(".gameForm").submit(function(event) {
    event.preventDefault();
    var playerXname = $("#playerXname").val();
    var playerOname = $("#playerOname").val();
    myGame.playerX.name = playerXname;
    myGame.playerO.name = playerOname;
  });
});


// BACK END
function Game() {
  this.board = new Board();
  this.playerX = new Player();
  this.playerO = new Player();
  this.clickCounter = 0;
}

Game.prototype.increaseClickCount = function() {
  return this.clickCounter++
}

Game.prototype.logClicks = function(htmlID) {
  if (this.clickCounter % 2 === 0) {
    this.playerX.clicks.push(htmlID);
    for (var i = 0; i < this.playerX.clicks.length; i++) {
      displayMark(this.playerX.clicks[i], "X");
    }


  } else if (this.clickCounter % 2 === 1) {
    this.playerO.clicks.push(htmlID);
    for (var i = 0; i < this.playerO.clicks.length; i++) {
      displayMark(this.playerO.clicks[i], "O");
    }


  }
}

function Player() {
  this.name;
  this.symbol;
  this.clicks = [];
}


Player.prototype.assignSymbol = function() {

}

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
