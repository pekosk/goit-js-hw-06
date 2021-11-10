const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length !== Number(inputEl.dataset.length)) {
      inputEl.classList.add('invalid');
    } else {
      inputEl.classList.add('valid');
    }
  });