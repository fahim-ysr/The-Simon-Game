// "use strict";

const buttonColors = ["red", "green", "blue", "yellow"];
var randomChosenColor;
const gamePattern = [];
const userClickedPattern = [];

// *Step 2: Create A New Pattern that chooses a random color from the array buttonColors

// This selects a random color from array buttonColors and adds to the array gamePattern
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);

  // *Step 3: Showing the sequence to user with animations and sounds
  // Press the specific button (Keydown action)
  $(`.${randomChosenColor}`).addClass("pressed");

  // Removes the press from the button after 100ms (Keyup action)
  setTimeout(function () {
    $(`.${randomChosenColor}`).removeClass("pressed");
  }, 100);

  // !Step 5 Continued: Plays sound of the corresponding button
  playSound(randomChosenColor);
}

// Used for verification purposes
nextSequence();

// *Step 4: Checking Which Button is Pressed and adding the corresponding audio

// Creating the handler function to detect which colors are chosen
$(".btn").on("click", function () {
  // alert("Clicked!"); // Just to check if button clicks are detected
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);

  // !Step 5 Continued: Plays sound of buttons clicked
  playSound(userChosenColor);
});

// *Step 5: Added sounds to button clicks
function playSound(name) {
  var audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}
