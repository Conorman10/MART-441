var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6"];
var blankImagePath = "images/blank.jpg";
var actualImages = [];

function printBlankArray()
{
    createRandomImageArray();
    var gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = "";
    for(var i = 0; i < imageTags.length; i++)
    {
        var img = document.createElement("img");
        //This is where I left OFF!!!!!!
    }
}

function createRandomImageArray()
{ 
    var actualImagePath = ["images/rock.jpg", "images/paper.png", "images/scissors.jpg"];
    var count = [0,0];
    while(actualImages.length < 12)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 3)
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] +1
    }
}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];
}



