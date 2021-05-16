var canvas,gameState=0,playerCount;
var database;
var form,player,game;

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
 
}

function draw(){
  background("white");
  game = new Game();
  game.getState();
  game.start();
    
    drawSprites();
  
}

