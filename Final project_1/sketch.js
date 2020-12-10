var speedY= 1.5;
var y;

var speedY1=1.5;
var y1;

var speedY2=0.5;
var y2;

var speedY3=2;
var y3;

var speedY4=2;
var y4;

var speedY5=0.5;
var y5;

var speedY6=2.5;
var y6;

var speedY7=2.5;
var y7;

var speedY8=2.5;
var y8;

var speedY9=3;
var y9;

var speedY10=1;
var y10;

var speedY11=1;
var y11;

var speedY12=1.5;
var y12;

var speedY13=0.5;
var y13;

var speedY14=1.5;
var y14;

var speedY15=1;
var y15;

var speedY16=1;
var y16;

var speedY17=2;
var y17;

var speedY18=2;
var y18;

var speedY19=2.5;
var y19;

var speedY20=3;
var y20;

var speedY21=3;
var y21;

var speedY22=3;
var y22;

var speedY23=2;
var y23;

var speedY24=2;
var y24;


function setup() {
  createCanvas(windowWidth, windowHeight);
    background(0,0,0);
    noFill();
    y = 165;
    y1 = 170;
    y2 = 150;
    y3 = 300;
    y4 = 305;
    y5 = 90;
    y6 = 270;
    y7 = 280;
    y8 = 290;
    y9 = 110;
    y10 = 200;
    y11 = 230;
    y12 = 180;
    y13 = 160;
    y14 = 280;
    y15 = 290;
    y16 = 450;
    y17 = 420;
    y18 = 415;
    y19 = 440;
    y20 = 500;
    y21 = 520;
    y22 = 530;
    y23 = 560;
    y24 = 540;
    noLoop();

}

