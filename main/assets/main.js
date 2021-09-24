console.log("I'm connected");

var centerContainer = document.getElementById("center");
var questionContainer = document.getElementById("question");
var answerContainer = document.getElementById("answer");
var resultContainer = document.getElementById("result");
var timerContainer = document.getElementById("timer");
var highScoreContainer = document.getElementById("highScore");
var a1 = document.getElementById("1");
var a2 = document.getElementById("2");
var a3 = document.getElementById("3");
var a4 = document.getElementById("4");
var index = 0
// -variables to use with functions and if/else statement and to adjust text.Content
var questionArray = [
  {
    question: "what color is the sky?",
    1: "blue",
    2: "yellow",
    3: "red",
    4: "orange",
    correct: "blue",
  },
  {
    question: "what smell is the sky?",
    1: "blue",
    2: "yellow",
    3: "red",
    4: "orange",
    correct: "red",
  },
  {
    question: "what taste is the sky?",
    1: "blue",
    2: "yellow",
    3: "red",
    4: "orange",
    correct: "orange",
  },
  {
    question: "what is the sky?",
    a: "blue",
    b: "yellow",
    c: "red",
    d: "orange",
    correct: "yellow",
  },
];

function initial() {
  var buttonTag = document.createElement("button");
  document.body.appendChild(buttonTag);
  buttonTag.textContent = "Start Quiz";
  buttonTag.setAttribute("id", "buttonDisplay");
  // -created button to start quiz, added content, added id to button

  var quizExplain = document.createElement("p");
  document.querySelector("#center").appendChild(quizExplain);
  quizExplain.textContent = "Try and answer the following code-related questions withing the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
  quizExplain.setAttribute("id", "quizDisplay");
  // -created p tag to show initial explanation of what the quiz is and id for p tag to be styled

  buttonTag.addEventListener("click", function () {
    buttonTag.setAttribute("style", "display: none");
    quizExplain.setAttribute("style", "display: none");
    // - when button clicked hides start quiz and explanation, displays question and answers
    answerContainer.setAttribute("style", "display: block");
    resultContainer.setAttribute("style", "display: block");

    // centerContainer.textContent = JSON.stringify(questionArray[index]);
    for (const {question, a, b, c, d, correct} of questionArray) {
        console.log();
        questionContainer.textContent = question;
           a1.textContent = a;
           a2.textContent = b;
           a3.textContent = c;
           a4.textContent = d;
            // - this will attach the question from the array to h1 and answers to each li
    }



    // - possible move this into new function later
    function changeQ() {
        
        
    }
    // questionarray[index].question
  });
}

initial();

// initial screen
// - fixed "view high scores"
// - time = 0
// - <h1>coding quiz</h1>
// - <p>explanation of quiz</p>
// - start quiz button, will need event listener for click

// after start quiz is selcted
// - time = however long for quiz (top right)

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

// look at activity 7,
// -line 8 var question = document.queryselector(question)
// -line 11 question.textContent = "this is where I can change the content for each question"
// -I can probably do this for each answer too
// -set Id for each answer so that there can be click events and then have it register for right/wrong
