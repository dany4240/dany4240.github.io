setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = " AM";

    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = " PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = " AM";
    }

    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime =
        hour +
        ":" +
        min +
        am_pm;

    // Displaying the time
    document.getElementById(
        "timeDiv"
    ).innerHTML = currentTime;
}

function date() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are zero-based
    let year = date.getFullYear();

    // Formatting day and month to always have two digits
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    let currentDate =  day + "/" + month + "/" + year;
    document.getElementById("dateDiv").innerHTML = currentDate;
}

showTime();
date();
