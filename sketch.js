const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World = Matter.World;

var score;
var bg;
var hour;

function setup(){
createCanvas(1000,1000);

engine = Engine.create();
world = engine.world;
Engine.run(engine);

hour = hour();
console.log(hour);

block1 = new block(660,450);
block2 = new block(630,450);
block3 = new block(600,450);
block4 = new block(570,450);
block5 = new block(540,450);

block6 = new block(630,425);
block7 = new block(600,425);
block8 = new block(570,425);

block9 = new block(600,400);

ground0 = new ground(500,600,1000);
ground1 = new ground(600,475,350);

shoot_a_gon = new hexagon(100,500);
rope = new glowrope(shoot_a_gon.body,{x:250, y:400});
}

function draw(){
Engine.update(engine);
//getBackgroundColor();

if(hour > 06 && hour < 18){
background(0,0,100);
var c = map(hour,6,18,100,355)
fill(c,c/1.5,0);
ellipseMode(RADIUS);
ellipse(500,100,25);
}

else{
background(0);
ellipse(500,100,25);
}

block1.display(135, 206, 234);
block2.display(135, 206, 234);
block3.display(135, 206, 234);
block4.display(135, 206, 234);
block5.display(135, 206, 234);

block6.display(73, 222, 189);
block7.display(73, 222, 189);
block8.display(73, 222, 189);

block9.display(255, 192, 203);

shoot_a_gon.display();
rope.d();

ground0.display();
ground1.display();

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();

score = 0;
text("score:"+score,800,100);
}

function mouseDragged(){
Matter.Body.setPosition(shoot_a_gon.body,{x: mouseX,y: mouseY});
}

function mouseReleased(){
rope.f();
}

function keyPressed(){
if(keyCode === 32){
rope.a(shoot_a_gon.body);
Matter.Body.setPosition(shoot_a_gon.body,{x: 200,y: 400});
}
}

async function getBackgroundColor(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);


    if(hour >= 0600 && hour <= 1900){
    bg = "blue";
    }
    else if(hour > 1900 && hour < 0600){
    bg = "black";
    }
    background(bg);
}