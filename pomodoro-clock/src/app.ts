'use strict';

// TODO: Remove global variables
let running:boolean = false;
let start:any = document.getElementById('startBtn');
let pause:any = document.getElementById('pauseBtn');
let timer:any = document.getElementById('timer');
let timerTxt:string = document.getElementById('timer').textContent;
let pomodoro:any = document.getElementById('pomodoro');
let minutes:number = 25;
let seconds:number = 0;
let zeroSet:string = '00';
let interval:any;

pomodoro.addEventListener('click', btnLogic);

function btnLogic(e: any) {
  if (e.target && e.target.nodeName === 'BUTTON') {
    switch (e.target.id) {
      case 'startBtn':
        if (start.textContent === 'RESUME') {
          start.textContent = 'START';
        }
        running = true;
        interval = setInterval(countdown, 1000);
        // While running, startBtn should be disabled
        // & pauseBtn enabled
        start.disabled = true;
        pause.disabled = false;
        break;
      case 'pauseBtn':
        if (running) {
          clearInterval(interval);
        }
        // While paused, pauseBtn should be disabled
        // & startBtn enabled
        start.textContent = 'RESUME';
        start.disabled = false;
        pause.disabled = true;
        break;
      case 'resetBtn':
        minutes = 25;
        seconds = 0;
        timer.textContent = `${minutes}:0${seconds}`;
        start.disabled = false;
        pause.disabled = false;
        start.textContent = 'START';
        break;
      case 'moreTimeBtn':
        minutes += 1;
        break;
      case 'lessTimeBtn':
        if (minutes > 0) {
          minutes -= 1;
        }
        break;
    }
  }
}

function countdown() {
  displayTimer(minutes, seconds);
  // Timer logic
  if (seconds > 0 ) {
    seconds -= 1;
  } else {
    seconds = 59;
    minutes -= 1;
  }
  // If minutes is < 0, stop clock
  stopTimer(minutes, seconds);
}

function stopTimer(minutes: number, seconds: number) {
  // timer is over, stop timer
  if (minutes < 0) {
    clearInterval(interval);
    timer.textContent = `${zeroSet}:${zeroSet}`;
  }
}

function displayTimer(minutes: number, seconds: number) {
  if (minutes < 10 && seconds < 10) {
    timer.textContent =  `0${minutes}:0${seconds}`;
  } else if (minutes < 10 && seconds >= 10) {
    timer.textContent =  `0${minutes}:${seconds}`;
  } else if (minutes >= 10 && seconds < 10) {
    timer.textContent =  `${minutes}:0${seconds}`;
  } else {
    timer.textContent = `${minutes}:${seconds}`;
  }
}
