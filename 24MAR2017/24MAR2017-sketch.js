// Be sure to comment out `saveFrames() unless saving PNGs`
// 24MAR2017 adapted from
// https://www.openprocessing.org/sketch/400547

function setup() {
  createCanvas(600, 600);
  strokeWeight(0);
  stroke(250);
  rectMode(CENTER);
  saveFrames("24MAR2017-P-", "png", 7, 22);
}

function draw() {
    background(250);
    translate(width / 2, height / 2);
    for (let i = -6; i <= 5; i++) {
      let x = i * 25;
      const y = 0;
      fill(map(i, -6, 5, 0, 255), 50, 100);
      push();
      translate(x, y);
      rotate(radians(cos(radians(i + frameCount)) + frameCount));
      rotate(x * 2, y);
      rect(2, 2, 2, 100, 6);
      pop();

    }
}
