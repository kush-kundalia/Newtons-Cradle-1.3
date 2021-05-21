
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
//var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	platform=new platform(400,250,230,20);
	bob1 = new ball(320,575,40)
	bob2 = new ball(360,575,40)
	bob3 = new ball(400,575,40)
	bob4 = new ball(440,575,40)
	bob5 = new ball(480,575,40);

	
	rope1=new string(bob1.body,platform.body,-80, 0)
	rope2=new string(bob2.body,platform.body,-40, 0)
	rope3=new string(bob3.body,platform.body, 0, 0)
	rope4=new string(bob4.body,platform.body, 40, 0)
	rope5=new string(bob5.body,platform.body, 80, 0)


	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  textSize(40)
  fill("black")
  text("NEWTON'S CRADLE",230,50);

  textSize(20);
  textFont("Orbitron")
  fill("black");
  text("press space key to initiate the ball and see the satisfying physics",10,80);
  platform.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
// bob1.x = MouseX;
}

function keyPressed(){
	if(keyCode = "32"){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-75,y:-67.5});
	}
}






