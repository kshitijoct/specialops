/*class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car1.addImage("car1",car1_img);
    car2 = createSprite(300,200);
    car2.addImage("car2",car2_img);
    car3 = createSprite(500,200);
    car3.addImage("car3",car3_img);
    car4 = createSprite(700,200);
    car4.addImage("car4",car4_img);
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 200;
      var y;
     
      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
         fill("blue");
         ellipse(x,y,60,60)
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;

        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}*/
class Game{
constructor(){

}
getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });


  }
  async start(){
    if(gameState === 0){
      player = new Player();
      
    
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
        player.getClan1Count();
        player.getClan2Count();
      }
      form = new Form()
      form.display();
    }
    opponent = createSprite(200,200,10,10);
     heart  = createSprite(10,10,20,20);
     armyLeft= createSprite(100,100,10,10);
     armyLeft.addAnimation("armyStand",armyStand)
     armyLeft.addAnimation("armyL",armyL)
     army2= createSprite(110,100,10,10);
    
     armies= [armyLeft,army2]
}
play(){
  form.hide()
 
  Player.getPlayerInfo()
  if(allPlayers!==undefined){
    heart.addImage(heartImage);
    heart.scale = 0.2;
    var index = 0;
    var x = 100;
    var y = 100;
    for(var plr in allPlayers){
      index = index+1;
     x = player.playerX;
     y = player.playerY;
     armies[index-1].x = x
     armies[index-1].y = y
      if(index === "player"+player.index){
        
    }
    if(bulletsGroup.isTouching (opponent)){
      opponent.life = -1;

    }
    for(var i=0;i<11;i++){
    }
    }
    
  }
  if(keyIsDown(UP_ARROW)&&player.index!==null){
 
   player.playerY-= 2;
   player.update()
  
 } 
 if(keyIsDown(DOWN_ARROW)&&player.index!==null){
 
  player.playerY+= 2;
  player.update()
 
} 
if(keyIsDown(LEFT_ARROW)&&player.index!==null){
  armyLeft.changeAnimation("armyL",armyL)
  player.playerX-= 2;
  player.update()
 
} 
if(keyIsDown(RIGHT_ARROW)&&player.index!==null){
 
  player.playerX+= 2;
  player.update()
 
} 
drawSprites()
   }
}
















