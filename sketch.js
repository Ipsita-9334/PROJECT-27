
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var roof, rope;
var bob, bobObject;
var backgroundImg,platform;
var constrainedRoof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(600,height,1200,20);
	

	bobObject1 = new Bob(70,100);
	bobObject2 = new Bob(80,100);
	bobObject3 = new Bob(90,100);
	bobObject4 = new Bob(90,100);
	bobObject5 = new Bob(90,100);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  constrainedRoof.display();
  
  drawSprites();
 
}



