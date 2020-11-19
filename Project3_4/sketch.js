let xpos;
let ypos;
let xpos1;
let ypos1;

let xoffset;
let yoffset;
let xoffset1;
let yoffset1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,0);
  noStroke();

  xoffset = 0.0;
  yoffset = 0.0;
  xoffset1 = 0.0
  yoffset1 = 0.0

}

function draw() {
//offset settings for purple circle
  xpos = noise(xoffset) * width;
  ypos = noise(yoffset) * height;

//bright purple coloured circle moving
    fill(100,50,200,70);
    circle(xpos,ypos,150,150);

    xoffset = xoffset + 20;
    yoffset = yoffset + 20;

//offset settings for dark purple circle
  xpos = noise(xoffset) * width;
  ypos = noise(yoffset) * height;

//dark purple coloured circle moving
    fill(50,30,70,70);
    circle(xpos,ypos+150,50,50);

    xoffset = xoffset +15;
    yoffset = yoffset +15;

//offset settings for violet circle
   ypos1 = noise(yoffset1) * -1500;

//mouse interaction for violet circle
  if(mouseIsPressed){
    fill(100,50,90,50);
    circle(100,-ypos1,200,200);
  }

    yoffset1 = yoffset1 + 80;

//offset settings for blue ellipse
    xpos1 = noise(xoffset1) * width;

//key interaction for blue ellipse
  if(keyIsPressed){
    fill(30,30,90,70);
    ellipse(xpos1,50,300,100);
  }

    xoffset1 = xoffset1 + 20;

//offset settings for bright blue ellipse
    xpos = noise(xoffset) * 700;
    ypos = noise(yoffset) * -2000;

//bright blue ellipse moving
    fill(20,50,150,50);
    ellipse(xpos,-ypos,150,200);

    xoffset = xoffset + 60;
    yoffset = yoffset + 60;

//offset settings for green ellipse
    xpos = noise(xoffset) * 1500;
    ypos = noise(yoffset) * -500;

//bright green ellipse moving
    fill(10,80,150,50);
    ellipse(xpos,-ypos,50,100);

    xoffset = xoffset + 60;
    yoffset = yoffset + 60;

}
