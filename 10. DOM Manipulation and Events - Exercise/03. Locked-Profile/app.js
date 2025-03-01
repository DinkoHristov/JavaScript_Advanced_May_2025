function lockedProfile() {
    let showButtonElements = document.querySelectorAll('button');

    showButtonElements.forEach(showButton => {
        showButton.addEventListener('click', showHideContent);
    });

    function showHideContent(e) {
        let mainDivElement = e.target.parentElement;
        let hiddenDivElement = e.target.parentElement.querySelector('div');
        let radioButtons = Array.from(mainDivElement.querySelectorAll('input')).slice(0, 2);

        let isLockButtonChecked = radioButtons[0].checked;

        if (!isLockButtonChecked) {
            if (e.target.textContent === 'Show more') {
                hiddenDivElement.style.display = 'inline';
                e.target.textContent = 'Hide it';
            } else {
                hiddenDivElement.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }
}