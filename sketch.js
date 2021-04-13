
var monkey , monkeyrunning
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bg, backgroundimg
var PLAY 
var END
var gameState = PLAY
var survivalTime = 0

function preload(){
  
  
  monkeyrunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundimg = loadImage("junglebg.jpeg");
 
  
}



function setup() {
  createCanvas(600, 500);
  
  bg = createSprite(300,180,300,300);
  bg.addImage(backgroundimg);
  bg.scale = 2;
  bg.x = bg.width/1.1;
  bg.velocityX = -5;
  
  ground = createSprite(400,450,900,20);
  ground.x = ground.width/2;
  ground.velocityX = -5;
  ground.visible = false;
  
  monkey = createSprite(80,380,20,20);
  monkey.addAnimation("running",monkeyrunning);
  monkey.scale = 0.2;
  
  bananasGroup = createGroup();
  obstacleGroup = createGroup();
  
  survivalTime = 0;
  
}


function draw() {
 background(180)
  
 if (bg.x < 190) {
  bg.x = bg.width/1;
   }
  
  if (gameState === PLAY) {
    spawnBananas();
    spawnObstacles();
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
      
    survivalTime = Math.ceil(frameCount/frameRate())
    
    if(keyDown("space")&& monkey.y >= -120) {
        monkey.velocityY = -20;
    }
    monkey.velocityY = monkey.velocityY + 1 
  }
  
    monkey.collide(ground);
  
  drawSprites();
  
  fill("white");
  textSize(20);
  text("Survival Time: "+survivalTime,420,30);
  
}

function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(220,300));
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -3;
    
    
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = banana.depth;
    banana.depth = banana.depth + 1;
    
    //adding the bananas to the group
   bananasGroup.add(banana);
    }
}

function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    obstacles = createSprite(600,410,40,10);
    obstacles.x = Math.round(random(500,550));
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.2;
    obstacles.velocityX = -4;
    
     //assign lifetime to the variable
    obstacles.lifetime = 200;
    
    //adjust the depth
    obstacles.depth = obstacles.depth;
    obstacles.depth = obstacles.depth + 1;
    
    //adding the obstacles to the group
    obstacleGroup.add(obstacles);
    }
}



