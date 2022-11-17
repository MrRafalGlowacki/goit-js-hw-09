const start = document.querySelector("[data-start]");
const stop = document.querySelector("[data-stop]");
console.log(start)
console.log(stop)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }