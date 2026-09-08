function setup() {
  createCanvas(1000, 1000);

}

function draw() {
  background(100);

  //writes name
  textSize(24);
  fill("black");
  text("1. skyhoek", 10, 50);

textSize(24);
fill("black");
text("2.", 10, 100)

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
rect(10, 220, 200, 50)

//schaakbord
textSize(24);
fill("black");
text("3.", 10, 300)
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
stroke("black")
triangle(100, 700, 100, 200, 100, 200)


}
