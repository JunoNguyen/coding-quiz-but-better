highscoreBox = $("#highscores");

function allStorage() {

    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        archive.push(key + ': ' + localStorage.getItem(key));
    }

    return archive;
}

var highscoreView = function () {
    highscoreBox.empty();
    var highscore = allStorage();
    var highscoreArr = JSON.stringify(highscore).split(",");
    var highscoreUL = document.createElement("ul");
    highscoreArr.forEach((highscore) => {
        var highscoreLI = document.createElement("li");
        highscoreUL.append(highscoreLI);
        var highscoreClean = highscore.replace(/[\[\]\"\']+/g,'');
        highscoreLI.textContent = "Highscore: " + highscoreClean;
    });

    var highscoreDiv = document.createElement("div");
    highscoreDiv.className += "contain-md bg-primary";

    highscoreDiv.append(highscoreUL);

    var backBtn = document.createElement("button");
    backBtn.className += "btn btn-dark";
    backBtn.textContent = "Back";
    backBtn.setAttribute("onclick", "back()")
    highscoreDiv.append(backBtn);

    highscoreBox.append(highscoreDiv);
};

var back = function () {
    highscoreBox.empty();
};