
var startBtn = document.querySelector("#start");
var answeredBtn = document.querySelector("#answerButtons")
var timer = document.querySelector("#header");
var questionsEl = document.querySelector("#questions");
var questionBoxEl= document.querySelector("#questionBox")
var answerBoxEl= document.querySelector("#answerButtons")
var secondsLeft = 60
var timerInterval
var recordBoxEL= document.querySelector("#recordBox");
var score = 0;
var questioncounter = 0 
var submitButtonEl= document.querySelector("#submitBtn")
var initialsEnteredEl= document.querySelector("#initialsEntered")
var scoresEl = document.querySelector("#scores")
var initialsLocal = localStorage.getItem("initialsLocal")
var scoreLocal = localStorage.getItem("scoresLocal")
var questions = [
    {
    prompt: "How do you set up a new file to be an HTML file?",
    answer: "both c and b", 
    possibleAnswers: [ "type index.html","type a !", "DOCTYPE html","both c and b"]
    },
    {prompt: "How do you connect a CSS file to HTML?",
    answer: "h ref='./style.css",
    possibleAnswers: ["(a) type style.css into your html", "h ref='./style.css", "(c) it is done automatically", "(d) it is done with a 3rd party api"],
    },   
    {prompt: "How do you connect your Javascript page to your HTML page?",
    answer: "script src=javascript.js",
    possibleAnswers: [ "a tag in the header the says javascript", "script src=javascript.js", "soucre code","add a javascript page to your folder files"]
    },
]

 function recordScore(){
       
        localStorage.setItem("initialsLocal", initialsEntered.value);
        localStorage.setItem("scoresLocal", secondsLeft);
        scoresEl.textContent = initialsLocal + " " + scoreLocal;
    }
function displayQA() {
    questionBoxEl.innerHTML=""
    answerBoxEl.innerHTML=""
    if(questions.length <= questioncounter){
        endGame()
        return
    }
    questionBoxEl.textContent=questions[questioncounter].prompt
    for(var i=0; i < questions[questioncounter].possibleAnswers.length; i++){
        var button = document.createElement("button")
        button.textContent=questions[questioncounter].possibleAnswers[i]
        answerBoxEl.append(button)       
     }   

    }
   
    function endGame() {
        clearInterval(timerInterval)
        recordBoxEL.classList.remove("hide")
        questionsEl.classList.add("hide")
                
    }
    function recordanswer(event) {
        var clickedAns = event.target.textContent
        var correctAns = questions[questioncounter].answer
        if (correctAns !== clickedAns) {
            secondsLeft = secondsLeft - 10
        }
        questioncounter++ 
        displayQA()
        console.log(clickedAns)
    }

function startquiz() {
        startBtn.classList.add("hide")
        timer.classList.remove("hide")
        questionsEl.classList.remove("hide")
        setTime()
        displayQA()   
    }
       
    function setTime() {
        // Sets interval in variable
        timerInterval = setInterval(function() {
          secondsLeft--;
          timer.textContent = secondsLeft + " seconds left till quiz is done.";
      
          if(secondsLeft <= 0) {
            // Stops execution of action at set interval
            endGame()

          }
        }, 1000);
    }
   

    answeredBtn.addEventListener("click", recordanswer); 
    // answeredBtn.addEventListener("click", recordanswer);
    startBtn.addEventListener("click", startquiz);
    submitButtonEl.addEventListener("click", recordScore)

// psuedo code : 
//  need to make the recorded scores list items
// need to start the quiz over when you hit submti score



  
    
    
