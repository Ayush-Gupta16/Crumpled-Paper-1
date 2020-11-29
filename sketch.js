
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperObject=new Paper(50,500,50);
paperObject.shapeColor=("pink");

groundObject=new Ground(600,600,1200,30);
//groundObject.shapecolor=("red");

dustbinObject= new dustbin(500,600);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 paperObject.display();
 groundObject.display();
 dustbinObject.display();
 
  drawSprites();
 
}
function keyPressed()
{
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
}

}

