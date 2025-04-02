var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 100;
var y2 = 100;
var square1;
var square2;

createSquares();

drawSquare();

setInterval(moveBlueSquare, 5000);

setInterval(drawSquare, 50);

function createSquares() {
    square1 = new Square(x, y, 100, 100, "Red");
    square2 = new Square(x2, y2, 200, 200, "Blue");
}

function moveBlueSquare() {
    square2.setX(Math.floor(Math.random() * (canvas.width - square2.theWidth)));
    square2.setY(Math.floor(Math.random() * (canvas.height - square2.theHeight)));
}

function drawSquare() {
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.X, square1.Y, square1.Width, square1.Height);
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.X, square2.Y, square2.Width, square2.Height);
}

$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});

function getKey(event) {
    var didCollide = hasCollided(square1, square2);
    if (didCollide) {
        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        square1.setWidth(square1.theWidth - 1);
        square1.setHeight(square1.theHeight - 1);
        square2.setWidth(square2.theWidth + 1);
        square2.setHeight(square2.theHeight + 1);
    }
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w") {
        moveUp();
    } else if (actualLetter == "s") {
        moveDown();
    } else if (actualLetter == "d") {
        moveRight();
    } else if (actualLetter == "a") {
        moveLeft();
    }
    drawSquare();
}

function moveUp() {
    square1.setY(square1.theY - 10);
}

function moveDown() {
    square1.setY(square1.theY + 10);
}

function moveLeft() {
    square1.setX(square1.theX - 10);
}

function moveRight() {
    square1.setX(square1.theX + 10);
}

function hasCollided(object1, object2) {
    return !(
        ((object1.theY + object1.theHeight) < (object2.theY)) ||
        (object1.theY > (object2.theY + object2.theHeight)) ||
        ((object1.theX + object1.theWidth) < object2.theX) ||
        (object1.theX > (object2.theX + object2.theWidth))
    );
}