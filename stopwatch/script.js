'use strict';

const startBtn = document.getElementById('startBtn');

let message,millis,seconds;
let start = Date.now();
let stopWatchRunning = false;

function secondsTimer(){
  millis = Date.now() - start;
  seconds = Math.floor(millis/1000);
};

function stopWatch(){
  seconds = seconds % 60;
  seconds = (seconds<10)? '0'+seconds : seconds;
  let minutes = Math.floor(seconds/60);
  minutes = (minutes<10)? '0'+minutes : minutes;
  let hours = Math.floor((seconds/60)/60);
  hours = (hours<10)? '0'+hours : hours;

  stopWatchRunning = true;

  document.getElementById('stopWatch').innerText = `${hours}:${minutes}:${seconds}`;
  console.log(`${hours}:${minutes}:${seconds}`)
};

startBtn.addEventListener('click', setInterval(secondsTimer, 1000));
startBtn.addEventListener('click', setInterval(stopWatch, 1000));
