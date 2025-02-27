function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    let extraElement = document.getElementById('extra');

    if (buttonElement.textContent === 'More') {
        buttonElement.textContent = 'Less';
        extraElement.style.display = 'block';
    } else {
        buttonElement.textContent = 'More';
        extraElement.style.display = 'none';
    }
}