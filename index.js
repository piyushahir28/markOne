//How well you know Piyush...
var read = require("readline-sync");

var userName = read.question("What's your name? ");
console.log("Welcome, "+userName+" to Do You Know Piyush? ");
console.log(breakColor("-------------------"));

var score = 0;

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