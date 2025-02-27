function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchInputElement = document.getElementById('searchField');
      let tableBodyElement = document.getElementsByClassName('container')[0].querySelector('tbody');
      let trElements = Array.from(tableBodyElement.querySelectorAll('tr'));

      trElements.forEach(element => {
         if (element.classList.contains('select')) {
            element.classList.remove('select');
         }
      });

      trElements.forEach(element => {
         let rowInfo = element.textContent.split('\n').map(x => x.trim()).filter(x => x !== '');

         rowInfo.forEach(cell => {
            if (cell.includes(searchInputElement.value) && searchInputElement.value !== '') {
               element.classList.add('select');
            }
         });
      });

      searchInputElement.value = '';
   }
}