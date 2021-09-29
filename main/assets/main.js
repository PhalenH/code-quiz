console.log("I'm connected");

var centerContainer = document.getElementById("center");
var questionContainer = document.getElementById("question");
var answerContainer = document.getElementById("answer");
var resultContainer = document.getElementById("result");
var timeContainer = document.getElementById("time");
var highScoreContainer = document.getElementById("highScore");
var formContainer = document.getElementById("userForm");
var a1 = document.getElementById("1");
var a2 = document.getElementById("2");
var a3 = document.getElementById("3");
var a4 = document.getElementById("4");
var index = 0;
var secondsLeft = 60;
var quizExplain = document.createElement("p");
var buttonTag = document.createElement("button");

function initial() {
  
  formContainer.setAttribute("style", "display:none")
  questionContainer.innerHTML = "Coding Quiz Challenge";

  document.querySelector("#center").appendChild(quizExplain);
  quizExplain.textContent = "Try and answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
  quizExplain.setAttribute("id", "quizDisplay");
  quizExplain.setAttribute("style", "text-align: center;");
  
  document.querySelector("#center").appendChild(buttonTag);
  buttonTag.textContent = "Start Quiz";
  buttonTag.setAttribute("id", "buttonDisplay");
  buttonTag.setAttribute("style", "background-color: skyblue");

  buttonTag.addEventListener("click", function () {
    buttonTag.setAttribute("style", "display: none");
    quizExplain.setAttribute("style", "display: none");
    answerContainer.setAttribute("style", "display: block");
    // resultContainer.setAttribute("style", "display: block");
    countdown();

    quiz();
  });
}

function quiz (){
  resultContainer.setAttribute("style", "display: none");
    questionContainer.innerHTML = questionArray[index].question;
    a1.innerHTML = questionArray[index].a;
    a2.innerHTML = questionArray[index].b;
    a3.innerHTML = questionArray[index].c;
    a4.innerHTML = questionArray[index].d;

}

function countdown() {
    var timeInterval = setInterval(function() {
        secondsLeft--;
        timeContainer.textContent = secondsLeft;
     // timerContainer.textContent += secondsLeft;

        if(secondsLeft <= 0) {
            clearInterval(timeInterval);
            doneQuiz();
        }
        if (index >=5) {
          clearInterval(timeInterval);
        }
        // TODO: second if statement for when all questions answered
    }, 1000); 
}

function quizDelay (){
  if (index >=5) {
    doneQuiz();
  } else {
  setTimeout(quiz, 500);
  }
}
var highscores = [];
var storedHighscores = JSON.parse(localStorage.getItem("highscores"));

function doneQuiz (){
  a1.setAttribute("style", "display: none")
  a2.setAttribute("style", "display: none")
  a3.setAttribute("style", "display: none")
  a4.setAttribute("style", "display: none")
  resultContainer.setAttribute("style", "display: none")

  questionContainer.innerHTML = "All Done!";

  var finalScore = document.createElement("p");
  document.querySelector("#center").appendChild(finalScore);
  finalScore.innerHTML = `Your final score is ${secondsLeft}`;
  formContainer.setAttribute("style", "display: block")

  formContainer.addEventListener("submit", function(event) {
  event.preventDefault();
  // if (userInput === "") {
  //   alert("Cannot submit without initials, try again.");
  //   return;
  // }
  // trying to prevent not being able to submit empty input

  var userInput = document.getElementById("initial-text");

  var nameHighscore = {
  score: secondsLeft,
  userInitial: userInput.value
};

// console.log(nameHighscore)
  highscores.concat(storedHighscores);
  highscores.push(nameHighscore);
  
  console.log(highscores, storedHighscores)
  
  storeHigscores();

  console.log(highscores, storedHighscores)

  displayHighscore();
  finalScore.setAttribute("style", "display: none")
  // when submit it clicked, it stores object including user's info & displays these scores
  });
}
function storeHigscores() {
  // console.log(highscores)
  localStorage.setItem("highscores", JSON.stringify(highscores));
}

function displayHighscore (){
  questionContainer.innerHTML = "Highscores";
  // var storedHighscores = JSON.parse(localStorage.getItem("highscores"));
//  console.log(storedHighscores)
  if (storedHighscores !== null) {
    highscores = storedHighscores;
  }
  // document.getElementById("userForm").setAttribute("style", "display: none")
  // recomment this when listing highscores is fixed !!!
  
  console.log(highscores, storedHighscores)
  renderHighscores();
  
}

