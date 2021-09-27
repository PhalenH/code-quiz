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

// when finished to clean up, could try & replace function w/ determineAnswer function on line right below
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
];

function initial() {

  formContainer.setAttribute("style", "display:none")

  var quizExplain = document.createElement("p");
  document.querySelector("#center").appendChild(quizExplain);
  quizExplain.textContent = "Try and answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
  quizExplain.setAttribute("id", "quizDisplay");
  quizExplain.setAttribute("style", "text-align: center;");
  // -created p tag to show initial explanation of what the quiz is and id for p tag to be styled
  
  var buttonTag = document.createElement("button");
  document.querySelector("#center").appendChild(buttonTag);
  buttonTag.textContent = "Start Quiz";
  buttonTag.setAttribute("id", "buttonDisplay");
  // -created button to start quiz, added content, added id to button



  buttonTag.addEventListener("click", function () {
    buttonTag.setAttribute("style", "display: none");
    quizExplain.setAttribute("style", "display: none");
    // - when button clicked hides start quiz and explanation, displays question and answers
    answerContainer.setAttribute("style", "display: block");
    // resultContainer.setAttribute("style", "display: block");
    countdown();

    quiz();
  });
}

function quiz (){
  // within here have some type of loop
  // at the end of the loop it will increment index
  //
  console.log("call quiz", index)
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

        if(secondsLeft === 0) {
            clearInterval(timeInterval);
        // -TODO add function call that will display "all done" with final score and input for initials 
        }
    }, 1000); 
}

function determineAnswer (question, answer){
  console.log(answer, question.correct);
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

function quizDelay (){
  setTimeout(quiz, 1000);
}

function doneQuiz (){
  answerContainer.setAttribute("style", "display: none")
  questionContainer.innerHTML = "All Done!";

  var finalScore = document.createElement("p");
  document.querySelector("#center").appendChild(finalScore);
  finalScore.innerHTML = `Your final score is ${secondsLeft}`;
  formContainer.setAttribute("style", "display: block")

  formContainer.addEventListener("submit", function(event){
  event.preventDefault();
  displayHighscore();
  finalScore.setAttribute("style", "display: none")
  // changes header to all done, created p element which is taken away after sumbitted,
  });
}

function displayHighscore (){
  questionContainer.innerHTML = "Highscores";
  // todo
  // create 2 buttons for go back or reset
  // added ordered list
  // add initials to local storage and getItem for displaying that in highscores

}
// doneQuiz();
initial();


// - if/else statements to determine if correct or wrong
// - a way to subtract certain amount of time when wrong
// - some tag that will display briefly after answer is selected
// - a way to change the container which will include the question/answer/whether right or wrong

// after questions answered
// - timer stops after last question answered
// - <h1> "finished"</h1>
// - <p> "your score is" </p>
// - <form id=idforform action=do we need one?> "your initials" : <input type="text" name= "idk yet">
//   <input type="button" onclick="a function name" value="submit"> </form>

// once initials submitted
// - timer and view highscores no longer visible at top of screen
// <h1> Highscores </h1>
// <ol><li> value from initials and score</li></ol>
// -I'll need a way to add items to <ol>
// -2 buttons for "go back" and "clear highscores"
// - go back will reset to original screen
// - reset highscores will remove <ol>

// } else{
    //     a1.setAttribute("style", "display: none");
    //     a2.setAttribute("style", "display: none");
    //     a3.setAttribute("style", "display: none");
    //     a4.setAttribute("style", "display: none");
    //     questionContainer.textContent = "All done!"
    // }

//completed:

// initial screen
// - fixed "view high scores"
// - time = 0
// - <h1>coding quiz</h1>
// - <p>explanation of quiz</p>
// - start quiz button, will need event listener for click

// after start quiz is selcted
// - time = however long for quiz (top right)