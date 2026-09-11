let x = 100;
let greeting = "hallo wereld";
let a = 20;
let b = 10;
let optellen = a + b;
let aftrekken = a - b;
let multiply = a * b;
let delen = a / b;
let y = 80;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(24);
  text(x, 20, 20);
  text(greeting, 20, 60);
  text(optellen, 20, 100);
  text(aftrekken, 20, 140);
  text(multiply, 20, 180);
  text(delen, 20, 220);
 
  

}
