<<<<<<< HEAD
"use strict";
=======
>>>>>>> 16db6ea6e7a6c962a297341fb2547e862f56101a
/* 
var level = 0;

$(document).keypress(function (event) {
  //   console.log(event.key);
  if (event.key == "a" || event.key == "A") {
    console.log("Pressed the right button!");
    $("h1").text("Level " + level);
    level++;
  }
});
*/

const buttonColors = ["red", "green", "blue", "yellow"];
var randomChosenColor;
const gamePattern = [];

// *Step 2: Create A New Pattern that chooses a random color from the array buttonColors

// This selects a random color from array buttonColors and adds to the array gamePattern
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  gamePattern.push(buttonColors[randomNumber]);
  console.log(gamePattern);

  // *Step 3: Showing the sequence to user with animations and sounds
  // Press the specific button (Keydown action)
  $(`.${buttonColors[randomNumber]}`).addClass("pressed");

  // Removes the press from the button after 100ms (Keyup action)
  setTimeout(function () {
    $(`.${buttonColors[randomNumber]}`).removeClass("pressed");
  }, 100);

  function play() {
    var audio = new Audio(`sounds/${buttonColors[randomNumber]}.mp3`);
    // console.log(audio);  //For checking if audio file is correct
    audio.play();
  }
  play();
}

// Used for verification purposes
nextSequence();
