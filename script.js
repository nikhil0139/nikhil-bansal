
var today = new Date();
var day = today.getDay();
var date = today.getDate();
var year = today.getFullYear();
var month = today.getMonth();
var x, y;

if (date < 10) {
    date = "0" + date;
}

switch (day) {
    case 0:
        x = "Sunday";
        break;
    case 1:
        x = "Monday";
        break;
    case 2:
        x = "Tuesday";
        break;
    case 3:
        x = "Wednesday";
        break;
    case 4:
        x = "Thursday";
        break;
    case 5:
        x = "Friday";
        break;
    case 6:
        x = "Saturday";
        break;
}

switch (month) {
    case 0:
        y = "January";
        break;
    case 1:
        y = "February";
        break;
    case 2:
        y = "March";
        break;
    case 3:
        y = "April";
        break;
    case 4:
        y = "May";
        break;
    case 5:
        y = "June";
        break;
    case 6:
        y = "July";
        break;
    case 7:
        y = "August";
        break;
    case 8:
        y = "September";
        break;
    case 9:
        y = "October";
        break;
    case 10:
        y = "November";
        break;
    case 11:
        y = "December";
        break;
}

var right = x + ", " + y + " " + date + " " + year;
document.getElementById("date").innertext = right;
document.getElementById("date").textContent = right;

setInterval(showTime, 1000);
function showTime() {
    var date = new Date();
    var hours = date.getHours();

    if (hours == 0) {
        hours += 12;
    }
    else if (hours < 10)
        hours = "0" + hours;
    else if (hours > 12) {
        hours -= 12;
        hours = hours < 10 ? "0" + hours : hours;
    }

    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
    document.getElementById("clk").innerText = time;
    document.getElementById("clk").textContent = time;


}
showTime();


function fun() {
    alert('Thanks for Contacting us..! We Will Contact You Soon...');
    document.getElementById('fName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('lName').value = '';
    document.getElementById('sub').value = '';
    document.getElementById('message').value = '';

}



