// pet statistics
let stats = {
  health: 100,
   hunger: 100,
    energy: 100, 
    happiness: 100,
    sick: false, 
    dirtiness: 0
};
// pet spawn
let petSpawned = false;

let petName ="Mr. Meatball man";
// pet message variable for feedback
let petMessage = "";
let petMessageUntil = 0;

let lastStatWarning = "";
let statWarningCooldown = 5000;
let nextStatWarningTime = 0;
let actionMessageUntil = 0;

let lastSicknessDamage = 0;
let lastSicknessWarning = 0;

// check for last update on stats
let lastHungerUpdate = 0;
let lastHappinessUpdate = 0;
let lastEnergyUpdate = 0;
let lastDirtinessUpdate = 0;

// updating timer of stats in milliseconds
let hungerUpdate = 2000;
let happinessUpdate = 3500;
let energyUpdate = 5000;
let dirtinessUpdate = 4000;

// greeting for when just spawned
let isGreeting = false;
let greetingStartTime = 0;
let greetingDuration = 3000;

let lastHealthLoss = 0;

// image assets
let petIMG;
let MusicTrack;
let BackgroundMain;
let foodIMG;
let feedingItemIMG;
let gameBackground;
let unstoppableForce;
let sleepingIMG;
let BossIMG;
let tiredIMG;
let creepyBridge;
let evilLaugh;
let levelSong;

let bossIntroPhase = "idle";
let introPhaseStart = 0;
let introRollX = -50;
let bossVisible = false;

let levelDistance = 0;
let levelLength = 3000;
let levelStarted = false;
let spikes = [];
let nextSpikeDistance = 400;
let finishLineReached = false;

let songBPM = 130;
let beatInterval = 60000/songBPM;
let nextBeatTime = 0;
let beatsPerSpike = 2;

let lastSaveTime = Date.now();

//displays screen
let currentScreen = "start";

//return button variable
let returnButton;

let healingItems = 0;

let lastRandomEvent = 0;
let randomEventInterval = 30000;

let randomEventMessage = "";
let randomEventMessageUntil = 0;

// sickness stat
let sicknessStartTime = 0;
let sicknessDuration = 10000;

// dead variables
let petDead = false;
let deathTime = 0;

let sleepStartTime = 0;
let energyDrainPerSecond = 1;

//tired and sleep variable
let petTired = false;
let petSleeping = false;

let holdingJar = false;
let foodAmount = 20;

// decomposition check
let decompositionStart = false;
let decompositionDuration = 30000;  

//movement
let petX = 200
let petY = 150
let petVelocityX = 0;
let petVelocityY = 0;
let gravity = 0.6;
let jumpStrength = -11;
let petSpeed = 2;
let nextJumpTime = 0;
let isJumping = false;
let petRotation = 0;
let rollingSpeed = 0.05;
let playerX = 100;
let playerY;
let playerVelocityY = 0;
let groundY;

let gameScreen = "start";

let isGameOver = false;

let playerInvulnerable = false;
let playerSize = 75;
let runSpeed = 3;

let spikeX = 450;
let spikeWidth = 30;
let spikeHeight = 30;
let spikeSpeed = 3;
let lastHitTime = 0;
let hitCooldown = 1000;

let invulnerableUntil = 0;

let spikeDodged = false;
let dodgeDamage = 10;

let coins = 0;

function setup() {
  createCanvas(625, 625);

  groundY = height - 50;
  playerY = groundY - 30;

// spawn button
  let spawnButton = createButton("spawn pet");
  spawnButton.mousePressed(spawnPet);

  //buy heal item button
  let healingButton = createButton("buy medKit(15 coins)");
  healingButton.mousePressed(buyHeal); 

  // feed button
  let feedButton = createButton("feed pet");
  feedButton.mousePressed(startFeeding);

  // play button
  let playButton = createButton("play game");
  playButton.mousePressed(() => {
    startScreen = false;
    startBossFight();
    MusicTrack.stop();
  });

  // cure button
  let cureButton = createButton("cure pet");
  cureButton.mousePressed(curePet);
  
  // clean button
  let cleanButton = createButton("clean pet");
  cleanButton.mousePressed(cleanPet);

  // use heal item button
  let useHealingItem = createButton("use heal");
  useHealingItem.mousePressed(useHeal);

loadGame();

document.addEventListener("visibilitychange", visibilityChanged);
}

