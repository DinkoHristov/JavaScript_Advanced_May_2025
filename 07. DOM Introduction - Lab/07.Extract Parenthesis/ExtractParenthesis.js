function extract(content) {
    let pElement = document.getElementById(content);

    let parenthesizedText = pElement.textContent.match(/\((.*?)\)/g);
    let names = parenthesizedText.map(x => x.replaceAll('(', '')).map(x => x.replaceAll(')', ''));
    
    return names.join('; ');
}