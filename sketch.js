let kids = [];

function preload() {
  for (var i = 0; i < 10; i++) {
    kids[i] = loadImage("data/kid" + i + ".png");
  }
}

function setup() {
  createCanvas(800, 1000);
  frameRate(1);
}

function draw() {
  background(255);
  
    for (var i = 0; i < 10; i++) {
    image(kids[i], random(width), random(height));
  }

  let d = day(); // Values from 1 - 31
  let m = month(); // Values from 1 - 12
  let y = year(); // 2003, 2004, 2005, etc.

  let h = hour(); // Values from 0 - 23
  let ms = minute(); // Values from 0 - 59
  let s = second(); // Values from 0 - 59

  textSize(15);
  text(h, 710, 960);
  fill(0);

  textSize(15);
  text(ms, 730, 960);
  fill(0);

  textSize(15);
  text(s, 752, 960);
  fill(0);

  textSize(15);
  text(d, 30, 960);
  fill(0);

  textSize(15);
  text(m, 50, 960);
  fill(0);

  textSize(15);
  text(y, 70, 960);
  fill(0);

     if (h == 9 && ms == 30 && s == 10 && d == 22 && m == 11 && y == 2022 ) {

  print("TIME");
  save( "final_image" + frameCount + ".jpg")
  noLoop();
       
     }
}
