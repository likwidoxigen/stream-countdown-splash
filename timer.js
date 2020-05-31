let minutesDown = "";
let secondsDown = "";
let lateMessage = "";
let timerInterval = {};
let hoursDown="";
function updateTimeDown(hours, minutes, seconds) {
    let userLabel = document.getElementById("count-down-timer").innerText;
    let currentLabel = document.getElementById("down-timer-label").value;
    if (seconds == 0 && userLabel == currentLabel) {
        if (minutes == 0 && userLabel == currentLabel) {
            minutes = 0;
            document.getElementById("count-down-timer").innerText = lateMessage;
            seconds = (seconds / 1) - 1;
        } else {
            minutes = (minutes / 1) - 1;
            seconds = 59;
        }

    } else if (seconds == -59) {
        minutes = (minutes / 1) - 1;
        seconds = 0;
    } else {
        minutes = (minutes / 1);
        seconds = (seconds / 1) - 1;
    }


    //console.log("Down:" + minutes + ":" + seconds);
    document.getElementById("minutes-down").innerText = minutes;
    document.getElementById("seconds-down").innerText = seconds;
    
    if (minutes == -60) {
        for (i = 0; i < 100; i++) {
            window.clearInterval(i);
            document.getElementById("count-down-timer").innerText = "";
            document.getElementById("seconds-down").innerText="00";
            document.getElementById("minutes-down").innerText="00";
        }
    }

    return ({
        hours,
        minutes,
        seconds
    });
}

function updateTimer() {
    //console.log("upateTimer");
    let returnedTime = updateTimeDown(hoursDown, minutesDown, secondsDown);
    hoursDown = returnedTime.hours;
    minutesDown = returnedTime.minutes;
    secondsDown = returnedTime.seconds;
    if (minutesDown == 0 && secondsDown == 0) {
        stopTimer();
        document.getElementById("totalMinutes").value =0;
        setTimeout(runTimer, document.getElementById("grace-period").value * 1000);
    } 
}

function runTimer() {
    if (timerInterval) {
        stopTimer();
    }
    document.getElementById("minutes-down").innerText = document.getElementById("totalMinutes").value;
    document.getElementById("count-down-timer").innerText = document.getElementById("down-timer-label").value;
    minutesDown = document.getElementById("minutes-down").innerText;
    secondsDown = document.getElementById("seconds-down").innerText;
    lateMessage = document.getElementById("late-message").value;
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById("minutes-down").innerText = 0;
    document.getElementById("seconds-down").innerText = 0;
}
