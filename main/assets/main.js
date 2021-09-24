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
var index = 0;
// -variables to use with functions and if/else statement and to adjust text.Content
var questionArray = [
  {
    question: "What does CSS stand for?",
    a: "Cool sights and sounds",
    b: "Cascading style sheets",
    c: "Counter strike software",
    d: "Character selection screen",
    correct: "",
  },
  {
    question: "If I want to selct peaches from the array fruit = ['peaches', 'apples', 'grapes'], what value should I select?",
    a: "0",
    b: "1",
    c: "2",
    d: "3",
    correct: "",
  },
  {
    question: "What is the answer for '26 % 8'?",
    a: "null",
    b: "3.25",
    c: "0",
    d: "2",
    correct: "",
  },
  {
    question: "When Visiblity: hidden, the selected elements will:",
    a: "Not appear on the screen but takes up space on the page",
    b: "Not appear on the screen but will not take up space on the page",
    c: "Be removed from the HTML code",
    d: "Not be affected",
    correct: "",
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

    questionContainer.innerHTML = questionArray[index].question;
    a1.innerHTML = questionArray[index].a;
    a2.innerHTML = questionArray[index].b;
    a3.innerHTML = questionArray[index].c;
    a4.innerHTML = questionArray[index].d;

    // centerContainer.textContent = JSON.stringify(questionArray[index]);
    // for (const { question, a, b, c, d, correct } of questionArray) {
    //   questionContainer.textContent = question;
    //   a1.textContent = a;
    //   a2.textContent = b;
    //   a3.textContent = c;
    //   a4.textContent = d;
    //   resultContainer.textContent = correct;
    // - this will attach the question from the array to h1 and answers to each li
    // }
    console.log(index);

    a1.addEventListener("click", function () {
        index = index+1
        questionContainer.innerHTML = questionArray[index].question;
        a1.innerHTML = questionArray[index].a;
        a2.innerHTML = questionArray[index].b;
        a3.innerHTML = questionArray[index].c;
        a4.innerHTML = questionArray[index].d;
        console.log(index);
    });
    a2.addEventListener("click", function () {
        index = index+1
        questionContainer.innerHTML = questionArray[index].question;
        a1.innerHTML = questionArray[index].a;
        a2.innerHTML = questionArray[index].b;
        a3.innerHTML = questionArray[index].c;
        a4.innerHTML = questionArray[index].d;
        console.log(index);
    });
    a3.addEventListener("click", function () {
        index = index+1
        questionContainer.innerHTML = questionArray[index].question;
        a1.innerHTML = questionArray[index].a;
        a2.innerHTML = questionArray[index].b;
        a3.innerHTML = questionArray[index].c;
        a4.innerHTML = questionArray[index].d;
        console.log(index);
    });
    a4.addEventListener("click", function () {
        index = index+1
        questionContainer.innerHTML = questionArray[index].question;
        a1.innerHTML = questionArray[index].a;
        a2.innerHTML = questionArray[index].b;
        a3.innerHTML = questionArray[index].c;
        a4.innerHTML = questionArray[index].d;
        console.log(index);
    });
    
    // - possible move this into new function later
    // function changeQ() {
        
    // }
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
