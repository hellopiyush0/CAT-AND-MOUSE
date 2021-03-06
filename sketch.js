
var g, gimg;

var jerry, jerryimg, jerryimg2, jerryimg3;

var tom, tomimg, tomimg2, tomimg3;

function preload() {

    gimg = loadImage("garden.png");

    jerryimg = loadAnimation("jerryTwo.png");
    jerryimg2 = loadAnimation("jerryThree.png");
    jerryimg3 = loadAnimation("jerryFour.png");

    tomimg = loadAnimation("tomOne.png");
    tomimg2 = loadAnimation("tomTwo.png");
    tomimg3 = loadAnimation("tomFour.png");

}

function setup(){
    createCanvas(1000,600);
    
    g = createSprite(500, 300);
    g.addImage(gimg);

    jerry = createSprite(100, 500);
    jerry.addAnimation("stand", jerryimg);
    jerry.scale = 0.1;

    tom = createSprite(800, 500);
    tom.addAnimation("sit", tomimg);
    tom.scale = 0.1;



}

function draw() {

    background(255);
    
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
      tom.velocityX = 0;
      tom.addAnimation("rest", tomimg3);
      tom.changeAnimation("rest");
      
      jerry.addAnimation("end", jerryimg3);
      jerry.changeAnimation("end");

    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    
    tom.velocityX = -5;
    tom.scale = 0.2
    tom.addAnimation("running", tomimg2);
    tom.changeAnimation("running");
    
    jerry.addAnimation("teasing", jerryimg2);
    jerry.changeAnimation("teasing");

  }

}
