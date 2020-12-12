
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Paper
var box

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	Paper=new paper(200,200,20)
	box=createSprite(200,400,200,60)

  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Paper.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.position,{x:85,y:-85} )
	}
}



