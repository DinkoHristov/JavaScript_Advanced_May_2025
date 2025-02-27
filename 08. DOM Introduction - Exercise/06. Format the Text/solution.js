function solve() {
  let outputElement = document.getElementById('output');
  let textInputElement = document.getElementById('input');
  let allText = textInputElement.value.split('.').filter(x => x.trim().length > 0);

  let sentencesCount = 0;
  let pTag = document.createElement('p');

  outputElement.textContent = '';

  allText.forEach( (sentence, index) => {
    pTag.textContent += sentence.trim() + '.';
    sentencesCount++;

    if (sentencesCount === 3 || index === allText.length - 1) {
      outputElement.appendChild(pTag);
      pTag = document.createElement('p');
      sentencesCount = 0;
    } else {
      pTag.textContent += ' ';
    }
  });

  textInputElement.value = '';
}