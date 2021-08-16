var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 30, 30)
}

function draw() 
{
  background(30);
if(keyIsDown(LEFT_ARROW)){
  background ("RED")
}
if(keyIsDown(DOWN_ARROW)){
  background ("green")
}
if(keyIsDown(UP_ARROW)){
 background ("blue")
}
if(keyIsDown(RIGHT_ARROW)){
  background("black")
}
  drawSprites()

}

