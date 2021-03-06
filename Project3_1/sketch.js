let xpos;
let ypos;
let xpos1;
let ypos1;

let xoffset;
let yoffset;
let xoffset1;
let yoffset1;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(150,200,150);
  noStroke();

  xoffset = 0.3;
  yoffset = 0.0;
  xoffset1 = 0.2;
  yoffset1 = 0.0;

}

function draw(){
//offset settings
  xpos = noise(xoffset) * width;
  ypos = noise(yoffset) * height;
  xpos1 = noise(xoffset1) * 1100;
  ypos1 = noise(yoffset1) * height;

//apricot coloured ellipse moving xpos
  fill(250,200,150);
  ellipse(xpos,100,120,220);

//light yellow coloured ellipse moving ypos
  fill(252,250,152);
  ellipse(400, ypos, 100, 200);

//Bright yellow coloured ellipse
  fill(300,300,100);
  ellipse(700, 180, 200, 300);

//light green coloured ellipse
  fill(100,200,100);
  ellipse(280, 400, 100, 200);

//light blue coloured ellipse moving xpos (using xpos1)
  fill(50,200,300);
  ellipse(xpos1,500,300,100);

//bright purple coloured circle moving ypos (using ypos1)
  fill(100,50,200);
  circle(1100,ypos1,150,150);

//light purple coloured circle
  fill(130,70,200);
  circle(900,400,100,100);

// violet coloured circle
  fill(190,80,200);
  circle(100,300,80,100);

//darker green coloured long ellipse
  fill(100,190,50);
  ellipse(600,300,300,20);

//light orange coloured ellipse
  fill(300,190,50);
  ellipse(600,600,150,40);

//bright orange coloured ellipse
  fill(300,120,50);
  ellipse(900,630,200,20);

//navy coloured ellipse
  fill(40,30,90);
  ellipse(100,600,30,130);

  xoffset = xoffset + 0.01;
  yoffset = yoffset + 0.01;
  xoffset1 = xoffset1 + 0.01;
  yoffset1 = yoffset1 + 0.01;


}
