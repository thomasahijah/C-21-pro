
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var ball
var ground,leftwall,rightwall

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	balloptions = {
 restitution:0.03,
 friction:0,
 density:0.2
	}
	ball = Bodies.circle(200,100,20,balloptions)
	World.add(world,ball)

	ground=new Ground(750,680,1500,20)
	leftwall=new Ground(1100,595,10,150)
	rightwall=new Ground(1300,595,10,150)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
fill("red")
  ellipse(ball.position.x,ball.position.y,40,40)
ground.show()
leftwall.show()
rightwall.show()
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball,{x:0,y:0},{x:12,y:-20})

}

}


