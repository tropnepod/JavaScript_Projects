var string = "This is a magical string.";
window.alert(string);
document.write("Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br> \"Eat my shorts!\" Bart responded.");
var B = "Concatenated" + " String";
document.write(B);
var Family = "The Smiths", Dad = "George", Mom = "Susan", Daughter = "Wednesday", Son = "Ziko";
document.write(Dad);
var blues = "I have the blues";
var blues = blues.fontcolor("blue");
document.write(blues);
var Dad = Dad.fontcolor("red");
var Mom = Mom.fontcolor("purple");
var Son = Son.fontcolor("brown");
var Daughter = Daughter.fontcolor("pink");
document.write(Dad);
var number = 0;
var number = number + 1;
document.write(number);

function My_First_Function()    {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}