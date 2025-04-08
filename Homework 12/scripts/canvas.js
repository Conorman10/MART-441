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
    canvas = document.getElementById("")
}