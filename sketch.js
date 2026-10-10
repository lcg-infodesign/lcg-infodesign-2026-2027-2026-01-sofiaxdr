let xPesce = -300;
let yBolle = 0;

function setup() {
  createCanvas(500, 600);
}


function draw() {

  // Sfondo e fondale
  drawBackground();

  // Bolle
  drawBubbles();

    // Movimento delle bolle
yBolle = yBolle - 2;

if (yBolle < -600) {
  yBolle = 0;
}

  // Movimento del pesce
  xPesce = xPesce + 2;

  if (xPesce > 300) {
    xPesce = -300;
  }

  // Disegna il pesce
  drawFish(xPesce, 0);
}


// Disegna lo sfondo marino
function drawBackground() {

  // Acqua
  background(40, 170, 220);

  // Fondo del mare
  fill(240, 200, 100);
  noStroke();
  rect(0, 570, 500, 30);

  // Alghe a sinistra
  fill(30, 150, 90);
  triangle(15, 570, 35, 570, 25, 490);
  triangle(30, 570, 55, 570, 45, 520);

  // Alghe a destra
  fill(20, 135, 80);
  triangle(420, 570, 445, 570, 435, 475);
  triangle(440, 570, 465, 570, 455, 510);
}


// Disegna il pesce
function drawFish(x, y) {

  push();
  translate(x, y);

  // Corpo del pesce
  fill(255, 190, 60);
  noStroke();
  ellipse(220, 200, 240, 150);

  // Coda arancione
  fill(255, 100, 0);
  triangle(100, 200, 40, 140, 40, 260);

  // Occhio giallo
  fill(255, 255, 0);
  ellipse(265, 200, 65, 65);

  // Pupilla rossa
  fill(170, 20, 20);
  ellipse(270, 200, 35, 35);

  // Pinna superiore
  fill(255, 100, 0);
  triangle(160, 135, 270, 135, 200, 40);

  // Pinna inferiore
  triangle(180, 270, 240, 270, 210, 340);

  // Riflesso nell'occhio
  fill(255);
  ellipse(255, 190, 10, 10);

  pop();
}


// Disegna una singola bolla
function drawBubble(i, bubbleX, bubbleY, transparency, size) {

  fill(130, 225, 255, transparency);
  noStroke();

  ellipse(bubbleX, bubbleY, size);
}


// Disegna tutte le bolle

function drawBubbles(n = 60) {
  randomSeed(10);

  for (let i = 0; i < n; i++) {
    let bubbleX = random(width);
    let bubbleY = random(height - 40);
    let randomTransparency = random(80, 180);
    let randomSize = random(8, 25);

    if (bubbleY + yBolle < 0) {
      drawBubble(i, bubbleX, bubbleY + yBolle + 600,
                 randomTransparency, randomSize);
    } else {
      drawBubble(i, bubbleX, bubbleY + yBolle,
                 randomTransparency, randomSize);
    }
  }
}



