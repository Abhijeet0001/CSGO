var car , wall
var weight,speed , deformation =0
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  car = createSprite(50,200,35,35)
  car.shapeColor="black"
  wall = createSprite(1500,200,60,400)
  wall.shapeColor="red"
  car.velocityX = speed
  
}

function draw() {
  background(255,255,255);  
//  car.collide(wall)
  if (wall.x-car.x <=(car.width+wall.width)/2){
    car.collide(wall)
    car.velocityX = 0
     deformation=0.5 * weight * speed * speed/22500
     console.log(deformation)
  
    if(deformation>180){
      car.shapeColor= "green";
      car.x = wall.x-wall.width/2
    }
    else if(deformation<180 && deformation>100){
      car.shapeColor="yellow"
      car.x = wall.x-wall.width/2
    }
   else if(deformation<100){
      car.shapeColor="red"
      car.x = wall.x-wall.width/2
    }
  else{
    car.shapeColor = "black"
    car.x = wall.x-wall.width/2
  }
}
  drawSprites();
}