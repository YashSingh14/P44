var PLAY = 1;
var END = 0;
var gameState = PLAY;

var mario, mario_running, mario_collided;
var ground, invisibleGround, groundImage;

var score=0;

var gameOver, restart;

localStorage["HighestScore"] = 0;

function preload(){
  mario_running =   loadAnimation("Mario1.png","Mario2.png","Mario3.png","Mario4.png","Mario5.png","Mario6.png","Mario7.png","Mario8.png");
  mario_collided = loadAnimation("Mario1.png");
  
  groundImage = loadImage("Mario_platform.png");
  
}

function setup() {
  createCanvas(600, 200);
  
  mario = createSprite(50,180,20,50);
  
  mario.addAnimation("running", mario_running);
  mario.addAnimation("collided",mario_collided);
  mario.scale = 0.8;
  
  ground = createSprite(200,215,600,20);
  ground.addImage("ground",groundImage);
  ground.x = 350;
  ground.velocityX = -(6 + 3*score/100);
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
  score = 0;
}

function draw() {
  //trex.debug = true;
  background("white");
  text("Score: "+ score, 500,50);
  
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -10
  
    if(keyDown("space") && mario.y >= 163) {
      mario.velocityY = -10;
    }
  
    mario.velocityY = mario.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    mario.collide(invisibleGround);

  
  }

  
  
  drawSprites();
}
