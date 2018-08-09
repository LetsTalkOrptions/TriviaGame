// global variables
var score = 0;
var questions = questions;
var questionIndex = 0;
var unanswered = 0;

// question # you are on
function getQuestionIndex() {
    return this.questions[this.questionIndex];
}

// tells game is over
function isEnded() {
    return this.questions.length === this.questionIndex;
}

// comparing questions
function choose(answer) {
    console.log("this is working")
    console.log(answer);
    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
    run();
}

// references questions and answers
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// returns the choice
Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}

// have questions appear if game is still going
function populate() {
    if (isEnded()) {
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

// every button click populate function will run
function guess(id) {
    var button = document.getElementById(id);
    button.onclick = function () {
        populate();
    }
}

// shows question number you are on
function showProgress() {
    var currentQuestionNumber = questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + questions.length;
}


function showScores() {
    var gameOver = "<h1>Results</h1>" + "<h2 class='corr score'> Correct Answers: " + score + "<h2>" + "<br>" + "<h2 class = 'wrong score'>Wrong Answers: " + (questions.length - score) + "<br>" + "<h2 class = 'unanswered'>Unanswered: " + unanswered + "<h2>";
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

$("button").on("click", function () {
    console.log($(this).text());
    var storedAnswer = $(this).text();
    choose(storedAnswer);
})

populate();

// timer clock
var number;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

// //  When the stop button gets clicked, run the stop function.
// $("#stop").on("click", stop);

//  When the resume button gets clicked, execute the run function.
$("#timer").on("click", run);

//  The run function sets an interval
//  that runs the decrement function once a second.
function run() {
    clearInterval(intervalId);
    number = 11;
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#show-clock").html("<h2>" + "Time Left: " + number + "</h2>");



    //  Once number hits zero...
    if (number === 0) {

        // add one to unanswered
        unanswered++;
        //  Alert the user that time is up.
        // alert("Time Up!");
        // go to next question
        this.questionIndex++;
        // populate next question
        populate();
        // run timer 
        run();

    }
}

// //  The stop function
function stop() {
    clearInterval(intervalId);

}


run();






