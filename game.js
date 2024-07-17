"use strict";

const buttonColors = ["red", "green", "blue", "yellow"];
var randomChosenColor;
const gamePattern = [];
const userClickedPattern = [];

var started = false;
var level = 0;

// *Step 2: Create A New Pattern that chooses a random color from the array buttonColors

// This selects a random color from array buttonColors and adds to the array gamePattern
function nextSequence() {
  // !Step 7 Continued: Increments the game level
  level++;
  // Updates the level displayed after increment
  $("#level-title").text(`Level ${level}`);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);

  /*  // !Step 6 Continued: Shows button animation
  // *Step 3: Showing the sequence to user with animations and sounds
  // Press the specific button (Keydown action)
  $(`.${randomChosenColor}`).addClass("pressed");

  // Removes the press from the button after 100ms (Keyup action)
  setTimeout(function () {
    $(`.${randomChosenColor}`).removeClass("pressed");
  }, 100);
  */
  animatePress(randomChosenColor);

  // !Step 5 Continued: Plays sound of the corresponding button
  playSound(randomChosenColor);
}

/*
// Used for verification purposes
nextSequence();
*/

// *Step 4: Checking Which Button is Pressed and adding the corresponding audio

// Creating the handler function to detect which colors are chosen
$(".btn").on("click", function () {
  // alert("Clicked!"); // Just to check if button clicks are detected
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);

  // !Step 5 Continued: Plays sound of buttons clicked
  playSound(userChosenColor);

  // !Step 6 Continued: Shows button press animation
  animatePress(userChosenColor);

  // !Step 8 Continued: Checks answer
  // Sends the last index of array as a parameter to checkAnswer for pattern validation
  checkAnswer(userClickedPattern.length - 1);
});

// *Step 5: Added sounds to button clicks
function playSound(name) {
  var audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

// *Step 6: Added animations to user clicks
function animatePress(currentColor) {
  // Adds the press effect
  $(`.${currentColor}`).addClass("pressed");
  // Removes the press effect
  setTimeout(function () {
    $(`.${currentColor}`).removeClass("pressed");
  }, 100);
}

// *Step 7: Starting the game
$(document).keypress(function () {
  if (!started) {
    $("#level-title").text(`Level ${level}`);
    nextSequence();
    started = true;
  }
});

// *Step 8: Checks the user's input sequence against the game's pattern sequence (Pattern Validation)
function checkAnswer(curretLevel) {
  if (userClickedPattern[curretLevel] == gamePattern[curretLevel]) {
    // User clicked the right buttons as the game pattern
    console.log("Success!");
    // Checks if the user has the right pattern as the game pattern
    if (userClickedPattern.toString() == gamePattern.toString()) {
      setTimeout(function () {
        nextSequence();
        // Empties userClickedPattern array
        userClickedPattern.length = 0;
      }, 1000);
    }
  } else {
    // User did not click the right patterns as the game pattern
    console.log("Fail!");
  }
}
