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