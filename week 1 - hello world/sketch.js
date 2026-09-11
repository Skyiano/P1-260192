function setup() {
  createCanvas(1000, 1000);

}

function draw() {
  background(100);

  //writes name
  textSize(24);
  text("1. skyhoek", 10, 50);

textSize(24);
fill("black");
text("2.", 10, 100);

//makes red square flag
  noStroke(0);
  fill("red");
  rect(10, 120, 200, 50);

//makes white square flag
  noStroke(0);
  fill("white");
  rect(10, 170, 200, 50);

//make blue square
noStroke(0);
fill("blue");
rect(10, 220, 200, 50);

//schaakbord
textSize(24);
fill("black");
text("3.", 10, 300);
stroke("black");
strokeWeight(4);
fill("white");
rect(10, 350, 150,150);

noStroke(0);
fill("black");
rect(10, 350, 50, 50);
rect(10, 450, 50, 50);
rect(110, 350, 50, 50);
rect(60, 400, 50, 50);
rect(110, 450, 50, 50);

//huis
textSize(24);
fill("black");
text("4.", 10, 550);
stroke("black");
strokeWeight(4);
fill("gray");
triangle(10, 600, 95, 550, 175, 600,);
rect(15, 600, 155, 125);

//verkeerslicht
textSize(24);
text("5.", 300, 50);

noStroke(0);
fill("black");
rect(300, 60, 100, 200);
noStroke(0);
fill("red");
circle(350, 100, 50);
noStroke(0);
fill("yellow");
circle(350, 160, 50);
noStroke(0);
fill("green");
circle(350, 220, 50);
noStroke(0);
fill("black");
rect(330, 250, 40, 50);

//dobbelsteen
text("6.", 550, 50);
stroke("black");
strokeWeight(8);
fill("white");
rect(560, 100, 250, 600,);
noStroke(0);
fill("black");
circle(680, 220, 50);

//mario
text("7. mario", 550, 400);
fill("beige");
rect(590, 470, 60, 20);
rect(530, 490, 160, 20);
rect(530, 510, 180, 20);
rect(550, 530, 140, 20);
rect(550, 550, 100, 20);
rect(490, 630, 220, 60);

fill("red");
rect(550, 430, 100, 20);
rect(530, 450, 160, 20);
rect(530, 570, 140, 20);
rect(510, 590, 180, 20);
rect(490, 610, 220, 20);
rect(530, 630, 140, 20);


fill("#8b4513");
rect(530, 470, 60, 20);
rect(550, 470, 20, 60);
rect(550, 510, 40, 20);
rect(510, 490, 20, 60);
rect(510, 530, 40, 20);
rect(610, 530, 80, 20);
rect(630, 510, 20, 40);
rect(530, 710, 40, 40);
rect(630, 710, 40, 40);
rect(510, 730, 60, 20);
rect(630, 730, 60, 20);

fill("blue");
rect(610, 570, 20, 60);
rect(570, 570, 20, 60);
rect(570, 610, 60, 20);
rect(550, 630, 100, 40);
rect(530, 670, 140, 20);
rect(530, 690, 60, 20);
rect(610, 690, 60, 20);


fill("black");
rect(610, 470, 20, 40);


//enot
text("8. enot/inv", 670, 770,);

fill("#1d2951");
rect(670, 790, 20, 10);
rect(660, 800, 40, 100);
rect(760, 790, 20, 10);
rect(750, 800, 40, 110);
rect(660, 860, 130, 110);
rect(650, 890, 150, 60);

fill("white");
rect(685, 880, 20, 50);
rect(745, 880, 20, 50);
rect(680, 890, 30, 30);
rect(740, 890, 30, 30);

fill("#e63e62")
rect(705, 940, 5, 5);
rect(710, 945, 5, 5);
rect(715, 950, 5, 5);
rect(720, 945, 5, 5);
rect(725, 940, 5, 5);
rect(730, 945, 5, 5);
rect(735, 950, 5, 5);
rect(740, 945, 5, 5);
rect(745, 940, 5, 5);
}
