function addItem() {
    let inputElement = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');

    ulElement.addEventListener('click', deleteElement);

    let newLiItem = document.createElement('li');
    newLiItem.textContent = inputElement.value;

    let deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.textContent = '[Delete]';

    newLiItem.appendChild(deleteButton);
    ulElement.appendChild(newLiItem);

    inputElement.value = '';

    function deleteElement(e) {
        e.target.parentElement.remove();
    }
}