let meatballImage;
// loading in images and sound
function preload(){
petIMG = loadImage('essentials/Meatballman.png');
MusicTrack = loadSound('essentials/meatballspawn.mp3');
BackgroundMain = loadImage('essentials/backgroundspaghetti.png');
feedingItemIMG = loadImage('essentials/fooditem.png');
foodIMG = loadImage('essentials/Food.png');
gameBackground = loadImage('essentials/minigamebackground.png');
BossIMG = loadImage('essentials/TrueMario.png');
sleepingIMG = loadImage('essentials/MeatballmanSleep.png');
tiredIMG = loadImage('essentials/MeatballmanTired.png');
creepyBridge = loadSound('essentials/INTRO.mp3');
evilLaugh = loadSound('essentials/LAUGH.mp3');
levelSong = loadSound('essentials/BOSSsong.mp3');
}

// things that happen if pet has spawned
function spawnPet(){
  if(petSpawned) return;

  stats.health = 100;
   stats.hunger = 100;
    stats.energy = 100;
    stats.happiness = 100;
    stats.sick = false;
    stats.dirtiness = 0;
    petDead = false;
  petSleeping = false;
  lastEnergyUpdate = millis();
  lastHealthLoss = millis();

  petSpawned = true;
  showPetGreeting();

  let currentTime = millis();

  lastHungerUpdate = currentTime;
  lastHappinessUpdate = currentTime;
  lastEnergyUpdate = currentTime;
  lastDirtinessUpdate = currentTime;

  if(MusicTrack.isPlaying()){
    MusicTrack.stop();
  }

  if (!MusicTrack.isPlaying()){
    MusicTrack.loop();
  }
}

// feeding system
function startFeeding(){
  if(!petSpawned || petDead) return;

  holdingJar = true;
}

// if pet is fed
function feedPet(){
if (!petSpawned || petDead) return;
stats.hunger = Math.min(100, stats.hunger + foodAmount);
holdingJar =  false;
}
function buyHeal(){
  let healingPrice = 15;

  if (coins < healingPrice){
    petMessage = "can't afford medical care";
    return;
  }
  coins -= healingPrice;
  healingItems++;
  petMessage = "heal acquired";
}

function useHeal(){
  if (petDead){
    petMessage = "can't save me now";
    return;
  }
  if (healingItems <= 0){
    petMessage = "we have no heals";
    return;
  }
  if (stats.health >= 100){
    petMessage ="i don't need this";
    return;
  }
  healingItems--;
  stats.health = min(100, stats.health + 25);
  petMessage = "much better";
  return;
}

// pet sleeps if pet has no energy
function petSleep(){
if (petSleeping) return;

petSleeping = true;
sleepStartTime = millis();
stats.energy = 0;
}

// cure pet if sick(will be improved in avengers doomsDay)
function curePet() {
  if (!petSpawned) return;

  if (stats.sick) {
    stats.sick = false;
    sicknessStartTime = 0;

    stats.health = Math.min(100, stats.health + 20);

  }
}

// clean pet if dirty
function cleanPet() {
  if (!petSpawned) return;

  stats.dirtiness = 0;

}

