function deleteByEmail() {
    let inputElement = document.querySelector('input[name="email"]');
    let resultElement = document.getElementById('result');
    let tableBodyElements = Array.from(document.getElementById('customers').querySelector('tbody').children);

    let isEmailDeleted = false;
    tableBodyElements.forEach(tr => {
        let tdElement = tr.querySelectorAll('td');
        let email = tdElement[1].textContent;

        if (email === inputElement.value) {
            tr.remove();
            isEmailDeleted = true;
        }
    });

    resultElement.textContent = isEmailDeleted ? 'Deleted' : 'Not found.';

    inputElement.value = '';
}