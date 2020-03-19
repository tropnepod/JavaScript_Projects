function ridefunction() {
    var height, canride;
    height = document.getElementById("height").value;
    canride = (height<52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = canride + " to ride.";
}

function agecalculation()   {
    var age, canvote;
    age = document.getElementById("age").value;
    canvote = (age<18)?"You are not old enough to vote":"You can vote!";
    document.getElementById("vote").innerHTML = canvote;
}

function vehicle(make,model,year,color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}

var jack = new vehicle("Dodge","Viper", 2020, "Red");
var emily = new vehicle("Jeep","Trail Hawk",2019,"White and Black");
var erik = new vehicle("Ford","Pinto",1971,"Mustard");

function myfunction()   {
    document.getElementById("keywords_and_constructors").innerHTML =
    "Erik drives a " + erik.vehicle_color + "-colored " + erik.vehicle_model +
    " manufactured in " + erik.vehicle_year;
}

function book(author,title,year,publisher)  {
    this.book_author = author;
    this.book_title = title;
    this.book_year = year;
    this.book_publisher = publisher;
}

var george = new book("David Sedaris","When You're Engulfed in Flames",2008,"Little, Brown, and Company");
var bob = new book("Augusten Burroughs","Running with Scissors",2002,"Picador");

function myfunction2()  {
    document.getElementById("new_and_this").innerHTML =
    "George bought " + george.book_title + ", by " + george.book_author +
    ", which was published in " + george.book_year + " by " + george.book_publisher +".";
}
//below are examples of using reserved words
//var nancy = "true";
//var nathan = break;

//document.write(nancy);
//document.write(nathan);

function object(height, width, depth, color, weight)    {
    this.object_height = height;
    this.object_width = width;
    this.object_depth = depth;
    this.object_color = color;
    this.object_weight = weight;
}

function countfunction()    {
    document.getElementById("counting").innerHTML = count();
    function count()    {
        var starting_point = 9;
        function plus_one() {starting_point +=1;}
        plus_one();
        return starting_point;
    }
}

function countfunction2()   {
    document.getElementById("counting2").innerHTML = count2();
    function count2()   {
        var start_point = 2;
        function doubledouble() {start_point *= 2}
        doubledouble();
        return start_point;
    }
}

//nested function assignment 

function getinfo()  {
    document.getElementById("getinfo").innerHTML = company();
    function company()  {
        function employee(fullname,department)  {
            this.employee_fullname = fullname;
            this.employee_department = department;
        }

        var worker1 = new employee("Bob Slydell", "Corporate Accounts Payable");
        var info1 = worker1.employee_fullname + " works in the " + worker1.employee_department + " department.";

        return info1;
    }

}

