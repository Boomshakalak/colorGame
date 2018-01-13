var numOfSquares = 9;
var colors = generateColor(numOfSquares);
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var resetButton = document.getElementById("reset");
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

easy.addEventListener("click", function(){
    this.classList.add("selected");
    hard.classList.remove("selected");
    numOfSquares = 3;
    colors = generateColor(numOfSquares);
    colorDisplay.textContent = pickColor();
    for (var i = 0; i < squares.length ; i++){
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    message.textContent = "";
});
hard.addEventListener("click", function(){
    this.classList.add("selected");
    easy.classList.remove("selected");
    numOfSquares = 9;
    for (var i = 0; i < squares.length ; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    message.textContent = "";
});

colorDisplay.textContent = pickColor();

resetButton.addEventListener("click", function() {
    colors = generateColor(numOfSquares);
    colorDisplay.textContent = pickColor();
    resetButton.textContent = "New Colors";
    for (var i = 0 ; i < colors.length ; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
    this.textContent = "New Colors";
});
for (var i = 0 ; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
        if (this.style.backgroundColor === colorDisplay.textContent){
            changeColor(colorDisplay.textContent);
            h1.style.backgroundColor = colorDisplay.textContent;
            message.textContent = "Correct!!";
            resetButton.textContent = "Play again?";
        }
        else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try again!";
        }
    })
}

function changeColor(color) {
    for (var i = 0 ; i < squares.length ; i++) squares[i].style.backgroundColor = color;
}

function pickColor() {
    var r = Math.floor(Math.random() * colors.length);
    return colors[r];
}

function generateColor(num) {
    var array = [];
    for (var i = 0 ; i < num; i++) {
        array.push(randomColor());
    }
    return array;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", " + g + ", " + b + ")";
}