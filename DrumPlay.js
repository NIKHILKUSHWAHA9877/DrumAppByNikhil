// let w = document.querySelector(".w")
// let a = document.querySelector(".a")
// let s = document.querySelector(".s")
// let d = document.querySelector(".d")
// let j= document.querySelector(".j")
// let k = document.querySelector(".k")
// let l = document.querySelector(".l")

alert("You 😎can Start Stopwatch 🕰️⌚⏳ At Right ➡️➡️Corner To See How Much Time You Spent On Our Game ")

// Drum js code
let play = function () {
    document.querySelector("#audioW").play()

}


let play1 = function () {
    let audioL = document.querySelector("#audioL")
    if (audioL.paused) {
        audioL.play()
    } else {
        audioL.pause();
        audioL.currentTime = 0;
    }
}


let play2 = function () {

   let audioA =  document.querySelector("#audioA")
   if(audioA.paused){
    audioA.play()
   }else{
    audioA.pause();
    audioA.currentTime = 0;
   }

}
let play3 = function () {

    let audioS =  document.querySelector("#audioS")
   if(audioS.paused){
    audioS.play()
   }else{
    audioS.pause();
    audioS.currentTime = 0;
   }

}

let play4 = function () {
    let audioD =  document.querySelector("#audioD")
   if(audioD.paused){
    audioD.play()
   }else{
    audioD.pause();
    audioD.currentTime = 0;
   }

}

let play5 = function () {
    let audioJ =  document.querySelector("#audioJ")
    if(audioJ.paused){
     audioJ.play()
    }else{
     audioJ.pause();
     audioJ.currentTime = 0;
    }

}

let play6 = function () {
    let audioK =  document.querySelector("#audioK")
   if(audioK.paused){
    audioK.play()
   }else{
    audioK.pause();
    audioK.currentTime = 0;
   }

}

// Drum js code end here





// stopwatch js code starts here

var timerDisplay = document.querySelector('.timer')
var startBtn = document.getElementById('startBtn')
var pauseBtn = document.getElementById('pauseBtn')
var resetBtn = document.getElementById('resetBtn')


var startTime;
var endTime = 0;
var isRunning = false;


function start() {
    if (!isRunning) {
        startTime = Date.now() - endTime;
        stopwatch = setInterval(updateTimer, 10);
        isRunning = true;
    }
}

function pause() {
    if (isRunning) {
        clearInterval(stopwatch);
        isRunning = false;
    }
}

function reset() {
    clearInterval(stopwatch);
    isRunning = false;
    endTime = 0;
    timerDisplay.textContent = '00:00:00';
}

function updateTimer() {
    var currentTime = Date.now();
    endTime = currentTime - startTime;
    displayTime(endTime);
}

function displayTime(time) {
    var milliseconds = Math.floor((time % 1000) / 10);
    var seconds = Math.floor((time / 1000) % 60);
    var minutes = Math.floor((time / (1000 * 60)) % 60);
    var hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    timerDisplay.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds) + '.' + formatTime(milliseconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);


// stopwatch js code end here
