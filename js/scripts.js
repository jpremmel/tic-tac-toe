// FRONT END
$(document).ready(function(){
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

Board.prototype.makeGrid = function() {
  //method to create 3x3 grid of spaces
}

Board.prototype.findWinner = function() {
  //look for three in a row
}

function Space (col, row) {
  this.col = col;
  this.row = row;
}

Space.prototype.mark(player) {
  //method for being marked by either playerX or playerO
}

function Player (name, symbol) {
  this.name = name;
  this.symbol = symbol;
}

Player.prototype.symbol () {
  return this.symbol;
}
