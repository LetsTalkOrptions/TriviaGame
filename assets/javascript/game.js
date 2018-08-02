// Keeping score

var unanswered = 0;
var questionIndex = 0;
var score = 0;
var questions = 0;


function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
function getQuestionIndex() {
    return this.questions[this.questionIndex];
}

function endGame() {
    return this.questions.length === this.questionIndex;
}

function guess(answer) {

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

// check user answer
Question.prototype.correctAnswer = function (choice) {
    return choice === this.answer;
}

// have questions appear if game is still going
function populate() {

    console.log("populating");
    if (endGame()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = getQuestionIndex().text;

        // have options appear for each question
        var choices = getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("option" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress()
    }
}

// store user guess
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}
// show which question player is on
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

// display scores at end of game
function showScores() {
    var gameOver = "<h1>Results</h1>" + "<h2 class='corr score'> Correct Answers: " + quiz.score + "<h2>" + "<br>" + "<h2 class = 'wrong score'>Wrong Answers: " + (questions.length - quiz.score) + "<h2 class = 'unanswered score'>Unanswered: " + "<h2>";
    var results = document.getElementById("trivia");
    results.innerHTML = gameOver;


}

// sets of questions, options, answers
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


var intervalId;

//  When the resume button gets clicked, execute the run function.
$("#btn").on("click", run);

//  The run function sets an interval

function run() {
    clearInterval(intervalId);
    
}

var timeLeft = 10;
var displayClock = document.getElementById('timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft === 0) {
    
   
    unanswered++;
    questionIndex++;
    populate();

    alert("You did not answer in time!");
    timeLeft = 10;
    
    // reset timer, pull question
    run();
  } else {
    displayClock.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}

run();
