let xpos = 500;
let ypos = 0;
let xballspeed = 5;
let yballspeed = 10;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  // put drawing code here
    background(10,65,120);
    fill(120,120,200);
    circle(xpos,ypos,250);

    xpos = xpos + xballspeed;
    ypos = ypos + yballspeed;

    //Check for x position
    //Check when ball crosses right side of the canvas
    if (xpos > width){
      xballspeed = -xballspeed;
    }
    //Check when ball crosses left side of the canvas
    if (xpos < 0){
      xballspeed = -xballspeed;
    }

    //Check for y position
    //Check when ball crosses the bottom of the canvas
    if (ypos > height){
      yballspeed = -yballspeed;
    }
    //Check when ball crosses top of the canvas
    if (ypos < 0){
      yballspeed = -yballspeed;
    }

    if(mouseIsPressed & dist(mouseX,mouseY) <200){
      circle = random(xpos,ypos);
    }

    if(mouseIsPressed & dist(width/2,height/2,mouseX,mouseY) > 50){
      xpos = random(10,300);
    }

}
