var startBtn = $("#start-button");
var questionArea = $("#questions-area");

var select0 = function() {
    button0.setAttribute('state','selected');
    button1.setAttribute('state','unselected');
    button2.setAttribute('state','unselected');
    button3.setAttribute('state','unselected');
};

var select1 = function() {
    button0.setAttribute('state','unselected');
    button1.setAttribute('state','selected');
    button2.setAttribute('state','unselected');
    button3.setAttribute('state','unselected');
};

var select2 = function() {
    button0.setAttribute('state','unselected');
    button1.setAttribute('state','unselected');
    button2.setAttribute('state','selected');
    button3.setAttribute('state','unselected');
};

var select3 = function() {
    button0.setAttribute('state','unselected');
    button1.setAttribute('state','unselected');
    button2.setAttribute('state','unselected');
    button3.setAttribute('state','selected');
};

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

    var button0 = document.getElementById("button0");
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");

    button0.setAttribute('onclick', 'select0()');
    button1.setAttribute('onclick', 'select1()');
    button2.setAttribute('onclick', 'select2()');
    button3.setAttribute('onclick', 'select3()');

    console.log(button0);
    console.log(button1);
    console.log(button2);
    console.log(button3);

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