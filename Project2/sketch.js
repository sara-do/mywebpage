let img1;
let img2;
let img3;
let img4;
let partIamge;

let xpos = 670;

let x = 700;

let flowersize = 400;


function preload(){
  img1 = loadImage('https://i.imgur.com/TrfyL0K.png');
  img2= loadImage('https://i.imgur.com/fVali0r.png');
  img3 = loadImage('https://i.imgur.com/wRwDBuh.png');
  img4 = loadImage('https://i.imgur.com/ANmY7aY.png');


}


function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);

background(150,200,150);
fill(180,200,100);
rect(width/2,0,windowWidth);

image(img1,250,120);

//flower random size
flowersize = random(100,600);

}

function draw() {
//img4
  image(img4,900,500,flowersize);

  //img3 rotate
  angleMode(DEGREES);
  imageMode(CENTER);
  push();

  rotate(x);
  image(img3,x,400);
  pop();

  x = x + 12;


  // mouse pressed -> show part images of img1
  if (mouseIsPressed){
    //repeated line on the lfet of the screen
    for(let i = 0; i < height; i = i+2){
      let xlen = random(0,width/2);
      line(0,i,xlen/2,i);
    }

    let partImage = get(300,290,100,100);
    image(partImage,0,400);

    let partImage1 = get(250,200,100,100);
    image(partImage1,0,0);

    let partImage2 = get(400,250,100,100);
    image(partImage2,100,100);

    let partImage3 = get(350,400,100,100);
    image(partImage3,400,0);

    let partImage4 = get(400,400,100,100);
    image(partImage4,200,400);

    let partImage5 = get(420,300,100,100);
    image(partImage5,94,280);

    let partImage6 = get(450,320,50,50);
    image(partImage6,300,600);

    let partImage7 = get(470,200,50,50);
    image(partImage7,100,620);

    let partImage8 = get(407,300,50,50);
    image(partImage8,300,20);

  }

  //key is pressed -> img2 moves to right with random tint
  image(img2,xpos,200);

  if(keyIsPressed){
    tint(random(0,300),random(0,300),random(0,300));
    xpos = xpos+40;
  }

}
