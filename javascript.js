
var startBtn = document.querySelector("#start");
var timer = document.querySelector("#header");
var questionsEl = document.querySelector("#questions");
var questionBoxEl= document.querySelector("#questionBox")
var answerBoxEl= document.querySelector("#answerButtons")
var secondsLeft = 60
var timerInterval
var questions = [
    {
    prompt: "How do you set up a new file to be an HTML file?",
    answer: "both c and b", 
    possibleAnswers: [ "type index.html","type a !", "DOCTYPE html","both c and b"]
    },
    {prompt: "How do you connect a CSS file to HTML?\n(a) type style.css into your html\n(b) h ref='./style.css'\(c) it is done automatically",
    answer: "b"
    },   
    {prompt: "How do you connect your Javascript page to your HTML page?",
    answer: "a"
    },


]
var score = 0;
var questioncounter = 0 

function displayQA() {
    questionBoxEl.textContent=questions[questioncounter].prompt
    for(var i=0; i < questions[questioncounter].possibleAnswers.length; i++){
        var button = document.createElement("button")
        button.textContent=questions[questioncounter].possibleAnswers[i]
        answerBoxEl.append(button)

    }
   
}

// create a function that will run on the click event for the answer buttons,
// check to see if the answer is correct or wrong
// wrong subrat 10 second
// increase the questioncounter +1 every time they answer
// rerun display QA
// click event tyed to answer box EL 

function startquiz() {
        startBtn.classList.add("hide")
        timer.classList.remove("hide")
        questionsEl.classList.remove("hide")
        setTime()
        displayQA()
         
    
    }

    // function startquiz(){
    //     var quiz_prompts = quiz();
    //     var answers_stored= answers()
    // }
    function setTime() {
        // Sets interval in variable
        timerInterval = setInterval(function() {
          secondsLeft--;
          timer.textContent = secondsLeft + " seconds left till quiz is done.";
      
          if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
          }
      
        }, 1000);
    }

    button.addEventListener("click", answered);
    startBtn.addEventListener("click", startquiz);

// var timer = document.querySelector(".time")
// commented out timer section until questions are done***


// function startquestions(){
    
    // commented out timer questions until questions are done***
  

    //     var question1 = prompt("How do you set up a new file to be an HTML file?")
    //     var question2 = prompt("how do you connect a CSS page to your HTML page?")
    //     var question3 = prompt("How do you connect your Javascript page to your HTML page?")
   

    //     if (question1 !== "<!DOCTYPE html>"){
    //     alert("Incorret, try again")
    //     return
    //     }
    //     if (question2 !== 'href="style.css"' ) {
    //     alert("Incorret, try again")
    //     return
    //     }
    //     if (question3 !== '<script src="javascript.js"></script>') {
    //     alert("Incorrect, try again")
        
    //     }
    
    // }
    // function sendMessage() {
    //     timer.textContent = " YOUR DONE ";
        
      
    //   }
      
    //   setTime();
  
    
    
