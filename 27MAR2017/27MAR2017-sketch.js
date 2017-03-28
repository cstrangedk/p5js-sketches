// Be sure to comment out `saveFrames() unless saving PNGs`
// 27MAR2017 adapted from
// https://www.openprocessing.org/sketch/168549

let ease = 0.5,
    angle = 0,
    easing = true,
    num = 540,
    frames = 165,
    points = [];

function setup() {
  createCanvas(500,500);
  colorMode(HSB, 360, 100, 100);

  for (let i = 0; i < num; i++) {
    points[i] = new p5.Vector(width / 2, height / 2);
  }
  // saveFrames("27MAR2017-P-", "png", 10, 22);
}

function draw() {
  background(0);
  noStroke();
  let d = 50;
  let x = width / 2 + cos(angle) * d;
  let y = height / 2 + sin(angle * 2) * d;
  let target = new p5.Vector(x, y);
  let leader = new p5.Vector(target.x, target.y);
  for (let i = 0; i < num; i++) {
    fill(180.0 / num * i, 90, 90);
    let point = points[i];
    let distance = p5.Vector.sub(leader, point);
    let velocity = p5.Vector.mult(distance, ease);
    point.add(velocity);
    ellipse(point.x, point.y, 7, 7);
    leader = point;
    rotate(PI / frames**0.2);
  }
  angle += TWO_PI**0.5 / frames;
}
