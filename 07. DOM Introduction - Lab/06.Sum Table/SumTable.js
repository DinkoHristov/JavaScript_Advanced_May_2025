function sumTable() {
    let tbodyElements = Array.from(document.querySelector('tbody').querySelectorAll('tr'));

    let sum = 0;
    tbodyElements.forEach( (element, index) => {
        if (index !== 0 && index !== tbodyElements.length - 1) {
            let elementInfo = element.querySelectorAll('td');
            let price = Number(elementInfo[1].textContent);

            sum += price;
        }
    });

    let sumElement = document.getElementById('sum');
    sumElement.textContent = sum;
}