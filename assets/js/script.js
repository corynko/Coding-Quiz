// global variables
var questionEl = $("#question");
var instructionsEl = $("#instructions");
var optionsEl = $("#options");
var resultEl = $("#result");
var startButton = $("#start-button");
var timerEl = $("#timer-count");
var timeRemaining = 59;
var correctAnswer;
var option1 = $("#option1");
var option2 = $("#option2");
var option3 = $("#option3");
var option4 = $("#option4");
var score = 0;
var highScores = $("#view-hs");
var selected;
var submitForm = $("#submit-form");
var submitButton = $("#submit-button");
var separation = $("#separation");
var highScoreList = [];
var results = {};
// var hsName = document.getElementById("hs-name").value;

//question function array
var questions = [
  function () {
    correctAnswer = "option4";
    questionEl.text("What is trickiest to implement in a coding quiz?");
    option1.text("The HTML");
    option2.text("Bootstrap Styling");
    option3.text("Deploying to Github");
    option4.text(
      "A needlessly complex function array for handling the questions and answers"
    );
  },
  function () {
    correctAnswer = "option1";
    questionEl.text("Which data type returns a value of true or false?");
    option1.text("Boolean");
    option2.text("Number");
    option3.text("String");
    option4.text("Array");
  },
  function () {
    correctAnswer = "option2";
    questionEl.text(
      "Which pseudo-class changes a button's background color when the mouse is over it?"
    );
    option1.text(":focus");
    option2.text(":hover");
    option3.text(":active");
    option4.text(":moused");
  },
  function () {
    correctAnswer = "option1";
    questionEl.text(
      "Which option returns true only if the data-type AND value are the same?"
    );
    option1.text("===");
    option2.text(">=");
    option3.text("==");
    option4.text("<=");
  },
  function () {
    correctAnswer = "option4";
    questionEl.text(
      "Which of the following stores a collection of properties?"
    );
    option1.text("Array");
    option2.text("Method");
    option3.text("Function");
    option4.text("Object");
  },
  function () {
    correctAnswer = "option2";
    questionEl.text(
      "Which CSS display property allows for easier responsive layout creation?"
    );
    option1.text("Inline");
    option2.text("Flex");
    option3.text("Fixed");
    option4.text("Block");
  },
  function () {
    correctAnswer = "option4";
    questionEl.text("Which of the following best describes every developer?");
    option1.text("Smart");
    option2.text("Funny");
    option3.text("Pretty");
    option4.text("All of the Above");
  },
];
var indexTracker = 0;

//initial page load hide quiz elements
optionsEl.children().hide();
resultEl.hide();
submitForm.hide();
separation.hide();

//handle timer function
function displayTimer() {
  timerEl.show();
  var timer = setInterval(function () {
    if (timeRemaining <= 0) {
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
  questions[indexTracker]();
}

function handleQuizEnd() {
  questionEl.text("Finished!");
  instructionsEl.text("Your Score is " + score);
  instructionsEl.show();
  submitForm.show();
  timerEl.hide();
  optionsEl.children().hide();
  resultEl.hide();
  separation.hide();
  indexTracker = 0;
}

//verify answers based on clicked button, move question array forward
function answerResult() {
  resultEl.show();
  separation.show();
  console.log(selected);
  if (selected == correctAnswer) {
    resultEl.text("Correct :)");
    score++;
  } else {
    resultEl.text("Incorrect :(");
    timeRemaining -= 10;
  }
  indexTracker++;
  if (indexTracker === questions.length) {
    handleQuizEnd();
  } else {
    questions[indexTracker]();
  }
}

function showHighScores() {
  console.log("I've been clicked!");
}

// function storeScore() {
//   //   hsName = $("input").val();
//   results = { name: "hsName", score: "score" };
//   highScoreList.push(results);
//   highScoreList.sort(function (a, b) {
//     return b.score - a.score;
//   });
//   localStorage.setItem("High Scores", highScoreList);

//   //   $("#score1").text(
//   //     highscoreList[0].player + " - score: " + highscoreList[0].score
//   //   );
// }

//event listeners
startButton.on("click", handleStartQuiz);
startButton.on("click", displayTimer);
highScores.on("click", showHighScores);
// submitButton.on("click", storeScore);
optionsEl.on("click", ".btn-lg", function (e) {
  selected = e.target.id;
  answerResult();
});
// optionsEl.children().onclick = function () {
//   selected = this.id;
// });

//todo:
//figure out listener for each option
//compare option clicked to right answer
//display result
//move to next question
//increment score on correct answer
//make view high score element
//save high score to local memory
