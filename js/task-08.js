const formLg = document.querySelector('.login-form');

const emailInput = document.querySelector('[type="email"]');

const passwordInput = document.querySelector('[type="password"]');

formLg.addEventListener('submit', (event) => {
event.preventDefault();
if (emailInput.value == '' || passwordInput.value == '') {
  alert('Все поля должны быть заполнены');
} 
else {
  const user = {
    email: formLg.elements.email.value,
    password: formLg.elements.password.value,
    }
    console.log(user);
  event.currentTarget.reset();
}
});


