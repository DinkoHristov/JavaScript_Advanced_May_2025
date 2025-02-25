function extractText() {
    let liTextContents = Array.from(document.getElementById('items').children).map(li => li.textContent);

    let textAreaElement = document.getElementById('result');
    liTextContents.forEach(li => {
        textAreaElement.value += `${li}\n`;
    });
}