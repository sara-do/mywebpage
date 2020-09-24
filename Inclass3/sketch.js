
function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
background(150,200,150);

}

function draw() {
  //Put draw code here
  for (let d = 0; d < width; d = d + 35){
    for (let c = 0; c < height; c = c + 35){

    if(c == d){

    }
    else{
      circle(c,d,40);
      fill(50,100,50);
    }
  }
}

   for(let d = 0; d < height; d = d + 10){
     let xlen = random(0,width/2);
     strokeWeight (3);
     stroke(150,100,70);
     line(2000,d,xlen,d);
   }
}
