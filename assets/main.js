console.log("I'm connected");

var questionContainer = document.getElementById("question");
var answerContainer = document.getElementById("answer");
var resultContainer = document.getElementById("result");
var timerContainer = document.getElementById("timer");
var highScoreContainer = document.getElementById("highScore");

var buttonTag = document.createElement("button");
document.body.appendChild(buttonTag);


buttonTag.addEventListener("click", function(){
    console.log("Start of quiz")
});


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
