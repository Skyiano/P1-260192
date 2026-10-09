let circles = [];

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 100; i++) {
    let c = {
      xPosition: random(50, 600),
      yPosition: random(50, 300),
      radius: random(10, 50),
      kleur: random(["green", "red", "blue","yellow"]),
      speedX: random(-5, 5),
      speedY: random(-5, 5)
    }
    circles.push(c);
    
  }
}

function draw() {
  background(201, 158, 224);
  for (let i = 0; i < circles.length; i++) {
    let currentCircle = circles[i];

  fill (currentCircle.kleur);
  circle(currentCircle.xPosition, currentCircle.yPosition, currentCircle.radius);
   currentCircle.xPosition = currentCircle.xPosition + currentCircle.speedX;
   currentCircle.yPosition = currentCircle.yPosition + currentCircle.speedY;

   if(currentCircle.xPosition < 0){
    currentCircle.speedX *= -1;
   }

   else if (currentCircle.xPosition > width){
    currentCircle.speedX *= -1;
   }

   if(currentCircle.yPosition < 0){
    currentCircle.speedY *= -1;
   }

   else if (currentCircle.yPosition > height){
    currentCircle.speedY *= -1;
   }
    
  }
}

function mousePressed(){
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i]
    let d = dist(mouseX, mouseY, circle.xPosition, circle.yPosition);
    if (d <= circle.radius){
      
     point += 1;
    }
    
  }
  
}
