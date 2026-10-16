// pet statistics
let stats = {
  health: 100,
   hunger: 100,
    energy: 100, 
    happiness: 100,
    sick: false, 
    dirtiness: 0
};
// pet actions and load images and sound
let petSpawned = false;

let petMessage = "i am the GLORIOUS MEATBALL MAN";

let lastStatUpdate = 0;

let statUpdate = 2500;

let PetIMG;

let MusicTrack;

let BackgroundMain;

function setup() {
  createCanvas(600, 600);
// player buttons
  let spawnButton = createButton("spawn pet");
  spawnButton.mousePressed(spawnPet);

  let feedButton = createButton("feed pet");
  feedButton.mousePressed(feedPet);

  let playButton = createButton("play game");
  playButton.mousePressed(playWithPet);

  let cureButton = createButton("cure pet");
  
  let cleanButton = createButton("clean pet");


}
// loading in images and sound
function preload(){

}

function spawnPet(){
  petSpawned = true;
  lastStatUpdate = millis();
}

function feedPet(){
if (!petSpawned) return;

stats.hunger = Math.min(100, stats.hunger + 20);
}

function playWithPet(){
if (!petSpawned) return;
if ( stats.energy < 10) return;
stats.happiness = Math.min(100, stats.happiness + 20);
stats.energy = Math.max(0, stats.energy - 10);
}

function petSleep(){
stats.energy = Math.min(100, stats.energy + 20);
}

function updateStats(){
  let currentTime = millis();
  if (currentTime - lastStatUpdate >= statUpdate){
    lastStatUpdate = currentTime;

    stats.hunger = Math.max(0, stats.hunger - 1);
stats.happiness = Math.max(0, stats.happiness - 1);
stats. energy = Math.max(0, stats.energy - 1);

if (stats.hunger < 20){
  stats.health = Math.max(0, stats.health - 1);
}
  }
}

function feedBackPet(){
  if (!petSpawned) return;

}


function draw() {
  background(240);

  if (petSpawned){
    updateStats();

    textSize(16);
fill(0);
textAlign(LEFT);

text("health:" + stats.health, 20, 30);
text("happiness:" + stats.happiness, 20, 55);
text("hunger:" + stats.hunger, 20, 80);
text("energy:" + stats.energy, 20, 105);
  }else{
    textSize(48);
    textAlign(CENTER);
text("spawn a pet", width / 2, height / 2);
  }
}
