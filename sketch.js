var cat,garden,mouse;
var catImage,gardenImage,mouseImage;

function preload() {
    //load the images here
    catImage = loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png");
    gardenImage = loadImage("garden.png");
    mouseImage = loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png")
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(390,380,20,20)
cat.addAnimation("catImage",cat);

garden = createSprite(200,200,20,20)
garden.addImage("gardenImage",garden);
    
mouse = createSprite(250,380,20,20)
mouse.addAnimation("mouseImage",mouse);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown(Left_Arrow)){
    cat.velocityX=-4;
    cat.changeAnimation("cat3.png");
}

}
