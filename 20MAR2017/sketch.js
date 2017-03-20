// Be sure to comment out `saveFrames() unless saving PNGs`
// 20MAR2017 adapted from Nervous Waves 2 by Levente Sandor
// https://www.openprocessing.org/sketch/153224

const fr = 60; // framerate
const sz = 5; // size

function setup() {
  createCanvas(200, 200);
  noStroke();
  rectMode(CENTER);
  frameRate(fr);
  noiseDetail(2, 0.9);

  // saveFrames("20MAR2017-P-", "png", 4, 22);
}

function draw() {
  background(0);

  // Layer 1
  for (let x = sz; x < width; x+= sz) {
    for (let y = sz; y < height; y+= sz) {
      let n = noise( x * 0.005, y * 0.005, frameCount * 0.05);
      push();
      translate(x, y);
      rotate(TWO_PI * n);
      scale(sz * n);
      fill('red');
      rect(0, 0, 1, 1);
      pop();
    }
  }

  // Layer 2
  for (let w = sz; w < width; w+= sz) {
    for (let v = sz; v < height; v+= sz) {
      let m = noise( w * 0.002, v * 0.003, frameCount * 0.05);
      push();
      translate(w, v);
      rotate(PI * m);
      scale(sz+3 * m);
      fill('rgba(50%,0%,0%, 0.2)');
      rect(0, 0, 1, 1);
      pop();
    }
  }
}
