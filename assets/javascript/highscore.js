highscoreBox = $("#highscores");

var highscoreView = function() {
    var highscore = localStorage.getItem('Highscore');

    highscoreDiv = document.createElement("div");
    highscoreDiv.className += "contain-md bg-primary";

    highscoreHeader = document.createElement("h1");
    highscoreHeader.textContent = "Highscore: " + highscore;
    highscoreDiv.append(highscoreHeader);

    backBtn = document.createElement("button");
    backBtn.className += "btn btn-dark";
    backBtn.textContent = "Back";
    backBtn.setAttribute("onclick", "back()")
    highscoreDiv.append(backBtn);

    highscoreBox.append(highscoreDiv);
};

var back = function() {
    highscoreBox.empty();
};