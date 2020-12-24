
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree,mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var boy,boyImage,stone;
var throwing;
function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	myEngine = Engine.create();
  myWorld = myEngine.world;
  boy = createSprite(200,630,150,50);
  boy.addImage("small",boyImage);
  boy.scale = 0.1;
    //Create the Bodies Here.
    ground = new Ground(400,height,800,20);
    tree = new Tree(650,500);
    stone = new Stone(140,560,5);
    mango1 = new Mango(625,350,5);
    mango2 = new Mango(675,355,5);
    mango3 = new Mango(600,400,5);
    mango4 = new Mango(600,450,5);
    mango5 = new Mango(700,400,5);
    mango6 = new Mango(655,450,5);
    mango7 = new Mango(710,460,5);
    throwing = new ThrowingStone(stone.body,{x:140,y:560})
	Engine.run(myEngine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  text(mouseX + ","+mouseY,mouseX,mouseY);
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
  throwing.fly();

}

function detectCollision(lstone,lmango){
  mangoBodyPosition =lmango.body.position;
  stoneBodyPosition =lstone.body.position;
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance <= lmango.radius+lstone.radius){
    Matter.Body.setStatic(lmango.body,false);

  }

}

function keyPressed(){
  Matter.Body.setPosition(stone.body,{x:140,y:560});
  if(keyCode === 32){
    Throw.attach(boy);
  }
}

