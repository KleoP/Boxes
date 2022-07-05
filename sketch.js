let bigSquare, gridSquare, gridsNo;

let rNo, rColor, rRed, rGreen, rBlue, rAlpha;

let lowX, lowY, highX, highY, x1, y1, x2, y2;

let multiplier = [-1, 0, 1];

function setup() {
  bigSquare = 400;
  gridsNo = 4;
  gridSquare = (bigSquare / (sqrt(gridsNo)));
  createCanvas(bigSquare, bigSquare);
  noLoop();
}

function draw() {
  background(128);
  rAlpha = random(0, 256);
  stroke(255, 255, 255, random(0, 256));
  
  x1 = 0;
  y1 = 0;
  x2 = gridSquare;
  y2 = gridSquare;
  rNo = random(1, 11);
  strokeWeight(rNo);
  rNo *= random(multiplier);
  line(x1 + rNo, y1 + rNo, x1 + rNo, y2 + rNo);
  rNo = random(1, 11);
  strokeWeight(rNo);
  line(x2 + rNo, y1 + rNo, x2 + rNo, y2 + rNo);
  rNo = random(1, 11);
  strokeWeight(rNo);
  line(x2 + gridSquare + rNo, y1 + rNo, x2 + gridSquare + rNo, y2 + rNo);
  let diagonal = (sqrt(sq(gridSquare) + sq(gridSquare)) / 2);
  for (let i = 10; i < diagonal; i+=10) {
    rNo = random(1, 6);
    strokeWeight(rNo);
    line(x1 + (i * random(multiplier)), y1 + (i * random(multiplier)), x2 + (i * random(multiplier)), y2 + (i * random(multiplier)));
  }
  console.log("box1", x1, y1, x2, y2);
  fill(255, 0, 0, random(100, 255));
  ellipse(x1, y1, x2, y2);

  
  x1 += gridSquare;
  y1 = y1;
  x2 += gridSquare;
  y2 = y2;
  rNo = random(1, 11);
  strokeWeight(rNo);
  rNo *= random(multiplier);
  line(x1 + rNo, y1 + rNo, x1 + rNo, y2 + rNo);
  rNo = random(1, 11);
  strokeWeight(rNo);
  line(x2 + rNo, y1 + rNo, x2 + rNo, y2 + rNo);
  rNo = random(1, 11);
  strokeWeight(rNo);
  line(x2 + gridSquare + rNo, y1 + rNo, x2 + gridSquare + rNo, y2 + rNo);
  diagonal = (sqrt(sq(gridSquare) + sq(gridSquare)) / 2);
  for (let i = 10; i < diagonal; i+=10) {
    rNo = random(1, 6);
    strokeWeight(rNo);
    line(x1 + (i * random(multiplier)), y1 + (i * random(multiplier)), x2 + (i * random(multiplier)), y2 + (i * random(multiplier)));
  }
  console.log("box2", x1, y1, x2, y2);
  fill(255, 0, 0, random(100, 255));
  ellipse(x1, y1, x2, y2);
  
  x1 = x1;
  y1 += gridSquare;
  x2 = x2;
  y2 += gridSquare;
  rNo = random(1, 11);
  strokeWeight(rNo);
  rNo *= random(multiplier);
  line(x1 + rNo, y1 + rNo, x2 + rNo, y1 + rNo);
  rNo = random(1, 11);
  strokeWeight(rNo);
  line(x1 + rNo, y2 + rNo, x2 + rNo, y2 + rNo);
  rNo = random(1, 11);
  strokeWeight(rNo);
  line(x1 + rNo, y2 + gridSquare + rNo, x2 + rNo, y2 + gridSquare + rNo);  
  diagonal = (sqrt(sq(gridSquare) + sq(gridSquare)) / 2);
  for (let i = 10; i < diagonal; i+=10) {
    rNo = random(1, 6);
    strokeWeight(rNo);
    line(x1 + (i * random(multiplier)), y1 + (i * random(multiplier)), x2 + (i * random(multiplier)), y2 + (i * random(multiplier)));
  }
  console.log("box3", x1, y1, x2, y2);
  fill(255, 0, 0, random(100, 255));
  ellipse(x1, y1, x2, y2);
  
  x1 -= gridSquare;
  y1 = y1;
  x2 -= gridSquare;
  y2 = y2;
  rNo = random(1, 11);
  strokeWeight(rNo);
  rNo *= random(multiplier);
  line(x1 + rNo, y1 + rNo, x2 + rNo, y1 + rNo);
  rNo = random(1, 11);
  strokeWeight(rNo);
  line(x1 + rNo, y2 + rNo, x2 + rNo, y2 + rNo);
  rNo = random(1, 11);
  strokeWeight(rNo);
  line(x1 + rNo, y2 + gridSquare + rNo, x2 + rNo, y2 + gridSquare + rNo);  
  diagonal = (sqrt(sq(gridSquare) + sq(gridSquare)) / 2);
  for (let i = 10; i < diagonal; i+=10) {
    rNo = random(1, 6);
    strokeWeight(rNo);
    line(x1 + (i * random(multiplier)), y1 + (i * random(multiplier)), x2 + (i * random(multiplier)), y2 + (i * random(multiplier)));
  }
  console.log("box4", x1, y1, x2, y2);
  fill(255, 0, 0, random(100, 255));
  ellipse(x1, y1, x2, y2);
  

}