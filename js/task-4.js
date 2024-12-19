const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const editedInputEmail = emailInput.value.trim();
    const editedInputPassword = passwordInput.value.trim();

    if(editedInputEmail === '' || editedInputPassword === ''){
        return alert('All form fields must be filled in');
    } else if (editedInputEmail !== '' && editedInputPassword !== ''){
        const dataObj = {
            [loginForm.elements.email.name]: loginForm.elements.email.value,
            [loginForm.elements.password.name]: loginForm.elements.password.value,
        }
        console.log(dataObj);
        loginForm.reset();
    }
});