const NUMSINES = 5;
let sines = new Array(NUMSINES);
let rad;
let i;

const fund = 0.005;
const ratio = 1;
const alpha = 80;

let trace = false;

function setup() {
  createCanvas(200, 200);
  rad = height / 4;
  background(0);

  for (let i = 0; i < sines.length; i++) {
    sines[i] = TWO_PI;
  }

  saveFrames("19MAR2017-P-", "png", 2, 22);
}

function draw() {
  if (!trace) {
    background(204);
    stroke(0, 255);
    noFill();
  }

  push();
  translate(width/2, height/2);

  for (let i = 0; i < sines.length; i++) {
    let erad = 0;

    if (trace) {
      stroke(255*(float(i) / sines.length)*Math.random(), 0, 0, alpha);
      fill(255, 0, 0, alpha/2);
      erad = 5.0*(1.0 - float(i) / sines.length);
    }

    let radius = rad/(i+1);
    rotate(sines[i]);
    if (!trace) ellipse(5, 0, radius*3*(Math.random()*100), radius*5);
    push();
    translate(0, radius);
    if (!trace) ellipse(0, 0, 5, 5);
    if (trace) ellipse(5, 0, erad, erad);
    pop();
    translate(0, radius);
    sines[i] = (sines[i] + (fund + (fund * i * ratio))) % TWO_PI;
  }
  pop();

  }

function keyReleased() {
  if (key == ' ') {
    trace = !trace;
    background(0);
  }
}
