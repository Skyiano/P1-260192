let x = 100;{
// zet x naar waarde 100
}
let greeting = "hallo wereld";{
//zet greeting naar text waarde hallo wereld
}
let a = 20;{
let b = 10;
//geeft een waarde aan a en b
}


let optellen = a + b;{
let aftrekken = a - b;
let multiply = a * b;
let delen = a / b;
//maakt sommen met waarde a en b
}

let y = 0;
y = 80;
 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(24);
  text(x, 20, 20);
  text(greeting, 20, 60);
}
