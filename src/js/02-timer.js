import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const startBtn = document.querySelector('[data-start]');
const countDays = document.querySelector('[data-days]');
const countHours = document.querySelector('[data-hours]');
const countMinutes = document.querySelector('[data-minutes]');
const countSeconds = document.querySelector('[data-seconds]');
let timerId = null;
startBtn.disabled = true;
startBtn.addEventListener('click', () => {
  if (startBtn.disabled === true)
    startBtn.textContent = 'NO! First select date in the future';
});
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date())
      Notiflix.Notify.failure('Please choose a date in the future', {
        position: 'center-top',
      }),
        (startBtn.disabled = true),
        (startBtn.textContent = 'First select date in the future');
    else (startBtn.disabled = false), (startBtn.textContent = 'Start');
  },
};

const inputDates = flatpickr('#datetime-picker', options);

const addLeadingZero = value => {
  return value.toString().padStart(2, '0');
};

const convertMs = ms => {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};
startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    const userTime = inputDates.selectedDates[0];
    const now = new Date().getTime();
    const diffrence = userTime - now;
    countDays.textContent = addLeadingZero(convertMs(diffrence).days);
    countHours.textContent = addLeadingZero(convertMs(diffrence).hours);
    countMinutes.textContent = addLeadingZero(convertMs(diffrence).minutes);
    countSeconds.textContent = addLeadingZero(convertMs(diffrence).seconds);
    if (diffrence <= 999) {
      clearInterval(timerId);
    }
  }, 1000);
});
