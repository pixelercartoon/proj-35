//Create variables here
var dog, database;
var happyDog,foodS,foodStock;
var dogImage,happyDogImg;
function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  happyDogImg=loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
  console.log(setup)
  console.log(database);
	createCanvas(600,900);
  
  dog=createSprite(400,700,10,10);
  dog.addImage(dogImage);
  dog.scale=0.2;

  foodStock= database.ref('Food');
  foodStock.on("value",readStock);
}

function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    dog.addImage(happyDogImg);
  }
  drawSprites();
  textSize(20);
  fill("white")
  text("Note:Press UP_ARROW Key To Feed Drago Milk",100,100);
  textSize(20);
  fill("white")
  text("Milk Remaining:"+20,250,300);
  //add styles here
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x 
  })
}
function readStock(data){
  foodS=data.val();
}
function showError(){
  console.log("Error in writing to the database");
}
