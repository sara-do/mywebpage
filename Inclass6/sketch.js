let img1;
let img2;
let img3;

function preload(){
  img1 = loadImage('https://i.imgur.com/d6hfkYD.jpg');
  img2 = loadImage('https://i.imgur.com/d6hfkYD.jpg');
  img3 = loadImage('https://i.imgur.com/d6hfkYD.jpg');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(20,100,150);

}

function draw() {
  img1.loadPixels();

  image(img1,0,0);

  for(let x = 0; x < img1.width; x = x + 1){
   for(let y = 0; y < img1.height; y = y + 1){
      let i = (x + y*img1.width)*4;

      let pixr = img1.pixels[i+0];
      let pixg = img1.pixels[i+1];
      let pixb = img1.pixels[i+2];
      let pixa = img1.pixels[i+3];

      img1.pixels[i+1] = 0;

   }
 }

img1.updatePixels();

 img2.loadPixels();

 image(img2,420,0);

 for(let x = 0; x < img2.width; x = x + 10){
  for(let y = 0; y < img2.height; y = y + 10){
     let i = (x + y*img2.width)*4;

     let pixr = img2.pixels[i+0];
     let pixg = img2.pixels[i+1];
     let pixb = img2.pixels[i+2];
     let pixa = img2.pixels[i+3];


      circle(x+425,y,10);
      fill(pixr,pixg,pixb,pixa);

 }
}

img2.updatePixels();


  img3.loadPixels();

  image(img3,840,0);

  for(let x = 0; x < img3.width/2; x = x + 1 ){
   for(let y = 0; y < img3.height; y = y + 1){
      let i = (x + y*img3.width)*4;

      let pixr = img3.pixels[i+0];
      let pixg = img3.pixels[i+1];
      let pixb = img3.pixels[i+2];
      let pixa = img3.pixels[i+3];

       img3.pixels[i+2] = 0;

 }
}

img3.updatePixels();
}
