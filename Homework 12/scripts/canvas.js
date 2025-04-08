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

    $(this).keydown(function(event){
        getKey(event);

    });
});

function setup(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    rectangle1 = new Rectangle(50, 50, 50, 50, "#FF1493");
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

        setTimeout(() => invincible = false, 1000);
    });

}

function getKey(event) {
    let key = event.key.toLowerCase();
    let prevX = rectangle1.x;
    let prevY = rectangle1.y;

    
    if (key === "ArrowUp" || key === "w") {
        rectangle1.y -= 10;
        direction = "up";
    } else if (key === "ArrowDown" || key === "s") {
        rectangle1.y += 10;
        direction = "down";
    } else if (key === "ArrowLeft" || key === "a") {
        rectangle1.x -= 10;
        direction = "left";
    } else if (key === "ArrowRight" || key === "d") {
        rectangle1.x += 10;
        direction = "right";
    }

    
    let hitObstacle = hasCollided(rectangle1, rectangle2) || rectangleArray.some(rect => hasCollided(rectangle1, rect));

    if (hitObstacle) {
        console.log("Collision detected with something!");
        rectangle1.x = prevX;
        rectangle1.y = prevY;
        if (!invincible) {
            lives--;
        }
    }

    if (hitObstacle) {
        console.log("Collision detected with something!");
    }

    checkCollectibles();  
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

function drawBackground() {
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#ff7f50"); // coral
    gradient.addColorStop(1, "#1e90ff"); // dodger blue
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawRectangle()
{
    drawBackground();
    ctx.clearRect(0,0,1000,1000);

    ctx.fillStyle = rectangle1.mainColor;
    ctx.fillRect(rectangle1.x, rectangle1.y, rectangle1.width, rectangle1.height);
    ctx.strokeStyle = "#FFD700"; 
    ctx.lineWidth = 4;
    ctx.strokeRect(rectangle1.x, rectangle1.y, rectangle1.width, rectangle1.height);

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
        ctx.strokeStyle = "#FF00FF"; 
        ctx.lineWidth = 2;
        ctx.strokeRect(collectibles[i].x, collectibles[i].y, collectibles[i].width, collectibles[i].height);
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

let invincible = true;
setTimeout(() => invincible = false, 1000);