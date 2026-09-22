let vak = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let spelklaar = false; 

function setup() {
  createCanvas(700, 700);
}

let player = 1;

function mousePressed(){
  // klik functie traceert waar muis is en of vakje is aan
  let kolom = floor((mouseX - 150) / 150);

  let rij = floor((mouseY - 150) / 150);

  let nummer = rij * 3 + kolom;

  // muis positie blijven in rect
  if(mouseX > 150 && mouseX < 150 + 450 && mouseY > 150 && mouseY < 150 + 450 ){
if (nummer >= 0 && nummer < 9 && vak[nummer] == 0){
  vak[nummer] = player;

  //veranderd waarde van speler na beurt
if( player == 1){
    player = 2;
    console.log("player 2 beurt");
  }else {
    player = 1;
    console.log("player 1 beurt");

  }

}
  

  console.log("klik");
}
}

function controleerWinnaar(){
//als speler een eerste rij boven horizontaal heeft
if (vak[0] == 1 && vak[1] == vak[0] && vak[2] == vak[0]){
return 1;
}

// als speler 1 eerste rij verticaal heeft
if (vak[0] == 1 && vak[3] == vak[0] && vak[6] == vak[0]){
return 1;
}

// als speler 1 rij diagonaal links naar rechts heeft
if (vak[0] == 1 && vak[4] == vak[0] && vak[8] == vak[0]){
return 1;
}

// als speler 2 eerste rij horizontaal heeft
if (vak[0] == 2 && vak[1] == vak[0] && vak[2] == vak[0]){
  return 2;
}

// als speler 2 eerste rij verticaal heeft
if (vak[0] == 2 && vak[3] == vak[0] && vak[6] == vak[0]){
  return 2;
}

// als speler 2 rij diagonaal links naar rechts heeft
if (vak[0] == 2 && vak[4] == vak[0] && vak[8] == vak[0]){
  return 2;
}

// als speler 1 tweede rij horizontaal heeft
if (vak[3] == 1 && vak[4] == vak[3] && vak[5] == vak[3]){
  return 1;
}

// als speler 1 tweede rij verticaal heeft
if (vak[1] == 1 && vak[4] == vak[1] && vak[7] == vak[1]){
  return 1;
}

// als speler 1 diagonaal rechts naar links heeft 
if (vak[2] == 1 && vak[4] == vak[2] && vak[6] == vak[2]){
  return 1;
}

// als speler 2 rij 2 horizontaal heeft
if (vak[3] == 2 && vak[4] == vak[3] && vak[5] == vak[3]){
  return 2;
}

// als speler 2 rij 2 verticaal heeft
if (vak[1] == 2 && vak[4] == vak[1] && vak[7] == vak[1]){
  return 2;
}

// als speler 2 rij diagonaal rechts naar links heeft
if (vak[2] == 2 && vak[4] == vak[2] && vak[6] == vak[2]){
  return 2;
}

// als speler 1 rij 3 horizontaal heeft
if (vak[6] == 1 && vak[7] == vak[6] && vak[8] == vak[6]){
  return 1;
}

// als speler 1 rij 3 verticaal heeft
if (vak[2] == 1 && vak[5] == vak[2] && vak[8] == vak[2]){
  return 1;
}

// als speler 2 rij 3 horizontaal heeft
if (vak[6] == 2 && vak[7] == vak[6] && vak[8] == vak[6]){
  return 2;
}

// als speler 2 rij 3 verticaal heeft
if (vak[2] == 2 && vak[5] == vak[1] && vak[8] == vak[2]){
  return 2;
}

// als niemand wint 
return 0;

}

function draw() {
  background(220);

// laat zien wie aan beurt is
if(player == 1){
  background("red");
}else if (player == 2){
  background("blue");
}

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
