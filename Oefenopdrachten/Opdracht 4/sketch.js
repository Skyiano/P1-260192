let light = 0



function setup() {
  createCanvas(1000, 1000);
}

function keyPressed(){
  if (keyCode === ENTER) {
    light = light + 1;

    if (light > 2){
      light = 0;
    }
  }
}

function draw() {
  background(220);
  stroke("#353839");
  
  // stoplicht
  strokeWeight(6);
  line(660, 450, 660, 500);
  fill("#353839");
  rect(640, 350, 40, 100);

//rood licht
  if (light == 0){
fill("red");
  } else{
    fill(100);
  }
  circle(660, 370, 25);

// geel light
if (light == 2){
fill("yellow");
} else {
  fill(100);
}
  circle(660, 400, 25);

// groen light
if (light == 1){
fill("green");
} else{
  fill(100);
}
   circle(660, 430, 25);
}
