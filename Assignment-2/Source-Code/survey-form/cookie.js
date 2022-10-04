// Aniket Pandey

let cookieKey = "username=";
let cookieValue;

function checkCookie() {
    if (document.cookie) {
        // If cookie exists, get the cookie value
        getCookie();
    }
    else {
        // If cookie does not exist, prompt the user to enter their name and set the cookie
        cookieValue = window.prompt("What is your name?", "John Smith");
        if (cookieValue != "" && cookieValue != null) {
            document.cookie = (`${cookieKey + encodeURI(cookieValue)};`);
            getCookie();
        }
    }
    document.writeln(`<h5 style='text-align: center;'><a href='javascript:updateCookie()'>Click here if you are not ${cookieValue}</a></h5><br>`);
}

function getCookie() {
    // Decode the cookie value
    var cookie = decodeURI(document.cookie);
    var cookieList = cookie.split(';');
    var cookie = cookieList[0];
    var cKeyValue = cookie.split('=');
    var cKey = cKeyValue[0];
    let cValue = cKeyValue[1];
    var currentDate = new Date();
    var currentDateHrs = currentDate.getHours();
    var greeting = "";

    // Set the greeting based on the time of day
    if (currentDateHrs < 12) {
        greeting = "Good Morning";
    }
    else if (currentDateHrs - 12 < 5) {
        greeting = "Good Afternoon";
    }
    else {
        greeting = "Good Evening";
    }
    document.writeln(`<h3 style="color: white; text-align: center;">${greeting}, ${cValue}! Welcome to CS Department Survey.</h3>`);
    cookieValue = cValue;
}

function updateCookie() {
    // Set default cookie null and prompt the user to enter their name by reloding the page
    document.cookie = `${cookieKey}null;expires= Tue, 21-Jan-97 00:00:01 GMT`;
    window.location.reload();
}