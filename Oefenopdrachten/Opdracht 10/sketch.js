let color = ["red", "green", "blue", "orange", "purple", "yellow"];
let file = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "penguin", "pig", "rabbit", "snake"];

function preload() {
  
}

function setup() {
  createCanvas(800, 400);
let previousButton;

  for (let i = 0; i < color.length; i++) {
    let button = createButton(color[i]);
    button.position(i * 100 + 10);
    button.mousePressed(function(){
      background(color[i]);
    });
  

  }
}

function draw() {

}


