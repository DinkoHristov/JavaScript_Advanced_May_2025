function search() {
   let ulLiElements = Array.from(document.getElementById('towns').children);
   let searchElement = document.getElementById('searchText');
   let resultElement = document.getElementById('result');

   let matchesCount = 0;
   let searchElementLength = searchElement.value.length;

   ulLiElements.forEach(li => {
      if (li.style.fontWeight === 'bold') {
         li.style.removeProperty('font-weight');
         li.style.removeProperty('text-decoration');         
      }
   });
   
   ulLiElements.forEach(li => {
      if (li.textContent.includes(searchElement.value) && searchElement.value !== '') {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';

         matchesCount++;
      }
   });

   resultElement.textContent = '';
   resultElement.textContent = `${matchesCount} matches found`;
}
