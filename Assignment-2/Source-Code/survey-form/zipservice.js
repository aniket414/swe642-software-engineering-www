// Aniket Pandey

// ---------------------------------------------------------------------------------------------------
// ----------------------- Autofil City & State using Zip Code ---------------------------------------
// ---------------------------------------------------------------------------------------------------

function callWebService(zip, callBackFunction) {
    var reqURL = "zipcodes.json";
    try {
        var asyncReq = new XMLHttpRequest();
        asyncReq.onreadystatechange = function() {
            // Call the callback function to display the city and state
            callBackFunction(asyncReq, zip);
        };
        asyncReq.open('GET', reqURL , true);
        asyncReq.setRequestHeader("Accept", "application/json; charset=utf-8");
        asyncReq.send();
    }
    catch(exception) {
        alert('Request Failed!');
    }
}

function displayCityState(asyncReq, zip) {
    if(asyncReq.readyState == 4 && asyncReq.status == 200) {
            var zipCodeResponse = JSON.parse(asyncReq.responseText);
            var zipcodes = zipCodeResponse.zipcodes ? zipCodeResponse.zipcodes : []
            // Find the city and state for the given zip code
            var data = zipcodes.find((d) => d.zip == zip)
            if(data) {
                zipValid = true;
                document.getElementById('zipErrorField').innerHTML = '';
                document.getElementById('City').innerHTML = data.city;
                document.getElementById('State').innerHTML = data.state;
            }
            else {
                // If zip code is not found, display error message
                zipValid = false;
                document.getElementById('zipErrorField').innerHTML = 'ZipCode Error!<br>';
                document.getElementById('City').innerHTML = '';
                document.getElementById('State').innerHTML = '';
            }
    }
    else if (asyncReq.status == 500) {
            document.getElementById('zipErrorField').innerHTML = 'Zip validation service not available<br>';
    }
}

function validateZip(zip) {
    callWebService(zip, displayCityState);
}