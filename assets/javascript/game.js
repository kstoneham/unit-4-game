// DONE: Start the game
var targetScore = Math.floor(Math.random() * 101 + 19 );
var crystal1 = Math.floor(Math.random() * 11 + 1);
var crystal2 = Math.floor(Math.random() * 11 + 1);
var crystal3 = Math.floor(Math.random() * 11 + 1);
var crystal4 = Math.floor(Math.random() * 11 + 1);
var wins = 0;
var losses = 0;
var playerScore = 0;
$("#target-score").text(targetScore);
$("#score").text(playerScore);
console.log("target-score: " + targetScore);
console.log("crystals 1-4: " + crystal1 + "," + crystal2 + "," + crystal3 + "," + crystal4);

// TODO: click events for crystals to send values to html
$("#crystal1").on("click", function(){
    var crystal1Value = $(this).attr(crystal1);
    crystal1Value = parseInt(crystal1Value);
    playerScore += crystal1Value;

});

// TODO: if statement for win

// TODO: if statement for loss