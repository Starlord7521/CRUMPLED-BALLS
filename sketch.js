
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	sphereObject = new Ball(100, 10, 40);
	rect1 = new Box (400, 650, 200, 20);
	rect2 = new Box (320, 590, 20, 100);
	rect3 = new Box (480, 590, 20, 100);
	ground = new Ground(600,height,1200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  rect1.display();
  rect2.display();
  rect3.display();
  sphereObject.display();
  ground.display();
 
}
function applyforce(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyforce(sphereObject.body, sphereObject.body.position,{x:85, y:-85})	
	}
}


