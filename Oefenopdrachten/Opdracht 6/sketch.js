let afstandX = [20, 20, 20, 20, 120, 120, 120, 120, 240];
let afstandY = [15, 100, 190, 250, 15, 100, 190, 280, 15];

let tekst = [1., 2., 3., 4., 5., 6., 7., 8., 9.];

let kleuren = ['red', 'green', 'blue', 'purple', 'yellow'];

let nummer = ['400', '240', '10', '490', '30', '60', '244', '500', '301', '300'];
let nummerafstandY = [265, 280, 295, 310, 325];
let nummerarray1 = [3,55,93,20,102,6];
let nummerarray2 = [14,22,80,5];

let kleurafstandX1 = [30];
let kleurafstandY1 = [15, 30, 45, 60, 75];
let kleurafstandY2 = [100, 115, 130, 145, 160];
let kleurafstandY3 = [205, 220, 235];


function setup() {
  createCanvas(380, 350);

  
}

//task numbers
function draw() {
  background(220);
  for (let i = 0; i < tekst.length; i++) {
    textSize(12);
    fill("black");
    text(tekst[i], afstandX[i], afstandY[i]);

  }
//color
  for (let i = 0; i < kleuren.length; i++) {
    textSize(16);
    fill(kleuren[i]);
    text(kleuren[i], kleurafstandX1[0], kleurafstandY1[i]);
    
  }
  
    
// shift and push
  for (let i = 0; i < kleuren.length; i++) {
    textSize(16);
    let kleuren = ['red', 'green', 'blue', 'purple', 'yellow'];
    kleuren.shift();
    kleuren.push('red');
    fill(kleuren[i]);
    text(kleuren[i], kleurafstandX1[0], kleurafstandY2[i]);
    
  }
// splice
  for (let i = 0; i < kleuren.length; i++) {
    textSize(16);
    let kleuren = ['red', 'green', 'blue', 'purple', 'yellow'];
    kleuren.shift();
    kleuren.splice(1,2);
    kleuren.push('red');
    fill(kleuren[i]);
    text(kleuren[i], kleurafstandX1[0], kleurafstandY3[i]);
    
  }


}
