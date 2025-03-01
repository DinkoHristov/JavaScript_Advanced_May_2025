function addItem() {
    let textInputElement = document.getElementById('newItemText');
    let valueInputElement = document.getElementById('newItemValue');

    let dropDownMenuElement = document.getElementById('menu');

    let newOptionElement = document.createElement('option');
    newOptionElement.text = textInputElement.value;
    newOptionElement.value = valueInputElement.value;

    dropDownMenuElement.appendChild(newOptionElement);

    textInputElement.value = '';
    valueInputElement.value = '';
}