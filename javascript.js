
var startBtn = document.querySelector("#start");

function startquestions(){
    var question1 = prompt("How do you set up a new file to be an HTML file?")

    if (question1 !== "<!DOCTYPE html>"){
        alert("incorret, try again")
        return
    }
}

function startquiz() {
    var questions = startquestions()
    
}

startBtn.addEventListener("click", startquiz);