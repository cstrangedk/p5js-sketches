// Be sure to comment out `saveFrames() unless saving PNGs`
// 21MAR2017 adapted from Soothing Cirlces by Marvin K
// https://www.openprocessing.org/sketch/169168

let n = 50,
    m = 20,
    f1 = 2000,
    f2 = 3,
    f3 = 5;

function setup() {
  createCanvas(300, 300);
  background(20);
  smooth()
  noStroke();
  fill(255);

  // saveFrames("21MAR2017-P-", "png", 10, 22);
}

function draw() {
  background(20);
  let t = millis() / f1;

  paintCircle(t, 0);
  paintCircle(t, PI);
}

function paintCircle(t, o) {
  for(let i = 0; i < n; i++) {
    let p = (i/n) * TWO_PI;
    let x = (width / 2) + sin(p + t) * (100 + sin((t * f2 + p) * f3 + o) * m * (1 - sin(p)));
    let y = (height / 2) + cos(p + t) * (100 + sin((t * f2 + p) * f3 + o) * m * (1 - sin(p)));

    ellipse(x, y, 5, 5);
  }
}
