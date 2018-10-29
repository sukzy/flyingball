class Pipe {
  constructor() {
    this.reset();
  }

  reset() {
    this.w = 90;
    this.h = random(height / 2, height);
    this.x = width;
    this.y = random(height / 2, height - 100);
    this.vel = 5;
  }

  show() {
    fill(250, 50, 100);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }

  update() {
    this.x -= this.vel;
  }

  edge() {
    if (this.x < -this.w) {
      this.reset();
    }
  }
}