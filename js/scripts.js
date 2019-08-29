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
// this function displays
function declareWinner(winner) {
  console.log(winner);
  if (winner === "X") {
    $("#game-result").text("Player X wins!");
    $(".end").show();
  } else if (winner === "O") {
    $("#game-result").text("Player O wins!");
    $(".end").show();
  }
}
function declareTie() {
  $("#game-result").text("It's a tie!");
  $(".end").show();
}
$(document).ready(function() {
  // click listener is what tells us which space on the board has been clicked
  attachClickListeners();
  $(".gameForm").submit(function(event) {
    event.preventDefault();
    // this is where we take the input values (player's names) and assign them to the name property of each player object
    myGame.playerX.name = $("#playerXname").val();
    myGame.playerO.name = $("#playerOname").val();
    $(".grid").addClass("gridDisplay").show();
  });
  // this rematch  click function tells the page what to do when the rematch button is clicked
  $("#rematch").click(function() {
    $(".end").hide();
    myGame.emptyClicks();
    $(".space").text("");
    $("#game-result").text("");
  });
  // this new game function tells the page what to do when the new game button is clicked
  $("#newgame").click(function() {
    $(".end").hide();
    myGame.emptyClicks();
    $(".space").text("");
    $("input#playerXname").val("");
    $("input#playerOname").val("");
    $("#game-result").text("");
  });
});
// BACK END
// game constructor
function Game() {
  this.playerX = new Player("X");
  this.playerO = new Player("O");
  // this is an empty number var we start at zero so that we can add "clicks" to it
  this.clickCounter = 0;
}

// this method logs the clicks and increase 1 to the clickCounter var.
Game.prototype.logClicks = function(htmlID) {
  console.log(this.clickCounter++);
  // the % will return a 0 or a 1 depending on whether the clickCounter is even or odd
  if (this.clickCounter % 2 === 1) {
    this.playerX.clicks.push(htmlID);
    // loops through playerX's click array to mark clicked spaces with an X
    for (var i = 0; i < this.playerX.clicks.length; i++) {
      displayMark(this.playerX.clicks[i], "X");
    }
    // this if statement calls the findWinner function to see if playerX has won. If findWinner returns true, it calls the declare winner function. We made the declareWInner function specicifcally to be called here- its in the front end because its pops up on the UI (changes the HTML).
    if (this.playerX.findWinner()) {
    declareWinner(this.playerX.symbol);
    }
  } else if (this.clickCounter % 2 === 0) {
    this.playerO.clicks.push(htmlID);
    for (var i = 0; i < this.playerO.clicks.length; i++) {
      displayMark(this.playerO.clicks[i], "O");
    }
    if (this.playerO.findWinner()) {
      declareWinner(this.playerO.symbol);
    }
  }
  if (this.clickCounter === 9) {
    declareTie();
  }
}
// this method empties the click arrays and click counter. its called above when the user clickc the rematch/start over buttons
Game.prototype.emptyClicks = function() {
  this.playerX.clicks = [];
  this.playerO.clicks = [];
  this.clickCounter = 0;
}

// this is the back end method to check and see if anyone has won the game by checking the contents ofa players click array. this function is called by each player after each click.
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
function Player(symbol) {
  this.name;
  this.symbol = symbol;
  this.clicks = [];
}
