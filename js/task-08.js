const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', sentForm);
function sentForm(event) {
    event.preventDefault();
    const form = event.target;
    if (!form.email.value || !form.password.value) {
        alert('Всі поля повинні бути заповнені.');
        return;
    }
    const dataObj = {
        email: form.email.value,
        password: form.password.value,
    }
    console.log(dataObj);
    form.reset();
}
