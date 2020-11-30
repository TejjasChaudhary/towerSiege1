const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, stand, world;
var block1,block2,block3,block4,block5, Block;

    

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    myEngine = Engine.create();
    world = myEngine.world;

    console.log("1.." + stand);
    stand = new Stand(400,200,200,20);
    console.log("2.." + stand);
    block1 = new Block(330,235,30,40);  
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
    block5 = new Block(450,235,30,40);

}

function draw(){
    background("blue");
    Engine.update(myEngine);
    
    stand.display();    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

}

//  Uncaught ReferenceError: Cannot access 'Engine' before initialization 

/* at setup (VM40 sketch.js:16)
at p5.<anonymous> (p5.js:49814)
at p5._runIfPreloadsAreDone (p5.js:49763)
at p5.<anonymous> (p5.js:49749)
at new p5 (p5.js:50032)
at _globalInit (p5.js:49418)*/

// sketch.js:20 Uncaught ReferenceError: Stand is not defined