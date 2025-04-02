var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 100;
var y2 = 100;
var square1;
var square2;

createSquares();
moveBlueSquare();

setInterval(moveBlueSquare, 5000);

function createSquares() {
    square1 = new Square(x, y, 100, 100, "Red");
    square2 = new Square(x2, y2, 200, 200, "Blue");
}

function moveBlueSquare() {
    square2.setX(Math.floor(Math.random() * (canvas.width - square2.theWidth)));
    square2.setY(Math.floor(Math.random() * (canvas.height - square2.theHeight)));

    setTimeout(moveBlueSquare, 5000);
}

function drawSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);

    requestAnimationFrame(drawSquare);
}

requestAnimationFrame(drawSquare)

$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});

function getKey(event) {
    var didCollide = hasCollided(square1, square2);
    if (didCollide) {
        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        square1.setWidth(Math.max(square1.theWidth - 1));
        square1.setHeight(Math.max(square1.theHeight - 1));
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