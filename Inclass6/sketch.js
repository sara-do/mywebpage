let xposList = [100,500,700,900,1000];
let yposList = [400,300,500,200,100];
let yspeedList = [13,12,10,6,8];
let xspeedList = [2,3,1,5,4];

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
    background(10,65,120);

    for(let i = 0; i < xposList.length ; i = i + 1){

      circle(xposList[i],yposList[i],50);

      yposList[i] = yposList[i] + yspeedList[i];

      if(yposList[i] > height){
        yspeedList[i] = -yspeedList[i];
      }

      if(yposList[i] < 0){
        yspeedList[i] = - yspeedList[i];
      }

   for(let i = 0; i < yposList.length ; i = i + 1){
     xposList[i] = xposList[i] + xspeedList[i];

     if(xposList[i] > width){
       xspeedList[i] = -xspeedList[i];
     }

     if(xposList[i] < 0){
       xspeedList[i] = - xspeedList[i];
     }

   }

    }

}
