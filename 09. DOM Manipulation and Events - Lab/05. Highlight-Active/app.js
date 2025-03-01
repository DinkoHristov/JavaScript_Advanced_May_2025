function focused() {
    let divElement = document.querySelector('div');

    let allDivInputElements = Array.from(divElement.querySelectorAll('div input'));

    allDivInputElements.forEach(element => {
        element.addEventListener('focus', focusCurrentDiv);
        element.addEventListener('blur', blurCurrentDiv);
    });
    
    function blurCurrentDiv() {
        let allDivElements = Array.from(divElement.querySelectorAll('div'));

        allDivElements.forEach(element => {
            if (element.classList.contains('focused')) {
                element.classList.remove('focused');
            }
        });
    }

    function focusCurrentDiv(e) {
        e.target.parentElement.classList.add('focused');
    }
}