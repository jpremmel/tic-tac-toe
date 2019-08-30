// FRONT END //
var myGame = new Game();

function attachClickListeners() {
  $(".game").on("click", function() {
    determineClickedSpace(this.id);
  });
}

function determineClickedSpace(id) {
  if (!$("." + id).text()) {
    myGame.logClicks(id);
  }
}

function displayMark(id, symbol) {
  $("." + id).text(symbol);
}

function declareWinner(winner) {
  if (!$("#game-result").text()) {
    if (winner === "X") {
      $("#game-result").text($("#playerX").text() + " wins!");
      $(".end").show();
    } else if (winner === "O") {
      $("#game-result").text($("#playerO").text() + " wins!");
      $(".end").show();
    }
  }
}

function declareTie() {
  if (!$("#game-result").text()) {
    $("#game-result").text("It's a tie!");
    $(".end").show();
  }
}

$(document).ready(function() {
  attachClickListeners();
  $(".gameForm").submit(function(event) {
    event.preventDefault();
    myGame.playerX.name = $("#playerXname").val();
    myGame.playerO.name = $("#playerOname").val();
    $(".gameForm").hide();
    $("#playerX").text(myGame.playerX.name);
    $("#playerO").text(myGame.playerO.name);
    $("#players").show();
    $(".grid").addClass("gridDisplay").show();
  });
  $("#rematch").click(function() {
    myGame.emptyClicks();
    $(".end").hide();
    $(".space").text("");
    $("#game-result").text("");
  });
  $("#newgame").click(function() {
    myGame.emptyClicks();
    $(".end").hide();
    $("#players").hide();
    $(".grid").hide();
    $(".gameForm").show();
    $(".space").text("");
    $("#game-result").text("");
    $("input#playerXname").val("");
    $("input#playerOname").val("");
  });
});

// BACK END //
function Game() {
  this.playerX = new Player("X");
  this.playerO = new Player("O");
  this.clickCounter = 0;
}

Game.prototype.logClicks = function(htmlID) {
  this.clickCounter++;
  if (this.clickCounter % 2 === 1) {
    this.playerX.clicks.push(htmlID);
    for (var i = 0; i < this.playerX.clicks.length; i++) {
      displayMark(this.playerX.clicks[i], "X");
    }
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

Game.prototype.emptyClicks = function() {
  this.playerX.clicks = [];
  this.playerO.clicks = [];
  this.clickCounter = 0;
}

function Player(symbol) {
  this.name;
  this.symbol = symbol;
  this.clicks = [];
}

Player.prototype.findWinner = function() {
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