// update stats over time 
function updateStats(){
  if(!petSpawned || petDead) return;

  let currentTime = millis();

   if (currentTime - lastHungerUpdate >= hungerUpdate){
    lastHungerUpdate = currentTime;
    stats.hunger = Math.max(0, stats.hunger - 1);
   }
   
   if (currentTime - lastHappinessUpdate >= happinessUpdate){
    lastHappinessUpdate = currentTime;
    stats.happiness = Math.max(0, stats.happiness - 1);
   }
   
   let now = millis();

   if (!petSleeping){
    if (lastEnergyUpdate === 0){
      lastEnergyUpdate = now;
    }else{
      let elapsedSeconds = (now - lastEnergyUpdate) / 1000;

      stats.energy = max(0, stats.energy - energyDrainPerSecond * elapsedSeconds);

      lastEnergyUpdate = now;

      if (stats.energy <= 0){
        stats.energy = 0;
        petSleep()
      }
    }
   }else{
    let sleepProgress = (now - sleepStartTime) / 10000;

    stats.energy = min(100, sleepProgress * 100);

    if (stats.energy >= 100){
      stats.energy = 100;
      petSleeping = false;
      lastEnergyUpdate = now;
    }
   }

   if (stats.energy <= 30){
    petTired = true;
   }else{
    petTired = false;
   }
   
  if (currentTime - lastDirtinessUpdate >= dirtinessUpdate){
    lastDirtinessUpdate = currentTime;
    stats.dirtiness = Math.min(100, stats.dirtiness + 1);
  }

   if(stats.hunger === 0){
    if (millis() - lastHealthLoss >= 1500){
      stats.health = Math.max(0, stats.health - 1);
      lastHealthLoss = millis();
    }
   }else{
    lastHealthLoss = millis();
   }

   if(stats.health <= 0 && MusicTrack.isPlaying()){
    MusicTrack.stop();
   }

   if (stats.health <= 0 && !petDead){
    stats.health = 0;
    petDead = true;
    petSpawned = false;
    deathTime = millis();

    if(MusicTrack.isPlaying()){
      MusicTrack.stop();
    }

    decompositionStart = true;
   }
}

function foundHealingItemEvent(){
  healingItems++;

  randomEventMessage = "good find a medKit";
  randomEventMessageUntil = millis() + 4000;
}

function spookyEvent(){
  randomEventMessage = "something is watching you";
  randomEventMessageUntil = millis() + 4000;
}

function foundCoinsEvent(){
  let reward = floor(random(5, 16));

  coins+= reward;

  randomEventMessage = "the one piece has been found you got:" + reward + "coins";
  randomEventMessageUntil = millis() + 4000;
}

function goldenMeatballEvent(){
  let reward = 25;
  coins += reward;

  randomEventMessage = "YOU FOUND THE BONUS SALSA +25 coins";
  randomEventMessageUntil = millis() + 4000;

}

function updateSickness(){
  if (!stats.sick || petDead || !petSpawned) 
    return;

  let now = millis();

  if (now - lastSicknessDamage >= 30000){
    stats.health = Math.max(0, stats.health - 1);
    lastSicknessDamage = now;
  }
  if (now - lastSicknessWarning >= 60000){
    petFeedBack("i'm sick", 3000, true);
    lastSicknessWarning = now;
  }
}

function checkRandomEvents(){
  if (!petSpawned || petDead)
    return;

  if (millis() - lastRandomEvent < randomEventInterval)
    return;

  lastRandomEvent = millis();

  let eventRoll = random(1);

  if (!stats.sick && eventRoll < 0.05){
    stats.sick = true;

    lastSicknessDamage = millis();
    lastSicknessWarning = millis();

    petFeedBack("i am sick", 3000, true);
  }else {
    let otherRoll = random(1);

    if (otherRoll < 0.30){
      foundCoinsEvent();
    }else if (otherRoll < 0.70){
      foundHealingItemEvent();
    }else if (otherRoll < 0.90){
      spookyEvent();
    }else{
      goldenMeatballEvent();
    }
  }
}

// pet gives feed back on statistics
function petFeedBack(message, duration = 3000, isAction = false){
  if (!isAction && millis() < actionMessageUntil){
    return;
  }
  petMessage = message;
  petMessageUntil = millis() + duration;

  if (isAction){
    actionMessageUntil = petMessageUntil;
  }
}

function showPetGreeting(){
  petFeedBack("I AM THE GLORIOUS MEATBALL MAN!", 3000);
}

