
let sunSlider;

function setup() {
  //create a variable for canvas so that we can reference it for positioning later
  let canvas = createCanvas(windowWidth, windowHeight);
  //you can specify the position of your element like this. it's best to do most positioning in CSS, but here I'm setting it to the top
  canvas.position(0, 0);
  //you can add a CSS class to something by putting .class after it
  canvas.class("container");
  //set the variable to the createSlider function. createSlider values are: minimum, maximum, starting value.
  sunSlider = createSlider(0, 800, 0);
  sunSlider.class("slider");
}
function draw() {
  noStroke();
  background(206, 230, 255);

  fill(84, 94, 147, sunSlider.value());
  rect(0, 0, windowWidth, windowHeight);

  fill(255, 239, 159,);
  //set the width and height of the ellipse using slider.value
  ellipse(200 + sunSlider.value(), 200 + sunSlider.value(), 100, 100);

  fill(255);
  ellipse(windowWidth/3, windowHeight/3, 100, 100);
  ellipse(windowWidth/3 + 30, windowHeight/3 + 30, 130, 100);
  ellipse(windowWidth/3 - 40, windowHeight/3 + 20, 120, 90);
  ellipse(windowWidth/3 - 80, windowHeight/3 + 60, 100, 80);
  ellipse(windowWidth/3 + 75, windowHeight/3 + 60, 100, 80);
  ellipse(windowWidth/3, windowHeight/3 + 65, 200, 90);

  ellipse(windowWidth/6, windowHeight/4 + 300, 100, 100);
  ellipse(windowWidth/6 + 30, windowHeight/4 + 330, 130, 100);
  ellipse(windowWidth/6 - 40, windowHeight/4 + 320, 120, 90);
  ellipse(windowWidth/6 - 80, windowHeight/4 + 360, 100, 80);
  ellipse(windowWidth/6 + 75, windowHeight/4 + 360, 100, 80);
  ellipse(windowWidth/6, windowHeight/4 + 365, 200, 90);

  ellipse(windowWidth/3 + 400, windowHeight/3 + 100, 100, 100);
  ellipse(windowWidth/3 + 430, windowHeight/3 + 130, 130, 100);
  ellipse(windowWidth/3 + 360, windowHeight/3 + 120, 120, 90);
  ellipse(windowWidth/3 + 320, windowHeight/3 + 160, 100, 80);
  ellipse(windowWidth/3 + 475, windowHeight/3 + 160, 100, 80);
  ellipse(windowWidth/3 + 400, windowHeight/3 + 165, 200, 90);

  fill(59, 135, 49);
  ellipse(windowWidth / 2, windowHeight, 1500, 500);
  fill(85, 155, 72);
  ellipse(windowWidth, windowHeight, 1300, 700);
  fill(122, 197, 108);
  ellipse(0, windowHeight + 40, windowWidth, 500);
}