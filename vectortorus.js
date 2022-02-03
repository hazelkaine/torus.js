let angle =0;

function setup() {
  createCanvas(500, 400, WEBGL);
}

function draw() {
  background(175);
  rotateX(angle);
  rotateY(angle * .3);
  rotateZ(angle * 1.2);
  
  pointLight(0,0,255, -200, -200,0);
  pointLight(255,0,0, 200, 200,0);
  //translate(mouseX -width/1.5, mouseY - height/1.5);
  fill( 200,0,255);
  noStroke();
 ambientMaterial(255);
  torus(100,10,100);
  //torus(200,10,200);
  box (10, 100,10);
  box(100,10,10);
  box(10,10,100);
  
  
  
  
  angle +=.03;
}
