var startBtn = $("#start-button");
var questionArea = $("#questions-area");
var scoreArea = $("#score-area");
var highscoresArea = $("#highscores-area");
var timerEl = document.getElementById('timerEl');
var seconds = 90;

let scoreVal = 0;

var select0 = function () {
    button0.setAttribute('state', 'selected');
    button1.setAttribute('state', 'unselected');
    button2.setAttribute('state', 'unselected');
    button3.setAttribute('state', 'unselected');
};

var select1 = function () {
    button0.setAttribute('state', 'unselected');
    button1.setAttribute('state', 'selected');
    button2.setAttribute('state', 'unselected');
    button3.setAttribute('state', 'unselected');
};

var select2 = function () {
    button0.setAttribute('state', 'unselected');
    button1.setAttribute('state', 'unselected');
    button2.setAttribute('state', 'selected');
    button3.setAttribute('state', 'unselected');
};

var select3 = function () {
    button0.setAttribute('state', 'unselected');
    button1.setAttribute('state', 'unselected');
    button2.setAttribute('state', 'unselected');
    button3.setAttribute('state', 'selected');
};

var Questions = [
    {
        Question: "What does C.S.S. stand for?",
        choices: ['Cascading Style Sheets', 'Camera Scam Service', 'Creepy Secret Sheet', 'Cascading Steel Sheets'],
        answer: "Cascading Style Sheets",
    },
    {
        Question: "Who created javascript?",
        choices: ['Bill Gates', 'Brendan Eich', 'Taylor Swift', 'Timmothy Gatman'],
        answer: "Brendan Eich",
    },
    {
        Question: "Which symbol do you use to reference ID in C.S.S.?",
        choices: ['.', '!', '#', ':'],
        answer: "#",
    },
    {
        Question: "Which of these is a built in javascript function?",
        choices: ['endInterval', 'sleep', 'test', 'setInterval'],
        answer: "setInterval",
    },
    {
        Question: "Which command changes your directory?",
        choices: ['cd', 'mkdir', 'ls', 'touch'],
        answer: "cd",
    }
];

var quizTimer = function() {
    console.log("timer has started");
    
    seconds = 90;

    var interval = setInterval(function(){
        if(seconds <= 0){
            console.log("game over!");
            clearInterval();
            questionArea.empty();

            gameoverEl = document.createElement("div");
            gameoverEl.className += "contain-md bg-primary";

            gameoverHeader = document.createElement("h1");
            gameoverHeader.textContent = "Game Over!";
            gameoverEl.append(gameoverHeader);

            tryagainEl = document.createElement("button");
            tryagainEl.textContent = "Try Again";
            tryagainEl.className += "btn btn-light";
            tryagainEl.id = "again-button";
            gameoverEl.append(tryagainEl);
            questionArea.append(gameoverEl);

            $("#again-button").on('click', makeQuiz);
        } else {
            timerEl.textContent = seconds;
            seconds--;
        }
    }, 1000);
};

var startQuiz = function () {
    $("#quizbox").removeAttr('id', 'quizbox');
    $("#start").attr('id', 'quizbox');
    makeQuiz();
};

var makeQuiz = function () {

    quizTimer();
    questionArea.empty();

    quizboxEl = document.createElement("div");
    quizboxEl.className += "contain-md bg-primary";

    questionHeader = document.createElement("h1");
    questionHeader.textContent = Questions[0].Question;
    quizboxEl.append(questionHeader);

    for (var i = 0; i < Questions[0].choices.length; i++) {
        var buttons = document.createElement('button');
        buttons.textContent = Questions[0].choices[i];
        buttons.className += "btn btn-dark";
        buttons.id = 'button' + [i];
        buttons.setAttribute('state', 'unselected');
        quizboxEl.append(buttons);
    };

    submitEl = document.createElement("button");

    scoreboxEl = document.createElement("div");
    scoreboxEl.className += "contain-md bg-primary";

    submitEl.textContent = "Submit";
    quizboxEl.append(submitEl);
    questionArea.append(quizboxEl);
    submitEl.className += "btn btn-light";
    submitEl.id = "submit-button";

    var button0 = document.getElementById("button0");
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");

    button0.setAttribute('onclick', 'select0()');
    button1.setAttribute('onclick', 'select1()');
    button2.setAttribute('onclick', 'select2()');
    button3.setAttribute('onclick', 'select3()');

    $("#submit-button").on('click', testCorrect0);
};

