function validate() {
    let submitBtn = document.getElementById('submit');
    let companyCheckBox = document.getElementById('company');
    submitBtn.addEventListener('click', validateForm);
    companyCheckBox.addEventListener('change', companyHandler);

    function validateForm(ev) {
        ev.preventDefault();
        let usernameInput = document.getElementById('username');
        let usernameRegex = /^[A-Za-z0-9]{3,20}$/;
        let usernameIsValid = usernameRegex.test(usernameInput.value);
        setBorder(usernameInput, usernameIsValid);

        let emailInput = document.getElementById('email');
        let emailRegex = /^.*@.*\..*$/;
        let emailIsValid = emailRegex.test(emailInput.value);
        setBorder(emailInput, emailIsValid);

        let passwordInput = document.getElementById('password');
        let confirmPasswordInput = document.getElementById('confirm-password');
        let passwordRegex = /^\w{5,15}$/;
        let passwordIsValid = passwordRegex.test(passwordInput.value);
        let confirmPasswordIsValid = passwordRegex.test(confirmPasswordInput.value);
        let passwordsAreOk = passwordIsValid && confirmPasswordIsValid && passwordInput.value === confirmPasswordInput.value;

        setBorder(passwordInput, passwordsAreOk);
        setBorder(confirmPasswordInput, passwordsAreOk);

        let companyNumberIsValid = false;
        let companyCheckBox = document.getElementById('company');

        if (companyCheckBox.checked) {
            let companyNumberInput = document.getElementById('companyNumber');
            if (companyNumberInput.value.trim() !== ''&& !isNaN(companyNumberInput.value)) {
                let companyNumber = Number(companyNumberInput.value);
                if (companyNumber >= 1000 && companyNumber <= 9999) {
                    companyNumberIsValid = true;
                }
            }

            setBorder(companyNumberInput, companyNumberIsValid);
        }

        let validDiv = document.getElementById('valid');
        let mainFieldsValid = usernameIsValid && emailIsValid && passwordsAreOk;
        let companyInfoIsValid = !companyCheckBox.checked || (companyCheckBox.checked && companyNumberIsValid);

        let allFieldsValid = mainFieldsValid && companyInfoIsValid;
        validDiv.style.display = allFieldsValid ? 'block' : 'none';
    }

    function companyHandler(ev) {
        let companyInfoFieldSet = document.getElementById('companyInfo');

        companyInfoFieldSet.style.display = ev.target.checked ? 'block' : 'none';
    }

    function setBorder(element, isValid) {
        if (isValid) {
            element.style.setProperty('border', 'none');
        } else {
            element.style.setProperty('border', '2px solid red');
        }
    }
}