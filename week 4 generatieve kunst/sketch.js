
// variables for drops array spawn time last drop spawned and if started
let drops = [];
let spawnDelay = 1500;
let lastSpawn = 0;
let started = false;

// setup commands for background and drops will have no outline
function setup() {
  createCanvas(1000, 800);
  background(220);
  noStroke();
}

function draw() {
  // make the ripples start
  if (started){
    // if time is greater than the delay make new circle
    if(millis() - lastSpawn >= spawnDelay){
      // when enter pressed pushes drop to array 
      drops.push({
        x: random(width),
        y: random(height),
        color: color(random(255), random(255), random(255)),
        size: 0,
        speed: 2
      });
// updates the on the last circle spawned
      lastSpawn = millis();
    }
  }
// this is what happens when circle covers whole canvas
for (let i = 0; i < drops.length; i++) {

  //variables for distance between the circles and canvas corners
  let d1 = dist(drops[i].x, drops[i].y,0,0);
  let d2 = dist(drops[i].x, drops[i].y,width,0);
  let d3 = dist(drops[i].x, drops[i].y,0,height);
  let d4 = dist(drops[i].x, drops[i].y,width,height);
// makes farthest to see if circle has reached corners of canvas
  let farthest = max(d1,d2,d3,d4);
  // if circle is outside the corners of canvas circle no more grow
  if(drops[i].size < farthest * 2){
    drops[i].size += drops[i].speed;
  }
  fill(drops[i].color);
  circle(drops[i].x, drops[i].y, drops[i].size);

}
// if circles fully overlap each other circle stop growing and make new one
for(let i = 0; i < drops.length; i++){
  for(let j = i + 1; j < drops.length; j++){
// checks if circles overlap fully
let distance = dist(drops[i].x, drops[i].y, drops[j].x, drops[j].y);
// circle radius is half size of the circle divide by 2
let oldRadius = drops[i].size / 2;
let newRadius = drops[j].size / 2;
// if the distance plus the old radius of circle is 
// less or equal to the new one remove circle
if (distance + oldRadius <= newRadius){

  drops.splice(i, 1);
// if circle is removed break the loop so it doesn't check for small circles
  break;
}
}
}


}



// keyPressed function for starting
function keyPressed() {
  // if pressed enter started once = true 
  if(keyCode === ENTER){
    started = !started;
  // and if enter pressed again started will be false
    if (!started){
      drops = [];
      background(220);

    }
  }
  
}


// newtons first law an object in motion stays in motion unless acted upon by an outside force
// newtons second law the acceleration of an object is dependent upon two variables the net force acting upon the object and the mass of the object
// newtons third law every action has an equal and opposite reaction
