function colorize() {
    let tableElement = document.querySelector('table');
    let tbodyElement = tableElement.querySelector('tbody');
    let trElements = Array.from(tbodyElement.querySelectorAll('tr'));

    trElements.forEach( (element, index) => {
        if (index % 2 !== 0) {
            element.style.backgroundColor = 'teal';
        }
    });
}