function renderHighscores() {
  answerContainer.innerHTML= "";

  // console.log(highscores);
  for (var i= 0; i < highscores.length; i++){
    var highscoreInitial = highscores[i].userInitial;
    var highScore = highscores[i].score;

    var li = document.createElement("li");
    li.setAttribute("data-index", i);
    document.querySelector("#answer").appendChild(li);
    li.textContent = `${highscoreInitial} ${highScore}`;
    
  };
  goBackReset();
}  

var bottomContainer = document.getElementById("bottom");

function goBackReset () {
  var goBackButton = document.createElement("button");
  goBackButton.setAttribute("id", "back-button");
  goBackButton.setAttribute("style", "background-color: skyblue");
  goBackButton.textContent = "Go back";
  bottomContainer.appendChild(goBackButton)
  goBackButton.addEventListener("click", function() {
    location.reload();
  });

  var clearHighscoreButton = document.createElement("button");
  clearHighscoreButton.setAttribute("id", "clear-button");
  clearHighscoreButton.setAttribute("style", "background-color: skyblue; padding; 10px; margin; 10px");
  clearHighscoreButton.textContent = "Clear Highscores";
  bottomContainer.appendChild(clearHighscoreButton)
  clearHighscoreButton.addEventListener("click", function() {
    answerContainer.textContent = ""
    localStorage.clear();
  });
}

function viewHighscore (){
  highScoreContainer.addEventListener("click", function() {
    answerContainer.setAttribute("style", "display: block");
    buttonTag.setAttribute("style", "display: none");
    quizExplain.setAttribute("style", "display: none");
    displayHighscore();
  });
}

function determineAnswer (question, answer){
  // console.log(answer, question.correct);
  let testResponse = "Wrong!";
  if (answer === question.correct){ 
    testResponse = "Correct!";
    } else{
      secondsLeft -= 10;
      timeContainer.textContent = secondsLeft;
    }  
  resultContainer.setAttribute("style", "display: block");
  resultContainer.innerHTML = testResponse
}

a1.addEventListener("click", function () {
  determineAnswer(questionArray[index], "a")
  index+=1
  quizDelay();
  // use setTimeout for the quiz function, delays iteration to next question
});
a2.addEventListener("click", function () {
  determineAnswer(questionArray[index], "b")
  index+=1
  quizDelay();
});
a3.addEventListener("click", function () { 
  determineAnswer(questionArray[index], "c")
  index+=1
  quizDelay();
});
a4.addEventListener("click", function () {
  determineAnswer(questionArray[index], "d")
  index+=1
  quizDelay();
});

// -variables to use with functions and if/else statement and to adjust text.Content
var questionArray = [
  {
    question: "What does CSS stand for?",
    "a": "Cool sights and sounds",
    "b": "Cascading style sheets",
    "c": "Counter strike software",
    "d": "Character selection screen",
    correct: "b",
  },
  {
    question: "If I want to select peaches from the array fruit = ['peaches', 'apples', 'grapes'], what value should I select?",
    "a": "0",
    "b": "1",
    "c": "2",
    "d": "3",
    correct: "a",
  },
  {
    question: "What is the answer for '26 % 8'?",
    "a": "Null",
    "b": "3.25",
    "c": "0",
    "d": "2",
    correct: "d",
  },
  {
    question: "When Visiblity: hidden, the selected elements will:",
    "a": "Not appear on the screen but takes up space on the page",
    "b": "Not appear on the screen and will not take up space on the page",
    "c": "Be removed from the HTML code",
    "d": "Not be affected",
    correct: "b",
  },
  {
    question: "What does JS stand for:",
    "a": "Just stop",
    "b": "Junior Sorcerer",
    "c": "JavaScript",
    "d": "JavaSauce",
    correct: "c",
  },
];

viewHighscore();

initial();




// if (!highscores){
//   document.createElement("li");
//   li.setAttribute("data-index", i);
//   document.querySelector("#answer").appendChild(li);
//   li.textContent = `${nameHighscore.userInitial} ${nameHighscore.score}`;
// }
// else {
//   console.log(highscores);
// for (var i= 0; i < highscores.length; i++){
//   var highscoreInitial = highscores[i].userInitial;
//   var highScore = highscores[i].score;

//   var li = document.createElement("li");
//   li.setAttribute("data-index", i);
//   document.querySelector("#answer").appendChild(li);
//   li.textContent = `${highscoreInitial} ${highScore}`;
  
// };
// }