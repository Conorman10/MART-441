function restartStory() {
    // Reset the question
    document.getElementById("question").innerHTML = 
        "You are asked an important question: What do you prefer? Waffles or Ice Cream?";

    document.getElementById("choice").style.display = "block";
    document.getElementById("btnSubmit").style.display = "block";
    document.getElementById("choice").value = "";

    document.getElementById("choice2").style.display = "none";
    document.getElementById("btnSubmit2").style.display = "none";
    document.getElementById("choice2").value = "";

    document.getElementById("choice3").style.display = "none";
    document.getElementById("btnSubmit3").style.display = "none";
    document.getElementById("choice3").value = "";

    document.getElementById("mainImage").src = "forest.jpg"; 

    document.getElementById("restartButton").style.display = "none";
   
   function getChoice1()
        {
            var myChoice = document.getElementById("choice").value;
            var myQuestion = document.getElementById("question");
            document.getElementById("restartButton").style.display = "block";

            if(myChoice === "waffles")
                {
                    document.getElementById("choice").style.display="none";
                    document.getElementById("btnSubmit").style.display="none";
                    
                    document.getElementById("choice2").style.display="block";
                    document.getElementById("btnSubmit2").style.display="block";
                    
                    myQuestion.innerHTML = "Hmmm, waffles are super duper cool. Hmmmmmmmm maybe you are okay. Next question, what is your favorite movie?";
                }
                else if(myChoice === "ice cream")
                {
                    document.getElementById("choice").style.display="none";
                    document.getElementById("btnSubmit").style.display="none";
                
                    document.getElementById("choice3").style.display="block";
                    document.getElementById("btnSubmit3").style.display="block";
                    myQuestion.innerHTML = "hmmmmmm, ice cream is pretty alright I guess... perhaps you are a human after all. But, if you don't mind me asking, what is your favorite movie?";
                }  
                else
                {
                    myQuestion.innerHTML = "Invalid answer";
                }  
            }  
    function getChoice2()
        {
            var answer = document.getElementById("choice2").value.toLowerCase().trim();
            var myQuestion = document.getElementById("question");
            if(answer === "morbius")
            {
                document.getElementById("mainImage").src = "grateful.jpg";
                myQuestion.innerHTML = "Wow, you are pitiful and digusting! How dare you even try to call yourself a human?! I'm gettin away from you!!";
            }
            else if(answer === "madame web")
            {
                document.getElementById("mainImage").src = "pass.jpg";
                myQuestion.innerHTML = "Alas, somebody with taste. You are free to pass by. Enjoy your day!";
            }
        }

    function getChoice3()
        {
            var answer = document.getElementById("choice3").value.toLowerCase().trim();
            var myQuestion = document.getElementById("question");
            if(answer === "morbius")
            {
                document.getElementById("mainImage").src = "together.jpg";
                myQuestion.innerHTML = "Wow, you are pitiful and digusting! How dare you even try to call yourself a human?! I'm gettin away from you!!";
            }
            else if(answer === "madame web")
            {
                document.getElementById("mainImage").src = "pass.jpg";
                myQuestion.innerHTML = "Alas, somebody with taste. You are free to pass by. Enjoy your day!";
            }
        }  
        
    document.getElementById("restartButton").addEventListener("click", restartStory);
