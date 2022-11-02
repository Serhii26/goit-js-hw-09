const refs = {
  bodyEl: document.querySelector('body'),
  buttonStart: document.querySelector('button[data-start]'),
  buttonStop: document.querySelector('button[data-stop]'),
};
console.log(refs.bodyEl);
const NOTIFICATION_DELAY = 1000;
//  let timeoutID = null;
refs.buttonStop.setAttribute('disabled', false);

refs.buttonStart.addEventListener('click', () => {
  timerID = setInterval(() => {
    changeColor();
  }, NOTIFICATION_DELAY);
});
refs.buttonStop.addEventListener('click', () => {
  clearInterval(timerID);
  refs.buttonStart.removeAttribute('disabled', true);
  refs.buttonStop.setAttribute('disabled', false);
});
timerID = null;

function changeColor() {
  let changeStyleColor = getRandomHexColor();

  refs.buttonStart.setAttribute('disabled', false);
  refs.buttonStop.removeAttribute('disabled', true);

  refs.bodyEl.style.backgroundColor = changeStyleColor;
  console.log(changeStyleColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
