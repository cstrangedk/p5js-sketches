// Be sure to comment out `saveFrames() unless saving PNGs`
// 22MAR2017 adapted from
// https://www.openprocessing.org/sketch/404052

let frame_count = 0,
    Objects = [];

const NB = 200,
      Nt = 25/2,
      width = 300,
      height = 300,
      step = height / Nt,
      curSeed = 8368,
      NB_FRAMES = 100;

function activation(t) {
  return ((1 - cos(2 * PI * t) ** 2) / 2);
}

function object(id) {
  this.id = id;
  this.draw = function() {
    let t = ((frame_count) % NB_FRAMES) / NB_FRAMES,
        x0 = lerp(0, width, this.id / NB),
        xx = x0,
        yy = 0,
        theta = PI / 2,
        turn = lerp(0, 0.7, activation((this.id / NB + 0 * t) % 1));

    stroke(234, 0, 0);
    strokeWeight(1);
    fill(255);

    for(let i = 0; i <= Nt; i++) {
      theta += turn * sin(50 * noise(1000) + 2 * PI * (75 * noise(0.2 * this.id / NB, 0.1 * i) + t));
      xx += step * cos(theta);
      yy += step * sin(theta);
      var xx2 = lerp(xx, x0, (i / Nt) * (i / Nt) * (i / Nt));
      var yy2 = lerp(yy, lerp(0, height - 0, i / Nt), max((i / Nt),1 - sqrt(i / Nt)));
      ellipse(xx2, yy2, 1, 1);
    }
  }
}

function setup() {
  createCanvas(width, height);
  noiseSeed(curSeed);
  randomSeed(2);
  background(0);
  for(let i = 0; i <= NB; i++) {
    Objects[i] = new object(i);
  }
  // saveFrames("22MAR2017-P-", "png", 3, 22);
}

function draw() {
    background(0, 150);
    let t = ((frame_count) % NB_FRAMES) / NB_FRAMES;

    for(let i = 0; i <= NB; i++) Objects[i].draw();

    noStroke();
    frame_count++;
    if (frame_count <= 100 + NB_FRAMES && frame_count > 80 + NB_FRAMES) {

    }
}
