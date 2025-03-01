function create(words) {
   let mainDivElement = document.getElementById('content');

   words.forEach(word => {
      let newDiv = document.createElement('div');
      let newParagraph = document.createElement('p');

      newParagraph.textContent = word;
      newParagraph.style.display = 'none';

      newDiv.appendChild(newParagraph);
      mainDivElement.appendChild(newDiv);
   });

   mainDivElement.addEventListener('click', onDisplayContent);

   function onDisplayContent(e) {
      let paragraph = e.target.querySelector('p');

      paragraph.style.display = '';
   }
}