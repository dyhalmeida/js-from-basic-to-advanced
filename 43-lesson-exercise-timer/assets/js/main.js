function myTimer(seconds) {
  const timer = new Date(seconds * 1000);
  return timer.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC"
  });
}

let seconds = 0;
let clear = null;

const timer = document.querySelector(".timer");
function startTimer() {
  clear = setInterval(() => {
    seconds++;
    timer.innerHTML = myTimer(seconds);
  }, 1000);
}

document.addEventListener("click", event => {
  const element = event.target;

  if (element.classList.contains("start")) {
    clearInterval(clear);
    timer.classList.remove("timer-pause");
    startTimer();
  }

  if (element.classList.contains("pause")) {
    clearInterval(clear);
    timer.classList.add("timer-pause");
  }

  if (element.classList.contains("reset")) {
    clearInterval(clear);
    seconds = 0;
    timer.innerHTML = "00:00:00";
    timer.classList.remove("timer-pause");
  }
});
