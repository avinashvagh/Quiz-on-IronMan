const chalk = require('chalk');
var readLineSync = require('readline-sync');

var userName = readLineSync.question("What is your name? ");
var score = 0;
var level = 0;
var highscore = [{
  name: "Avinash",
  score: 10,
},{
  name: "Aksh",
  score: 9,
}
]

var welcomeMsg = "Welcome to the IronMan quiz " + userName;
console.log(chalk.bold(welcomeMsg));

function playQuiz(question, answer){
  var userAns = readLineSync.question(question);

  if(userAns.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Right Answer!"));
    score = score + 1;
  }
  else{
    console.log(chalk.red("Wrong Answer!"));
  }

console.log("Your current score: " + score);
if(score === 3){
  if(level!=1){
    level = level + 1;
    console.log(chalk.blue("Congrats! You have reached level 1"));
  }
}
if(score === 6){
  if(level!=2){  
    level = level + 1;
    console.log(chalk.blue("Congrats! You have reached level 2"));
  }
}
if(score === 9){
  if(level!=3){
    level = level + 1;
    console.log(chalk.blue("Congrats! You have reached last level"));
  }
}

console.log("--------------");
}

function checkHighscore(score){
  for(var i=0; i<highscore.length; i++){
    if(highscore[i].score<score){
      console.log(chalk.green("CONGRATULATIONS! YOU HAVE BEATEN A HIGH SCORE. Send me a screenshot so I can add you to the highscores"));
    }
  }
}


var questions = [{
  question: `
  When does Robert Downey Jr. First Appear As Tony Stark?
  a. Iron Man
  b. The Avengers
  c. The Incredible Hulk
  d. Captain America
  `, answer:"c"
  }, {
    question:`
    What does Harley Call Tony In 'Iron Man 3'?
    a. The Protector
    b. The Mechanic
    c. The Inventor
    d. The Hero
    `, answer:"b"
  }, {
    question:`
    What does Stark Drink In 'Iron Man 2'?
    a. Chlorophyll
    b. Palladium Juice
    c. Green Luck
    d. Kale Smoothie
    `, answer:"a"
  }, {
    question:`
    Which Brand Of Hamburgers Was Tony Eating In 'Iron Man'?
    a. McDonald's
    b. Wendy's
    c. Burger king
    d. Carl's Jr.
    `, answer:"c"
  }, {
    question:`
    What is the name of the female journalist that interrogates Tony Stark at multiple occasions?
    a. Christine Everhart
    b. Chritina Sanches
    c. Chirstina Williams
    `, answer:"a"
  }, {
    question:`
    What material was used to create the core that helped Tony stay alive ?
    a. Palladium
    b. Rhodium
    c. Platinium
    `,
    answer:"a"
  }, {
    question:`
    What was the name of the terrorist group that kidnapped Tony stark? 
    a. Ten Rings
    b. Twelve Rings
    c. Thirteen Rings
    `,
    answer:"a"
  }, {
    question:`
    What is Tony Stark's business empire called?
    a. Stark Limited
    b. StarkCom
    c. Stark Industries
    d. The Stark Cupcake Emporium
    `, answer:"c"
  }, {
    question:`
    What Game Was The S.H.I.E.L.D Member Playing When Tony Caught Him In 'The Avengers' ?
    a. Tetris
    b. Galaga
    c. Space Invaders
    d. Galaxian
    `, answer:"b"
  }, {
    question:`
    Marvel or DC ?
    a. Marvel
    b. DC
    `, answer:"a"
  }];

for(var i=0; i<questions.length; i++){
  playQuiz(questions[i].question, questions[i].answer);
}

console.log("Quiz over, here are the current high scores!");

for(var i=0; i<highscore.length; i++){
  console.log(highscore[i].name + " : " + chalk.green(highscore[i].score));
}
console.log("Here is your Score: ");
console.log(chalk.red("Your final score is: " + score + "/10"));
checkHighscore(score);

console.log(chalk.red("Your final level is: " + level + "/3"));

