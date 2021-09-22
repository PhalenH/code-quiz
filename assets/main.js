console.log("I'm connected");

var buttonTag = document.createElement("button");
buttonTag.setAttribute("type", "test image")
document.body.appendChild(buttonTag);



// initial screen
// - fixed "view high scores"
// - time = 0
// - <h1>coding quiz</h1>
// - <p>explanation of quiz</p>
// - start quiz button, will need event listener for click

// after start quiz is selcted
// - time = however long for quiz (top right)
// - <h2>question</h2> 
// - <form> <input type="radio" id="1" name="first-qustion" value="first answer">
//   <form> <input type="radio" id="2" name="first-qustion" value="second answer">
//   <form> <input type="radio" id="3" name="first-qustion" value="third answer">
//   <form> <input type="radio" id="4" name="first-qustion" value="fourth answer">

// - if/else statements to determine if correct or wrong
// - a way to subtract certain amount of time when wrong
// - some tag that will display briefly after answer is selected
// - a way to change the container which will include the question/answer/whether right or wrong

// after questions answered
// - timer stops after last question answered
// - <h2> "finished"</h2>
// - <p> "your score is" </p>
// - <form id=idforform action=do we need one?> "your initials" : <input type="text" name= "idk yet">
//   <input type="button" onclick="a function name" value="submit"> </form>

// once initials submitted
// - timer and view highscores no longer visible at top of screen
// <h2> Highscores </h2>
// <ol><li> value from initials and score</li></ol>
// -I'll need a way to add items to <ol> 
// -2 buttons for "go back" and "clear highscores"
// - go back will reset to original screen
// - reset highscores will remove <ol>