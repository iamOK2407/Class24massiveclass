const Engine = Matter.Engine; //Universe
const World = Matter.World;  //Earth
const Bodies = Matter.Bodies;  //Physical Bodies
const Render = Matter.Render; //optional physics engine viewer/renderer

var myEngine, myWorld; //our engine and world objects for this file
var ground, ball; //physical bodies
var box1,box2;
var wood1,wood2,wood3,wood4;
var box3,box4,box5;
var pig1,pig2;
var ok1;

function setup()
{
    createCanvas(1200,500);

    //initialising myEngine and myWorld objects
    myEngine=Engine.create();
    myWorld = myEngine.world;

    //declaring options for the body in JSON format
    var groundOptions={
        isStatic:true        
    }
/* optional -- to  render/view the physics engine bodies
    var render = Render.create({
	  element: document.body,
	  engine: myEngine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	//Engine.run(myEngine);
	Render.run(render); */

    //adding ground to the Physics Engine
    ground = Bodies.rectangle(600,480,1800,30,groundOptions);
    World.add(myWorld, ground);
    console.log(ground)

 box1=new Box(700,420,70,70);
 box2=new Box(920,420,70,70);
 box3=new Box(700,340,70,70);
 box4=new Box(920,340,70,70);
 box5=new Box(810,260,70,70);

wood1=new Log(810,360,300,PI/2)
wood2=new Log(810,280,300,PI/2)
wood3=new Log(760,220,150,PI/7)
wood4=new Log(870,220,150,-PI/7)

pig1=new Pig(810,450);
pig2=new Pig(810,320);

ok1=new Crird(100,100);



}

function draw()
{
    background(0);

    Engine.update(myEngine); //refreshing myEngine in every frame-like drawSprites()
    //displaying the box using p5 rect Shape
    rectMode(CENTER);
    fill("brown")
    rect(ground.position.x, ground.position.y, 1800,30)

     
box1.displayer();
box2.displayer();

pig1.displayer();

wood1.displayer();

pig2.displayer();

box3.displayer();
box4.displayer();

wood2.displayer();

box5.displayer();

wood3.displayer();
wood4.displayer();

ok1.displayer();

    
}
