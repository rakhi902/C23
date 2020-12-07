var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bottomBox, leftBox, rightBox;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

   // create bottom box

   bottomBoxSprite=createSprite(width/2, height-50, 200,20);
   bottomBoxSprite.shapeColor=color(255,0,0)

   bottomBox = Bodies.rectangle(width/2,500,200,20);
   World.add(world, bottomBox);

   leftBoxSprite=createSprite(width/2-100, height-90, 20,100);
   leftBoxSprite.shapeColor=color(255,0,0)

  
   rightBoxSprite=createSprite(width/2+100, height-90, 20,100);
   rightBoxSprite.shapeColor=color(255,0,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {

		helicopterSprite.x = helicopterSprite.x - 10;
		change = {x: -10, y:0};
		Matter.Body.translate(packageBody,change);

		
	}

	if (keyCode === RIGHT_ARROW) {

		helicopterSprite.x = helicopterSprite.x + 10;
		change = {x: +10, y:0};
		Matter.Body.translate(packageBody,change);

		
	}
	
    if (keyCode === DOWN_ARROW) {

    Matter.Body.setStatic(packageBody, false);

    }
}



