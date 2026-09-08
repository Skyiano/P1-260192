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
}
