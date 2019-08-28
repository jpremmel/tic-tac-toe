// FRONT END
var myGame = new Game();
function attachClickListeners() {
  $(".col-xs-4").on("click", ".card", function() {
    var clicked = this.id;
    console.log(myGame.board.mark());
    console.log(clicked);
    console.log(myGame.board.increaseClickCount());
  });
}

$(document).ready(function(){
  attachClickListeners();
  $(".gameForm").submit(function(event){
    event.preventDefault();
    var playerXname = $("#playerXname").val();
    var playerOname = $("#playerOname").val();
    myGame.playerX = playerXname;
    myGame.playerO = playerOname;
  });
});


// BACK END
function Game () {
  this.board = new Board();
  this.playerX = new Player();
  this.playerO = new Player();
}


function Board () {
  this.clickCounter = 0;
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

Board.prototype.increaseClickCount = function () {
  return this.clickCounter++
}
Board.prototype.emptyGrid = function() {
  //method to create 3x3 grid of spaces
}

Board.prototype.findWinner = function() {
  //look for three in a row
}

Board.prototype.mark = function(htmlID) {
  if (this.clickCounter % 2 === 0){
    console.log("WE ARE HERE");
    // playerX.clicks.push(htmlID);

  }
}

function Player () {
  this.name;
  this.symbol;
  this.clicks = [];
}


Player.prototype.assignSymbol = function() {

}
