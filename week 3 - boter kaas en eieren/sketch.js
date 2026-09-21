let vak = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let player = 1;

function setup() {
  createCanvas(700, 700);
}

function mousePressed(){
if (mouseButton == LEFT){
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100){
    
  }
}
}
 

function draw() {
  background(220);

  //maak speelveld
  fill("black");
  rect(100, 100, 520, 520);
  noStroke(0);

// maak eerste rij

//vak nummer 1
if (vak[0] == 1) {
  fill("red");
}else if (vak[0] == 2) {
  fill("blue");
} else if (vak[0] == 0){
  fill("gray");
}
square(150, 150, 120, 10);

// vak nummer 2
if (vak[1] == 1){
fill("red");
} else if (vak[1] == 2){
  fill("blue");
} else if (vak[1] == 0){
  fill("gray");
}
  square(300, 150, 120, 10);

  // vak nummer 3
  if (vak[2] == 1){
    fill("red");
  }else if (vak[2] == 2){
    fill("blue");
  }else if (vak[2] == 0){
    fill("gray");
  }
  square(450, 150, 120, 10);

// maak tweede rij

// vak nummer 4
if (vak[3] == 1){
fill("red");
}else if(vak[3] == 2){
fill("blue");
}else if(vak[3] == 0){
fill("gray")
}
  square(150, 300, 120, 10);

  // vak nummer 5
  if (vak[4] == 1){
fill("red");
}else if(vak[4] == 2){
fill("blue");
}else if(vak[4] == 0){
fill("gray")
}
  square(300, 300, 120, 10);

  // vak nummer 6
  if (vak[5] == 1){
fill("red");
}else if(vak[5] == 2){
fill("blue");
}else if(vak[5] == 0){
fill("gray")
}
  square(450, 300, 120, 10);

//derde rij

//vak nummer 7
if (vak[6] == 1){
fill("red");
}else if(vak[6] == 2){
fill("blue");
}else if(vak[6] == 0){
fill("gray")
}
  square(150, 450, 120, 10);

  // vak nummer 8
  if (vak[7] == 1){
fill("red");
}else if(vak[7] == 2){
fill("blue");
}else if(vak[7] == 0){
fill("gray")
}
  square(300, 450, 120, 10);

// vak nummer 9
  if (vak[8] == 1){
fill("red");
}else if(vak[8] == 2){
fill("blue");
}else if(vak[8] == 0){
fill("gray")
}
  square(450, 450, 120, 10);
}
