const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', letsSendForm);

function letsSendForm(event) {
    event.preventDefault();
    const form = event.target;
    if (!form.email.value || !form.password.value)
        return alert('Всі поля повинні бути заповнені.');
    const dataObj = {
        email: form.email.value,
        password: form.password.value,
    }
    console.log(dataObj);
    form.reset();
}