import Notiflix from 'notiflix';
const Btn = document.querySelector('button');
const inDeley = document.querySelector('[name="delay"]');
const inStep = document.querySelector('[name="step"]');
const inAmount = document.querySelector('[name="amount"]');
console.log(inDeley)
console.log(inStep)
console.log(inAmount)
console.log(Btn)


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
