// Be sure to comment out `saveFrames() unless saving PNGs`
// 25MAR2017 adapted from
// http://www.abstract-codex.net/abstractscape/abstractscape/abstractscape.pde

const noiseScale = 0.01,
      d = 0.8;

let n = 0.08;

function setup() {
  createCanvas(600, 600);
  smooth();
  // saveFrames("25MAR2017-P-", "png", 7, 22);
}

function draw() {
    n = n + d ** 2;
    background(0);
    for (let y = 0; y < 40; y++) {
      for (let x = 0; x < 300; x++) {
        let noiseVal = noise((n + x) * noiseScale, (-n + y) * noiseScale, y * noiseScale);
        stroke((noiseVal * 40), 255, (noiseVal * 400));
        point(x * 4, noiseVal * 600);
      }
    }
}
