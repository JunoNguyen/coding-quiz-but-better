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
        correctAnswer: "answer2"
    };

    quizboxEl = document.createElement("div");
    quizboxEl.className+="contain-md bg-primary";

    console.log(Questions1.answer1);
    questionHeader = document.createElement("h1");
    questionHeader.textContent = Questions1.Question;
    quizboxEl.append(questionHeader);

    answerEl0 = document.createElement("button");
    answerEl0.textContent = Questions1.answer0;
    quizboxEl.append(answerEl0);
    answerEl0.className+="btn btn-dark";

    answerEl1 = document.createElement("button");
    answerEl1.textContent = Questions1.answer1;
    quizboxEl.append(answerEl1);
    answerEl1.className+="btn btn-dark";

    answerEl2 = document.createElement("button");
    answerEl2.textContent = Questions1.answer2;
    quizboxEl.append(answerEl2);
    answerEl2.className+="btn btn-dark";

    answerEl3 = document.createElement("button");
    answerEl3.textContent = Questions1.answer3;
    quizboxEl.append(answerEl3);
    answerEl3.className+="btn btn-dark";

    submitEl = document.createElement("button");
    submitEl.textContent = "Submit";
    quizboxEl.append(submitEl);
    submitEl.className+="btn btn-light";
    submitEl.id="submit-button2";

    questionArea.append(quizboxEl);

    $("#submit-button2").on('click', nextQuestion2);
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
        correctAnswer: "answer1"
    };

    quizboxEl = document.createElement("div");
    quizboxEl.className+="contain-md bg-primary";

    console.log(Questions1.answer1);
    questionHeader = document.createElement("h1");
    questionHeader.textContent = Questions1.Question;
    quizboxEl.append(questionHeader);

    answerEl0 = document.createElement("button");
    answerEl0.textContent = Questions1.answer0;
    quizboxEl.append(answerEl0);
    answerEl0.className+="btn btn-dark";

    answerEl1 = document.createElement("button");
    answerEl1.textContent = Questions1.answer1;
    quizboxEl.append(answerEl1);
    answerEl1.className+="btn btn-dark";

    answerEl2 = document.createElement("button");
    answerEl2.textContent = Questions1.answer2;
    quizboxEl.append(answerEl2);
    answerEl2.className+="btn btn-dark";

    answerEl3 = document.createElement("button");
    answerEl3.textContent = Questions1.answer3;
    quizboxEl.append(answerEl3);
    answerEl3.className+="btn btn-dark";

    submitEl = document.createElement("button");
    submitEl.textContent = "Submit";
    quizboxEl.append(submitEl);
    submitEl.className+="btn btn-light";
    submitEl.id="submit-button3";

    questionArea.append(quizboxEl);

    $("#submit-button3").on('click', nextQuestion3);
};

var nextQuestion3 = function() {

    questionArea = $("#questions-area");

    questionArea.empty();

    var Questions1 = {
        Question: "What is 71 + 26?",
        answer0: "40",
        answer1: "97",
        answer2: "121",
        answer3: "381",
        correctAnswer: "answer1"
    };

    quizboxEl = document.createElement("div");
    quizboxEl.className+="contain-md bg-primary";

    console.log(Questions1.answer1);
    questionHeader = document.createElement("h1");
    questionHeader.textContent = Questions1.Question;
    quizboxEl.append(questionHeader);

    answerEl0 = document.createElement("button");
    answerEl0.textContent = Questions1.answer0;
    quizboxEl.append(answerEl0);
    answerEl0.className+="btn btn-dark";

    answerEl1 = document.createElement("button");
    answerEl1.textContent = Questions1.answer1;
    quizboxEl.append(answerEl1);
    answerEl1.className+="btn btn-dark";

    answerEl2 = document.createElement("button");
    answerEl2.textContent = Questions1.answer2;
    quizboxEl.append(answerEl2);
    answerEl2.className+="btn btn-dark";

    answerEl3 = document.createElement("button");
    answerEl3.textContent = Questions1.answer3;
    quizboxEl.append(answerEl3);
    answerEl3.className+="btn btn-dark";

    submitEl = document.createElement("button");
    submitEl.textContent = "Submit";
    quizboxEl.append(submitEl);
    submitEl.className+="btn btn-light";
    submitEl.id="submit-button4";

    questionArea.append(quizboxEl);

    $("#submit-button4").on('click', scorePage);
};

var scorePage = function() {
    questionArea = $("#questions-area");
    
    questionArea.empty();

    scoreboxEl = document.createElement('div');
    scoreboxEl.className+="contain-md bg-primary";

    scoreEl = document.createElement('h1');
    scoreEl.className+="d-flex justify-content-center";
    scoreEl.textContent = "Final Score";
    scoreboxEl.append(scoreEl);
    questionArea.append(scoreboxEl);

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
        correctAnswer: "4"
    };

    // END QUESTIONS 
    quizboxEl = document.createElement("div");
    quizboxEl.className+="contain-md bg-primary";

    console.log(Questions1.answer1);
    questionHeader = document.createElement("h1");
    questionHeader.textContent = Questions1.Question;
    quizboxEl.append(questionHeader);

    // APPENDING ANSWERS

    answerEl0 = document.createElement("button");
    answerEl0.textContent = Questions1.answer0;
    quizboxEl.append(answerEl0);
    answerEl0.className+="btn btn-dark";

    answerEl1 = document.createElement("button");
    answerEl1.textContent = Questions1.answer1;
    quizboxEl.append(answerEl1);
    answerEl1.className+="btn btn-dark";

    answerEl2 = document.createElement("button");
    answerEl2.textContent = Questions1.answer2;
    quizboxEl.append(answerEl2);
    answerEl2.className+="btn btn-dark";

    answerEl3 = document.createElement("button");
    answerEl3.textContent = Questions1.answer3;
    quizboxEl.append(answerEl3);
    answerEl3.className+="btn btn-dark";

    // END APPENDING ANSWERS
    submitEl = document.createElement("button");
    submitEl.textContent = "Submit";
    quizboxEl.append(submitEl);
    questionArea.append(quizboxEl);
    submitEl.className+="btn btn-light";
    submitEl.id = "submit-button";
    // if(Questions1.correctAnswer === selectedAnswer){
    //     $("#submit-button").on("click", nextQuestion);
    // } else {
    //     alert("Wrong Answer!");
    // }

    $("#submit-button").on('click', nextQuestion);
};

startBtn.on("click", startQuiz);