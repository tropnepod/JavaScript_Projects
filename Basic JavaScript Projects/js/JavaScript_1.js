function clickClassFunction()   {
    var elm1 = document.getElementsByClassName("Click Me");
    elm1[1].innerHTML = "BAM BAM the text has changed";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0,0,250,0);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"purple");

ctx.fillStyle = grd;
ctx.fillRect(10,10,480,230);

var grd2 = ctx.createRadialGradient(100,75,5,90,60,100);
grd2.addColorStop(0,"black");
grd2.addColorStop(1, "white");

ctx.fillStyle = grd2;
ctx.fillRect(10,10,150,80);


//draws a line
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

ctx.beginPath();
ctx.arc(200,100,90,0,2 * Math.PI);
ctx.stroke();

ctx.font = "30px Arial";
ctx.fillText("Paint here", 159, 120);

ctx.font = "30px Courier";
ctx.strokeText("Doodle", 300, 50);

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

var grd3 = ctx2.createLinearGradient(125,0,300,250);
grd3.addColorStop(0,"pink");
grd3.addColorStop(.25,"white");
grd3.addColorStop(.5, "pink");
grd3.addColorStop(.75,"white");
grd3.addColorStop(1, "pink");

ctx2.fillStyle = grd3;
ctx2.fillRect(120,0,260,250);

var gradient = ctx2.createRadialGradient(200,90,25,200,115,15);
var gradient2 = ctx2.createRadialGradient(300,90,25,300,115,15);

gradient.addColorStop(0, "blue");
gradient.addColorStop(.75,"green");
gradient.addColorStop(1, "white");

gradient2.addColorStop(0,"blue");
gradient2.addColorStop(.75,"green");
gradient2.addColorStop(1,"white");

ctx2.fillStyle = gradient;
ctx2.fillRect(175,85,50,25);

ctx2.fillStyle = gradient2;
ctx2.fillRect(275,85,50,25);

ctx2.beginPath();
ctx2.arc(250,125,115,0,2*Math.PI);
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(200,90,25,0,2*Math.PI);
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(300,90,25,0,2*Math.PI);
ctx2.stroke();

ctx2.moveTo(200,160);
ctx2.lineTo(300,160);
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(250,160,50,0,1*Math.PI);
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(200,115,15,1.1*Math.PI,1.9*Math.PI);
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(300,115,15,1.1*Math.PI,1.9*Math.PI);
ctx2.stroke();

