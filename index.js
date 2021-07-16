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
console.log(hColor("\nWelcome, "+userName+", to Do You Know Piyush? "));
console.log(chalk.black.bold.bgWhite("\nNOTE: For each correct answer you will get 1 point.\n"));

var highScores = [{
  name : "Yuvraj",
  scored : 3
}, {
  name : "Ram",
  scored : 2
}];

var score = 0;

function checkHighScore(){
  for(var i=0; i<highScores.length; i++){
    if(score>highScores[i].scored){
      console.log(chalk.bold.blueBright("\nYay! You beat the high scorer, please send me a screenshot of this so that I can update the list.\n"));
      console.log("-------------------");
      break;
    }
  }
}

function askQuestions(ques, ans){
  var userAns = read.question(ques);
  if(userAns.toLowerCase() == ans.toLowerCase()){
    console.log(rightAns("\nYay! You're right :)"));
    score++;
  }else{
    console.log(wrongAns("\nOops! You're wrong :("));
  }

  console.log(sColor("Current Score : "+score));
  console.log("-------------------");
}

var questions = [{
  question : "\nWhat's My full Name?\n",
  answer : "Piyush Ahir"
}, {
  question : "\nWhere do I live?\n",
  answer : "Neemuch"
}, {
  question : "\nWho is my best friend?\n",
  answer : "Shoaib"
}, {
  question : "\nWhich phone I am using?\n",
  answer : "MI A3"
}];

for(var i=0; i<questions.length; i++){
  var q = questions[i];
  askQuestions(q.question, q.answer);
}

console.log(chalk.bold.magentaBright("Yay! Your total score is : " + score));
console.log("-------------------");

checkHighScore();

console.log("Thanks for playing, Have a nice day...");
console.log("-------------------");