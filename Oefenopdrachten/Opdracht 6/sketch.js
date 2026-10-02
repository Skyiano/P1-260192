let distanceX = [20, 20, 20, 20, 120, 120, 120, 120, 240];
let distanceY = [15, 100, 190, 250, 15, 100, 190, 280, 15];

let tasks = [1., 2., 3., 4., 5., 6., 7., 8., 9.];

let color = ['red', 'green', 'blue', 'purple', 'yellow'];

let number = ['400', '240', '10', '490', '30', '60', '244', '500', '301', '300'];
let numberDistanceY = [265, 280, 295, 310, 325];
let numberArray1 = [3,55,93,20,102,6];
let numberArray2 = [14,22,80,5];

let colorDistanceX1 = [30];
let colorDistanceY1 = [15, 30, 45, 60, 75];
let colorDistanceY2 = [100, 115, 130, 145, 160];
let colorDistanceY3 = [205, 220, 235];


function setup() {
  createCanvas(380, 350);

  
}

//task numbers
function draw() {
  background(220);
  for (let i = 0; i < tasks.length; i++) {
    textSize(12);
    fill("black");
    text (tasks[i], distanceX[i], distanceY[i]);

  }
//color
  for (let i = 0; i < color.length; i++) {
    textSize(16);
    fill(color[i]);
    text(color[i], colorDistanceX1[0], colorDistanceY1[i]);
    
  }
  
  // filter numbers
  for (let i = 0; i < number.length; i++) {
    let number = ['400', '240', '10', '490', '30', '60', '244', '500', '301', '300'];
    let numberFiltered = number.filter(function(num){ return num < 300});
    textSize(16);
    fill("black");
    text(numberFiltered[i], 30, numberDistanceY[i]);
  }
  
  // counting the combined total of numberArray1 + numberArray2
  

}

// shift and push
  for (let i = 0; i < color.length; i++) {
    textSize(16);
    let color = ['red', 'green', 'blue', 'purple', 'yellow'];
    color.shift();
    color.push('red');
    fill(color[i]);
    text(color[i], colorDistanceX1[0], colorDistanceY2[i]);
    
  }
// splice
  for (let i = 0; i < color.length; i++) {
    textSize(16);
    let color = ['red', 'green', 'blue', 'purple', 'yellow'];
    color.shift();
    color.splice(1,2);
    color.push('red');
    fill(color[i]);
    text(color[i], colorDistanceX1[0], colorDistanceY3[i]);
  }



