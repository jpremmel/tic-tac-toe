// FRONT END
function attachClickListeners() {
  $(".col-xs-4").on("click", ".card", function() {
    console.log("WE GOT HERE");
  });
}

$(document).ready(function(){
  attachClickListeners();
  $("gameForm").submit(function(event){
    event.preventDefault();

  });
});


// BACK END
function Game (playerX, playerO) {
  this.playerX,
  this.playerO

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

function Player (name, symbol) {
  this.name = name;
  this.symbol = symbol;
}

Player.prototype.symbol = function() {
  return this.symbol;
}
