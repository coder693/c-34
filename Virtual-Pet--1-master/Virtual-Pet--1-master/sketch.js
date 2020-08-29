//Create variables here
var dog,happyDog,database,foodS,foodStock,data,img2,img1;
function preload()
{
  img1=loadImage("images/Dog.png")
  img2=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,40,40);
  dog.addImage("dog",img1)
  dog.scale=0.15;
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW))
  {
    dog.addImage("dog1",img2)
    writeStock(foodS)
    

  }
  drawSprites();
  //print(foodStock);
  textSize(30);
  fill("white")
  text("Food Remaining:"+foodS,150,400)
  text("Press the up arrow to feed the dog",35,100)
  //add styles here

}

function readStock(data)
{
  var foodRef  = database.ref('Food');
  foodRef.on("value",function(data){
     foodS = data.val();
  })


}
function writeStock(x)
{
 if(x<=0)
 {
  x=0

 }
 else{

  x=x-1;
 }
 
  database.ref('/').update({
    Food:x
  })

}



