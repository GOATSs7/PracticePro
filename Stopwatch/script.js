let disPlayTime = document.getElementById("time");

let timer = null;
let second = 0,
  hours = 0,
  minute = 0;

document.getElementById("start").addEventListener("click", watchStart);
document.getElementById("stop").addEventListener("click", watchStop);
document.getElementById("reset").addEventListener("click", watchReset);

// function for time coutdown
function startTimer() {
  second++;
  if (second == 60) {
    second = 0;
    minute++;
    if (minute == 60) {
      minute = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minute < 10 ? "0" + minute : minute;
  let s = second < 10 ? "0" + second : second;
  disPlayTime.textContent = h + ":" + m + ":" + s;
}

// function for start the stopwatch
function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(startTimer, 1000);
}

// function for stop the stopwatch
function watchStop() {
  clearInterval(timer);
}

// function for reset the stopwatch
function watchReset() {
  clearInterval(timer);
  second = 0;
  hours = 0;
  minute = 0;
  disPlayTime.innerHTML = "00:00:00";
}
