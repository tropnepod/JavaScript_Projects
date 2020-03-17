function anotherFunction()    {
    var str = "Don't double click everything...";
    var result = str.fontcolor("red");
    document.getElementById("colorSwap").innerHTML = result;
}

function fun2() {
    var str2 = "I told you to be careful, way to not listen.";
    var result2 = str2.fontcolor('magenta');
    document.getElementById("button_function").innerHTML = result2;
}

function fun3() {
    var sentence = "What are you doing?!?!";
    sentence += " I've said beware so many times and you still click things!";
    sentence = sentence.fontcolor('red');
    sentence = sentence.fontsize(7);
    document.getElementById("concatenate").innerHTML = sentence;
}

function fun4() {
    var num = 2;
    var num2 = 10;
    var num3 = 5;
    var result3 = (num + num3) * num2;
    var sentence2 = "The answer is: " + result3;
    sentence2 = sentence2.fontcolor("purple");
    sentence2 = sentence2.fontsize(5);
    document.getElementById("newfunction").innerHTML = sentence2;
}