var testCorrect0 = function () {

    if (button0.getAttribute('state') === 'selected') {
        scoreVal++;
        scoreArea.empty();
        scoreboxEl = document.createElement("div");
        scoreboxEl.className += "contain-md bg-primary";
        scoreEl = document.createElement('h2');
        scoreEl.textContent = "Score: " + scoreVal;
        scoreboxEl.append(scoreEl);
        scoreArea.append(scoreboxEl);
        questionArea.empty();
        nextQuestion();
    } else {
        console.log('incorrect answer!');
        seconds = seconds-15;
    }
};

var nextQuestion = function () {

    quizboxEl = document.createElement("div");
    quizboxEl.className += "contain-md bg-primary";

    questionHeader = document.createElement("h1");
    questionHeader.textContent = Questions[1].Question;
    quizboxEl.append(questionHeader);

    for (var i = 0; i < Questions[1].choices.length; i++) {
        var buttons = document.createElement("button");
        buttons.textContent = Questions[1].choices[i];
        buttons.className += "btn btn-dark";
        buttons.id = 'button' + [i];
        buttons.setAttribute('state', 'unselected');
        quizboxEl.append(buttons);
    };

    submitEl = document.createElement("button");
    submitEl.textContent = "Submit";
    quizboxEl.append(submitEl);
    submitEl.className += "btn btn-light";
    submitEl.id = "submit-button1";

    questionArea.append(quizboxEl);

    var button0 = document.getElementById("button0");
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");

    button0.setAttribute('onclick', 'select0()');
    button1.setAttribute('onclick', 'select1()');
    button2.setAttribute('onclick', 'select2()');
    button3.setAttribute('onclick', 'select3()');

    $("#submit-button1").on('click', testCorrect1);
};

var testCorrect1 = function () {


    if (button1.getAttribute('state') === 'selected') {
        scoreVal++;
        scoreArea.empty();
        scoreboxEl = document.createElement("div");
        scoreboxEl.className += "contain-md bg-primary";
        scoreEl = document.createElement('h2');
        scoreEl.textContent = "Score: " + scoreVal;
        scoreboxEl.append(scoreEl);
        scoreArea.append(scoreboxEl);
        questionArea.empty();
        nextQuestion2();
    } else {
        console.log('incorrect answer!');
        seconds = seconds-15;
    }
};

var nextQuestion2 = function () {

    questionArea.empty();

    quizboxEl = document.createElement("div");
    quizboxEl.className += "contain-md bg-primary";

    questionHeader = document.createElement("h1");
    questionHeader.textContent = Questions[2].Question;
    quizboxEl.append(questionHeader);

    for (var i = 0; i < Questions[2].choices.length; i++) {
        var buttons = document.createElement("button");
        buttons.textContent = Questions[2].choices[i];
        buttons.className += "btn btn-dark";
        buttons.id = 'button' + [i];
        buttons.setAttribute('state', 'unselected');
        quizboxEl.append(buttons);
    };

    submitEl = document.createElement("button");
    submitEl.textContent = "Submit";
    quizboxEl.append(submitEl);
    submitEl.className += "btn btn-light";
    submitEl.id = "submit-button2";

    questionArea.append(quizboxEl);

    var button0 = document.getElementById("button0");
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");

    button0.setAttribute('onclick', 'select0()');
    button1.setAttribute('onclick', 'select1()');
    button2.setAttribute('onclick', 'select2()');
    button3.setAttribute('onclick', 'select3()');

    $("#submit-button2").on('click', testCorrect2);
};

var testCorrect2 = function () {

    if (button2.getAttribute('state') === 'selected') {
        scoreVal++;
        scoreArea.empty();
        scoreboxEl = document.createElement("div");
        scoreboxEl.className += "contain-md bg-primary";
        scoreEl = document.createElement('h2');
        scoreEl.textContent = "Score: " + scoreVal;
        scoreboxEl.append(scoreEl);
        scoreArea.append(scoreboxEl);
        questionArea.empty();
        nextQuestion3();
    } else {
        console.log('incorrect answer!');
        seconds = seconds-15;
    }
};

