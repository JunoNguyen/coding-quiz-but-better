var startBtn = $("#start-button");



var startQuiz = function() {
    $("#quizbox").removeAttr('id', 'quizbox');
    $("#start").attr('id', 'quizbox');
    makeQuiz();
};

var nextQuestion = function() {

    questionArea = $("#questions-area");

    questionArea.empty();

    var Questions1 = {
        Question: "What is 5 + 6?",
        answer0: "40",
        answer1: "87",
        answer2: "11",
        answer3: "381",
        correctAnswer: "C"
    };

    console.log(Questions1.answer1);
    questionHeader = document.createElement("h1");
    questionHeader.textContent = Questions1.Question;
    questionArea.append(questionHeader);

    answerEl0 = document.createElement("button");
    answerEl0.textContent = Questions1.answer0;
    questionArea.append(answerEl0);
    answerEl0.className+="btn btn-dark";

    answerEl1 = document.createElement("button");
    answerEl1.textContent = Questions1.answer1;
    questionArea.append(answerEl1);
    answerEl1.className+="btn btn-dark";

    answerEl2 = document.createElement("button");
    answerEl2.textContent = Questions1.answer2;
    questionArea.append(answerEl2);
    answerEl2.className+="btn btn-dark";

    answerEl3 = document.createElement("button");
    answerEl3.textContent = Questions1.answer3;
    questionArea.append(answerEl3);
    answerEl3.className+="btn btn-dark";

    submitEl = document.createElement("button");
    submitEl.textContent = "Submit";
    questionArea.append(submitEl);
    submitEl.className+="btn btn-primary";
    submitEl.id="submit-button2";
    $("#submit-button2").on('click', nextQuestion2());
};

var nextQuestion2 = function() {

    questionArea = $("#questions-area");

    questionArea.empty();

    var Questions1 = {
        Question: "What is 7 + 6?",
        answer0: "40",
        answer1: "13",
        answer2: "121",
        answer3: "381",
        correctAnswer: "B"
    };

    console.log(Questions1.answer1);
    questionHeader = document.createElement("h1");
    questionHeader.textContent = Questions1.Question;
    questionArea.append(questionHeader);

    answerEl0 = document.createElement("button");
    answerEl0.textContent = Questions1.answer0;
    questionArea.append(answerEl0);
    answerEl0.className+="btn btn-dark";

    answerEl1 = document.createElement("button");
    answerEl1.textContent = Questions1.answer1;
    questionArea.append(answerEl1);
    answerEl1.className+="btn btn-dark";

    answerEl2 = document.createElement("button");
    answerEl2.textContent = Questions1.answer2;
    questionArea.append(answerEl2);
    answerEl2.className+="btn btn-dark";

    answerEl3 = document.createElement("button");
    answerEl3.textContent = Questions1.answer3;
    questionArea.append(answerEl3);
    answerEl3.className+="btn btn-dark";

    submitEl = document.createElement("button");
    submitEl.textContent = "Submit";
    questionArea.append(submitEl);
    submitEl.className+="btn btn-primary";
    submitEl.id="submit-button3";
    $("#submit-button3").on('click', nextQuestion3());
};

var makeQuiz = function() {
    questionArea = $("#questions-area");

    // CREATING QUESTIONS 

    var Questions1 = {
        Question: "What is 2 + 2?",
        answer0: "4",
        answer1: "7",
        answer2: "10",
        answer3: "321",
        correctAnswer: "0"
    };

    // END QUESTIONS 

    console.log(Questions1.answer1);
    questionHeader = document.createElement("h1");
    questionHeader.textContent = Questions1.Question;
    questionArea.append(questionHeader);

    // APPENDING ANSWERS

    answerEl0 = document.createElement("button");
    answerEl0.textContent = Questions1.answer0;
    questionArea.append(answerEl0);
    answerEl0.className+="btn btn-dark";

    answerEl1 = document.createElement("button");
    answerEl1.textContent = Questions1.answer1;
    questionArea.append(answerEl1);
    answerEl1.className+="btn btn-dark";

    answerEl2 = document.createElement("button");
    answerEl2.textContent = Questions1.answer2;
    questionArea.append(answerEl2);
    answerEl2.className+="btn btn-dark";

    answerEl3 = document.createElement("button");
    answerEl3.textContent = Questions1.answer3;
    questionArea.append(answerEl3);
    answerEl3.className+="btn btn-dark";

    // END APPENDING ANSWERS

    submitEl = document.createElement("button");
    submitEl.textContent = "Submit";
    questionArea.append(submitEl);
    submitEl.className+="btn btn-primary";
    submitEl.id = "submit-button";
    $("#submit-button").on("click", nextQuestion);
};

startBtn.on("click", startQuiz);