let startTime;
let elapsedTime = 0;
let timerInterval;

let displayTime = document.querySelector(".time");
let timer = false;

function updateTime() {
  const currentTime = Date.now();
  const timeElapsed = elapsedTime + (currentTime - startTime);

  const hours = Math.floor(timeElapsed / 3600000);
  const minutes = Math.floor((timeElapsed % 3600000) / 60000);
  const seconds = Math.floor((timeElapsed % 60000) / 1000);
  const miliseconds = Math.floor((timeElapsed % 1000) / 10);

  document.querySelector("#miliseconds").innerHTML = `: ${miliseconds < 10 ? '0' : ''}${miliseconds}`;
  document.querySelector("#seconds").innerHTML = `${seconds < 10 ? '0' : ''}${seconds}`;
  document.querySelector("#minutes").innerHTML = `${minutes < 10 ? '0' : ''}${minutes}`;
  document.querySelector("#hours").innerHTML = `${hours < 10 ? '0' : ''}${hours}`;
}

document.querySelector("#start").addEventListener("click", () => {
  if (!timer) {
    timer = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
  }
});

document.querySelector("#pause").addEventListener("click", () => {
  if (timer) {
    timer = false;
    clearInterval(timerInterval);
    elapsedTime = Date.now() - startTime;
  }
});

document.querySelector("#reset").addEventListener("click", () => {
  timer = false;
  clearInterval(timerInterval);
  startTime = null;
  elapsedTime = 0;
  document.querySelector("#miliseconds").innerHTML = `: 00`;
  document.querySelector("#seconds").innerHTML = `00`;
  document.querySelector("#minutes").innerHTML = `00`;
  document.querySelector("#hours").innerHTML = `00`;
});
