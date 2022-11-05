function bedroomToggle() {
    if(document.getElementById("bedroom").checked === true){
        $.get('/password', function(data) {
            $.post('/lights?room=bedroom&value=true&otp='+data.otp, function(data) {
                console.log("bedroom on")
            })
        })
    } else {
        $.get('/password', function(data) {
            $.post('/lights?room=bedroom&value=false&otp='+data.otp, function(data) {
                console.log("bedroom off")
            })
        })
    }
}

function kitchenToggle() {
    if(document.getElementById("kitchen").checked === true){
        $.get('/password', function(data) {
            $.post('/lights?room=kitchen&value=true&otp='+data.otp, function(data) {
                console.log("kitchen on")
            })
        })
    } else {
        $.get('/password', function(data) {
            $.post('/lights?room=kitchen&value=false&otp='+data.otp, function(data) {
                console.log("kitchen off")
            })
        })
    }
}

function livingroomToggle() {
    if(document.getElementById("livingroom").checked === true){
        $.get('/password', function(data) {
            $.post('/lights?room=livingroom&value=true&otp='+data.otp, function(data) {
                console.log("livingroom on")
            })
        })
    } else {
        $.get('/password', function(data) {
            $.post('/lights?room=livingroom&value=false&otp='+data.otp, function(data) {
                console.log("livingroom off")
            })
        })
    }
}

function bathroomToggle() {
    if(document.getElementById("bathroom").checked === true){
        $.get('/password', function(data) {
            $.post('/lights?room=bathroom&value=true&otp='+data.otp, function(data) {
                console.log("bathroom on")
            })
        })
    } else {
        $.get('/password', function(data) {
            $.post('/lights?room=bathroom&value=false&otp='+data.otp, function(data) {
                console.log("bathroom off")
            })
        })
    }
}

function hallwayToggle() {
    if(document.getElementById("hallway").checked === true){
        $.get('/password', function(data) {
            $.post('/lights?room=hallway&value=true&otp='+data.otp, function(data) {
                console.log("hallway on")
            })
        })
    } else {
        $.get('/password', function(data) {
            $.post('/lights?room=hallway&value=false&otp='+data.otp, function(data) {
                console.log("hallway off")
            })
        })
    }
}

