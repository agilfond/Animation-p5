//DRAG MOUSE OVER FACE & CLICK TO USE CODE! ENJOY :) //

//claiming variables//
var x, y;
var radius;

//setup//
function setup() {
 
  //canvas//
  createCanvas(800, 800);
 
  //no lines//
  noStroke();
  
  //giving variables values//
  
  //using for face circle//
  a=300
  b=300
 
  //flowers inital position values before effected by the for loop//
  x=0
  y=0
 
  //used for distance formula for mouse over face//
  radius=100
  
  //background//
  background(225);

  //'for loop' so the code starts with flowers before mouse click//
  for (var i=0; i<=10; i=i+1){
    flowers();
  }
}

//draw function//
function draw() {
 
  //if,else statement//
  //mouse over face//
if(mouseIsOverEllipse()){
 
  //if it is over the face then it will be "true" and the happy face shows//
  drawHappyFace(x,y, true);}
 else { 
  
   //if it is not over the face it is "false" and the surprised face will be displayed//
   drawHappyFace (x,y, false);
 }
}

//face function//
//"blink" is what happens if "drawHappyFace" is true - the mouse is in the circle//
function drawHappyFace(x,y, blink){
  
//main face circle//
  fill('lightgreen');
  ellipse(300,300,200,200);
 
//if, else statement//
//used for when the mouseIsOverEllipse is true//
  if(blink){
   
//blink eyes//
    fill(30)
    rect(320,280,50,20);
    rect(230,280,50,20);
  
//smile// 
    fill(252,157,154);
  arc(300,350,70,50,0, radians (180), PIE);
  }
 
  else { 
   // surprised face is the deafault//
    //face circle//
    fill('orange')
     ellipse(300,300,200,200);

    //eyes//
    fill (30)
       ellipse (350, 300, 30, 30);
ellipse(250,295,30,30);
    
    //mouth//
        ellipse (300,360,40,40);
}
}

//mouseIsOverEllipse function used in first "if, else statement"//
function mouseIsOverEllipse(){

  //when you do it it happens - over and over//
  var result;
  
  //already made distance formula//
  //used to know when mouse is over the face//
  
  //a & b variables being used now//
  var d = dist(mouseX, mouseY, a, b);
  
  //in the radius//
  if (d < radius) {
    
    //it changes//
    result = true;
  } else {
    
    //it stays surprised//
    result = false;
  }
  
    //when you do it it happens - over and over//
  return result;
}

//changing flowers function//
function mouseClicked(){
  
  //for loop on flowers function//
  //start at 0, add < or = 10 flowers every time, changing position by an increment of +1 every time//
  for (var i=0; i<=10; i=i+1){
    flowers();
  }
}

//flowers function//
//used for the "for loop"//
function flowers(){
  
//display flowers in random x,y positions//  
    let x=random(width);     
    let y=random(height);
  
  //fill ellipses with random colors for r, g, b slots f petals//
    fill(random(255), random(255), random(255));
  
  //petals//
  ellipse(x,y,20,20)
  ellipse(x-15,y+5,20,20)
  ellipse(x-25,y-5,20,20)
  ellipse(x-17,y-20,20,20)
  ellipse(x,y-15,20,20)

  //flower centers//
  //fill random color for r, g, b slots of flower cores//
  fill (225, random(225), random(225));
  ellipse(x-12,y-7,22,22) }