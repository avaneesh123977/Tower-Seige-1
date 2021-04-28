const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var rope;
var gameState = "onSling";

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(800, 600, 200, 20);
    platform2 = new Ground(1000, 350, 200, 20);

    box1 = new Box(820,50,70,70);
    box2 = new Box(820,50,70,70);
    box3 = new Box(820,50,70,70);
    box4 = new Box(820,50,70,70);
    box5 = new Box(820,50,70,70);

    block = new Polygon(300,200,50);
    rope = new Rope(block.body,{x:300, y:50});
}

function draw(){
 
    background("cyan");
    
    
    Engine.update(engine);
    ground.display();
    platform1.display();
    platform2.display();
    fill("darkblue")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    rope.display();
    block.display();

        
}


function mouseDragged(){
    if (gameState === "onSling"){
        Matter.Body.setPosition(block.body, {x: mouseX , y: mouseY});
    }
    
}


function mouseReleased(){
    rope.fly();
    gameState = "launched"
}

function keyPressed(){
    if(keyCode === 32 && block.body.speed<1){
        gameState = "onSling"
        Matter.Body.setPosition(block.body,{x:300, y:200})
        rope.attach(block.body);
    }
}
