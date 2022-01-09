var startBtn = $("#start-button");



var startQuiz = function() {
    $("#quizbox").removeAttr('id', 'quizbox');
    $("#start").attr('id', 'quizbox');
}

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
    var Questions2 = {
        Question: "What is 5 + 6?",
        A: "40",
        B: "87",
        C: "11",
        D: "381",
        correctAnswer: "C"
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

    answerEl1 = document.createElement("button");
    answerEl1.textContent = Questions1.answer1;
    questionArea.append(answerEl1);

    answerEl2 = document.createElement("button");
    answerEl2.textContent = Questions1.answer2;
    questionArea.append(answerEl2);

    answerEl3 = document.createElement("button");
    answerEl3.textContent = Questions1.answer3;
    questionArea.append(answerEl3);

    // END APPENDING ANSWERS
};

makeQuiz();


startBtn.on("click", startQuiz);