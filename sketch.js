var bullet,thickness,wall;
var bulletSpeed,bulletWeight;

function setup() {
  createCanvas(1000,400);
  bulletSpeed=random(30,52);
  bulletWeight=random(223,321);
  thickness=random(22,83);

  bullet = createSprite(150,200,25,15);
  bullet.shapeColor = "white";
  bullet.velocityX = bulletSpeed;

  wall = createSprite(900,200,thickness,height/2);
  wall.shapeColor  = "grey"
}

function draw() {
  background("black");
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * bulletWeight * bulletSpeed * bulletSpeed/(thickness*thickness*thickness);
    if(damage>10){
       wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
         wall.shapeColor = color(0,255,0);
    }
  }
  
  drawSprites();
}
function hasCollided(lbullet,lwall){
  if(lwall.x-lbullet.x<(lbullet.width+lwall.width)/2){
     return true;
  }
  return false;
}