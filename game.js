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
}

// Used for verification purposes
nextSequence();
