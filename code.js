const timers = document.querySelector(".timer");
const resetButton = document.querySelector(".reset");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".Stop");
let [seconds, minutes, hours] = [0, 0, 0];
let timer=null;


resetButton.addEventListener("click", () => {
  forReset();
});

startButton.addEventListener("click", () => {
    startWatch();
});
stopButton.addEventListener("click", () => {
    forStop();
});


function padStart(value){
    return String(value).padStart(2,0);
}

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  timers.innerHTML=`${padStart(hours)} :${padStart(minutes)}: ${padStart(seconds)}`;
}
function startWatch()
{
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000)
}
function forStop(){
    clearInterval(timer);
}
function forReset(){
    clearInterval(timer);
     [seconds, minutes, hours] = [0, 0, 0];
    timers.innerHTML="00:00:00";
}