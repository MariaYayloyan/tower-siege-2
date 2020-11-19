const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, sling, ball;
var stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var b1, b2, b3, b4, b5;

function setup() {
  createCanvas(1300, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(750, 375, 1500, 50);

  box1 = new Box(400, 230, 50, 50);
  box2 = new Box(450, 230, 50, 50);
  box3 = new Box(500, 230, 50, 50);
  box4 = new Box(550, 230, 50, 50);
  box5 = new Box(600, 230, 50, 50);
  box6 = new Box(425, 180, 50, 50);
  box7 = new Box(475, 180, 50, 50);
  box8 = new Box(525, 180, 50, 50);
  box9 = new Box(575, 180, 50, 50);
  box10 = new Box(450, 130, 50, 50);
  box11 = new Box(500, 130, 50, 50);
  box12 = new Box(550, 130, 50, 50);
  box13 = new Box(475, 80, 50, 50);
  box14 = new Box(525, 80, 50, 50);
  box15 = new Box(500, 30, 50, 50);

  b1 = new Box(845, 150, 50, 50);
  b2 = new Box(895, 150, 50, 50);
  b3 = new Box(945, 150, 50, 50);
  b4 = new Box(870, 100, 50, 50);
  b5 = new Box(920, 100, 50, 50);
  b6 = new Box(895, 50, 50, 50);
  ball = new Polygon(100, 100, 30);
  stand1 = new Ground(500, 270, 300, 20);
  stand2 = new Ground(900, 200, 300, 20);
  sling = new Sling(ball.body, { x: 200, y: 250 })
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  box1.display("red", "white");
  box2.display("red", "white");
  box3.display("red", "white");
  box4.display("red", "white");
  box5.display("red", "white");
  box6.display("yellow", "white");
  box7.display("yellow", "white");
  box8.display("yellow", "white");
  box9.display("yellow", "white");
  box10.display("green", "white");
  box11.display("green", "white");
  box12.display("green", "white");
  box13.display("orange", "white");
  box14.display("orange", "white");
  box15.display("blue", "white");
  b1.display("white", "red")
  b2.display("white", "red")
  b3.display("white", "red")
  b4.display("white", "red")
  b5.display("white", "red")
  b6.display("white", "red")
  sling.display("limegreen");
  stand1.display();
  stand2.display();
  ball.display("darkblue", "orange");
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
  sling.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    sling.attach(ball.body);
  }
}