function checkPetFeedback(){
if (petDead){
  return;
}
let warning = "";

if (stats.hunger < 50){
  warning = "FEED ME!";
}else if (stats.happiness < 20){
  warning = "I HAVE DEPRESSION!";
}else if (stats.energy < 30){
  warning = "i am tired..";
}else if (stats.dirtiness > 50){
  warning = "I AM FILTHY CLEAN ME!";
}else if (stats.health < 20){
  warning = "i'm dying";
}

if (warning === ""){
  lastStatWarning = "";
  return;
}

if (warning === lastStatWarning && millis() < nextStatWarningTime){
return;
}
lastStatWarning = warning;
nextStatWarningTime = millis() + statWarningCooldown;

petFeedBack(warning, 3000);
}

function updatePetMovement(){
  if(!petSpawned || petDead || petSleeping) return;

  let currentSpeed = petTired ? petSpeed * 0.3 : petSpeed;

  if (random(100) < 2){
    petVelocityX = random([-currentSpeed, currentSpeed]);
  }
  
  petVelocityY += gravity;

  petX += petVelocityX;
  petY += petVelocityY;

  petRotation += petVelocityX * rollingSpeed;

  let halfWidth = 200;

  if (petX < halfWidth){
    petX = halfWidth;
    petVelocityX = petSpeed;
  }

  if (petX > width - halfWidth){
    petX = width - halfWidth;
    petVelocityX = -petSpeed;
  }

  let groundY = height - 100;

  if (petY >= groundY){
    petY = groundY;
    petVelocityY = 0;
    isJumping = false;
  }

  if (!isJumping && millis() >= nextJumpTime){
    petVelocityY = jumpStrength;
    isJumping = true;
    nextJumpTime = millis() + random(2000, 5000);
  }
}

function drawBossLevelSpikes(){
  for (let spike of spikes){
    let screenX = spike.x - levelDistance + playerX;

    if (screenX + spike.width > 0 && screenX < width){
      fill(255, 50, 70);
      noStroke();

      triangle(
        screenX, groundY, screenX + spike.width / 2, groundY - spike.height, screenX + spike.width, groundY
      );
    }
  }
}


function drawBossFight(){

 // Full-screen scrolling background
if (gameBackground && gameBackground.width > 0){

  imageMode(CORNER);

  let bgWidth = width;
  let bgHeight = height;

  let scrollX = -(levelDistance % bgWidth);

  // First background image
  image(gameBackground, scrollX, 0, bgWidth, bgHeight);

  // Second background image
  image(gameBackground, scrollX + bgWidth, 0, bgWidth, bgHeight);

  // Third image prevents gaps during scrolling
  image(gameBackground, scrollX - bgWidth, 0, bgWidth, bgHeight);

}else{
  background(10, 10, 20);
}

  groundY = height - 50;

  stroke(0, 255, 255);
  strokeWeight(3);
  line(0, groundY, width, groundY);
  noStroke();

  drawBossLevelSpikes();

  imageMode(CENTER);
  image(petIMG, playerX, playerY, playerSize, playerSize);

  if(bossVisible){
    let bossSize = 150;

    let glitchX = 0;
    let glitchY = 0;

    if (bossIntroPhase === "bossSpawn"){
      glitchX = random(-4, 4);
      glitchY = random(-3, 3);
    }
    imageMode(CENTER);
    image(BossIMG, width - 100 + glitchX, groundY - 120 + glitchY, bossSize, bossSize);
  }
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(24);

  if (bossIntroPhase === "creepySong"){
    text("I AM READY", width/ 2, height / 3);
  }else if (bossIntroPhase === "bossSpawn"){
    text("...", width / 2, height / 3);
  }else if (bossIntroPhase === "running"){
    text("", width / 2, height / 3);
  }
  if (bossIntroPhase === "finished"){
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("LEVEL COMPLETE", width / 2, height / 2);

    if(bossIntroPhase === "finished"){
      if (!returnButton){
        returnButton = createButton("return to pet");
        returnButton.position(width / 2 - 60, height / 2 + 40);
        returnButton.mousePressed(returnToPet);
      }

      returnButton.show();
    }
  }

}

function updateBossFight() {
  if (isGameOver) return;

  playerX += runSpeed;

  if (playerX > width / 3){
    playerX = width / 3;
  }

  playerVelocityY += gravity;
  playerY += playerVelocityY;

  if (playerY >= groundY - playerSize){
    playerY = groundY - playerSize;
    playerVelocityY = 0;
    isJumping = false;
  }
}

