// Keeping score

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function () {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function (answer) {

    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

// functions for questions

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function (choice) {
    return choice === this.answer;
}

// have questions appear if game is still going
function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // have options appear for each question
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("option" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress()
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOver = "<h1>Results</h1>" + "<h2 class='corr score'> Correct Answers: " + quiz.score + "<h2>" + "<br>" + "<h2 class = 'wrong score'>Wrong Answers: " + (questions.length - quiz.score);;
    var results = document.getElementById("trivia");
    results.innerHTML = gameOver;


}


var questions = [
    new Question("Where was the game of golf originally founded?",
        ["Scotland", "China", "England", "United States"],
        "Scotland"),
    new Question("Who is the only female golfer to make a cut at a PGA Tour event?",
        ["Michelle Wie", "Annika Sorensteim", "Lexi Thompson", "Babe Zaharias"],
        "Babe Zaharias"),
    new Question("What is the name for a hole-in-one on a par five?",
        ["Triple Eagle", "Double Ace", "Condor", "Albatross"],
        "Condor"),
    new Question("Who holds the record for the most PGA Tour victories?",
        ["Tiger Woods", "Jack Nicklaus", "Ben Hogan", "Sam Snead"],
        "Sam Snead"),
    new Question("What percentage of golfers will never achieve a handicap of 18 or less?",
        ["50 percent", "73 percent", "80 percent", "91 percent"],
        "80 percent"),
    new Question("How many dimples are on a standard regulation golf ball?",
        ["336", "402", "196", "468"],
        "336"),
    new Question("Who was considered the first professional golfer in history?",
        ["Bobby Jones", "Byron Nelson", "Walter Hagen", "Old Tom Morris"],
        "Walter Hagen"),
    new Question("Who is the youngest player to win the Masters?",
        ["Tiger Woods", "Jack Nicklaus", "Jordan Speith", "Arnold Palmer"],
        "Tiger Woods")
];


var quiz = new Quiz(questions);
populate();

// use either document ready or put button jQueries at bottom of page, beneath defining buttons bc it reads top down, if no buttons are read yet, it cannot place click functions on them


// timer clock
var number = 60;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//  When the resume button gets clicked, execute the run function.
$("#btn").on("click", run);

//  The run function sets an interval
//  that runs the decrement function once a second.
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}


//  The decrement function.
function decrement() {
    number--;

    $("#show-clock").html("<h2>" + "Time Left: " + number + "</h2>");
}

//  Once number hits zero...
if (number === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    // alert("Time Up!");
}


// //  The stop function
function stop() {
    clearInterval(intervalId);

}

//  Execute the run function.
run();
