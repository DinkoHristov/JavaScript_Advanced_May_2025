function generateReport() {
    let tableHeadersElements = Array.from(document.querySelector('table thead tr').children);

    let tableHeaders = [];
    tableHeadersElements.forEach(element => {
        let thInputElement = element.querySelector('th input');
        tableHeaders.push(thInputElement.getAttribute('name'));
    });

    let outputElement = document.getElementById('output');
    outputElement.value = '';

    let headTrElement = Array.from(document.querySelector('thead tr').children);
    let bodyElement = document.querySelector('tbody');

    let headersChecked = [];
    headTrElement.forEach(element => {
        let inputElement = element.querySelector('input');
        let isInputElementChecked = inputElement.checked;

        if (isInputElementChecked) {
            headersChecked.push(inputElement.getAttribute('name'));
        }
    });

    let tableColumns = Array.from(bodyElement.querySelectorAll('tr'));
    
    let headersIndexes = [];
    headersChecked.forEach(header => {
        let headerIndex = tableHeaders.indexOf(header);
        headersIndexes.push(headerIndex);
    });

    let finalReport = [];
    tableColumns.forEach(td => {
        let report = {};
        let trContent = td.textContent.split('\n').map(x => x.trim()).filter(x => x !== '');
        
        let headersIndexesCopy = Array.from(headersIndexes);
        let headersCheckedCopy = Array.from(headersChecked);

        while (headersIndexesCopy.length > 0) {
            let currentIndex = headersIndexesCopy.shift();
            let headerName = headersCheckedCopy.shift();

            report[headerName] = trContent[currentIndex];
        }

        if (Object.keys(report).length > 0) {
            finalReport.push(report);
        }
    });

    if (finalReport.length > 0) {
        outputElement.value = JSON.stringify(finalReport, undefined, 2);
    }
}