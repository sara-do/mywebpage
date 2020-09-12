let xpos = 60;
let ypos = 17;

let xpos2 = 150;
let ypos2 = 250;

function setup() {
  // put setup code here
  createCanvas(500,500);

}

function draw() {
    background(200,300,200);
  // put drawing code here
    translate(xpos,ypos);
    fill(0,100,0);
    rect(xpos,ypos,150,100);
    xpos = xpos - 3;
    ypos = ypos + 5;

    circle(xpos2,ypos2,130);
    xpos2 = xpos2 + 15;
    ypos2 = ypos2 + 5;

}
