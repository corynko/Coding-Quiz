var highScores = [window.localStorage.getItem("High Scores")];
var listEl = $("#listEl");
// var parsed = JSON.parse(highScores);
var scores = [highScores[1], highScores[2], highScores[3]];

scores.sort((a, b) => b.score - a.score);
renderHighScores();

function renderHighScores() {
  for (var i = 0; i < scores.length; i++) {
    listEl.append("<li>" + scores[i] + "</li>");
  }
}
