   function getChoice1()
        {
            var myChoice = document.getElementById("choice").ariaValueMax;
            var myQuestion = document.getElementById("question");
            if(myChoice === "waffles")
            {
                document.getElementById("choice").style.display="none";
                document.getElementById("question");
                if(myChoice === "waffle")
                {
                    document.getElementById("choice").style.display="none";
                    document.getElementById("btnSubmit").style.display="none";
                    
                    document.getElementById("choice2").style.display="block";
                    document.getElementById("btnSubmit2").style.display="block";
                    
                    myQuestion.innerHTML = "Hmmm, waffles are super duper cool. Hmmmmmmmm maybe you are all okay. Next question, what is your favorite movie?";
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
            var answer = document.getElementById("choice2").value;
            var myQuestion = document.getElementById("question");
            if(answer === "yes")
            {
                document.getElementById("mainImage").src = "grateful.jpg"
                myQuestion.innerHTML = "Thank you for your kindness!";
            }
            else if(answer === "no")
            {
                myQuestion.innerHTML = "Please remember we are all in this together.";
            }
        }

    function getChoice3()
        {
            var answer = document.getElementById("choice3").value;
            var myQuestion = document.getElementById("question");
            if(answer === "yes")
            {
                document.getElementById("mainImage").src = "together.jpg"
                myQuestion.innerHTML = "Thank you for your kindness!";
            }
            else if(answer === "no")
            {
                myQuestion.innerHTML = "Please remember we are all in this together.";
            }
        }  
        }    
