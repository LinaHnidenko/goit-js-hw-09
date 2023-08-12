const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

start.addEventListener('click', onStart);
stop.addEventListener('click', onStop);

function onStart() {
  start.disabled = true;
  //   start.disabled = start;
  stop.disabled = false;
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStop() {
  start.disabled = false;
  stop.disabled = true;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
