function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Pingus walks onwards in search of his friends and family. On the way, he sees a shadowy figure.";
        document.getElementById("choice1").innerHTML = "Walks toward it";
        document.getElementById("choice2").innerHTML = "Walk away from it";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "TOO BAD! You're helping Pingus anyways. Pingus stumbles upon a hole in the ground. It looks like a tunnel.";
        document.getElementById("choice1").innerHTML = "Go into the tunnel and be brave";
        document.getElementById("choice2").innerHTML = "Look for someplace else";
    } else if (choice == 1 && answer1 == "Walk toward it") {
        document.getElementById("story").innerHTML = "Pingus walks towards the shadowy figure. As he gets closer, he notices it's a human!";
        document.getElementById("choice1").innerHTML = "Say hi to the human";
        document.getElementById("choice2").innerHTML = "Waddle away";
    } else if (choice == 2 && answer2 == "Walk away from it") {
        document.getElementById("story").innerHTML = "Pingus walks in a different direction. As he walks, he stumbles upon a large body of water. It looks like he has reached the edge of Antarctica. Which way does he turn? ";
        document.getElementById("choice1").innerHTML = "Right";
        document.getElementById("choice2").innerHTML = "Left";
    } else if (choice == 1 && answer1 == "Go into the tunnel and be brave") {
        document.getElementById("story").innerHTML = "Pingus jumps into the tunnel. It's a long and narrow slide. 'WEEEEEEEEEEE!' says Pingus as he flies down the side. As Pingus exits the slide, he notices a group of penguins ahead of him.";
        document.getElementById("choice1").innerHTML = "Run towards them with glee";
        document.getElementById("choice2").innerHTML = "Waddle towards them with caution";
    } else if (choice == 2 && answer2 == "Look for someplace else") {
        document.getElementById("story").innerHTML = "Pingus keeps walking into the endless abyss of the Artic. As he walks, he stumbles upon a sign in the road. It says that there are towns to the West and the East. Which way will Pingus walk?";
        document.getElementById("choice1").innerHTML = "West";
        document.getElementById("choice2").innerHTML = "East";
    }

    //Next Part

    else if (choice == 1 && answer1 == "Say hi to the human") {
        document.getElementById("story").innerHTML = "The human says hi and says that he saw Penguins back the way he came. You've been going the wrong way!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Waddle away") {
        document.getElementById("story").innerHTML = "Pingus continues to waddle into the endless abyss of the arctic" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Right") {
        document.getElementById("story").innerHTML = "Pingus turns right and sees more ocean. He has nowhere to go but backwards now." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Left") {
        document.getElementById("story").innerHTML = "Pingus turns to the left and sees a massiv cliff in front of him with no way through. Looks like it's back to square one." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Run towards them with glee") {
        document.getElementById("story").innerHTML = "Pingus runs towards the Penguins with glee. He has found his people!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Waddle towards them with caution") {
        document.getElementById("story").innerHTML = "Pingus approaches the group with caution, which is a good thing because they weren't Penguins at all. They were Polar Bears!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "West") {
        document.getElementById("story").innerHTML = "Pingus heads West in search of friends and familiarity" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "East") {
        document.getElementById("story").innerHTML = "Pingus heads East, believing it to be the correct way to go. Unfortunately, he still cannot fins his way to his friends." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("story").innerHTML = "Pingus the Penguin is lost in the arctic! Can you help him find his way back to his pack?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "No quit") {
        document.getElementById("story").innerHTML = "Poor Pingus. I guess he will never find his way back home :(";

    }


}