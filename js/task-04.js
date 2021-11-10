const btnMns = document.querySelector('button[data-action="decrement"]');
const btnPls = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');
const mnsClick = () => {
  counterValue.textContent -= 1;
};

const plsClick = () => {
  counterValue.textContent += 1;
};

btnMns.addEventListener('click', mnsClick);
btnPls.addEventListener('click', plsClick);