// Be sure to comment out `saveFrames() unless saving PNGs`
// 23MAR2017 adapted from
// https://www.openprocessing.org/sketch/384060

const s = 12;

function setup() {
  createCanvas(600, 600);
  strokeJoin(ROUND);
  strokeWeight(1);
  noFill();
  // saveFrames("23MAR2017-P-", "png", 10, 22);
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    for (let i = 0; i < 360; i += 20 ) {
      push();
      stroke(255)
      translate(0, 0);
      rotate(radians(i));
      beginShape();

      for (let q = 0; q <= 20; q += 1) {
        let l = (sin (radians (q * 9 + frameCount * 0.5)) * (5 + cos(radians (q * 9)) * (q * 3)));
        vertex(sin(radians(0)) * (20 + q * s) + l, (10 + q * s ** 0.5) + 10);
      }

      for (let q = 20; q >= 0; q -= 0.5) {
        let l = (sin(radians(q * 9 + frameCount)) * (5 + sin(radians(q * 9)) * (q * 3)));
        vertex(sin(radians(0)) * (10 + q * s) - l, (10 + q * s ** 0.7) + 10);
      }
      endShape(CLOSE);
      pop();
    }

}
