let xoffset;
let yoffset;

let bcol;
let rcol;

function setup() {
createCanvas(windowWidth,windowHeight);
background(0,0,0);

xoffset = 0.3;
yoffset = 0.3;

}

function draw(){

  bcol = noise(xoffset) * 255;
  rcol = noise(yoffset) * 255;

//random colour change of the smallest left rectangle
  fill(0,0,bcol,70);
  rect(35, 81, 30, 50);

//random colour change of the second left rectangle
  fill(30,0,bcol,70);
  rect(100, 81, 50, 100);

//random colour change of the third left rectangle

  fill(0,70,bcol,70);
  rect(200, 81, 70, 200);

//random colour change of the fourth left rectangle
  fill(0,0,bcol,120);
  rect(320, 81, 80, 300);

//random colour change of the fifth left rectangle
  fill(0,0,bcol,170);
  rect(440, 81, 100, 400);

//random colour change of the middle rectangle
  fill(0,20,bcol,10);
  rect(580, 81, 120, 500);

//random colour change of the smallest left rectangle
  fill(rcol,0,50,10);
  rect(740, 81, 140, 600);

//random colour change of the right rectangle
  fill(rcol,0,40,170);
  rect(920, 81, 120, 500);

//random colour change of the second rightrectangle
  fill(rcol,0,90,170);
  rect(1080, 81, 100, 400);

//random colour change of the third right rectangle
  fill(rcol,30,40,170);
  rect(1220, 81, 80, 300);

  xoffset = xoffset + 0.01;
  yoffset = yoffset + 0.01;

}
