function Color_Function()   {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors)  {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function animal_function()  {
    var animal_output;
    var animals = document.getElementById("animal_input").value;
    var animal_string = " make great pet friends!";
    switch(animals) {
        case "Cats":
            animal_output = "Cats" + animal_string;
        break;
        case "Dogs":
            animal_output = "Dogs" + animal_string;
        break;
        case "Birds":
            animal_output = "Birds" + animal_string;
        break;
        case "Lizards":
            animal_output = "Lizards" + animal_string;
        break;
        case "Fishes":
            animal_output = "Fishes" + animal_string;
        break;
        case "Snakes":
            animal_output = "Snakes" + animal_string;
        break;
        default:
            animal_output = "Please enter an animal exactly as writter on the above list.";
    }
    document.getElementById("animal_output").innerHTML = animal_output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}