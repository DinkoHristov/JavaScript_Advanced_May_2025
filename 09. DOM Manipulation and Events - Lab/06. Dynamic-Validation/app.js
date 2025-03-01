function validate() {
    const emailRegex = /^[a-z-0-9._%+-]+@[a-z-0-9.-]+\.[a-z]{2,}$/;

    let emailInputElement = document.getElementById('email');

    emailInputElement.addEventListener('change', changeEmailDynamically);

    function changeEmailDynamically(e) {
        let emailValue = e.target.value;

        if (!emailValue.match(emailRegex)) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    }
}