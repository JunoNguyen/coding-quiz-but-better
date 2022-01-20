var startBtn = $("#start-button");
var questionArea = $("#questions-area");
// var button0 = $("#but0ton");

var Questions = [
    {
        Question: "What is 2 + 2?",
        choices: ['4','7','10','321'],
        answer: "4",
    },
    {
        Question: "What is 6 + 7?",
        choices: ['4','13','10','321'],
        answer: "13",
    },
    {
        Question: "What is 43 + 127?",
        choices: ['4','7','170','321'],
        answer: "170",
    },
    {
        Question: "What is 24 + 32?",
        choices: ['4','7','10','56'],
        answer: "56",
    },
    {
        Question: "What is 41 + 3?",
        choices: ['44','7','10','321'],
        answer: "44",
    }
];

// var stateSelected = function() {
//     button.setAttribute('state','selected');
// };

var selectLoop = function() {
    for(var i = 0; i <= 3; i++) {
        var button = document.querySelector(`#button${i}`);
        var stateSelected = function() {
            button.setAttribute('state','selected');
        };
        console.log(button);
        button.on('click', stateSelected());
        if(button.textContent === Questions[0].answer) {
            button.setAttribute('answer','true');
        };
    }
};
// var myInterval = setInterval(selectLoop, 2000);


var startQuiz = function() {
    $("#quizbox").removeAttr('id', 'quizbox');
    $("#start").attr('id', 'quizbox');
    makeQuiz();
};

var makeQuiz = function() {

    quizboxEl = document.createElement("div");
    quizboxEl.className+="contain-md bg-primary";

    questionHeader = document.createElement("h1");
    questionHeader.textContent = Questions[0].Question;
    quizboxEl.append(questionHeader);

    for (var i = 0; i < Questions[0].choices.length; i++) {
        var buttons = document.createElement('button');
        buttons.textContent = Questions[0].choices[i];
        buttons.className+="btn btn-dark";
        buttons.id = 'button' + [i];
        buttons.setAttribute('state', 'unselected');
        quizboxEl.append(buttons);
    };

    submitEl = document.createElement("button");
    submitEl.textContent = "Submit";
    quizboxEl.append(submitEl);
    questionArea.append(quizboxEl);
    submitEl.className+="btn btn-light";
    submitEl.id = "submit-button";

    // myInterval();

    // selected choice === answer, then next question, else subtract time

    $("#submit-button").on('click', nextQuestion);
};



var nextQuestion = function() {
    clearInterval(myInterval);
    questionArea.empty();

    quizboxEl = document.createElement("div");
    quizboxEl.className+="contain-md bg-primary";

    questionHeader = document.createElement("h1");
    questionHeader.textContent = Questions[1].Question;
    quizboxEl.append(questionHeader);

    for (var i = 0; i < Questions[1].choices.length; i++) {
        var buttons = document.createElement("button");
        buttons.textContent = Questions[1].choices[i];
        buttons.className+="btn btn-dark";
        quizboxEl.append(buttons);
    };

    submitEl = document.createElement("button");
    submitEl.textContent = "Submit";
    quizboxEl.append(submitEl);
    submitEl.className+="btn btn-light";
    submitEl.id="submit-button2";

    questionArea.append(quizboxEl);

    $("#submit-button2").on('click', nextQuestion2);
};

var nextQuestion2 = function() {

    questionArea.empty();

    quizboxEl = document.createElement("div");
    quizboxEl.className+="contain-md bg-primary";

    questionHeader = document.createElement("h1");
    questionHeader.textContent = Questions[2].Question;
    quizboxEl.append(questionHeader);

    for (var i = 0; i < Questions[2].choices.length; i++) {
        var buttons = document.createElement("button");
        buttons.textContent = Questions[2].choices[i];
        buttons.className+="btn btn-dark";
        quizboxEl.append(buttons);
    };

    submitEl = document.createElement("button");
    submitEl.textContent = "Submit";
    quizboxEl.append(submitEl);
    submitEl.className+="btn btn-light";
    submitEl.id="submit-button3";

    questionArea.append(quizboxEl);

    $("#submit-button3").on('click', nextQuestion3);
};

var nextQuestion3 = function() {

    questionArea.empty();

    quizboxEl = document.createElement("div");
    quizboxEl.className+="contain-md bg-primary";

    questionHeader = document.createElement("h1");
    questionHeader.textContent = Questions[3].Question;
    quizboxEl.append(questionHeader);

    for (var i = 0; i < Questions[3].choices.length; i++) {
        var buttons = document.createElement("button");
        buttons.textContent = Questions[3].choices[i];
        buttons.className+="btn btn-dark";
        quizboxEl.append(buttons);
    };

    submitEl = document.createElement("button");
    submitEl.textContent = "Submit";
    quizboxEl.append(submitEl);
    submitEl.className+="btn btn-light";
    submitEl.id="submit-button4";

    questionArea.append(quizboxEl);

    $("#submit-button4").on('click', scorePage);
};

var scorePage = function() {
    
    questionArea.empty();

    scoreboxEl = document.createElement('div');
    scoreboxEl.className+="contain-md bg-primary";

    scoreEl = document.createElement('h1');
    scoreEl.className+="d-flex justify-content-center";
    scoreEl.textContent = "Final Score";
    scoreboxEl.append(scoreEl);
    questionArea.append(scoreboxEl);

};

startBtn.on("click", startQuiz);