var bird;
var pipe;

function setup() {
	createCanvas(600, 700);
	bird = new Bird();
	pipe = new Pipe();
}

function draw() {
	background(150, 50, 200);

	bird.show();
	bird.update();
	bird.edges();
	bird.jumping();
	// bird.hitPipe(pipe);

	// pipe.show();
	// pipe.update();
	// pipe.edge();
}

function keyPressed() {
	if (key == ' ') {
		bird.jump = true;
	} 
	if (keyCode === RETURN) {
		bird.reset();
		pipe.reset();
	}
}

function keyReleased() {
	bird.jump = false;
}