function myaddition()   {
    var addition = (3*4) + (21/7);
    document.getElementById("math").innerHTML = "(3*4) + (21/7) = " + addition;
}

function mysubtraction()    {
    var subtraction = 34 - 4 - (15/3);
    document.getElementById("math2").innerHTML = "34 - 4 - (15/3) = " + subtraction;
}

function mymultiplication() {
    var multiply = 23 * 22;
    document.getElementById("math3").innerHTML = "23 * 22 = " + multiply;
}

function mydivision()   {
    var divide = 22/11;
    document.getElementById("math4").innerHTML = "22/11 = " + divide;
}

function mymodulus()    {
    var simplemath = 25 % 6;
    document.getElementById("math5").innerHTML = "25 / 6 has a remainder of: " + simplemath;
}

function mynegation()   {
    var x = 34;
    document.getElementById("math6").innerHTML = -x;
}

function incrementbutton()  {
    var x = 5;
    x++;
    document.getElementById("increment").innerHTML = x;
}

function decrementbutton()  {
    var y = 4.25;
    y--;
    document.getElementById("decrement").innerHTML = y;
}

function myrandomnum()  {
    var randomnum = (Math.random() * 100);
    window.alert(randomnum);
}

function myrounded()    {
    var rounding = (Math.round(23.432));
    document.getElementById("rounded").innerHTML = rounding;
}