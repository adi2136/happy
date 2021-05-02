//declaring the variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground
var survivalTime

function preload(){
  
 //loading the animation for monkey 
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  //loading the image for banana
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 //creating a new group
  FoodGroup= new Group()
  obstacleGroup= new Group()
  
}



function setup() {
  //creatting the canvas
  createCanvas(670, 400);
  score=0
  survivalTime=0
  
  ground=createSprite(0,400,1500,10)
  //creating the monkey
   monkey=createSprite(90,370,10,10)
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1
  
  
  

  }
function draw() {
  //giving the color to the background
  background("green")
  //giving the condition if we press the space button the the monkey will jump
  if(keyDown("space")&&monkey.y >= 350){
    monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground)
  
  
  ground.velocityX = -4 
 ground.x = ground.width/2;
    
 if(World.frameCount%200===0){
    fruits()
 }
  
  if(World.frameCount%300===0){
    stones()
 }
  
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+1
      }
  
 
   
 
 drawSprites()
  fill("white") 
  //display the score
  text("Score: "+ score, 500,50);
  
  fill("black")
  survivalTime=Math.round(frameCount/frameRate());
  textSize(20);
  //display the survival time
  text("Survival Time: "+ survivalTime,310,50)
  
}

function fruits(){
  banana=createSprite(670,Math.round(random(170,230)),10,10)
  banana.addImage(bananaImage)
  //giving the size to the banana
  banana.scale=0.1
  //giving the speed to the banana
  banana.velocityX=-10
  FoodGroup.add(banana)
}

function stones(){
  obstacle=createSprite(670,380,10,10)
  obstacle.addImage(obstaceImage)
  //giving the speed to the obstacle
  obstacle.velocityX=-10
  //giving the size to obstacle
  obstacle.scale=0.2
  obstacleGroup.add(obstacle)
}







