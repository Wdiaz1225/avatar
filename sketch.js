let micVar;
let mic;
let circleX = 120;
let circleY = 100;

function setup() {
  createCanvas(400, 400);
  background(50);
  angleMode(DEGREES);

  circleY = 100;

  circleX = 120;


  mic = new p5.AudioIn();
  mic.start();

}

//test

function draw(){
  background(50);


  drawSpikes();

  drawBody();

  drawMouth();

  movingMouth();

  drawEyes();

  drawSingleSpike();
}

function mousePressed(){

  circleX = circleX + 50;
  circleY = circleY + 50;

}

function mouseReleased(){

  circleX = circleX - 50;
  circleY = circleY - 50;

}


function drawEyes(){
  //eyes
  fill(250);
  noStroke();
  circle(width*.6,width*.4,circleX);
  circle(width*.78,width*.42,circleY);

  //pupils
  fill(0);
ellipse(width*.61,width*.4,width*.04,width*.09);
  ellipse(width*.76,width*.42,width*.03,width*.08);
}

function drawSpikes(){
  //spikes
  stroke(0)
  strokeWeight(4)
  fill(150,20,20);

  if (mouseX > 150){
    fill(0,0,200);
  }

  triangle(width*.35,height*.23, width*.5,height*.04,width*.65, height*.23);
  triangle(width*.2,height*.45, width*.15,height*.2,width*.3, height*.23);
  triangle(width*.2,height*.65, width*.05,height*.55,width*.2, height*.45);

}

function drawMouth(){
  //mouth
  fill(50);
  noStroke()


}
  //mouth
function movingMouth(){
  var vol = mic.getLevel();
  push();
  fill(2);
 ellipse(width*.65,width*.7,width*.5, vol* 870)
  fill(2);
  pop();
}

function drawBody(){
  //body
  strokeWeight(4);
  fill(150,20,20);

  if (mouseX > 150){
    fill(0,0,200);
  }

  circle(width*.5,width*.5,width*.7);

}

function drawSingleSpike(){
  //single spike
  stroke(4)
  noFill()
  //triangle(width*.35,height*.57, width*.2,height*.4);(lines)
  line(width*.2,height*.4,width*.37,height*.35);
  line(width*.2,height*.4,width*.37,height*.5);

}
