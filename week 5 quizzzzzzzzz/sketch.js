
// array with data object for questions
let questions = [{
  question: "why did artificer wage war against the scavengers?",
  answers: ["because she was bored", "because they killed her kids",
     "because she was asked", "because she wanted to usurp the throne"],
  correct: 1,
  image: "artificer.png"
},
{
  question: "what are the iterators",
  answers: ["computers", "buildings", "alien structures", "countries"],
  correct: 0,
  image: "iterators.png"
},
{
  question: "what type of species do slugcats classify as",
  answers: ["felines", "reptiles", "mollusks", "rodents"],
  correct: 3,
  image: "survivor.png"
},
{
  question: "what is 'the great problem'",
  answers: ["finding a working and transportable solution to ascend all living creatures",
     "how to stop life from going extinct", 
     "finding a way to bring back the benefactors from the death", 
     "if pineapple belongs on pizza"],
  correct: 0,
  image: "problem.png"
},
{
  question: "what is the triple affirmative?",
  answers: ["a SOS signal for if another iterator needs help", 
    "a signal for possible experiments", 
    "memes posted in the local iterator group chat", 
    "the signal sent by an iterator if a definite solution has been found"],
  correct: 3,
  image: "sliver.png"
},
{
  question: "why does the hunter have limited days?",
  answers: ["the environment is to hostile for long stay", 
    "the delivery might go bad", 
    "he has the rot and is dying", 
    "the iterator he is tasked to safe is running out of time"],
  correct: 2,
  image: "hunter.png"
},
{
  question: "which lizard has the highest bite lethality chance?",
  answers: ["green lizards", "caramel lizards", "blue lizards", "red lizards"],
  correct: 3,
  image: "lizards.png"
},
{
  question: "which creature has the most advanced behavior system?",
  answers: ["slugpups", "lizards", "the rot", "vultures"],
  correct: 0,
  image: "creatures.png"
},
{
  question: "how can you obtain positive scavenger reputation?",
  answers: ["not attacking and standing still",
     "by giving gifts or saving them from attacks",
      "asserting dominance by bringing a tamed lizard",
       "impressing them with explosives"],
  correct: 1,
  image: "scavenger.png"
},
{
  question: "how does spearmaster eat",
  answers: ["normal with his mouth", "photosynthesis", 
    "by draining the life force of others", "he doesn't eat"],
  correct: 2,
  image: "spearmaster.png"
}
];
//game variables
let questionShuffle = [];
let currentQuestion = 0;
let score = 0;
let gameState = "start";
let answerButtons = [];
// image variables
let questionImages = {};

let startBackground;
let resultsBackground;
// sound variables
let startSound;
let quizSound;
let resultsSound;
let currentSound;




function preload(){
  //load background for start and results
  startBackground = loadImage("assets/startScreen.png");
  resultsBackground = loadImage("assets/endScreen.png");
// load songs for different screens
  startSound = loadSound("assets/startSong.mp3");
  quizSound = loadSound("assets/quizSong.mp3");
  resultsSound = loadSound("assets/restultSong.mp3");
  
// load question images
  questionImages["artificer.png"] = loadImage("assets/artificer.png");
  questionImages["iterators.png"] = loadImage("assets/iterators.png");
  questionImages["survivor.png"] = loadImage("assets/survivor.png");
  questionImages["problem.png"] = loadImage("assets/problem.png");
  questionImages["sliver.png"] = loadImage("assets/sliver.png");
  questionImages["hunter.png"] = loadImage("assets/hunter.png");
  questionImages["lizards.png"] = loadImage("assets/lizards.png");
  questionImages["creatures.png"] = loadImage("assets/creatures.png");
  questionImages["scavenger.png"] = loadImage("assets/scavenger.png");
  questionImages["spearmaster.png"] = loadImage("assets/spearmaster.png");

}

function setup() {
  createCanvas(800, 600);
}

function draw() {
// if game state is start which is default image is startScreen and draws function
  if(gameState === "start"){
image(startBackground, 0, 0, width, height);

    drawStartScreen();
// if it's quiz show the current question of the quiz 
  } else if (gameState === "quiz"){

    background(0);
   
    drawQuizScreen();
// and if it's results show final score
  } else if (gameState === "results"){

    image(resultsBackground, 0, 0, width, height);
    
    drawResultScreen();
  }
}

function drawStartScreen(){
textAlign(CENTER,CENTER);
fill("white");
textSize(40);
text("QUIZ!", width/ 2, 200);

textSize(20);
text("press ENTER to start", width/ 2, 300)

}

function drawQuizScreen(){
let q = questionShuffle[currentQuestion];

textAlign(CENTER, CENTER);
textSize(18);
text("questions" + (currentQuestion + 1) + "/" + questionShuffle.length, width/ 2, 40);

textSize(28);

text(q.question, width/ 2, 90);

let questionImage = questionImages[q.image];

if (questionImage){
  image(questionImage, 250, 120, 300, 180);
}


}

function drawResultScreen(){
  textAlign(CENTER, CENTER);
  textSize(40);
  text("Quiz finished!", width / 2, 150);

  textSize(30);
  text("you got" + score + "/" + questionShuffle.length + "!", width / 2, 250);

  textSize(20);
  text("press ENTER to play again", width / 2, 350);

}

function keyPressed(){
if (gameState === "start" && keyCode === ENTER){
  startQuiz();
}
else if (gameState === "results"){
  startQuiz();
}

}

function startQuiz(){
  removeAnswerButtons();

  questionShuffle = shuffle([...questions]);

  currentQuestion = 0;
  score = 0;
  gameState = "quiz";

  changeSound(quizSound);

  createAnswerButtons();
}

function createAnswerButtons(){
  removeAnswerButtons();

  let q = questionShuffle[currentQuestion];

  for (let i = 0; i < q.answers.length; i++) {
    let answer = q.answers[i];

    let button = createAnswerButton(answer);

    if(i === 0){
      button.position(50,350);
    }

    if (i === 1){
      button.position(420,350);
    }

    if (i === 2){
      button.position(50,450);
    }

    if (i === 3){
      button.position(420,450);
    }

    button.size(330,70);

    button.mousePressed(function(){
      checkAnswer(answer);
    });

    answerButtons.push(button);
    
  }
}

function checkAnswer(){
  let q = questionShuffle[currentQuestion];
  
  if (answer === q.correct){
    score++;
  }
nextQuestion();
}

function nextQuestion(){
  currentQuestion++;

  if (currentQuestion >= questionShuffle.length){
    gameState = "results";
    removeAnswerButtons();
    changeSound(resultsSound);
  }
  else{
    createAnswerButtons();
  }
}

function changeSound(newSound){
if(currentSound){
  currentSound.stop();
}

currentSound = newSound;

if(currentSound){
  currentSound.loop();
}
}

function removeAnswerButtons(){
  for (let button of answerButtons){
    button.remove();
  }
  answerButtons = [];
}