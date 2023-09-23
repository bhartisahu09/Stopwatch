
// creating variables
let counter = document.getElementsByClassName('counter');

// Accessing main div
let main = document.getElementById('main');

// Accessing start button
let start = document.getElementById('start');

// Accessing stop button
let stop = document.getElementById('stop');

// Accessing reset button
let reset = document.getElementById('reset');

let timer = document.getElementById('timer');


let timeStart = false;

// Function to increase the timer
let increase = function(){
    // This i will take care of the timer controller
    // i = 0, 1 (for Hours)
    // i = 2, 3 (for mins)
    // i = 4, 5 (for secs)
    let i = counter.length - 1;
    let count = parseInt(counter[i].innerHTML);
    let finalTime = (i % 2 == 0)?5:9;
    while(count == finalTime){
        count = 0;
        counter[i].innerHTML = count;
        i--;
        count = parseInt(counter[i].innerHTML);
        finalTime = (i % 2 == 0)?5:9;
        if(i < 0) break;
    }
    if(i >= 0){
        count++;
        counter[i].innerHTML = count;
    }
}

// Id is the instance id of setInterval()
var id;

// This function is used to start the timer
let updateTime = function(){
    if(!timeStart){
        id = setInterval(increase, 1000);
        timeStart = true;
    }
}

// This function is used to stop the timer 
let stopTime = function(){
    clearInterval(id);
    timeStart = false;
}

// This function is used to reset the timer 
let setZero = function(){
    for(let i of counter){
        i.innerHTML = 0;
    }
}


// Click event on start button
// To start the timer of the stopwatch
start.addEventListener('click', updateTime);

// Click event on stop button
// To stop the timer of the stopwatch
stop.addEventListener('click', stopTime);

// Click event on reset button
// To reset the timer of the stopwatch
reset.addEventListener('click', setZero);