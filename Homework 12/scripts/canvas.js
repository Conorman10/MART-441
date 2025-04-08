var canvas;
var ctx;
var x = 100;
var y = 100;
var square1, square2;
var direction;
var questions;
var squareArray = [];
var lives = 3;
$(document).ready(function(){
    setup();

    $(this).keypreess(function(event){
        getKey(event);

    });
});

function setup(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    $.getJSON("data/data.json", function(data) {
        for(var i = 0; i < data.square.length; i++)
        {
            rectangleArray.push(new Rectangle(data.rectangles[i].x, data.rectangles[i].y, data.rectangles[i].h, data.rectangles[i].w, data.rectangles[i].color));
        }
        drawRectangle();
    });

}