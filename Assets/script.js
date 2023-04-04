var listQuiz = document.querySelector("ul");
var startQuiz = document.querySelector("#startQuiz");
var time = document.querySelector("#time");
var quizQuestions = document.querySelector("#quizQuestions");
var 
var
var

var timePlaceHolder = 0;
var secondTimer = 60;
var pickedQuestions = 0;

startQuiz.addEventListener ("click" = function(){
    if(timePlaceHolder === 0){
        timePlaceHolder = setInterval (function(){
            secondTimer--;
            time.textContent = "Remaining Time: " + secondTimer;

            if (secondTimer <= 0){
                clearInterval(timeHolder);
                time.textContent = "TIMES UP";
            }
        }, 1000);
    }
    output(pickedQuestions);
});

function output(pickedQuestions){
    quizQuestions.innerHTML = "";
    listQuiz.innerHTML = "";
    for (var i = 0; i < questions.length; i++){
        var userInput = questions[pickedQuestions].ask;
        var userOutput = questions[pickedQuestions].choices;

        quizQuestions.textContent = userInput;
    }
    userOutput.forEach(function (line){
        var listCreated = document.createElement("li");
        listCreated.textContent = line;
        quizQuestions.appendChild(listQuiz);
        listQuiz.appendChild(listCreated);
        listCreated.addEventListener("click", (compare));
    })
}
var questions = [
    {
        title: "Which tag is used to create a hyperlink?",
        choices: ["<a>", "<img>", "<ol>", "<link>"],
        answer: "<link>"
    },
    {
        title: "The condition in an if / else statment is enclosed within _____.",
        choices: ["parentheses", "quotes", "curly brackets", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "What does css stand for?",
        choices: ["Cascading Style Sheets", "Corresponding Style Sheets", "Coral Starfish Sea", "customer service support"],
        answer: "Cascading Style Sheets"
    },
    {
        title: "What html tag is NOT included in the HEAD tag?",
        choices: ["link", "meta", "title", "header"],
        answer: "header"
    },
    {
        title: "What attribute is used in html to decorate content?",
        choices: ["css", "class", "src", "style"],
        answer: "style"
    },
];

