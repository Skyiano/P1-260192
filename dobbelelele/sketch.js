let ogen = 1;
let stip = 40;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  textAlign(CENTER);
}



function draw() {
  background(220);
fill("black")
rect(200, 200, 200, 200);

if (ogen == 1){
  noStroke(0);
  fill("white");
  circle(200, 200, stip);
}
}