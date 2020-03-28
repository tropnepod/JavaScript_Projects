function validateForm() {
    var fName = document.forms["myForm"]["fname"].value;
    var lName = document.forms["myForm"]["lname"].value;
    var email = document.forms["myForm"]["email"].value;
    if (fName == "")    {
        alert("Please enter a valid first name");
        return false;
    }
    if (lName == "")    {
        alert("Please enter a valid last name");
        return false;
    }
    if (email == "")    {
        alert("Please enter a valid email address");
        return false;
    }
}