function updateSpikes(){
  if (isGameOver) return;

  spikeX -= spikeSpeed;

  if (spikeX + spikeWidth < 0){
    spikeX = width + random(100, 300);
    spikeDodged = false;
  }

  let playerLeft = playerX;
  let playerRight = playerX + playerSize;
  let playerBottom = playerY + playerSize;

  let overlapsX = playerRight > spikeX && playerLeft < spikeX + spikeWidth;
  let overlapsY = playerBottom > groundY - spikeHeight;

  if (overlapsX && overlapsY && millis() - lastHitTime > hitCooldown){
    if (overlapsX && overlapsY && millis() >= invulnerableUntil){
      stats.health = max(0, stats.health - 10);
      invulnerableUntil = millis() + 1000;

      if (stats.health <= 0){
        isGameOver = true;
        petDead = true;
      }
    }
  }
}


function startBossFight(){

  if (stats.energy < 10){
    petMessage = "no energy";
    return;
  }

  stats.energy -= 10;

  gameScreen = "bossFight";
  bossIntroPhase = "rollIn";

  introPhaseStart = millis();

  introRollX = -50;
  playerX = -50;

  groundY = height - 50;
  playerY = groundY - playerSize / 2;

  playerVelocityY = 0;
  isJumping = false;

  bossVisible = false;
  isGameOver = false;
  levelStarted = false;
  finishLineReached = false;

  levelDistance = 0;
  spikes = [];

  invulnerableUntil = 0;

}


function updateBossIntroduction(){

  if (bossIntroPhase !== "rollIn") return;

  introRollX += 3;
  playerX = introRollX;

  if (introRollX >= width / 4){

    introRollX = width / 4;
    playerX = introRollX;

    bossIntroPhase = "creepySong";
    introPhaseStart = millis();

    if (creepyBridge && creepyBridge.isLoaded()){

      creepyBridge.onended(() => {
        startBossSpawn();
      });

      creepyBridge.play();

    }else{
      startBossSpawn();
    }
  }
}

function startBossSpawn(){

  if (bossIntroPhase !== "creepySong") return;

  bossIntroPhase = "bossSpawn";
  introPhaseStart = millis();
  bossVisible = true;

  if (evilLaugh && evilLaugh.isLoaded()){

    evilLaugh.onended(() => {
      finishBossIntroduction();
    });

    evilLaugh.play();

  }else{
    finishBossIntroduction();
  }
}

function createBossLevel(){

  levelDistance = 0;
  finishLineReached = false;

  spikes = [
    {x: 500, width: 30, height: 30},
    {x: 800, width: 30, height: 30},
    {x: 1100, width: 60, height: 30},
    {x: 1450, width: 30, height: 30},
    {x: 1750, width: 60, height: 30},
    {x: 2150, width: 30, height: 30},
    {x: 2500, width: 60, height: 30}
  ];

  nextBeatTime = millis() + beatInterval * beatsPerSpike;

  playerVelocityY = 0;
  isJumping = false;

}

function finishBossIntroduction(){

  if (bossIntroPhase !== "bossSpawn") return;

  createBossLevel();

  levelStarted = true;
  bossIntroPhase = "running";

  playerX = width / 4;
  playerY = groundY - playerSize / 2;

  playerVelocityY = 0;
  isJumping = false;

  invulnerableUntil = 0;

  introPhaseStart = millis();

  if (levelSong && levelSong.isLoaded()){

    levelSong.play();
    levelSong.onended(finishBossLevel);

  }
}

