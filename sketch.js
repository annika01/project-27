
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;



function setup() {
	createCanvas(800, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball1= new Ball(400,450)
ball2= new Ball(350,450)
ball3= new Ball(300,450)
ball4= new Ball(450,450)
ball5= new Ball(500,450)
roof= new Roof(400,200, 250, 25)
rope1= new Rope(ball1.body,roof.body,0,0)
rope2= new Rope(ball2.body,roof.body,-50,0)
rope3= new Rope(ball3.body,roof.body,-100,0)
rope4= new Rope(ball4.body,roof.body,50,0)
rope5= new Rope(ball5.body,roof.body,100,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)

  background(0);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof.display();
  drawSprites();
 if(keyIsDown(UP_ARROW)){
	 Matter.Body.applyForce(ball3.body, ball3.body.position,{x:-4, y:0})
 }
}



