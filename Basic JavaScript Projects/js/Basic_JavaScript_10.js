function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11)  {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;
}

function Call_Loop()    {
    var Fibonacci_1 = 0;
    var Fibonacci_2 = 1;
    var Fibonacci_3 = 0;
    var Sequence = "";
    var End_Point = document.getElementById("End_Point").value;
    while (Fibonacci_1 <= End_Point)   {
        Sequence += "<br>" + Fibonacci_1;
        Fibonacci_3 = Fibonacci_1 + Fibonacci_2;
        Fibonacci_1 = Fibonacci_2;
        Fibonacci_2 = Fibonacci_3
         
    }
    document.getElementById("Loop").innerHTML = Sequence;

}

var String1 = "This is a string";
var Len_String = String1.length;
console.log(Len_String);

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++)    {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function array_Function()   {
    var Cars = [];
    Cars[0] = "Jeep";
    Cars[1] = "Mustang";
    Cars[2] = "Impreza";
    Cars[3] = "Ferrari";
    document.getElementById("Array").innerHTML = "This is my " + Cars[3] + ".";
}

function constant_function()    {
    const Musical_Instrument = {
        type:"guitar",
        brand:"Fender",
        color:"black"
    };

    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function constant_function2()   {
    const Movie = {
        title:"Star Wars",
        genre:"Science Fiction",
        year:"1977"
    };

    Movie.title = "Close Encounters";
    Movie.studio = "EMI Films";
    document.getElementById("Constant2").innerHTML = "The movie " + Movie.title +
        " was produced in " + Movie.year + " by " + Movie.studio + ".";
}

var Noob = 135;
document.write("<br>" + Noob + "<br>");
{
    let Noob = 9;
    document.write(Noob + "<br>");
}
document.write(Noob + "<br>");

var message = wash_hands();

function wash_hands()   {
    return "WASH YOUR HANDS";
}

function mess_fun() {
    document.getElementById("message").innerHTML = message;
}

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

let sunglasses = {
    brand: "Ray Ban ",
    color: "black ",
    price: "$150 ",
    style: "Aviator ",
    description: function(){
        return "These " + this.color + " sunglasses are made by " + this.brand + " and cost " + this.price + ".";
    }
};
document.getElementById("Sunglasses_Object").innerHTML = sunglasses.description();

function break_function()   {
    var count = "";
    for (i = 0; i < 100; i++)   {
        if (i === 7)    {
            break;
        }
        count += "The count is "+ i + "<br>";
    }
    document.getElementById("break_fun").innerHTML = count;
}

function cont_function()    {
    var test = "";
    for (i = 0; i < 20; i++){
        if (i === 3){continue;}
        if (i === 6){continue;}
        if (i === 9){continue;}
        test += "The number is " + i + "<br>";
    }
    document.getElementById("test").innerHTML = test;
}