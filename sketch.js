
var trex ,trex_running;
var edges;
var ground,groundimage;

function preload(){
  
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    groundimage=loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,20,50)
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground=createSprite(300,180,600,15);
  ground.addImage(groundimage);

  edges = createEdgeSprites();
}

function draw(){
  background("white")

  if(keyDown("space")){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.5;
  ground.velocityX = -3;

  if(ground.x <0){
    ground.x =300;
  }
  console.log(ground.x);
  trex.collide(ground);
  drawSprites();
}
