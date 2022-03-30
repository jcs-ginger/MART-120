var lefthandX = 390;
var lefthandY = 300;
var lefthandDirection = 1;

var righthandX = 62
var righthandY = 179
var righthandDirection = 1;

var neckX = 210
var neckY = 228
var neckDirection = 1;

var bodyX = 170
var bodyY = 250
var bodyDirection = 1;

var size = 22;
var count = 0;
var sizeDirection = 2;
function setup()
 {
     createCanvas(500,600);
 }
 function draw()
 {
     background(80,40,70);
     textSize(30);
     textSize(size);
     size+= sizeDirection;
     count++;
     if(count > 5)
     {
         sizeDirection *=-1;
         count = 0;
     }
    text('A Portrait of Chris', 2, 30);
    textSize(22);
    text('by: Chris Shields', 2, 50);
    ellipse(220,175,100,105);
    strokeWeight(8);
    point (197,168);
    point (245, 170)
    triangle(220, 175, 180, 185, 195, 200);
    rect(210,neckY,20,30);
    // neck
    neckY += neckDirection;
    if(neckY <= 0 || neckY >= 450 )
    {
        neckDirection *= -2;
    }
    // body
    rect(170,bodyY,100,200);
    bodyY += bodyDirection;
    if(bodyY <= 2 || bodyY >= 450 )
    {
        bodyDireciton *= -5;
    }
    line(170,300, 75, 205);
    // righthand
    circle(righthandX,righthandY,55);
    righthandX+=righthandDirection;
    if(righthandX >= 100 || righthandX <=62)
    {
        righthandDirection *= -1;
    }
    line(270,300,390,300);
    // lefthand
    circle(lefthandX,lefthandY,55);
    lefthandX+=lefthandDirection;
    if(lefthandX >= 418 || lefthandX <= 82)
    {
        lefthandDirection *= -1;
    }
 }
