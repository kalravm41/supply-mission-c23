
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Render = Matter.Render;
var world, helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;
var log1sprite,log1,log2,log3,log2sprite,log2sprite;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	background("black");
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(400, 680, 800,10);
	groundSprite.shapeColor=color("green");

	log1sprite = createSprite(400,670,150,10);
	log1sprite.shapeColor = color("red");

	log2sprite = createSprite(320,600,10,150);
	log2sprite.shapeColor = color("red");

	log3sprite = createSprite(480,600,10,150);
	log3sprite.shapeColor = color("red");






	// box1 = new Box(200,680,100,20);
	// box2 = new Box(180,680,20,100);
	 //box3 = new Box(220,680,20,100);



	engine = Engine.create();
	world = engine.world;

	var ground_options = {
		isStatic : true
	}
	var log1_options = {
		isStatic:true
	}




	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(400, 680, 800, 10 , ground_options );
	log1 = Bodies.rectangle(200, 200, 80, 10, log1_options);
	log2 = Bodies.rectangle(200, 200, 80, 10, log1_options);
	log3 = Bodies.rectangle(200, 200, 80, 10, log1_options);
	World.add(world,log1);
	World.add(world,log2);
	World.add(world,log3);
	 World.add(world, ground);
	 World.add(world,packageBody);

	Engine.run(engine);
 // log1.shapeColor = color("red")
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 // box1.display();
 // box2.display();
 // box3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



