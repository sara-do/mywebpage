let y
let y1
let y2
let y3
let y4
let y5
let y6
let y7
let y8
let y9
let y10

let x
let x1
let x2
let x3
let x4
let x5
let x6
let x7
let x8
let x9
let x10
let x11
let x12
let x13
let x14
let x15
let x16

function setup() {
  createCanvas(windowWidth, windowHeight);
    noFill();
    stroke('white')
    strokeWeight(4)
    noLoop();

    y = 10;
    y1 = 50;
    y2 = 70;
    y3 = 110;
    y4 = 140;
    y5 = 150;
    y6 = 250;
    y7 = 320;
    y8 = 430;
    y9 = 470;
    y10 = 510;

    x = 25;
    x1 = 60;
    x2 = 210;
    x3 = 320;
    x4 = 376;
    x5 = 456;
    x6 = 460;
    x7 = 615;
    x8 = 620;
    x9 = 685;
    x10 = 690;
    x11 = 800;
    x12 = 850;
    x13 = 910;
    x14 = 1130;
    x15 = 1195;
    x16 = 1200;

}

function draw() {
  background(0,0,0);

//right direction movement for horizontal rects x=25
  x = x + 5;
    if (x < 0) {
      x = width;
    }

//left direction movement for horizontal rects x=60
  x1 = x1 - 5;
    if(x1 < 0) {
      x1 = width;
    }

//right direction movement for horizontal rects x=210
  x2 = x2 + 5;
    if (x2 < 0) {
      x2 = width;
    }

//left direction movement for horizontal rects x=320
  x3 = x3 - 5;
    if (x3 < 0) {
      x3 = width;
    }

//right direction movement for horizontal rects x=376
  x4 = x4 + 5;
    if (x4 < 0) {
      x4 = width;
    }

//left direction movement for horizontal rects x=456
  x5 = x5 - 5;
    if (x5 < 0) {
      x5 = width;
    }

//right direction movement for horizontal rects x=460
  x6 = x6 + 5;
    if (x6 < 0) {
      x6 = width;
    }

//left direction movement for horizontal rects x=615
  x7 = x7 - 5;
    if (x7 < 0) {
      x7 = width;
    }

//right direction movement for horizontal rects x=620
  x8 = x8 + 5;
    if (x8 < 0) {
      x8 = width;
    }

//left direction movement for horizontal rects x=685
  x9 = x9 - 5;
    if (x9 < 0) {
      x9 = width;
    }

//right direction movement for horizontal rects x=690
  x10 = x10 + 5;
    if (x10 < 0) {
      x10 = width;
    }

//left direction movement for horizontal rects x=800
  x11 = x11 - 5;
    if (x11 < 0) {
      x11 = width;
    }

//right direction movement for horizontal rects x=850
  x12 = x12 + 5;
    if (x12 < 0) {
      x12 = width;
    }

//left direction movement for horizontal rects x=910
  x13 = x13 - 5;
    if (x13 < 0) {
      x13 = width;
    }

//right direction movement for horizontal rects x=1130
  x14 = x14 + 5;
    if (x14 < 0) {
      x14 = width;
    }

//left direction movement for horizontal rects x=1195
 x15 = x15 - 5;
    if (x15 < 0) {
      x15 = width;
    }

//right direction movement for horizontal rects x=1200
 x16 = x16 + 5;
    if (x16 < 0) {
      x16 = width;
    }

//horizontal rectangles
  rect(x,10,60,20);
  rect(x,40,60,20)
  rect(x1,590,250,80);
  rect(x2,10,300,30);
  rect(x2,160,100,50);
  rect(x3,50,190,50);
  rect(x4,400,188,50);
  rect(x4,650,180,20);
  rect(x5,320,53,10);
  rect(x6,340,100,50);
  rect(x7,10,300,50);
  rect(x8,360,170,20);
  rect(x8,390,170,20);
  rect(x8,420,170,20);
  rect(x8,450,170,20);
  rect(x8,480,170,20);
  rect(x9,320,110,30);
  rect(x10,250,100,60);
  rect(x11,430,200,70);
  rect(x12,345,250,75);
  rect(x13,290,284,45);
  rect(x14,430,300,50);
  rect(x14,490,300,50);
  rect(x15,360,350,60);
  rect(x16,10,100,30);

//upward movement for vertical rects  y=10
  y = y - 5;
    if (y < 0) {
      y = height;
    }

//downward movement for vertical rects y=50
  y1 = y1 + 5;
    if (y1 < 0) {
     y1 = height;
    }

//upward movement for vertical rects y=70
  y2 = y2 - 5;
    if (y2 < 0) {
      y2 = height;
    }

//downward movement for vertical rects y=110
  y3 = y3 + 5;
    if (y3 < 0) {
        y3 = height;
      }

//upward movement for vertical rects y=140
  y4 = y4 - 5;
    if (y4 < 0) {
        y4 = height;
      }

//downward movement for vertical rects y=150
  y5 = y5 + 5;
    if (y5 < 0) {
        y5 = height;
      }

//upward movement for vertical rects y=250
  y6 = y6 - 5;
    if (y6 < 0) {
        y6 = height;
     }

//downward movement for vertical rects y=320
  y7 = y7 + 5;
    if (y7 < 0) {
        y7 = height;
    }

//upward movement for vertical rects y=430
  y8 = y8 - 5;
    if (y8 < 0) {
      y8 = height;
    }

//downward movement for vertical rects y=470
  y9 = y9 + 5;
    if (y9 < 0) {
      y9 = height;
    }

//upward movement for vertical rects y=510
  y10 = y10 - 5;
    if (y10 < 0) {
      y10 = height;
    }

//vertical rectangles
  rect(10,y,10,50);
  rect(90,y,45,120);
  rect(140,y,60,300);
  rect(570,y,40,460);
  rect(1200,y1,45,300);
  rect(1250,y1,45,300);
  rect(520,y2,40,200);
  rect(800,y2,45,350);
  rect(860,y2,45,270);
  rect(320,y3,50,200);
  rect(380,y3,70,280);
  rect(460,y3,50,200);
  rect(90,y4,45,100);
  rect(10,y5,40,300);
  rect(60,y5,25,150);
  rect(93,y6,40,55);
  rect(620,y6,60,100);
  rect(320,y7,10,350);
  rect(340,y7,30,140);
  rect(1010,y8,50,400);
  rect(1070,y8,50,440);
  rect(10,y9,40,400);
  rect(340,y9,30,300);
  rect(570,y9,40,300);
  rect(620,y10,60,300);
  rect(690,y10,10,200);
  rect(710,y10,8,180);
  rect(800,y10,30,70);
  rect(840,y10,100,500);
  rect(950,y10,50,170);

//squares
  square(515,10,50);
  square(920,10,270);
  square(210,50,100);
  square(620,70,170);
  square(10,70,75);
  square(515,275,50);
  square(1110,345,80);
  square(215,220,95);
  square(60,325,250);
  square(380,460,180);
  square(730,510,60);
  square(730,580,100);
  square(1130,550,400);

}

function mousePressed() {
  redraw();
}
