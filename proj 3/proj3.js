function setup() {
  createCanvas(400, 400);
    background(0);
}

function draw() {
noStroke(0)
  fill(mouseX, 100)
  fill(mouseY, 200)
  ellipse(mouseX, mouseY, 20)
  
}
function mousePressed () {
  background(100);
}