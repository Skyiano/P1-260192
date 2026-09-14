function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("#87cefa");

  //bergen
  fill("#555555");
  triangle( 200, 600, 600, 600, 400, 200);
  fill("#808080")
  triangle(100, 600, 400, 600, 250, 350);
  triangle(500, 600, 900, 600, 700, 450);

  //wolk
  noStroke(0);
  fill("#f5f5f5")
  circle(200, 150, 50);
  circle(230, 140, 50);
  circle(260, 150, 50);
  fill("white");
  circle(200, 160, 50);
  circle(230, 150, 50);
  circle(260, 160, 50);

//zon
fill("yellow");
  circle(400, 75, 100);
}
