function setup() {
  createCanvas(800, 600);
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

  //wolk
  noStroke(0);
  fill("#f5f5f5")
  circle(190, 140, 50);
  circle(220, 130, 50);
  circle(250, 140, 50);
  fill("white");
  circle(190, 150, 50);
  circle(220, 140, 50);
  circle(250, 150, 50);

//zon
noStroke(0);
fill("yellow");
  circle(400, 50, 75);

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
  rect(300, 500, 20, 100);
  fill("#195905");
  circle(20, 400, 50);
  circle(150, 400, 50);
  circle(250, 400, 50);
  circle(460, 400, 50);
  circle(300, 500, 50);
  fill("#006400");
  circle(30, 400, 50);
  circle(160, 400, 50);
  circle(260, 400, 50);
  circle(470, 400, 50);
  circle(310, 500, 50);
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
  noStroke(0);
  fill("red");
  circle(660, 370, 25);
  fill("yellow");
  circle(660, 400, 25);
  fill("green");
  circle(660, 430, 25);

  //auto
  noStroke(0);
  fill("#343434");
  circle(150, 570, 35);
  circle(250, 570, 35);
  fill("red");
  rect(100, 465, 130, 100);
  rect(200, 505, 75, 60)
  
}
