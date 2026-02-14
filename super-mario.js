// Player position
let x = 100;
let y = 300;
let x1 = 140;
let y1 = 315;

// Jump state
let jumping = false;
let jumpFrame = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0); // sky

  // ground
  fill(200);
  rect(0, 330, width, 70);
  updateJump();

  drawPlayer();
  drawPlayer2();
}
// ==================================================
// JUMP FUNCTION
// ==================================================
function jump() {
  if (!jumping) {
    jumping = true;
    jumpFrame = 0;
  }
}

function keyPressed() {
  if (key === " ") jump();
 if(key === "d") moveRight();
  if(key === "a") moveLeft();
}
function moveRight(){
  x = x+10;
  x1 = x1+10;
}
function moveLeft(){
  x = x-10;
  x1 -= 10;
}

// ==================================================
// 🧠 JUMP LOGIC
// ==================================================
function updateJump() {
  if (!jumping) return;

  jumpFrame++;

  let t = jumpFrame / 30;
  let height = sin(t * PI) * 120;
  y = 300 - height;
  y1 = 315 - height;

  if (jumpFrame >= 30) {
    jumping = false;
    y = 300;
    y1 = 315;
  }
}  


// ==================================================
// 🎨 DRAW PLAYER
// ==================================================
function drawPlayer() {
  fill(255, 60, 60);
  rect(x, y, 40, 40);
  //moon
  fill(500);
  rect(50,20,70);
}

function drawPlayer2() {
  fill(78, 159, 229);
  circle(x1, y1, 25);
}