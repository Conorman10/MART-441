var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12"];
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
        img.src = blankImagePath;
        img.id = imageTags[i];
        img.dataset.index = i;
        img.onclick = function ()
        {
            flipImage(this.id);
        };
        gameBoard.appendChild(img);
    }
}

function createRandomImageArray()
{ 
    var actualImagePath = ["images/rock.jpg", "images/paper.png", "images/scissors.jpg"];
    var count = [0, 0, 0];
    while(actualImages.length < 12)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length);
        if(count[randomNumber] < 4) 
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber]++;
        }
    }
}

function flipImage(id)
{
    var index = imageTags.indexOf(id);
    if (index !== -1)
    {
        document.getElementById(id).src = actualImages[index];

    }
}



