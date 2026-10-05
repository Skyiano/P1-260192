function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  //make house
  drawHouse(20, 100);
// make second house
  drawHouse(100, 100);
  drawHouse(180, 100);
  // make circle
  drawCircle(50);
  // make rectangle
  drawTangle(20, 300);
  // make line
  drawLine(10, 160);
  // place text ffjfj or sum
  drawTekst(100, 200, 20, "red");
  // addition
  let addUp = addition(30,30);
  text(addUp, 150, 200);
  // subtraction
  let subtract = subtraction(20, 40);
  text(subtract, 150, 220);
// multiplication
  let multi = multiply(60, 90);
  text(multi, 150, 240);
  //dividing
  let split = divide(200, 180);
  text(split, 150, 260);
}

function drawHouse(positionX, positionY){
  fill("white")
rect(positionX, positionY, 50, 50);
triangle(positionX, positionY, positionX + 50, positionY, positionX + 30, 70);
rect(positionX + 5, positionY + 25, 15, 15);
rect(positionX + 30, positionY + 25, 15, 25);
}

function drawCircle(straal){
  fill("white")
  circle(50, 200, straal);
}

function drawTangle(posX, posY, kleur){
  fill("white")
rect(posX, posY, 100, 40);
}

function drawLine(pointX, pointY){
  line(pointX, pointY, pointX + 90, pointY);
}

function drawTekst(textPosX, textPosY, size, color){
  fill(color);
  textSize(size);
  text("ffjjfj", textPosX, textPosY);
}

function addition(a, b){
  fill("black");
return a + b;
}

function subtraction(a, b){
fill("black");
return a - b;
}

function multiply(a, b){
  fill("black");
  return a * b;
}

function divide(a, b){
  fill("black");
  return a / b;
}