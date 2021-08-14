//Quiz -- How well do you know Piyush?
const { blue } = require('chalk');
const chalk = require('chalk');
var read = require("readline-sync");

var rightAns = chalk.greenBright;
var wrongAns = chalk.redBright;
var sColor = chalk.yellowBright;
var hColor = chalk.hex('#DEADED');

console.log(hColor("Let's see how well you know PIYUSH ❤️ \n"));
var userName = read.question("Namaste \nPlease enter your name? ");
console.log(hColor("\nWelcome, " + userName + ", to Do You Know Piyush? "));
console.log(chalk.black.bold.bgWhite("\nNOTE: For each correct answer you will get 1 point.\n"));

var highScores = [{
    name: "Yuvraj",
    scored: 4
}, {
    name: "Ram",
    scored: 4
}];

var score = 0;

function checkHighScore() {
    for (var i = 0; i < highScores.length; i++) {
        if (score > highScores[i].scored) {
            console.log(chalk.bold.blueBright("\nYay! You beat the high scorer, please send me a screenshot of this so that I can update the list of high scorer.\n"));
            console.log("-------------------");
            break;
        }
    }
}

var questions = [{
    question: "\nWhat's My full Name?\n",
    mcq: ['Piyush', 'Piyush Ahir', 'Piyush Rakesh'],
    answer: "1"
}, {
    question: "Where do I live?\n",
    mcq: ['Neemuch', 'Ujjain', 'Indore'],
    answer: "0"
}, {
    question: "Who is my best friend?\n",
    mcq: ['Ram', 'Dheeraj', 'Shoaib'],
    answer: "2"
}, {
    question: "Which phone I am using?\n",
    mcq: ['iPhone 12 Mini', 'MI A3', 'Nokia 3310'],
    answer: "1"
}, {
    question: "What's my college name?\n",
    mcq: ['MIT, Ujjain', 'MIT, Pune', 'MIT, USA'],
    answer: "0"
}];

for (var i = 0; i < questions.length; i++) {
    console.log("Q" + (i + 1));
    play(questions[i]);
    console.log(sColor("Current Score : " + score));
    console.log("-------------------");
}

function play({ question, mcq, answer }) {

    const index = read.keyInSelect(mcq, question);

    if (index == answer) {
        console.log(rightAns("\nYay! You're right :)"));
        score++;
    } else {
        console.log(wrongAns("\nOops! You're wrong :("));
    }
}

console.log(chalk.bold.magentaBright("Yay! Your total score is : " + score));
console.log("-------------------");

checkHighScore();

console.log("Thanks for playing, Have a nice day...");
console.log("-------------------");