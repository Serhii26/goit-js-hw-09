import { Notify } from 'notiflix/build/notiflix-notify-aio';

refs = {
  form: document.querySelector('.form'),
  buttonEl: document.querySelector('button'),
};

refs.form.addEventListener('submit', onStart);

function onStart(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget;
  const formText = {
    delay: Number(delay.value),
    step: Number(step.value),
    amount: Number(amount.value),
  };
  for (let i = 0; i < formText.amount; i += 1) {
    createPromise(i + 1, formText.delay + i * formText.step)
      .then(onResolve)
      .catch(onReject);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onResolve({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
function onReject({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
