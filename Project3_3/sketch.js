  let yoff = 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,0,0);

  let xoff = 0.5;

// colour fill for the biggest shape
    fill(20,50,150);
//forming the biggest shape
    beginShape();

    for (let x = 0; x <= width; x += 5) {

      let y = map(noise(xoff,yoff), 0, 2, 300, 380);

      vertex(x, y);

// x dimension increase for noise
      xoff += 0.1;
    }

// y dimension increase for noise
    yoff += 0.02;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

    // colour fill for the first small shape
      fill(20,50,100);
    //forming the big shape
      beginShape();

      for (let x = 0; x <= width; x += 15) {

        let y = map(noise(xoff,yoff), 0, 2, 380, 300);

        vertex(x, y);

    // x dimension increase for noise
        xoff += 0.1;
      }

    // y dimension increase for noise
      yoff += 0.02;
      vertex(width, height);
      vertex(0, height);
      endShape(CLOSE);

// colour fill for the second small shape
  fill(20,50,90);
//forming the big shape
  beginShape();

  for (let x = 0; x <= width; x += 10) {

    let y = map(noise(xoff,yoff), 0, 2, 380, 350);

    vertex(x, y);

// x dimension increase for noise
    xoff += 0.1;
  }

// y dimension increase for noise
  yoff += 0.02;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  //colour fill for the third small shape
    fill(20,30,100);
  //forming the smallest shape
    beginShape();

    for (let x = 0; x <= width; x += 15) {

      let y = map(noise(xoff,yoff), 0, 2, 480, 350);

      vertex(x, y);

  // x dimension increase for noise
      xoff += 0.1;
    }

  // y dimension increase for noise
    yoff += 0.02;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

//colour fill for the smallest shape
  fill(20,30,100);
//forming the smallest shape
  beginShape();

  for (let x = 0; x <= width; x += 15) {

    let y = map(noise(xoff,yoff), 0, 2, 500, 350);

    vertex(x, y);

// x dimension increase for noise
    xoff += 0.1;
  }

// y dimension increase for noise
  yoff += 0.02;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

//biggest circle
fill(20,30,70);
circle(200,200,170,170);

//middle size circle
fill(20,35,60);
circle(200,200,150,150);

//smallest circle
fill(20,30,40);
circle(200,200,130,130);

}
