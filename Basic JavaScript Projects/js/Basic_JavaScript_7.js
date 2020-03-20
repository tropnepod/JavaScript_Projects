var globalvariable = 100;

function add1() {
    var localvariable = 12;
    localvariable += 2;
    console.log(globalvariable);
}

function add2() {
    console.log(localvariable);
}

add1();
add2();

function getdate()  {
    if (new Date().getHours()<18)   {
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
}

function getdate2() {
    if (new Date().getHours()<12)   {
        document.getElementById("greeting2").innerHTML = "Good morning!";
    } else if (new Date().getHours()>12 && new Date().getHours()<5)    {
        document.getElementById("greeting2").innerHTML = "Good afternoon!";
    } else  {
        document.getElementById("greeting2").innerHTML = "Good evening.";
    }
}

function age_function() {
    age = document.getElementById("age").value;
    if (age >= 18)  {
        vote = "You are old enough to vote!";
    }
    else    {
        vote = "You are not old enough to vote!";
    }
    document.getElementById("how_old").innerHTML = vote;
}

function question_function()    {
    question = document.getElementById("question").value;
    lower = question.toLowerCase();
    if (lower == "yes")  {
        answer = "I'm glad you're doing well, try something more complex now.";
    }
    else if (lower == "no") {
        answer = "You should practice more, re-read through examples or contact and instructor.";
    }
    else    {
        answer = "Please enter yes or no.";
    }
    document.getElementById("answer").innerHTML = answer;
}

function time_function()    {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0)  {
        reply = "It is morning time!";
    }
    else if (time > 12 == time < 18)    {
        reply = "It is the afternoon.";
    }
    else    {
        reply = "It is evening time.";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}