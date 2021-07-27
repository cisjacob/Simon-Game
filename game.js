var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var userClickedPattern = [];

function playSound(name){
    var color = new Audio("sounds/" + name + ".mp3");
    color.play();
}

$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    
});

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).toggleClass("hide");
    setTimeout(function(){
        $("#" + randomChosenColour).toggleClass("hide");
    }, 250);

    playSound(randomChosenColour);
   
}