function updateBossLevel(){
  if (!levelStarted || isGameOver || finishLineReached) return;

  // Move scenery and obstacles
  levelDistance += runSpeed;

  // Apply gravity
playerVelocityY += gravity;
playerY += playerVelocityY;

// Ground collision
if (playerY >= groundY - playerSize / 2){

  playerY = groundY - playerSize / 2;

  playerVelocityY = 0;
  isJumping = false;
}
  // Spawn spikes
  if (millis() >= nextBeatTime){
    spikes.push({
      x: levelDistance + width + 100,
      width: random() < 0.5 ? 30 : 60,
      height: 30
    });

    nextBeatTime = millis() + beatInterval * beatsPerSpike;
  }

  // Remove old spikes
  spikes = spikes.filter(spike =>
    spike.x - levelDistance + playerX + spike.width > 0
  );
  console.log("LEVEL UPDATING");
console.log("Distance:", levelDistance);
}

function checkBossSpikeCollisions(){

  if (!levelStarted || isGameOver || !stats) return;

  for (let spike of spikes){

    let screenX = spike.x - levelDistance + playerX;

    // Smaller hitBoxes
let hitBoxPadding = 10;

let playerLeft = playerX - playerSize / 2 + hitBoxPadding;
let playerRight = playerX + playerSize / 2 - hitBoxPadding;

let playerBottom = playerY + playerSize / 2 - hitBoxPadding;

let spikeLeft = screenX + hitBoxPadding;
let spikeRight = screenX + spike.width - hitBoxPadding;

let overlapsX =
  playerRight > spikeLeft &&
  playerLeft < spikeRight;

let overlapsY =
  playerBottom > groundY - spike.height + hitBoxPadding;

    if (overlapsX && overlapsY && millis() >= invulnerableUntil){

      stats.health = max(0, stats.health - 10);

      invulnerableUntil = millis() + 1000;

      if (stats.health <= 0){
        stats.health = 0;
        bossPetDeath();
      }

      break;
    }
  }
}

function jumpBossPlayer(){

  if (
    gameScreen !== "bossFight" ||
    bossIntroPhase !== "running" ||
    !levelStarted ||
    isGameOver
  ){
    return;
  }

  // Only prevent jumping while airborne
  if (isJumping) return;

  playerVelocityY = jumpStrength;
  isJumping = true;
}


function finishBossLevel(){
  if (finishLineReached || isGameOver) return;

  finishLineReached = true;
  levelStarted = false; 
  bossIntroPhase = "finished";

  coins += 20;
  stats.happiness = min(100, stats.happiness + 50);
  stats.dirtiness = min (100, stats.dirtiness + 5);

  if(levelSong && levelSong.isPlaying()){
    levelSong.stop();
  }
}

function returnToPet(){
  if (bossIntroPhase !== "finished") return;
  if (levelSong && levelSong.isPlaying()){
    levelSong.stop();
  }
  levelStarted = false;
  gameScreen = "pet";
  bossIntroPhase = "idle";
  saveGame();
  if (returnButton){
    returnButton.hide();
  }
}

function bossPetDeath(){

  isGameOver = true;
  petDead = true;
  levelStarted = false;

  // Stop boss music
  if (levelSong && levelSong.isPlaying()){
    levelSong.stop();
  }

  if (creepyBridge && creepyBridge.isPlaying()){
    creepyBridge.stop();
  }

  if (evilLaugh && evilLaugh.isPlaying()){
    evilLaugh.stop();
  }

  // Reset boss fight
  bossIntroPhase = "idle";
  bossVisible = false;
  spikes = [];

  // Return to spawn screen
  gameScreen = "start";
  currentScreen = "start";

  // Reset pet state
  petSpawned = false;
  petDead = false;

  if (returnButton){
    returnButton.hide();
  }
}

