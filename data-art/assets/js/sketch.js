let cam;
let stop = true;

function setup() {
  const canvas = createCanvas(640, 300);
  cam=createCapture(VIDEO);
  frameRate(6);
  background(0);
  if(stop) noLoop();
  canvas.mousePressed(function() {
    stop = !stop;
    stop ? noLoop() : loop()
  })
}

function draw() {
  var x= random(width);
  var y=random(height);
  var c=cam.get(x,y);
  noStroke();
  fill(c,25);
  rect(0,0,width,height);
}