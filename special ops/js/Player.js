/*class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}*/

class Player{
constructor(){
  this.index = null;
    
    this.name = null;
    this.playerX = 100;
    this.playerY = 100;
    this.lives = 3;
    this.bulletCount = 50;
}
getCount(){
  var playerCountRef = database.ref('playerCount');
  playerCountRef.on("value",(data)=>{
    playerCount = data.val();
  })
}

updateCount(count){
  database.ref('/').update({
    playerCount: count
  });
}
getClan1Count(){
  var clan1CountRef = database.ref('clan1Count');
  clan1CountRef.on("value",(data)=>{
    clan1Count = data.val();
  })
}
getClan2Count(){
  var clan2CountRef = database.ref('clan2Count');
  clan2CountRef.on("value",(data)=>{
    clan2Count = data.val();
  })
}
  updateClan1Count(count){
    database.ref('/').update({
      clan1Count: count
    });
  }
  updateClan2Count(count){
    database.ref('/').update({
      clan2Count: count
    });
  }

update(){
  var playerIndex = "players/player" + this.index;
  database.ref(playerIndex).set({
    name:this.name,
    playerX:this.playerX,
    playerY:this.playerY,
    lives:this.lives,
    bullet:this.bulletCount
  });
}
static getPlayerInfo(){
  var playerInfoRef = database.ref('players');
  playerInfoRef.on("value",(data)=>{
    allPlayers = data.val();
  })
}

}











