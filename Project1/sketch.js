let rectsize = 400;

let xpos = 110;
let ypos = 0;

let xpos2 = 400;
let ypos2 = 800;

function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
background(100,150,180);
//random rectangle length size
rectsize = random(100,400);

}

function draw() {
  //purple rectangle next to vertical rectangle loop (random size)
  rect(690,20,60,rectsize);
  fill(100,130,150);
  //grey-ish rectangle next to purple rectangle (random size)
  rect(670,10,40,rectsize);
  fill(100,130,180);

  //small rectangle going down in line
  rect(xpos,ypos,20,10);
  xpos = xpos+2;
  ypos = ypos+2;
  //small rectangle going up in line
  rect(xpos2,ypos2,20,10);
  xpos2 = xpos2 - 2
  ypos2 = ypos2 - 2

  //colour change when mouse is pressed
  if(mouseIsPressed){
    fill(100,120,160);
  }
  else {fill(200,150,180);
  }
  //arc loop
  for (let counter = 0; counter < width; counter = counter + 110){
    arc(counter, counter, 120, 120, PI, TWO_PI);
  }
  //loop for circles under the arc_1
  for (let counter = 65; counter < 180; counter = counter + 30){
    for (let i = 113; i < 170; i = i + 12){
         circle(counter,i,10,90);
  }
  }
  //loop for circles under the arc_2
  for (let counter = 164; counter < 278; counter = counter + 10){
    for (let i = 225; i < 280; i = i + 12){
         circle(counter,i,5,90);
  }
  }
  //loop for ellipses under the arc_3
  for (let counter = 279; counter < 390; counter = counter + 20){
    for (let i = 336; i < 380; i = i + 20){
         ellipse(counter,i,10,15);
  }
  }
  //loop for circles under the arc_3
  for (let counter = 389; counter < 490; counter = counter + 10){
    for (let i = 442; i < 520; i = i + 12){
         circle(counter,i,5,90);
  }
  }
  //loop for rectangles under the arc_3
  for (let counter = 493; counter < 610; counter = counter + 10){
    for (let i = 551; i < 615; i = i + 20){
         rect(counter,i,5,15);
  }
  }
  //loop for circles under the arc_3
  for (let counter = 610; counter < 720; counter = counter + 10){
    for (let i = 665; i < 720; i = i + 12){
         circle(counter,i,5,90);
  }
  }

  //loop for rectangle loop on the right side of screen
  for (let counter = 750; counter < 3000; counter = counter + 20){
    for (let i = 0; i < 720; i = i + 200){
         rect(counter,i,5,180);
  }
  }
  //loop for circle loop on the right side of screen
  for (let counter = 750; counter < 3000; counter = counter + 15){
    for (let i = 190; i < 720; i = i + 200){
         circle(counter,i,5,90);
         fill(200,180,210);
  }
  }
  //loop for lavender color rectangle loop on the right side of screen
  for (let counter = 760; counter < 3000; counter = counter + 20){
    for (let i = 0; i < 720; i = i + 200){
         rect(counter,i,5,180);
         fill(200,160,200);
  }
  }
  //small arc loop
  for (let counter = 0; counter < width; counter = counter + 100){
    arc(counter-180, counter, 50, 50, PI, TWO_PI);
    fill(100,140,180);
  }
  //small arc loop 2
  for (let counter = 0; counter < width; counter = counter + 100){
    arc(counter-150, counter, 50, 50, PI, TWO_PI);
    fill(100,140,180);
  }
  //small rectangle loop under the small arc loop
  for (let counter = 0; counter < width; counter = counter + 100){
    rect(counter-320, counter, 200, 10);
    fill(200,150,180);
  }
  //second small rectangle loop under the small arc loop
  for (let counter = 50; counter < width; counter = counter + 100){
    rect(counter-280, counter+100,280,3);
    fill(100,130,180);
  }
  //second small rectangle loop under the small arc loop
  for (let counter = 100; counter < width; counter = counter + 10){
    circle(counter-310, counter+100, 3, 3);
    fill(100,100,200);
  }
  //second small rectangle loop over the big arc loop
  for (let counter = 0; counter < width; counter = counter + 10){
    circle(counter, counter-100, 3, 3);
    fill(100,100,200);
  }

}
