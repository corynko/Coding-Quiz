var highScores = JSON.parse(window.localStorage.getItem("High Scores"));
var listEl = $("#listEl");

//sort scores
highScores.sort((a, b) => b.score - a.score);
renderHighScores();

//create li's for scores
function renderHighScores() {
  for (var i = 0; i < highScores.length; i++) {
    listEl.append(
      "<li>" +
        highScores[i].name +
        " ----- Score: " +
        highScores[i].score +
        "</li>"
    );
  }
}
