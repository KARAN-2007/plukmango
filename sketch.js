
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bgi,boy,BOY
var ground;
var tree,treeI
var stone
var sling
var m1,m2
function preload()
{
	bgi=loadImage("bgi.jpg")
	BOY=loadImage("boy.png")
	treeI=loadImage("tree.png")
}

function setup() {
	createCanvas(1137,700 );

	tree=createSprite(width-300,height-340,50,50)
	tree.addImage(treeI)
	tree.scale=0.535


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	ground=new Ground(width/2,height,width,20)
	boy=createSprite(200,height-95,50,50)
	boy.addImage(BOY)
	boy.scale=0.135
	stone=new Stone(130,height-180,30,30)
	sling=new Sling(stone.body,{x:130,y:520})
	m1=new mangoe(width-300,height-440,30,30)
	m2=new mangoe(width-300,height-500,30,30)

	
	Engine.run(engine);

    
}


function draw() {
  
  background(bgi);
  
  drawSprites(); 
  ground.display();
  stone.display();
  sling.display();
  m1.display();
  m2.display();
  detectCollision(stone,m1)
  detectCollision(stone,m2)


}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	sling.fly()
}
async function keyPressed(){
	if(keyCode === 32 ){
	    Matter.Body.setPosition(stone.body,{x:130,y:height-180})
		await sling.attach(stone.body)
	}
}
function detectCollision(object1,object2){
	
	object1BodyPosition=object1.body.position;
	object2BodyPosition=object2.body.position;
    var distance=dist(object1BodyPosition.x,object1BodyPosition.y,object2BodyPosition.x,object1BodyPosition.y)
    if(distance<=object1.r+object2.r){
		Matter.Body.setStatic(object2.body,false)
	}
	

}
