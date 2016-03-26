//var keeps track of easy or hard
var numSquares = 6;

var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("#header");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy-btn");
var hardBtn = document.querySelector("#hard-btn");


easyBtn.addEventListener("click", function(){
  // removes selected class on hard when easy is clicked
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  header.style.background = "#3399ff";
  numSquares = 3
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++) {
    // check if there's a color at that index (there is because we generated 3 new random colors)
    if (colors[i]) {
      // apply those random colors to the 3 squares
      squares[i].style.background = colors[i];
    }  else {
        // gives the other 3 squares no color, because we've only generated new colors for the first 3 square
        squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  header.style.background = "#3399ff";
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++) {
    // check if there's a color at that index (there is because we generated 3 new random colors)
    if (colors[i]) {
      // apply those random colors to the 6 squares
      squares[i].style.background = colors[i];
      // show all hidden squares
      squares[i].style.display = "block";
    }
  }
});

resetButton.addEventListener("click", function(){
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change color display to match pickedColor
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  header.style.background = "#3399ff";
});

// Update color display
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {

  // add initial colors to squares
  squares[i].style.background = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function(){

    // grab color of clicked square
    var clickedColor = this.style.background;

    // compare colors to pickedColor
    // console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "You got it!";
      resetButton.textContent = "Play Again?";
      // passes clickedColors into changedColors to match color with each square on every iteration thru loop
      changeColors(clickedColor);
      header.style.background = clickedColor;
    } else {
      this.style.background="#3399ff";
      messageDisplay.textContent = "Try again!";
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for(var i = 0; i < squares.length; i++) {
  //change each square to match given color
  // clickedColor replace "color" when called
  squares[i].style.background = color;
  }
}

function pickColor() {
  // picks random color based on length of array
  var random = Math.floor(Math.random() * colors.length);
  // access element in arrray randomly
  return colors[random];
}

// num is the amount of colors want to generate
function generateRandomColors(num) {
  // make array
  var arr = [];
  // repeat num times
  for(var i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor() {
  // rounding down so want to multiply by one more than 255.
  // pick a "red" from 0 - 255
  var red = Math.floor(Math.random() * 256);

  // pick a "green" from 0 - 255
  var green = Math.floor(Math.random() * 256);

  // pick a "blue" from 0 - 255
  var blue = Math.floor(Math.random() * 256);

  // placed above values into a concatonated string
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
