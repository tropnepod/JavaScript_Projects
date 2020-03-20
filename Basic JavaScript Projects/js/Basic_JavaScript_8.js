function full_sentence()    {
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function combine()  {
    var p1 = document.getElementById("string1").value;
    var p2 = " ";
    var p3 = document.getElementById("string2").value;
    var whole = p1.concat(p2,p3);
    document.getElementById("combo").innerHTML = whole;
}

function slice_method() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section;
}

function myslice()  {
    var sliceme = document.getElementById("string3").innerHTML;

    if (len1 == 0)  {
        var section = sliceme.slice(20,25);
        document.getElementById("bacon").innerHTML = section;
    }
    else    {
        document.getElementById("bacon").innerHTML = "I can't slice nothing out of this string";
    }
    
}

var len1 = 0;

function myslice2() {
    var sliceme = document.getElementById("string3").innerHTML;
    
    if (len1 == 0)  {
        var slice1 = sliceme.slice(0,20);
        var slice2 = sliceme.slice(25,);
        var whole = slice1.concat(slice2);
        len1 = whole.length;
        document.getElementById("string3").innerHTML = whole;
    }
    else    {
        document.getElementById("string3").innerHTML = sliceme;
    }
    
}

function myuppercase()  {
    var txt1 = document.getElementById("uppercase").value;
    var txt2 = txt1.toUpperCase();
    document.getElementById("uppertext").innerHTML = txt2;
}

function mybacon()  {
    var chkstring = document.getElementById("string3").innerHTML;
    var lower = chkstring.toLowerCase();
    var isbacon = lower.search("bacon");
    if (isbacon > 0)    {
        document.getElementById("isbacon").innerHTML = "Yes, there is Bacon";
    }
    else    {
        document.getElementById("isbacon").innerHTML = "No, there is no Bacon.";    
    }
}

var xy = 132;
document.write(xy.toString());

function precision_method() {
    var x = 12938.3012987376112;
    document.getElementById("precision").innerHTML = x.toPrecision(10);
}

var stringnum = 1351531;
document.write(stringnum.toPrecision(4));

function fixdeci()  {
    var num1 = 12.542334;
    var n = num1.toFixed(2);
    document.getElementById("fixdeci").innerHTML = n;
}

var str = "Naughty Console Peeper";
var res = str.valueOf();
console.log(res);