var animalSelector = "#animal";
var allAnimals = [];
var imagePaths = ["images/cow.jpg", "images/bear.jpg", "images/sheep.webp"];
var currentIndex = 0;
class animalInfo {
    constructor(selector, imagePath)
    {
        this.selector = selector
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath;
    }
}

function initializeArray()
{
    var animal = new animalInfo("#animal", imagePaths[0]);
    allAnimals.push(animal);
}

$(document).ready(function(){ 
    initializeArray();
    $(allAnimals[0].theSelector).attr("src", allAnimals[0].theImagePath);

    $("button").click(function(){
        $(".stuff").fadeOut();
        $("#third").toggle();
        setInterval(moveSquare, 1000);
        setTimeout(moveSquare, 1000);
        switchImage();
    });

    setInterval(changeText, 3000);
    setInterval(switchShape, 4000);
});    

function moveSquare()
    {
        $("#square").animate({left:250}, "slow")
        .animate({top:400}, "slow")
        .animate({left:0}, "slow")
        .animate({top:300}, "slow");
    }

function switchImage() {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    allAnimals[0].imagePath = imagePaths[currentIndex];
    
    $(animalSelector).fadeOut(function() {
        $(this).attr("src", imagePaths[currentIndex]).fadeIn();
    });
}

var texts = ["Hello!", "Aloha!", "Goodbye!"];
var textIndex = 0;

function changeText() {
    textIndex = (textIndex + 1) % texts.length;
    $("#movingText").fadeOut(function() {
        $(this).text(texts[textIndex]).fadeIn();
    });
}

var shapes = ["50px", "75px", "100px"];
var shapeIndex = 0;

function switchShape() {
    shapeIndex = (shapeIndex + 1) % shapes.length;
    $("#square").css({
        "width": shapes[shapeIndex],
        "height": shapes[shapeIndex],
        "background-color": shapeIndex % 2 === 0 ? "blue" : "red"
    });
}    
