
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(1600, 900);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,200,600,50);

	bob1 = new Bob(600,600,100);
	bob2 = new Bob(700,600,100);
	bob3 = new Bob(800,600,100);
	bob4 = new Bob(900,600,100);
	bob5 = new Bob(1000,600,100);

	rope1 = new Rope(bob1.body,roof.body,-100*2,0);
	rope2 = new Rope(bob2.body,roof.body,-100,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,100,0);
	rope5 = new Rope(bob5.body,roof.body,100*2,0);
	roof.shapeColor = "yellow";

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(100);
	
	roof.display();
  	bob1.display();
  	bob2.display();
  	bob3.display();
  	bob4.display();
  	bob5.display();
  	rope1.display();
  	rope2.display();
  	rope3.display();
  	rope4.display();
	rope5.display();

	roof.body.shapeColor = "blue";
 
}