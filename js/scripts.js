// FRONT END
var myGame = new Game();

function attachClickListeners() {
  $(".col-xs-4").on("click", ".card", function() {
    var clicked = this.id;
    console.log(clicked);
    myGame.clickCounter++;
    console.log(myGame.clickCounter);
  });
}

$(document).ready(function(){
  attachClickListeners();
  $("gameForm").submit(function(event){
    event.preventDefault();

  });
});


// BACK END
function Game () {
  this.clickCounter = 0;
}

function Board () {

}

Board.prototype.emptyGrid = function() {
  //method to create 3x3 grid of spaces
}

Board.prototype.findWinner = function() {
  //look for three in a row
}

function Space (col, row) {
  this.col = col;
  this.row = row;
}

Space.prototype.mark = function(Player) {
  //method for being marked by either playerX or playerO
}

function Player (name) {
  this.name = name;
  this.clicks = [];
}


Player.prototype.symbol = function() {
  return this.symbol;
}
