function addToPlayer() {
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;

    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "game.html";
}

function playerInfo() {
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    var str = "Name: " + player.firstname + " " + player.lastname + "<br>" + 
    "Age: " + player.age + "<br>" + "Score: " + player.score;
    if(document.getElementById("endInformation") != null) {
        document.getElementById("endInformation").innerHTML = str;
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
    var actualImagePath = ["images/rock.jpg", "images/paper.png", "images/scissors.jpg", "images/fire.webp", "images/water.jpg", "images/grass.avif"];
    var count = [0, 0, 0, 0, 0, 0];
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
        let player = JSON.parse(localStorage.getItem("player"));
        player.attempts = attempts;
        localStorage.setItem("player", JSON.stringify(player));
        window.location.href = "result.html"; // Redirect to result page
    }
}