var nextQuestion3 = function () {

    questionArea.empty();

    quizboxEl = document.createElement("div");
    quizboxEl.className += "contain-md bg-primary";

    questionHeader = document.createElement("h1");
    questionHeader.textContent = Questions[3].Question;
    quizboxEl.append(questionHeader);

    for (var i = 0; i < Questions[3].choices.length; i++) {
        var buttons = document.createElement("button");
        buttons.textContent = Questions[3].choices[i];
        buttons.className += "btn btn-dark";
        buttons.id = 'button' + [i];
        buttons.setAttribute('state', 'unselected');
        quizboxEl.append(buttons);
    };

    submitEl = document.createElement("button");
    submitEl.textContent = "Submit";
    quizboxEl.append(submitEl);
    submitEl.className += "btn btn-light";
    submitEl.id = "submit-button3";

    questionArea.append(quizboxEl);

    var button0 = document.getElementById("button0");
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");

    button0.setAttribute('onclick', 'select0()');
    button1.setAttribute('onclick', 'select1()');
    button2.setAttribute('onclick', 'select2()');
    button3.setAttribute('onclick', 'select3()');

    $("#submit-button3").on('click', testCorrect3);
};

var testCorrect3 = function () {


    if (button3.getAttribute('state') === 'selected') {
        scoreVal++;
        scoreArea.empty();
        scoreboxEl = document.createElement("div");
        scoreboxEl.className += "contain-md bg-primary";
        scoreEl = document.createElement('h2');
        scoreEl.textContent = "Score: " + scoreVal;
        scoreboxEl.append(scoreEl);
        scoreArea.append(scoreboxEl);
        questionArea.empty();
        nextQuestion4();
    } else {
        console.log('incorrect answer!');
        seconds = seconds-15;
    }
};

var nextQuestion4 = function () {

    questionArea.empty();

    quizboxEl = document.createElement("div");
    quizboxEl.className += "contain-md bg-primary";

    questionHeader = document.createElement("h1");
    questionHeader.textContent = Questions[4].Question;
    quizboxEl.append(questionHeader);

    for (var i = 0; i < Questions[4].choices.length; i++) {
        var buttons = document.createElement("button");
        buttons.textContent = Questions[4].choices[i];
        buttons.className += "btn btn-dark";
        buttons.id = 'button' + [i];
        buttons.setAttribute('state', 'unselected');
        quizboxEl.append(buttons);
    };

    submitEl = document.createElement("button");
    submitEl.textContent = "Submit";
    quizboxEl.append(submitEl);
    submitEl.className += "btn btn-light";
    submitEl.id = "submit-button4";

    questionArea.append(quizboxEl);

    var button0 = document.getElementById("button0");
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");

    button0.setAttribute('onclick', 'select0()');
    button1.setAttribute('onclick', 'select1()');
    button2.setAttribute('onclick', 'select2()');
    button3.setAttribute('onclick', 'select3()');

    $("#submit-button4").on('click', testCorrect4);
};

var testCorrect4 = function () {


    if (button0.getAttribute('state') === 'selected') {
        scoreVal++;
        scoreArea.empty();
        scoreboxEl = document.createElement("div");
        scoreboxEl.className += "contain-md bg-primary";
        scoreEl = document.createElement('h2');
        scoreEl.textContent = "Score: " + scoreVal;
        scoreboxEl.append(scoreEl);
        scoreArea.append(scoreboxEl);
        questionArea.empty();
        scorePage();
    } else {
        console.log('incorrect answer!');
        seconds = seconds-15;
    }
};

var scorePage = function () {

    scoreArea.empty();

    var save = function(e) {

        e.preventDefault();
        var initialsEl = document.getElementById('initials');
        console.log(initialsEl.value);
    
        localStorage.setItem(initialsEl.value, scoreVal);
    };

    scoreboxEl = document.createElement('div');
    scoreboxEl.className += "contain-md bg-primary";

    scoreEl = document.createElement('h1');
    scoreEl.className += "d-flex justify-content-center";
    scoreEl.textContent = "Final Score: " + scoreVal;
    scoreboxEl.append(scoreEl);

    initialsForm = document.createElement('form');
    initialsForm.className += "d-flex justify-content-center";

    initialsEl = document.createElement('input');
    initialsEl.setAttribute('id', 'initials');
    initialsEl.setAttribute('type', 'text');

    labelEl = document.createElement('label');
    labelEl.setAttribute('for', 'initials');
    labelEl.className += "d-flex justify-content-center";
    labelEl.textContent = " Input your initials to save your score!"

    saveScoreBtn = document.createElement('button');
    saveScoreBtn.className += "btn btn-dark";
    saveScoreBtn.textContent = "Save";
    saveScoreBtn.setAttribute('id', 'save-score');
    saveScoreBtn.setAttribute('type', 'submit')

    initialsForm.append(initialsEl);
    initialsForm.append(labelEl);
    initialsForm.append(saveScoreBtn);
    scoreboxEl.append(initialsForm);
    scoreArea.append(scoreboxEl);

    $("#save-score").on('click', save);
};

startBtn.on("click", startQuiz);