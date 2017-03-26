// Be sure to comment out `saveFrames() unless saving PNGs`
// 26MAR2017 adapted from
// https://www.openprocessing.org/sketch/412798

let cols,
  rows,
  scl = 5,
  grid = [],
  t = 50,
  flying = 2;

function setup() {
  createCanvas(300,300);
  cols = floor(300 / scl);
  rows = floor(300 / scl);

  saveFrames("26MAR2017-P-", "png", 5, 22);
}

function draw() {
  background(0);

  stroke(150);
  noFill();
  flying += 0.02;
  let yoff = flying;
  for (let y = 0; y < rows; y++) {
    let xoff = 40;
    grid[y] = [];
    for (let x = 0; x < cols; x++) {
      grid[y][x] = map(noise(xoff, yoff), 0, 1, -50, 50);
      xoff -= 0.1;

    }
    yoff += 0.1;
  }
  translate(width / 2, height / 2);
  translate(-width / 2 + scl, -height / 2 + scl);
  for (let y = 0; y < rows - 1; y++) {
    beginShape();
    for (let x = 0; x < cols; x++) {
      push();
      translate(x * scl, y * scl, grid[x][y]);
      rotate(t);
      if (x % 5 == 0) {
        stroke(80, 150, 255);
      } else {
        stroke(90, 180, 50);
      }
        point(grid[x][y], grid[x][y]);
      pop();
    }
    endShape();
  }
  t += 0.02;
}
