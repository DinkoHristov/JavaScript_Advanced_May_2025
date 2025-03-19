function validate() {
    const emailInputElement = document.getElementById('email');
    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    emailInputElement.addEventListener('change', () => {
        if (!emailRegex.test(emailInputElement.value)) {
            emailInputElement.classList.add('error');
        } else {
            emailInputElement.classList.remove('error');
        }
    });
}