const btnMns = document.querySelector('button[data-action="decrement"]');
const btnPls = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');
let numberEl = 0;

const mnsClick = () => {
  numberEl -= 1;

  counterValue.textContent = numberEl;
};

const plsClick = () => {
  numberEl += 1;

  counterValue.textContent = numberEl;
};

btnMns.addEventListener('click', mnsClick);
btnPls.addEventListener('click', plsClick);