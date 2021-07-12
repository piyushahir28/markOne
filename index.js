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
 