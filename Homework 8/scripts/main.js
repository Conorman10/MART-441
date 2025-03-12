//variables
var animalSelector = "#animal";
var allAnimals = [];
var imagePaths = ["images/cow.jpg", "images/bear.jpg", "images/sheep.webp"];
var currentIndex = 0;

//Javascript
class animalInfo {
    constructor(selector, imagePath) {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector() {
        return this.selector;
    }

    get theImagePath() {
        return this.imagePath;
    }

    toString() {
        return this.selector + ":" + this.imagePath;
    }
}

//Array
function initializeArray() {
    var animal = new animalInfo("#animal", imagePaths[0]);
    allAnimals.push(animal);
}

//jQuery start function
$(document).ready(function() { 
    initializeArray();
    $(allAnimals[0].theSelector).attr("src", allAnimals[0].theImagePath);

    $("#move").click(function(){
        $(".stuff").fadeOut();
        $("#third").toggle();
        moveSquare();
        moveCircle();
        moveImage();
        switchImage();
    });

    setInterval(changeText, 3000);
    setInterval(switchShape, 4000);
});

//Square function
function moveSquare() {
    $("#square").animate({
        left: Math.random() * 300 + "px",
        top: Math.random() * 200 + "px"
    }, "slow");
}

//Circle function
function moveCircle() {
    let maxWidth = $(window).width() - $("#circle").width();
    let maxHeight = $(window).height() - $("#circle").height();

    $("#circle").animate({
        left: Math.random() * maxWidth + "px",
        top: Math.random() * maxHeight + "px"
    }, "slow");
}

//Image Function
function moveImage() {
    let maxWidth = $(window).width() - $("#animal").width();
    let maxHeight = $(window).height() - $("#animal").height();
    
    $("#animal").animate({
        left: Math.random() * maxWidth + "px",
        top: Math.random() * maxHeight + "px"
    }, "slow");
}

//Switch Image
function switchImage() {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    allAnimals[0].imagePath = imagePaths[currentIndex];

    $(animalSelector).fadeOut(function() {
        $(this).attr("src", allAnimals[0].theImagePath).fadeIn();
    });
}

//Text variables
var texts = ["Hello!", "Aloha!", "Goodbye!"];
var textIndex = 0;

//Text function
function changeText() {
    textIndex = (textIndex + 1) % texts.length;
    $("#movingText").fadeOut(function() {
        $(this).text(texts[textIndex]).fadeIn();
    }).animate({ left: Math.random() * 300 + "px", top: Math.random() * 200 + "px" }, "slow");
}

//Shape Variables
var shapes = ["50px", "75px", "100px"];
var shapeIndex = 0;

//Shape Functions (sheesh)
function switchShape() {
    shapeIndex = (shapeIndex + 1) % shapes.length;

    let squareMaxX = $(window).width() - $("#square").width();
    let squareMaxY = $(window).height() - $("#square").height();
    let circleMaxX = $(window).width() - $("#circle").width();
    let circleMaxY = $(window).height() - $("#circle").height();
    let squareNewX = Math.random() * squareMaxX;
    let squareNewY = Math.random() * squareMaxY;
    let circleNewX = Math.random() * circleMaxX;
    let circleNewY = Math.random() * circleMaxY;

    $("#square").css({
        "width": shapes[shapeIndex],
        "height": shapes[shapeIndex],
        "background-color": shapeIndex % 2 === 0 ? "blue" : "red"
    }).animate({
        left: squareNewX + "px",
        top: squareNewY + "px"
    }, "slow");

    $("#circle").css({
        "width": shapes[shapeIndex],
        "height": shapes[shapeIndex],
        "background-color": shapeIndex % 2 === 0 ? "red" : "blue"
    }).animate({
        left: circleNewX + "px",
        top: circleNewY + "px"
    }, "slow");
}
