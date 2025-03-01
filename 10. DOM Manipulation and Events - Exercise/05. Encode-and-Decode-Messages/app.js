function encodeAndDecodeMessages() {
    let mainElement = document.getElementById('main');
    let buttonElements = document.querySelectorAll('button');
    let textAreaElements = mainElement.querySelectorAll('textarea');

    let messageElement = textAreaElements[0];
    let lastMessageElement = textAreaElements[1];

    let encodeButton = buttonElements[0];
    let decodeButton = buttonElements[1];

    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);

    function encodeMessage() {
        let encodedMessage = '';

        if (messageElement.value !== '') {
            let messageChars = messageElement.value.split('');

            messageChars.forEach(char => {
                let asciCode = char.charCodeAt(0) + 1;
                encodedMessage += String.fromCharCode(asciCode);
            });
        }

        lastMessageElement.value = encodedMessage;
        messageElement.value = '';
    }

    function decodeMessage() {
        let decodedMessage = '';

        if (lastMessageElement.value !== '') {
            let messageChars = lastMessageElement.value.split('');

            messageChars.forEach(char => {
                let asciCode = char.charCodeAt(0) - 1;
                decodedMessage += String.fromCharCode(asciCode);
            });
        }

        lastMessageElement.value = decodedMessage;
    }
}