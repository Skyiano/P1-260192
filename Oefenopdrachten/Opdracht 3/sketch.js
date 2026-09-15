let score;

function setup() {
  createCanvas(400, 200);
  textSize(30);

  score = floor(random(0, 101));
}


function draw() {
  background(220);

  text("score: " + score, 50, 50);

  if (score >= 90){
  fill("green");
  text("uitstekend", 50, 100);
}

else if (score >= 70 && score <= 89){
  fill("yellow");
  text("goed gedaan", 50, 100);
}

else if (score >= 50 && score <= 69){
  fill("orange");
  text("voldoende", 50, 100);
}
else{
  fill("red");
  text("onvoldoende", 50, 100);
}
}
