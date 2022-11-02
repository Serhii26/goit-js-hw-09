import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  buttonEl: document.querySelector('button[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondEl: document.querySelector('[data-seconds]'),
};
refs.buttonEl.setAttribute('disabled', false);

console.log(refs.secondEl);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let dateV = new Date();
    // console.log(selectedDates[0].getTime());
    // console.log(dateV.getTime());

    if (Date.now() > selectedDates[0].getTime()) {
      window.alert('Please choose a date in the future');
      // console.log(Date.now());
    } else {
      refs.buttonEl.removeAttribute('disabled', true);
      //   if (dateV.getTime() < selectedDates[0].getTime()) { refs.buttonEl.removeAttribute('disabled', true); }
    }

    

    const timer = {
      intervalId: null,

      start() {
        // const startTime = Date.now();

        this.intervalId = setInterval(() => {
          // const currentTime = Date.now();
                const deltaTime = selectedDates[0].getTime() - Date.now();
                const time = convertMs(deltaTime);
                timeUpdate(time);
          
          
        }, 1000);
      },

      // stop() {
      //         if (selectedDates[0].getTime() > Date.now()) {
      //            clearInterval(this.intervalId);
      //         }
      //     },
    };
   

    // timer.stop();
    refs.buttonEl.addEventListener('click', () => {
      timer.start();
    });

   
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function timeUpdate({ days, hours, minutes, seconds }) {
  refs.daysEl.textContent = `${days}`;
  refs.hoursEl.textContent = `${hours}`;
  refs.minutesEl.textContent = `${minutes}`;
  // refs.timeEl.textContent = `DAYS ${days} HOURS${hours} MINUTES${minutes} SECONDS${seconds}`;
  refs.secondEl.textContent = `${seconds}`;
}
