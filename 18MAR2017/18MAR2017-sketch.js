const untwist = 10;

function setup() {
  createCanvas(200, 200);
  angleMode(DEGREES);
  rectMode(CENTER);
  noFill();

  saveFrames("18MAR2017-P-", "png", 2, 22);
}

function draw() {
  background(0);
  translate(0,0);

  let i = 40;

  while(i > 0) {
    push();
    let sz = (frameCount + i * width / 20) % width * 2
    rotate(sz / untwist * 5);
    strokeWeight(sz / 15);
    stroke(map(sz, 0, width * 1.2, 255, 0), map(sz, 0, width * 1.2, 255, 0), 90);
    rect(0, 0, sz, sz);
    pop();
    i = i - 1;
  }

}
