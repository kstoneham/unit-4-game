// GLOBAL VARIABLES
//----------------------------------------------------
// CRYSTAL VARIABLES
var crystal = {
    purple: {
        name: "purple",    // blue
        value:  0
    },
    white: {
        name: "white",     // green
        value:  0
    },
    blue: {
        name: "blue",      // red
        value: 0
    },
    green: {
        name: "green",     // yellow
        value: 0
    }
}
// TARGET AND CURRENT SCORES
var targetScore = 0;
var currentScore = 0;
// WINS AND LOSSES
var winCount = 0;
var lossCount = 0;
// FUNCTIONS
//----------------------------------------------------
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var startGame = function() {
    // reset current score
    currentScore = 0;
    // set new target score (between 19 and 120)
    targetScore = getRandom(19, 120);
    // set different values for each of the crystals (between 1 and 12)
    crystal.purple.value = getRandom(1,12);
    crystal.white.value = getRandom(1,12);
    crystal.blue.value = getRandom(1,12);
    crystal.green.value = getRandom(1,12);
    // change html to reflect all the changes
    $("#currentScore").html("<p>Current Score: " + currentScore + "</p>");
    $("#targetScore").html("<p>Target Score: " + targetScore + "</p>");
}
var addValues = function(crystal){
    currentScore = currentScore + crystal.value;
    $("#currentScore").html("<p>Current Score: " + currentScore + "</p>");
    // call checkWin function
    checkWin();
}
var checkWin = function(){
    // check if target score and current score match
    if (currentScore > targetScore){
        alert("You lost!");
        lossCount++;
        $("#stats").html(
            "<p>Wins: " + winCount + "</p>" +
            "<p>Losses: " + lossCount + "</p>"
        );
        startGame();
    }else if(currentScore === targetScore){
        alert("Congratulations!  You won!");
        winCount++;
        $("#stats").html(
            "<p>Wins: " + winCount + "</p>" +
            "<p>Losses: " + lossCount + "</p>"
        );
        startGame();
    }
}
// MAIN PROCESS
//----------------------------------------------------
startGame();
$("#crystal1").click(function(){
    addValues(crystal.purple);
});
$("#crystal2").click(function(){
    addValues(crystal.white);
});
$("#crystal3").click(function(){
    addValues(crystal.blue);
});
$("#crystal4").click(function(){
    addValues(crystal.green);
});

