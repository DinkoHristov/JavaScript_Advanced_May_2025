function solve() {
  let textElement = document.getElementById('text');
  let namingConventionElement = document.getElementById('naming-convention');
  let resultElement = document.getElementById('result');
  
  if (namingConventionElement.value === 'Camel Case') {
    let words = textElement.value.split(' ').map(x => x.toLowerCase());

    let newWord = '';
    words.forEach( (word, index) => {
      if (index === 0) {
        newWord += word;
      } else {
        newWord += word[0].toUpperCase() + word.slice(1, word.length);
      }
    });

    resultElement.textContent = newWord;
  } else if (namingConventionElement.value === 'Pascal Case') {
    let words = textElement.value.split(' ').map(x => x.toLowerCase());

    let newWord = '';
    words.forEach( (word, index) => {
      newWord += word[0].toUpperCase() + word.slice(1, word.length);
    });

    resultElement.textContent = newWord;
  } else {
    resultElement.textContent = 'Error!';
  }

  textElement.value = '';
  namingConventionElement.value = '';
}