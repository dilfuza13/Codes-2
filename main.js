const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const checkInputs = () => {
    const usernameValue = this.username.value.trim();
    const emailValue = this.email.value.trim();
    const passwordValue = this.password.value.trim();

    if (usernameValue === '') {
        setError(this.username, 'Fullname is required');
    } else {
        setSuccess(this.username);
    }

    if (emailValue === '') {
        setError(this.email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(this.email, 'Provide a valid email address');
    } else {
        setSuccess(this.email);
    }

    if (passwordValue === '') {
        setError(this.password, 'Password is required');
    } else if (passwordValue.length < 6) {
        setError(this.password, 'Password must be at least 6 character.')
    } else {
        setSuccess(this.password);
    }

};
