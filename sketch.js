var dog,sadDog,happyDog;
var foodAdd,foodFeed;
var foodObj;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  feed = createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food ");
  addFood.position(800,95);
  addFood.mousepressed(addFoods);
}

function draw() {
  background(46,139,87);
  dog.display();
  
  drawSprites();
}

//function to read food Stock
function getFoodStock(){
  var foodStockRef = database.ref('foodFeed');
  foodStockRef.on("value",(data)=>{
   foodStock = data.val();
  })
}

//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog)  ;
  if(foodObj.getFoodStock()<=0){
      foodObj.updateFoodStock(foodObj.getFoodStock()+0)
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })

}