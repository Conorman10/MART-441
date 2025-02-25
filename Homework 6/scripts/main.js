function storePlayerInfo() {
    let player = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        age: document.getElementById("age").value,
        attempts: 0
    };
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location.href = "game.html"; 
}

function loadPlayerResults() {
    let player = JSON.parse(localStorage.getItem("playerInfo"));
    if (player) {
        document.getElementById("playerInfo").innerHTML = 
            `Name: ${player.firstname} ${player.lastname} <br> 
             Age: ${player.age} <br> 
             Attempts: ${player.attempts}`;
    }
}

var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12"];
var blankImagePath = "images/blank.jpg";
var actualImages = [];
var attempts = 0;
var flippedCards = [];
var matchedPairs = 0;

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
    var actualImagePath = ["images/rock.jpg", "images/paper.png", "images/scissors.jpg", "images/fire.jpg", "images/water.jpg", "images/grass.avif"];
    var count = [0, 0, 0, 0, 0, 0];
    while(actualImages.length < 12)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length);
        if(count[randomNumber] < 2) 
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber]++;
        }
    }
}

function flipImage(id)
{
    var index = imageTags.indexOf(id);
    if (index !== -1 && flippedCards.length < 2) {
        let img = document.getElementById(id);
        img.src = actualImages[index];
        flippedCards.push({ id, index});
        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 500);
            attempts++;
        }
    }
}


function checkForMatch() {
    let [first, second] = flippedCards;
    if (actualImages[first.index] === actualImages[second.index]) {
        matchedPairs++;
    } else {
        document.getElementById(first.id).src = blankImagePath;
        document.getElementById(second.id).src = blankImagePath;
    }
    flippedCards = [];
    checkGameCompletion();
}

function checkGameCompletion() {
    if (matchedPairs === 6) {  
        let player = JSON.parse(localStorage.getItem("playerInfo"));
        if (player) {
            player.attempts = attempts;  
            localStorage.setItem("playerInfo", JSON.stringify(player));  
            setTimeout(() => {
                window.location.href = "result.html";  
            }, 1000); 
        }
    }
}

