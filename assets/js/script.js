var questionEl = $("#question");
var instructionsEl = $("#instructions");
var optionsEl = $("#options");
var resultEl = $("#result");
var startButton = $("#start-button");
var timerEl = $("#timer-count");
var timeRemaining = 4;
var correctAnswer = option1;
var option1 = $("#option1");
var option2 = $("#option2");
var option3 = $("#option3");
var option4 = $("#option4");
var score = 0;

optionsEl.children().hide();

function displayTimer() {
  timerEl.show();
  var timer = setInterval(function () {
    if (timeRemaining < 0) {
      clearInterval(timer);
      handleQuizEnd();
    } else {
      timerEl.text(timeRemaining + " seconds remaining");
      timeRemaining--;
    }
  }, 1000);
}

function handleStartQuiz() {
  // console.log("Started the Quiz!")
  startButton.hide();
  instructionsEl.hide();
  optionsEl.children().show();
  question1();
}

function question1() {
  correctAnswer = option3;
  questionEl.text("Can you see me?");
  option1.text("yes");
  option2.text("yes but different");
  option3.text("yes but even more different");
  option4.text("yes but even more more differenter");
}

function handleQuizEnd() {
  questionEl.text("Finished!");
  instructionsEl.text("Your Score is " + score);
  instructionsEl.show();
  timerEl.hide();
  optionsEl.children().hide();
}

startButton.on("click", handleStartQuiz);
startButton.on("click", displayTimer);
option1.on("click");
option2.on("click");
option3.on("click");
option4.on("click");

//todo:
//figure out listener for each option
//compare option clicked to right answer
//display result
//move to next question
//make view high score element
//save high score to local memory
