var thing = 3;

document.write(typeof thing);
document.write("<br><br>");

document.write(typeof "Letters");
document.write("<br><br>");

function myfunction()   {
    document.getElementById("test").innerHTML = 0/0;
    document.getElementById("test2").innerHTML = isNaN('This is a string.');
    document.getElementById("test3").innerHTML = isNaN('007');
}

document.write(2E310);
document.write("\n");
document.write(-3E310);
document.write("<br><br>");

document.write(10>2);
document.write(10<2);
document.write("<br><br>");

console.log(3+23);
document.write("<br><br>");

document.write(243+"threesixtyseven");
document.write("<br><br>");

console.log(13>15);
document.write("<br><br>");

document.write(10==10);
console.log(3==6);
document.write("<br><br>");

document.write("george"==="george");
document.write("two"===34);
document.write("three"===3);
document.write("seven"==="twenty");
document.write("<br><br>");

document.write(14>3&&19>6);
document.write(5>10&&10>4);
document.write(5>10||10>4);
document.write(12>14||13>15);
document.write("<br><br>");

function notfunction()  {
    document.getElementById("not").innerHTML = !(5>10);
}

document.write(!(20>10));
