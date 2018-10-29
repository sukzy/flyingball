class Bird {
  constructor() {
    this.reset();
  }

  reset() {
    this.r = 50;
    this.x = width / 2;
    this.y = -this.r;
    this.jumpHeight = 10;
    this.vel = 0;
    this.gravity = 0.7;
    this.jump = false;
  }

  show() {
    fill(255, 200);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
  }

  update() {
    this.vel += this.gravity;
    this.y += this.vel;
  }

  jumping() {
    if (this.jump) {
      this.vel = -this.jumpHeight;
    }
  }

  edges() {
    if (this.y + this.r > height) {
      this.y = height - this.r / 2;
    }
  }

  hitPipe(pipe) {
    if (this.x + this.r / 2 > pipe.x && this.x + this.r / 2 < pipe.x + pipe.w) {
      if (this.y + this.r / 2 > pipe.y && this.y - this.r / 2 < pipe.y + pipe.h) {
        console.log("hit");
        noLoop();
      }
    }
  }
}