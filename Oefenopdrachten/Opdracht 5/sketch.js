let x1 = 20; let y1 = 15;
let x2 = 20; let y2 = 105;
let x3 = 80; let y3 = 105;
let x4 = 80; let y4 = 205;
let x5 = 540; let y5 = 20;
let x6 = 350; let y6 = 105;
let x7 = 625; let y7 = 105;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  fill("black");
  text("1.", x1, y1);
  text("2.", x2, y2);
  text("3.", x3, y3);
  text("4.", x4, y4);
  text("5.", x5, y5);
  text("6.", x6, y6);
  text("7.", x7, y7);
  for (let i = 0; i <10; i++) {
    strokeWeight(1);
    if (i == 6){
      fill("blue");
    }else{
      fill("white");
    }
    rect(x1 + i * 50, 25, 50, 50);
    
  }
  for (let i = 0; i < 5; i++) {
    fill(i * 50);
    strokeWeight(1);
    rect(x2, 115 + i * 50, 50, 50);
    
  }

  for (let i = 0; i < 4; i++) {
    fill(0, i * 100, 0);
    strokeWeight(1);
    rect(x3 + i * 25, 115, 50 + i * 25, 50);
  }

  for (let i = 0; i < 4; i++) {
    fill(0, 0, i * 100);
    strokeWeight(1);
    rect(x4 + i * 30, 215, 50 + i * 25, 100 + i * 50);
  }

  for (let i = 0; i < 6; i++) {
    fill("white");
    strokeWeight(i * 2)
    circle(x5 + i * 30, 35, 25);
  }

  for (let i = 0; i < 10; i++) {
   strokeWeight(1);
   if (i == 0 || i == 2 || i == 4 || i == 6 || i == 8 || i == 10){
    fill("red");
   }else{
    fill("white");
   }
   circle(400, 150, 100 - i * 10);
  }
  for (let i = 0; i < 21; i++) {
    let h = abs(1 - 10);
    strokeWeight(1);
    rect(x7, 150 + i * 10, 25 - h * 10, 10);
      

}
}
