function solve() {
    // Set Binary and Hexadecimal to the select options
    let toInputElement = document.getElementById('selectMenuTo');

    let firstOptionElement = toInputElement.querySelector('option');
    firstOptionElement.value = 'binary';
    firstOptionElement.textContent = 'Binary';
    if (toInputElement.children.length < 2) {
        let hexadecimalElement = document.createElement('option');
        hexadecimalElement.value = 'hexadecimal';
        hexadecimalElement.textContent = 'Hexadecimal';
    
        toInputElement.appendChild(hexadecimalElement);
    }

    // Add event listener to the 'Convert' button
    document.querySelector('button').addEventListener('click', convert);

    function convert() {
        let resultElement = document.getElementById('result');
        let numberInputElement = document.getElementById('input');
        let inputValue = Number(numberInputElement.value);

        let allOptions = toInputElement.querySelectorAll('option');
        let binaryOption = allOptions[0];
        let hexadecimalOption = allOptions[1];

        if (toInputElement.value === 'binary') {
            hexadecimalOption.removeAttribute('selected');
            binaryOption.setAttribute('selected', true);

            let binaryValue = [];

            while (inputValue > 0) {
                let bit = inputValue % 2;
                binaryValue.push(String(bit));
                inputValue = Math.floor(inputValue / 2);
            }

            binaryValue.reverse();
            resultElement.value = binaryValue.join('');
        } else {
            binaryOption.removeAttribute('selected');
            hexadecimalOption.setAttribute('selected', true);

            let hexadecimalValue = inputValue.toString(16).toUpperCase();
            resultElement.value =  hexadecimalValue;
        }

        numberInputElement.value = '';
    }
}