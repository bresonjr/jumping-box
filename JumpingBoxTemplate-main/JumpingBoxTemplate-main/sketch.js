var canvas;
var music;
var block;
var surface1,surface2,surface3,surface4;
var wall1,wall2,wall3;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(100,590,200,20);
surface1.shapeColor="green";

surface2=createSprite(300,590,200,20);
surface2.shapeColor="orange";

surface3=createSprite(500,590,200,20);
surface3.shapeColor="yellow";

surface4=createSprite(700,590,200,20);
surface4.shapeColor="red";

    //create box sprite and give velocity
box=createSprite(200,200);
box.velocityY=6;
box.velocityX=-6;
box.scale=0.3;

wall1=createSprite(800,200,10,800);
wall2=createSprite(1,200,5,800);
wall3=createSprite(200,1,1200,5)
}

function draw() {
   
    background(rgb(169,169,169));
   
    //create edgeSprite
    
    box.bounceOff(surface1);
    box.bounceOff(surface3);
    box.bounceOff(surface2);
    box.bounceOff(surface4);
    box.bounceOff(wall1);
    box.bounceOff(wall2);
    box.bounceOff(wall3);
    //add condition to check if box touching surface and make it box
if(box.isTouching(surface2)){
box.shapeColor="green";
}

    drawSprites();
}
