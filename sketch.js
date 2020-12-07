var fixedRect, movingRect;

function setup() {
  createCanvas(1200,400);

  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "blue";
  fixedRect.debug=true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "yellow";
  movingRect.debug=true;
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2  &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2  &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "yellow";
  }



  drawSprites();
}