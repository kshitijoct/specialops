var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var position;
var clan1Count,clan2Count
var database;
var gun,bullet;
var heart;
var form, player, game;
var opponent;
var armyLeft,army2
var armies
var armyS;
/*var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}*/
function preload(){
  heartImage=loadImage("images/heart.png");
  armyL=loadAnimation("images/armyL1.png","images/armyL2.png","images/armyL3.png")
  armyStand = loadAnimation("images/armyL1.png")
}
function setup(){
  canvas = createCanvas(600,600)
  database = firebase.database();
  bulletsGroup= new Group();
  game = new Game();
  game.getState();
  game.start();
}
function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}

function spawnbullets(){
if(keyIsDown==="space"){
  bullet = createSprite(player.playerX,player.playerY,10,10);
  bullet.velocityX = 5;
bulletsGroup.add(bullet);
}

}
