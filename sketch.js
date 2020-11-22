var bullet,wall;
var speed,weight;
var thickness,
function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
  wall = createSprite(1500,200,thickness,height/2)
  car = createSprite(50, 200, 50, 50);
  speed = random(20,90)
  weight = random(400,1500)
  bullet.velocityX = speed;
}

function draw() {
  background(0);  

  if(wall.x-bullet.x < (wall.width + bullet.width)/2){
bullet.velocityX = 0 ;
var damage = 0.5 * weight * speed * speed/22509




  drawSprites();
}
}