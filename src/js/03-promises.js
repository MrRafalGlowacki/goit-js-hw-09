import Notiflix from 'notiflix';
const inDelay = document.querySelector('[name="delay"]');
const inStep = document.querySelector('[name="step"]');
const inAmount = document.querySelector('[name="amount"]');
const form = document.querySelector('.form');
const btn = document.querySelector('button');
function createPromise(position, delay, step) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const timeOut = delay + step * position;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position + 1} in ${timeOut}ms`);
      } else {
        reject(`❌ Rejected promise ${position + 1} in ${timeOut}ms`);
      }
    }, timeOut);
  });
}

function handleSubmit(event) {
  event.preventDefault();
  for (let i = 0; i < +inAmount.value; i++) {
    createPromise(i, Number(inDelay.value), Number(inStep.value))
      .then(value => {
        Notiflix.Notify.success(value);
      })
      .catch(error => {
        Notiflix.Notify.failure(error);
      });
  }
  btn.disabled = true;
}

form.addEventListener('submit', handleSubmit);
