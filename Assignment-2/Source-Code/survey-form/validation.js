// Aniket Pandey

// ---------------------------------------------------------------------------------------------------
// ---------------------------------- Form Validation ------------------------------------------------
// ---------------------------------------------------------------------------------------------------

function validationCheck(event)
{
    var errorList = "";
    // Check if all the fields are valid
    if(nameCheck(event) == false) 
    {
        errorList += "<li>Please input appropriate alphabets in name.</li>";
    }

    if(emailCheck(event) == false)
    {
        errorList += "<li>Please input appropriate email address.</li>";
    }

    if(addressCheck(event) == false)
    {
        errorList += "<li>Please input appropriate alphabets, and numeric characters in address.</li>";
    }

    if(zipCheck(event) == false)
    {
        errorList += "<li>Please input numbers as zip code.</li>";
    }

    if(radioCheck(event) == false)
    {
        errorList += "<li>Please select atleast one radio button.</li>";
    }

    if(checkboxCheck(event) == false)
    {
        errorList += "<li>Please check atleast two checkboxes.</li>";
    }

    if(raffleCheck(event) == false)
    {
        errorList += "<li>Enter atleast 10 numbers between 1-100.</li>";
    }

    // Display consolidated error message using jQuery modal
    if(errorList != "")
    {
        $('#validation_errors').html('<ul>' + errorList + '</ul>');
        $('#validation_errors').dialog({
            modal: true,
            title: "Validation Error",
        });
        return false;
    }
    else
    {
        // If all the fields are valid, submit the form
        return submit();
    }
}

function nameCheck(event)
{
    var regex = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
    var isValid = document.getElementById("Fname").value.match(regex);
    
    // If name is not valid, clear the field and return false for error message
    if(!isValid)
    {
        document.getElementById("Fname").value="";
        event.preventDefault();
        return false;
    }
    else {
        return true;
    }
}

function addressCheck(event)
{
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    var isValid = document.getElementById("Address").value.match(regex);

    // If address is not valid, clear the field and return false for error message
    if(!isValid)
    {
        document.getElementById("Address").value="";
        event.preventDefault();
        return false;
    }
    else {
        return true;
    }

}

function emailCheck(event)
{
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var isValid = document.getElementById("email").value.match(regex);
    
    // If email is not valid, clear the field and return false for error message
    if(!isValid)
    {
        document.getElementById("email").value="";
        event.preventDefault();
        return false;
    }
    else {
        return true;
    }

}

function zipCheck(event)
{
    var regex = /^\d{5}(?:[-\s]\d{4})?$/;
    var isValid = document.getElementById("Zip").value.match(regex);

    // If zip is not valid, clear the field and return false for error message
    if(!isValid)
    {
        document.getElementById("Zip").value="";
        document.getElementById('zipErrorField').innerHTML="";
        event.preventDefault();
        return false;
    }
    else {
        return true;
    }
}

function checkboxCheck(event)
{
    var checklistItems = document.getElementsByName("campusLike");
    var check = 0;

    // Count the number of checkboxes checked
    for(var i=0; i<checklistItems.length; i++) {
        if(checklistItems[i].checked) {
            check++;
        }
    }

    if(check < 2)
    {
        // Since less than 2 checkboxes are checked, clear the checkbox and return false for error message
        for(var i=0; i<checklistItems.length; i++) {
            if(checklistItems[i].checked) {
                checklistItems[i].checked = false;
            }
        }
        event.preventDefault();
        return false;
    }
    else {
        return true;
    }

}

function radioCheck(event)
{
    var radioCheck = document.getElementsByName("campusInterest");
    var check = 0;

    // Count the number of radio buttons checked
    for(var i=0; i<radioCheck.length; i++) {
        if(radioCheck[i].checked) {
            check++;
        }
    }
    
    if(check < 1)
    {
        // Since no radio button is checked return false for error message
        event.preventDefault();
        return false;
    }
    else {
        return true;
    }
}

function raffleCheck(event)
{
    var numbers = document.getElementById('raffle').value.split(',');
    if(numbers.length < 10 || !isRaffleNumbersValid(numbers)) {
        document.getElementById("raffle").value="";
        document.getElementById('raffleErrorField').innerHTML="";
        event.preventDefault();
        return false;
    }
    else {
        return true;
    }
}

function isRaffleNumbersValid(numbers)
{
    for(var n=0; n<numbers.length; n++) {
        var num = numbers[n];
        num = Number(num);
        if(num == '') {
            return false;
        }
        else if(num < 1 || num > 100) {
            return false;
        }
    }
    return true;
}

function submit()
{
    alert("Form Submitted Successfully!");
    return true;
}