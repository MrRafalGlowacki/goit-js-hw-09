const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
start.textContent = 'Click me for some magic';
stop.textContent = "I'm not important right now";
stop.disabled = true;
let interval = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

body.addEventListener('click', event => {
  if (event.target === start) {
    interval = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    stop.disabled = false;
    start.disabled = true;
    stop.textContent = 'this One is nice!';
    start.textContent = "You can't see me";
  } else if (event.target === stop) {
    clearInterval(interval);
    start.textContent = 'like to try again?';
    start.disabled = false;
    stop.disabled = true;
    alert(
      `Your body bacground color is ${body.style.backgroundColor} do You like it?`
    );
  }
});

// start.addEventListener('click', () => {
//   interval = setInterval(() => {
//     body.style.backgroundColor = getRandomHexColor();
//   }, 1000);
//   start.disabled = true;
//   start.textContent = "You can't see me"
// });

// stop.addEventListener('click', () => {
//   clearInterval(interval);
//   start.disabled = false;
//   start.textContent = "Start"
// });
