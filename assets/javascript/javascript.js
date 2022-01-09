var startBtn = $("#start-button");



var startQuiz = function() {
    $("#quizbox").removeAttr('id', 'quizbox');
    $("#start").attr('id', 'quizbox');
}

startBtn.on("click", startQuiz);