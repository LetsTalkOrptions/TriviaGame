// Keeping score
    var score = 0;
    var questions = questions;
    var questionIndex = 0;
    var unanswered = 0;

function getQuestionIndex() {
    return this.questions[this.questionIndex];
}

function isEnded() {
    return this.questions.length === this.questionIndex;
}

function choose(answer) {
    console.log("this is working")
    console.log(answer);
    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
    run();
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

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        // guess(guess);
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + questions.length;
}

function showScores() {
    var gameOver = "<h1>Results</h1>" + "<h2 class='corr score'> Correct Answers: " + score + "<h2>" + "<br>" + "<h2 class = 'wrong score'>Wrong Answers: " + (questions.length - score);;
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

$("button").on("click", function() {
    console.log($(this).text());
    var storedAnswer = $(this).text();
    choose(storedAnswer);
})

populate();

// use either document ready or put button jQueries at bottom of page, beneath defining buttons bc it reads top down, if no buttons are read yet, it cannot place click functions on them


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






// bad code below...struggle is real. 




















// // Keeping score

// var unanswered = 0;
// var questionNumber = 0;
// var score = 0;
// var questions = 0;


// function Quiz(questions) {
//     this.score = 0;
//     this.questions = questions;
//     this.questionNumber = 0;
// }
// function getQuestionNumber() {
//     return this.questions[this.questionNumber];
// }

// function endGame() {
//     return this.questions.length === this.questionNumber;
// }

// function guess(answer) {

//     if (this.getQuestionNumber().correctAnswer(answer)) {
//         this.score++;
//     }
//     this.questionNumber++;
// }

// // functions for questions

// function Question(text, choices, answer) {
//     this.text = text;
//     this.choices = choices;
//     this.answer = answer;
// }

// // check user answer
//     function correctAnswer(choice) {
//     return choice === this.answer;
// }

// // have questions appear if game is still going
// function populate() {

//     console.log("populating");
//     if (endGame()) {
//         showScores();
//     }
//     else {
//         var element = document.getElementById("question");
//         element.innerHTML = getQuestionNumber().text;

//         // have options appear for each question
//         var choices = getQuestionNumber().choices;
//         for (var i = 0; i < choices.length; i++) {
//             var element = document.getElementById("option" + i);
//             element.innerHTML = choices[i];
//             guess("btn" + i, choices[i]);
//         }
//         showProgress()
//     }
// }

// // store user guess
// function input(id) {
//     var button = document.getElementById(id);
//     button.onclick = function () {

//         populate();
//     }
// }
// // show which question player is on
// function showProgress() {
//     var currentQuestionNumber = questionNumber + 1;
//     var element = document.getElementById("progress");
//     element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
// }

// // display scores at end of game
// function showScores() {
//     var gameOver = "<h1>Results</h1>" + "<h2 class='corr score'> Correct Answers: " + score + "<h2>" + "<br>" + "<h2 class = 'wrong score'>Wrong Answers: " + (questions.length - score) + "<h2 class = 'unanswered score'>Unanswered: " + "<h2>";
//     var results = document.getElementById("trivia");
//     results.innerHTML = gameOver;


// }

// // sets of questions, options, answers
// var questions = [
//     new Question("Where was the game of golf originally founded?",
//         ["Scotland", "China", "England", "United States"],
//         "Scotland"),
//     new Question("Who is the only female golfer to make a cut at a PGA Tour event?",
//         ["Michelle Wie", "Annika Sorensteim", "Lexi Thompson", "Babe Zaharias"],
//         "Babe Zaharias"),
//     new Question("What is the name for a hole-in-one on a par five?",
//         ["Triple Eagle", "Double Ace", "Condor", "Albatross"],
//         "Condor"),
//     new Question("Who holds the record for the most PGA Tour victories?",
//         ["Tiger Woods", "Jack Nicklaus", "Ben Hogan", "Sam Snead"],
//         "Sam Snead"),
//     new Question("What percentage of golfers will never achieve a handicap of 18 or less?",
//         ["50 percent", "73 percent", "80 percent", "91 percent"],
//         "80 percent"),
//     new Question("How many dimples are on a standard regulation golf ball?",
//         ["336", "402", "196", "468"],
//         "336"),
//     new Question("Who was considered the first professional golfer in history?",
//         ["Bobby Jones", "Byron Nelson", "Walter Hagen", "Old Tom Morris"],
//         "Walter Hagen"),
//     new Question("Who is the youngest player to win the Masters?",
//         ["Tiger Woods", "Jack Nicklaus", "Jordan Speith", "Arnold Palmer"],
//         "Tiger Woods")
// ];

// var quiz = new Quiz(questions);
// populate();


// var intervalId;

// //  When the resume button gets clicked, execute the run function.
// $("#btn").on("click", run);

// //  The run function sets an interval

// function run() {
//     clearInterval(intervalId);

// }

// var timeLeft = 3;
// var displayClock = document.getElementById('timer');

// var timerId = setInterval(countdown, 1000);

// function countdown() {
//     if (timeLeft === 0) {


//         unanswered++;
        
//         questionNumber++;
//         populate();

//         alert("You did not answer in time!");
//         timeLeft = 10;
//         currentQuestionNumber++;

//         // reset timer, pull question
//         run();
//     } else {
//         displayClock.innerHTML = timeLeft + ' seconds remaining';
//         timeLeft--;
//     }
// }

// run();











// $(document).ready(function() {
//     loadQuestion();


// })

// var unanswered;
// var currentQuestion;
// var correct;
// var incorrect;
// var answer;

// var game = (
//     unanswered = 0,
//     correctcorrect = 0,
//     incorrect = 0,
//     currentQuestion = 0,
//     countdown()
// )

// // sets of questions, options, answers
// var questions = [{
//     question: "Where was the game of golf originally founded?",
//     options: ["Scotland", "China", "England", "United States"],
//     answer: "Scotland" },
// {
//     question: "Who is the only female golfer to make a cut at a PGA Tour event?",
//     options: ["Michelle Wie", "Annika Sorensteim", "Lexi Thompson", "Babe Zaharias"],
//     answer: "Babe Zaharias"},
// {  
//     question: "What is the name for a hole-in-one on a par five?",
//     options: ["Triple Eagle", "Double Ace", "Condor", "Albatross"],
//     answer:"Condor"},
// {
//     question: "Who holds the record for the most PGA Tour victories?",
//     options: ["Tiger Woods", "Jack Nicklaus", "Ben Hogan", "Sam Snead"],
//     answer: "Sam Snead"},
// {
//     question: "What percentage of golfers will never achieve a handicap of 18 or less?",
//     options: ["50 percent", "73 percent", "80 percent", "91 percent"],
//     answer: "80 percent"},
// {
//     question: "How many dimples are on a standard regulation golf ball?",
//     options: ["336", "402", "196", "468"],
//     answer: "336"},
// {
//     question: "Who was considered the first professional golfer in history?",
//     options: ["Bobby Jones", "Byron Nelson", "Walter Hagen", "Old Tom Morris"],
//     answer: "Walter Hagen"},
// {
//     question: "Who is the youngest player to win the Masters?",
//     options: ["Tiger Woods", "Jack Nicklaus", "Jordan Speith", "Arnold Palmer"],
//     answer: "Tiger Woods"}
// ];

// function countdown() {
//     game.counter--;
//     $('#timer').html(game.counter);
//     if(game.counter === 0) {
//         game.timeUp();
//     }
// }

// var newTimer = setInterval(game.countdown, 1000);

// function loadQuestion() {
//     newTimer; 
//     $("<h2>").text("hello");
// }

// function nextQuestion() 



















// function getcurrentQuestion() {
//     return questions[this.question];
// }

// function endGame() {
//     return this.questions.length === this.currentQuestion;
// }

// function store(answer) {

//     if (getcurrentQuestion() === correctAnswer(answer)) {
//         this       incorrect++;
//     }
//     this.currentQuestion++;
// }

// // functions for questions

// function data(text, choices, answer) {
//     this.text = text;
//     this.choices = choices;
//     this.answer = answer;
// }

// // check user answer
// function correctAnswer(choice) {
//     return choice === this.answer;
// }

// // have questions appear if game is still going
// function populate() {

//     console.log("populating");
//     if (endGame()) {
//         sho    incorrect();
//     }
//     else {
//         var element = document.getElementById("question");
//         element.innerHTML = getcurrentQuestion();

//         // have options appear for each question
//         // var choices = getcurrentQuestion().choices[i];
//         for (var i = 0; i < choices.length; i++) {
//             var element = document.getElementById("option" + i);
//             element.innerHTML = choices[i];
//             guess("btn" + i, choices[i]);
//         }
//         showProgress()
//     }
// }

// // store user guess
// function guess(id) {
//     var button = document.getElementById(id);
//     button.onclick = function () {

//         // currentQuestion++;
//         populate();
//         store(answer);

//     }
// }
// // show which question player is on
// function showProgress() {
//     var currentQuestionNumber = currentQuestion + 1;
//     var element = document.getElementById("progress");
//     element.innerHTML = "Question " + currentQuestionNumber + " of " + questions.length;
// }

// // display     incorrects at end of game
// function sho       incorrects() {
//     var gameOver = "<h1>Results</h1>" + "<h2 class='corr       incorrect'> Correct Answers: " +    incorrect + "<h2>" + "<br>" + "<h2 class = 'wrong   incorrect'>Wrong Answers: " + (questions.length -  incorrect) + "<h2 class = 'unanswered incorrect'>Unanswered: " + "<h2>";
//     var results = document.getElementById("trivia");
//     results.innerHTML = gameOver;


// }



// populate();


// var intervalId;


// $("#btn").on("click", run);

// //  The run function sets an interval

// function run() {
//     clearInterval(intervalId);


// }

// var timeLeft = 10;
// var displayClock = document.getElementById('timer');

// var timerId = setInterval(countdown, 1000);

// function countdown() {
//     if (timeLeft === 0) {


//         unanswered++;
//         currentQuestion++;
//         populate();

//         alert("You did not answer in time!");
//         timeLeft = 10;

//         // reset timer, pull question
//         run();
//     } else {
//         displayClock.innerHTML = timeLeft + ' seconds remaining';
//         timeLeft--;
//     }
// }

// run();
