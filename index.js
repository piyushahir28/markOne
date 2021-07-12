//How well you know me?
const chalk = require('chalk');
var read = require("readline-sync");
const sColor = chalk.bgHex('#FEF2F2').hex('#1E3A8A');
const fColor = chalk.bgHex('#FEF2F2').hex('#5B21B6');
const breakColor = chalk.hex('#F9A8D4');

var userName = read.question("What's your name? ");
console.log("Welcome, "+userName+" to Do You Know Piyush? ");
console.log(breakColor("-------------------"));

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
      console.log("Yay! You beat the high scorer, please send me a screenshot of this so that I can update the list. ");
      console.log(breakColor("-------------------"));
      break;
    }
  }
}

function askQuestions(ques, ans){
  var userAns = read.question(ques);
  if(userAns.toLowerCase()==ans.toLowerCase()){
    console.log("You're right! " + userName);
    score++;
  }else{
    console.log("Oops! You're wrong! " + userName);
  }

  console.log(sColor("Score : "+score));
  console.log(breakColor("-------------------"));
}

var questions = [{
  question : "What's My full Name? ",
  answer : "Piyush Ahir"
}, {
  question : "Where do I live? ",
  answer : "Neemuch"
}, {
  question : "Who is my best friend? ",
  answer : "Shoaib"
}, {
  question : "Which phone I am using? ",
  answer : "MI A3"
}];

for(var i=0; i<questions.length; i++){
  var q = questions[i];
  askQuestions(q.question, q.answer);
}

console.log(fColor("Yay! You scored : " + score));
console.log(breakColor("-------------------"));

checkHighScore();

console.log("Thanks for playing, Have a nice day...");
console.log(breakColor("-------------------"));