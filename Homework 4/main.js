document.addEventListener("DOMContentLoaded", function () {
    const restartButton = document.getElementById("restartButton");
    const btnSubmit1 = document.getElementById("btnSubmit");
    const btnSubmit2 = document.getElementById("btnSubmit2");
    const btnSubmit3 = document.getElementById("btnSubmit3");

    if (restartButton) restartButton.addEventListener("click", restartStory);
    if (btnSubmit1) btnSubmit1.addEventListener("click", getChoice1);
    if (btnSubmit2) btnSubmit2.addEventListener("click", getChoice2);
    if (btnSubmit3) btnSubmit3.addEventListener("click", getChoice3);
});

function updateScene(image, text) {
    document.getElementById("mainImage").src = image;
    document.getElementById("question").innerHTML = text;
}

function getUserInput(id) {
    return document.getElementById(id).value.toLowerCase().trim();
}

function restartStory() {
    updateScene("images/forest.jpg", "You are asked an important question: What do you prefer? waffles or ice Cream?");
    
    document.getElementById("choice").value = "";
    document.getElementById("choice2").value = "";
    document.getElementById("choice3").value = "";

    toggleElements(["choice", "btnSubmit"], "block");
    toggleElements(["choice2", "btnSubmit2", "choice3", "btnSubmit3"], "none");

    document.getElementById("restartButton").style.display = "none";
}

function toggleElements(elements, display) {
    elements.forEach(id => {
        let element = document.getElementById(id);
        if (element) element.style.display = display;
    });
}

function getChoice1() {
    let myChoice = getUserInput("choice");
    document.getElementById("restartButton").style.display = "block";

    let validChoices = ["waffles", "ice cream"];

    while (!validChoices.includes(myChoice)) {
        updateScene("images/forest.jpg", "Invalid answer. Please enter 'waffles' or 'ice cream'.");
        return;
    }

    if (myChoice === "waffles") {
        toggleElements(["choice", "btnSubmit"], "none");
        toggleElements(["choice2", "btnSubmit2"], "block");
        updateScene("images/forest.jpg", "Hmmm, waffles are super duper cool. Hmmmmmmmm maybe you are okay. Next question, what is your favorite movie: morbius or madame web?");
    } else {
        toggleElements(["choice", "btnSubmit"], "none");
        toggleElements(["choice3", "btnSubmit3"], "block");
        updateScene("images/forest.jpg", "Hmmm, ice cream is pretty alright I guess... perhaps you are a human after all. But, if you don't mind me asking, what is your favorite movie: morbius or madame web?");
    }
}

function getChoice2() {
    let answer = getUserInput("choice2");

    if (answer === "morbius") {
        updateScene("images/unhappyDeer.jpeg", "Wow, you are pitiful and disgusting! How dare you even try to call yourself a human?! I'm getting away from you!!");
    } else if (answer === "madame web") {
        updateScene("images/happyDeer.jpeg", "Alas, somebody with taste. You are free to pass by. Enjoy your day!");
    } else {
        updateScene("images/forest.jpg", "Invalid answer. Please enter 'morbius' or 'madame Web'.");
    }
}

function getChoice3() {
    let answer = getUserInput("choice3");

    if (answer === "morbius") {
        updateScene("images/unhappyDeer.jpeg", "Wow, you are pitiful and disgusting! How dare you even try to call yourself a human?! I'm getting away from you!!");
    } else if (answer === "madame web") {
        updateScene("images/happyDeer.jpeg", "Alas, somebody with taste. You are free to pass by. Enjoy your day!");
    } else {
        updateScene("images/forest.jpg", "Invalid answer. Please enter 'Morbius' or 'Madame Web'.");
    }
}


