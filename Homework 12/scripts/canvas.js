var canvas;
var ctx;
var x = 100;
var y = 100;
var rectangle1, rectangle2;
var direction;
var questions;
var rectangleArray = [];
var lives = 3;
var collectibles = [];
var score = 0;

$(document).ready(function(){
    setup();

    $(this).keypress(function(event){
        getKey(event);

    });
});

function setup(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    rectangle1 = new Rectangle(100,100,100,50,"#0000FF");
    rectangle2 = new Rectangle(400,400,50,100,"#00FF00");

    $.getJSON("data/data.json", function(data) {
        for(var i = 0; i < data.rectangles.length; i++)
        {
            rectangleArray.push(new Rectangle(data.rectangles[i].x, data.rectangles[i].y, data.rectangles[i].h, data.rectangles[i].w, data.rectangles[i].color));
        }
        drawRectangle();
    });

    $.getJSON("data/collectibles.json", function(data) {
        for (let i = 0; i < data.collectibles.length; i++) {
            collectibles.push(new Rectangle(data.collectibles[i].x, data.collectibles[i].y, data.collectibles[i].h, data.collectibles[i].w, data.collectibles[i].color));
        }
        drawRectangle();
    });

}

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }
    var test = hasCollided(rectangle1,rectangle2);
    var test2 = false;
    for(var i = 0; i < rectangleArray.length; i++)
    {

        test2 = hasCollided(rectangle1,rectangleArray[i]);
        if(test2 == true)
        {
            break;
        }
        
    }

    if(test || test2)
    {
        lives--;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }
    
    }
    drawRectangle(); 
    
}

function moveUp()
{
    rectangle1.y-=10;
}
function moveDown()
{
    rectangle1.y+=10;
}
function moveRight()
{
    rectangle1.x+=10;
}
function moveLeft()
{
    rectangle1.x-=10;
}

function drawRectangle()
{
    ctx.clearRect(0,0,1000,1000);
    ctx.fillStyle = rectangle1.mainColor;
    ctx.fillRect(rectangle1.x, rectangle1.y, rectangle1.width, rectangle1.height);
    ctx.fillStyle = rectangle2.mainColor;
    ctx.fillRect(rectangle2.x, rectangle2.y, rectangle2.width, rectangle2.height);
    for(var i = 0; i < rectangleArray.length; i++)
    {
        ctx.fillStyle = rectangleArray[i].mainColor;
        ctx.fillRect(rectangleArray[i].x, rectangleArray[i].y, rectangleArray[i].width, rectangleArray[i].height);
    }

    for (let i = 0; i < collectibles.length; i++) {
        ctx.fillStyle = collectibles[i].mainColor;
        ctx.fillRect(collectibles[i].x, collectibles[i].y, collectibles[i].width, collectibles[i].height);
    }
    
    ctx.font = "30px Times New Roman";
    ctx.fillStyle = "black";
    ctx.fillText("Lives: " + lives, 10, 50);
    ctx.fillText("Score: " + score, 10, 90);

}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

function checkCollectibles() {
    for (let i = collectibles.length - 1; i >= 0; i--) {
        if (hasCollided(rectangle1, collectibles[i])) {
            collectibles.splice(i, 1);
            score++;
        }
    }
}