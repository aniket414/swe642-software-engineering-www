// Aniket Pandey

// ---------------------------------------------------------------------------------------------------
// ----------------------- Calculate Average & Maximum -----------------------------------------------
// ---------------------------------------------------------------------------------------------------

function calculateAvgMax(numbers) {
    var avg=0;
    var max=0;
    var sum=0;

    var raffleErrorMessage = document.getElementById('raffleErrorField');
    raffleErrorMessage.innerHTML = '';

    // Check if numbers are empty
    numbers = numbers.split(',');
    if(numbers.length < 10) {
        raffleErrorMessage.innerHTML = 'Enter 10 numbers!';
        return false;
    }

    // Check if numbers are valid and if valid, calculate sum and find maximum
    for(var n=0; n<numbers.length; n++) {
        var num = numbers[n];
        num = Number(num);
        if(num == '') {
            raffleErrorMessage.innerHTML = 'Enter 10 non-zero numbers!';
            return false;
        }
        else if(num < 1 || num > 100) {
            raffleErrorMessage.innerHTML = 'Enter 10 numbers in the range 1-100!';
            return false;
        }
        else if(max <= num) {
            max = num;
        }
        sum = sum + num;
    }

    // Calculate average
    avg = (sum/numbers.length);
    document.getElementById('avgField').innerHTML = avg;
    document.getElementById('maxField').innerHTML = max;
}

// ---------------------------------------------------------------------------------------------------
// -------------------------- Clear Span when clicked on Reset ---------------------------------------
// ---------------------------------------------------------------------------------------------------

function clearSpan()
{
    // Reset button will clear all the form fields but not span fields therefore externally clear the span fields
    document.getElementById('avgField').innerHTML = "";
    document.getElementById('maxField').innerHTML = "";
    document.getElementById('City').innerHTML = "";
    document.getElementById('State').innerHTML = "";
    document.getElementById('raffleErrorField').innerHTML = "";
    document.getElementById('zipErrorField').innerHTML = "";
}