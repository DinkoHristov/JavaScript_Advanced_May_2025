function validate() {
    const usernameRegex = /^[A-Za-z0-9]{3,20}$/;
    const emailRegex = /^.*@.*\..*$/;
    const passwordRegex = /^\w{5,15}$/;

    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const companyInput = document.getElementById('company');
    const companyNumberInput = document.getElementById('companyNumber');

    const submitButton = document.getElementById('submit');
    const validDiv = document.getElementById('valid');
    const companyInfo = document.getElementById('companyInfo');

    companyInput.addEventListener('change', (e) => {
        companyInfo.style.display = e.target.checked ? 'block' : 'none';
    });
    
    submitButton.addEventListener('click', setInputsBorder);

    function setInputsBorder(e) {
        e.preventDefault();

        if (!usernameRegex.test(usernameInput.value)) {
            usernameInput.style.setProperty('border', '2px solid red');
        } else {
            usernameInput.style.setProperty('border', 'none');
        }

        if (!emailRegex.test(emailInput.value)) {
            emailInput.style.setProperty('border', '2px solid red');
        } else {
            emailInput.style.setProperty('border', 'none');
        }
        
        let isPasswordsValid = passwordRegex.test(passwordInput.value) &&
                               passwordRegex.test(confirmPasswordInput.value) &&
                               passwordInput.value === confirmPasswordInput.value;

        if (!isPasswordsValid) {
            passwordInput.style.setProperty('border', '2px solid red');
            confirmPasswordInput.style.setProperty('border', '2px solid red');
        } else {
            passwordInput.style.setProperty('border', 'none');
            confirmPasswordInput.style.setProperty('border', 'none');
        }

        if (companyInput.checked) {
            companyInfo.style.setProperty('display', 'block');
            if (Number(companyNumberInput.value) < 1000 || Number(companyNumberInput.value) > 9999) {
                companyNumberInput.style.setProperty('border', '2px solid red');
            } else {
                companyNumberInput.style.setProperty('border', 'none');
            }
        } else {
            companyNumberInput.style.setProperty('border', 'none');
            companyInfo.style.setProperty('display', 'none');
        }

        openOrHideValidDiv();
    }

    function openOrHideValidDiv() {
        if (companyInput.checked) {
            let isFieldsValid = usernameInput.style.getPropertyValue('border') !== '2px solid red' &&
                                emailInput.style.getPropertyValue('border') !== '2px solid red' &&
                                passwordInput.style.getPropertyValue('border') !== '2px solid red' &&
                                confirmPasswordInput.style.getPropertyValue('border') !== '2px solid red' &&
                                companyNumberInput.style.getPropertyValue('border') !== '2px solid red';

            if (isFieldsValid) {
                validDiv.style.setProperty('display', 'block');
            } else {
                validDiv.style.setProperty('display', 'none');
            }
        } else {
            let isFieldsValid = usernameInput.style.getPropertyValue('border') !== '2px solid red' &&
                                emailInput.style.getPropertyValue('border') !== '2px solid red' &&
                                passwordInput.style.getPropertyValue('border') !== '2px solid red' &&
                                confirmPasswordInput.style.getPropertyValue('border') !== '2px solid red'

            if (isFieldsValid) {
                validDiv.style.setProperty('display', 'block');
            } else {
                validDiv.style.setProperty('display', 'none');
            }
        }
    }
}