let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
let x4;
let y4;

let x5;
let y5;
let x6;
let y6;
let x7;
let y7;
let x8;
let y8;

let x9;
let y9;
let z9;
let x10;
let y10;
let z10;

let offset;
let offset1;
let offset2;
let offset3;

function setup() {
  createCanvas(windowWidth, windowHeight);
    background(250,200,200);
    stroke(0,20);
    offset = 0;
    offset1 = 10;
    offset2 = 20;
    offset3 = 15;

}

function draw() {

//dark pink colour fill
  fill(250,100,100,90);

//orange line stroke colour
  stroke('ORANGE');

  x1 = noise(offset)*width;
  x2 = noise(offset+140)*width;
  x3 = noise(offset+150)*width;
  x4 = noise(offset+200)*width;

  y1 = noise(offset+80)*height;
  y2 = noise(offset+57)*height;
  y3 = noise(offset+20)*height;
  y4 = noise(offset+250)*height;

  bezier(x1,y1,x2,y2,x3,y3,x4,y4);

  offset = offset + 0.001;

//light pink colour fill
  fill(250,140,140,70);

// red line stroke colour
  stroke('RED');
  x5 = noise(offset1+5)*width;
  x6 = noise(offset1+10)*width;
  x7 = noise(offset1+15)*width;
  x8 = noise(offset1+20)*width;

  y5 = noise(offset1+80)*height;
  y6 = noise(offset1+90)*height;
  y7 = noise(offset1+100)*height;
  y8 = noise(offset1+200)*height;

  bezier(x5,y5,x6,y6,x7,y7,x8,y8);

  offset1 = offset1 + 0.005;

//yellow line stroke colour
  stroke('YELLOW');

  x9 = noise(offset2+200)*width;
  x10 = noise(offset2+200)*width;

  y9 = noise(offset2+500)*width;
  y10 = noise(offset2+500)*width;

  z9 = noise(offset2+50)*width;
  z10 = noise(offset2+40)*width;

  line(x9, y9, z9, x10, y10, z10);

  offset2 = offset2 + 0.005;

//dark pink colour fill
  fill(180,90,140,30);

//bright pink stroke colour
  stroke('#fae');

  x5 = noise(offset3+115)*width;
  x6 = noise(offset3+210)*width;
  x7 = noise(offset3+215)*width;
  x8 = noise(offset3+310)*width;

  y5 = noise(offset3+170)*height;
  y6 = noise(offset3+180)*height;
  y7 = noise(offset3+190)*height;
  y8 = noise(offset3+200)*height;

  bezier(x5,y5,x6,y6,x7,y7,x8,y8);

  offset3 = offset3 + 0.005;

}
