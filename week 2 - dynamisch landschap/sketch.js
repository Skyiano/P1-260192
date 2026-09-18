let x = 200;
let zonX = 0;
let light = 0;

let auto = 80;
let g = 140
let b = 240

let slow = 200

function setup() {
  createCanvas(800, 600);
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
  background("#87cefa");

  //bergen
  noStroke(0)
  fill("#555555");
  triangle( 200, 500, 600, 500, 400, 150);
  fill("#808080")
  triangle(100, 500, 400, 500, 250, 300);
  triangle(500, 500, 900, 500, 700, 400);

  //zon
noStroke(0);
fill("yellow");
  ellipse(zonX, 50, 80, 80);

  // beweegt zon van links naar rechts
  zonX += 1;

  // plaats zon terug naar links na verdwijnen vna rechts
  if (zonX > 840){
    zonX = -40;
  }

  //wolk
  noStroke(0);
  fill("white");
  ellipse(x, 100, 60, 40);
  circle(x + 30, 100, 70, 50);
  circle(x + 60, 100, 60, 40);
// wolk beweegt recht naar links
  x -= 2;
// wolk weer rechts plaatsen wanneer links uit beeld
  if (x < -60){
    x = 800;
  }
  
  //grass
  noStroke(0);
  fill("#32cd32");
  rect(1, 500, 800, 10);
  fill("#008000");
  rect(1, 505, 800, 10);

  //road
  fill("#a9a9a9");
  rect(1, 515, 800, 100);
  fill("white");
  stroke("white");
  strokeWeight(6);
  line(1, 555, 50, 555);
  line(150, 555, 250, 555);
  line(350, 555, 450, 555);
  line(550, 555, 650, 555);
  line(750, 555, 850, 555);

  //bomen
  noStroke(0);
  fill("#664c28");
  rect(20, 400, 20, 100);
  rect(150, 400, 20, 100);
  rect(250, 400, 20, 100);
  rect(460, 400, 20, 100);
  fill("#195905");
  circle(20, 400, 50);
  circle(150, 400, 50);
  circle(250, 400, 50);
  circle(460, 400, 50);
  fill("#006400");
  circle(30, 400, 50);
  circle(160, 400, 50);
  circle(260, 400, 50);
  circle(470, 400, 50);
  fill("#228b22");
  circle(40, 400, 50);
  circle(170, 400, 50);
  circle(270, 400, 50);
  circle(480, 400, 50);
  circle(320, 500, 50);

  //stoplicht
  stroke("#353839");
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

  //auto
  noStroke(0);
  fill("red");
  rect(auto, 465, 130, 100);
  rect(auto, 505, 200, 60);
  fill("#343434");
  circle(g, 570, 50);
  circle(b, 570, 50);

  //boom
  noStroke(0);
  fill("#664c28");
  rect(300, 500, 20, 100);
  fill("#195905");
  circle(300, 500, 50);
  fill("#006400");
  circle(310, 500, 50);
  fill("#228b22");
  circle(320, 500, 50);


// auto beweging
  if (auto > 840){
    auto = -200;
  } 

  if (g > 840){
    g = -200;
  }

  if (b > 840){
    b = -200;
  }

//auto reageert of stoplicht
  if (light == 1){
      auto += 3;
      g += 3;
    b += 3;
  }
// vertraagd bij geel licht
  if (light == 2 && auto >= 200){
    auto += 1.5;
    g +=1.5;
    b += 1.5;
}else if (light == 2 && auto != 200){
  auto += 3;
  g += 3;
  b += 3;
}
// stopt bij rood light na 400  of hoger
if (auto >= 400 && light == 0){
  auto += 0;
  g += 0;
  b +=0;
}else if (light == 0 && auto != 400){
  auto += 3;
  g += 3;
  b += 3;
}
}