function draw() {

  //random downward movement
  y = y + random(0, speedY);
  //top left red ellipse
  stroke('RED');
  strokeWeight(1);
  ellipse(100,y,100,300);

  //random downward movement
  y = y + random(0, speedY);
  //1st brownish circle next to top left red ellipse
  stroke(100,20,20);
  strokeWeight(2);
  circle(175,y,30,30);

  //random downward movement
  y = y + random(0, speedY);
  //1st row orange circle between green and blue ellipses
  stroke('orange');
  strokeWeight(2);
  circle(550,y,30,30);

  //random downward movement
  y1 = y1 + random(0, speedY1);
  //top left overlapped red ellipse
  stroke(150,0,50);
  strokeWeight(4);
  ellipse(100,y1,30,200);

  //random downward movement
  y2 = y2 + random(0, speedY2);
  //top second light pink ellipse
  stroke('#fae');
  strokeWeight(4);
  ellipse(250,y2,100,200);

  //random downward movement
  y3 = y3 + random(0, speedY3);
  //top third green ellipse
  stroke('green');
  strokeWeight(2);
  ellipse(400,y3,200,420);

  //random downward movement
  y4 = y4 + random(0, speedY4);
  //top third overlapped green ellipse
  stroke(0,120,20);
  strokeWeight(5);
  ellipse(400,y4,100,330);

  //random downward movement
  y5 = y5 + random(0, speedY5);
  //top fourth bright green ellipse
  stroke(0,200,50);
  strokeWeight(5);
  ellipse(500,y5,50,100);

  //random downward movement
  y6 = y6 + random(0, speedY6);
  //top fifth blue ellipse
  stroke('blue');
  strokeWeight(1);
  ellipse(660,y6,150,500);

  //random downward movement
  y7 = y7 + random(0, speedY7);
  //top fifth overlapped blue ellipse
  stroke(0,10,100);
  strokeWeight(2);
  ellipse(660,y7,100,400);

  //top fifth overlapped(second smallest) blue ellipse
  stroke(0,10,150);
  strokeWeight(3);
  ellipse(660,y7,50,300);

  //random downward movement
  y8 = y8 + random(0, speedY8);
  //top fifth overlapped(smallest) blue ellipse
  stroke(0,10,200);
  strokeWeight(4);
  ellipse(660,y8,20,200);

  //random downward movement
  y9 = y9 + random(0, speedY9);
  //top sixth purple ellipse
  stroke('purple');
  strokeWeight(3);
  ellipse(780,y9,50,200);

  //random downward movement
  y10 = y10 + random(0, speedY10);
  //top seventh navy ellipse
  stroke(40,50,100);
  strokeWeight(1);
  ellipse(880,y10,100,200);

  //1st row orange circle between green and blue ellipses
  stroke('white');
  strokeWeight(3);
  circle(815,y10,30,30);

  //random downward movement
  y11 = y11 + random(0, speedY11);
  //top 8th grey ellipse
  stroke('grey');
  strokeWeight(4);
  ellipse(1000,y11,100,400);

  //random downward movement
  y12 = y12 + random(0, speedY12);
  //top 8th overlapped grey ellipse
  stroke(140,140,140);
  strokeWeight(1);
  ellipse(1000,y12,20,150);

  //random downward movement
  y13 = y13 + random(0, speedY13);
  //top 9th yellow ellipse
  stroke('yellow');
  strokeWeight(5);
  ellipse(1100,y13,20,300);

  //random downward movement
  y14 = y14 + random(0, speedY14);
  //top 10th yellow ellipse
  stroke('yellow');
  strokeWeight(3);
  ellipse(1150,y14,20,500);

  //random downward movement
  y15 = y15 + random(0, speedY15);
  //top 11th orange ellipse
  stroke('orange');
  strokeWeight(2);
  ellipse(1220,y15,65,530);

  //random downward movement
  y16 = y16 + random(0, speedY16);
  //second row 1st orange ellipse
  stroke('orange');
  strokeWeight(5);
  ellipse(100,y16,80,200);

  //second row 2nd yellow ellipse
  stroke('yellow');
  strokeWeight(3);
  ellipse(200,y16,20,320);

  //second row 3rd yellow ellipse
  stroke('yellow');
  strokeWeight(5);
  ellipse(250,y16,50,220);

  //random downward movement
  y17 = y17 + random(0, speedY17);
  //second row 4th red ellipse
  stroke('red');
  strokeWeight(1);
  ellipse(540,y17,70,320);

  //random downward movement
  y18 = y18 + random(0, speedY18);
  //second row 4th overlapped red ellipse
  stroke(100,20,10);
  strokeWeight(2);
  ellipse(540,y18,30,220);

  //random downward movement
  y19 = y19 + random(0, speedY19);
  //second row 5th mustard colour ellipse
  stroke(255, 204, 0);
  strokeWeight(5);
  ellipse(760,y19,30,400);

  //random downward movement
  y20 = y20 + random(0, speedY20);
  //second row 6th purple ellipse
  stroke('purple');
  strokeWeight(3);
  ellipse(890,y20,100,300);

  //random downward movement
  y21 = y21 + random(0, speedY21);
  //second row 6th overlapped dark purple ellipse
  stroke(50,0,100);
  strokeWeight(3);
  ellipse(890,y21,40,200);

  //random downward movement
  y21 = y21 + random(0, speedY21);
  //second row 7th blueish purple ellipse
  stroke(50,50,100);
  strokeWeight(5);
  ellipse(1080,y21,80,300);

  //random downward movement
  y22 = y22 + random(0, speedY22);
  //second row 7th overlapped light purple ellipse
  stroke(80,50,100);
  strokeWeight(5);
  ellipse(1080,y22,50,200);

  //random downward movement
  y23 = y23 + random(0, speedY23);
  //1st row orange circle between green and blue ellipses
  stroke('white');
  strokeWeight(2);
  circle(160,y23,30,30);

  //random downward movement
  y24 = y24 + random(0, speedY24);
  //1st row orange circle between green and blue ellipses
  stroke('white');
  strokeWeight(2);
  ellipse(300,y24,30,250);

}

//if mouse is pressed all the shapes will start to move
function mousePressed() {
  loop();
}

//if mouse is released all the moving shapes will stop
function mouseReleased() {
  noLoop();
}
