document.addEventListener("DOMContentLoaded", function () {    
    const storyText = document.getElementById("storyText");
    const userInput = document.getElementById("userInput");
    const submitButton = document.getElementById("submitButton");
    const restartButton = document.getElementById("restartButton");
    const storyImage = document.getElementById("storyImage");
    function getChoice1()
        {
            var myChoice = document.getElementById("choice").ariaValueMax;
            var myQuestion = document.getElementById("question");
        }
        
        restartButton.addEventListener("click", function () {
            storyStage = 0;
            storyText.innerHTML = "You are driving down a dirt road heading nowhere in particular. You come to a T in the street. Which way do you go? Left or Right?";
            storyImage.src = "road.jpg";
            restartButton.style.display = "none";
        });    
    }        