var level = 0;

$(document).keypress(function (event) {
  //   console.log(event.key);
  if (event.key == "a" || event.key == "A") {
    console.log("Pressed the right button!");
    $("h1").text("Level " + level);
    level++;
  }
});
