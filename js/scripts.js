// FRONT END
var myGame = new Game();
// console.log(myGame.playerX.name);

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
  $(".gameForm").submit(function(event){
    event.preventDefault();
    var playerXname = $("#playerXname").val();
    var playerOname = $("#playerOname").val()
    console.log(playerXname);
    console.log(playerOname);

  });
});


// BACK END
function Game (name1, name2) {
  this.clickCounter = 0;
  this.playerX = new Player(name1);
  this.playerO = new Player(name2);

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

}

function Player (name, symbol) {
  this.name = name;
  this.symbol = symbol;
  this.clicks = [];
}


Player.prototype.assignSymbol = function() {

}