// make things appear on screen
function draw() {
  background(240);

  if (!petSpawned){
    textSize(48);
    textAlign(CENTER);
text("spawn a pet", width / 2, height / 2);
  }else{
    if (currentScreen === "start"){

    updateStats();

    imageMode(CORNERS);
    background(BackgroundMain);

    textSize(16);
fill("white");
textFont(BOLD);
textAlign(LEFT);

text("health:" + stats.health, 20, 30);
text("happiness:" + stats.happiness, 20, 55);
text("hunger:" + stats.hunger, 20, 80);
text("energy:" + Math.floor(stats.energy), 20, 105);
text("dirty:" + stats.dirtiness + "%", 20, 130);
text("coins:" + coins, 20, 155);

checkRandomEvents();

fill(255);
stroke(6);
strokeWeight(2);
textAlign(CENTER);
textSize(24);
text(petName, width / 2, 230);

checkPetFeedback();
if (millis() < randomEventMessageUntil){
  fill(255, 220, 80);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(randomEventMessage, width / 2, 80);
}

updateSickness(); 
    }

    // display petFeedback
    if (petMessage !== "" && millis() < petMessageUntil){
    push();
    fill(255);
    stroke(0);
    strokeWeight(3);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(petMessage, width / 2, 120);
    pop();
  }
  }

  
  if(petSpawned && !petDead){
    imageMode(CENTER);

    if (petSleeping){
    image(sleepingIMG, width / 2, height / 2, 400, 260);
  }else if (petTired) {
    image(tiredIMG, width / 2, height / 2, 400, 260);
  }else {
    image(petIMG, width / 2, height / 2, 450, 350);
  }
  }


  if(holdingJar){
    imageMode(CENTER);
    image(feedingItemIMG, mouseX, mouseY, 200, 200);
  }

  
if (gameScreen === "bossFight"){

  groundY = height - 50;

  if (
    bossIntroPhase === "rollIn" ||
    bossIntroPhase === "creepySong" ||
    bossIntroPhase === "bossSpawn"
  ){

    updateBossIntroduction();

  }else if (bossIntroPhase === "running"){

    updateBossLevel();
    checkBossSpikeCollisions();

  }

  drawBossFight();
  return;
}

if (millis() - lastSaveTime > 10000){
  saveGame();
  lastSaveTime = millis();
}

}

// mousePressed food
function mousePressed(){
  if(!holdingJar) return;

  let petLeft = width / 2 - 200;
  let petRight = width / 2 + 200;
  let petTop = height / 2 - 100;
  let petBottom = height / 2 + 100;

  if (mouseX >= petLeft && mouseX <= petRight && mouseY >= petTop && mouseY <= petBottom){

    feedPet();
  }
}

function keyPushed(){
  if(keyCode === ESCAPE && holdingJar){

    holdingJar = false;
  }
}

function keyPressed(){
  if (key === ' ' || keyCode === UP_ARROW){
    jumpBossPlayer();
  }

}

function mousePushed(){
  if (gameScreen === "bossFight"){
    jumpPlayer();
  }
}

function saveGame(){

  let saveData = {
    stats: stats,
    coins: coins,
    healingItems: healingItems,
    petSpawned: petSpawned,
    petDead: petDead,
    petName: petName,
    lastSaveTime: Date.now()
  };

  localStorage.setItem("meatballSave", JSON.stringify(saveData));

}

function loadGame(){

  let savedData = localStorage.getItem("meatballSave");

  if (!savedData) return;

  let data = JSON.parse(savedData);

  stats = data.stats;
  coins = data.coins;
  healingItems = data.healingItems;
  petSpawned = data.petSpawned;
  petDead = data.petDead;
  petName = data.petName;

  let timeAway = (Date.now() - data.lastSaveTime) / 1000;

  // Update hunger
  stats.hunger = max(0, stats.hunger - timeAway / 2);

  // Update happiness
  stats.happiness = max(0, stats.happiness - timeAway / 3.5);

  // Update dirtiness
  stats.dirtiness = min(100, stats.dirtiness + timeAway / 4);

  // Update energy
  if (!petSleeping){
    stats.energy = max(0, stats.energy - timeAway);
  }else{
    stats.energy = min(100, stats.energy + timeAway * 10);
  }

  // Health loss from hunger
  if (stats.hunger <= 0){
    stats.health = max(0, stats.health - timeAway / 1.5);
  }

  if (stats.health <= 0){
    stats.health = 0;
    petDead = true;
    petSpawned = false;
  }

  lastSaveTime = Date.now();

}

function windowClosing(){
  saveGame();
}

function visibilityChanged(){

  if (document.hidden){
    saveGame();
  }

}

//function jumpPlayer(){if (!isJumping && !isGameOver){playerVelocityY = jumpStrength; isJumping = true;}}