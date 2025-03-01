function solve() {
  let [inputTextArea, outputTextArea] = document.getElementsByTagName('textarea');
  let [generateBtn, buyBtn] = document.getElementsByTagName('button');
  let tableBody = document.querySelector('tbody');

  generateBtn.addEventListener('click', () => {
      let furnitureArray = JSON.parse(inputTextArea.value);

      furnitureArray.forEach(furniture => {
          let row = document.createElement('tr');

          row.innerHTML = `
              <td><img src="${furniture.img}"></td>
              <td><p>${furniture.name}</p></td>
              <td><p>${furniture.price}</p></td>
              <td><p>${furniture.decFactor}</p></td>
              <td><input type="checkbox"></td>
          `;

          tableBody.appendChild(row);
      });

      inputTextArea.value = '';
  });

  buyBtn.addEventListener('click', () => {
      let selectedFurniture = Array.from(document.querySelectorAll('tbody tr'))
          .filter(row => row.querySelector('input[type="checkbox"]').checked)
          .map(row => ({
              name: row.children[1].textContent.trim(),
              price: Number(row.children[2].textContent.trim()),
              decFactor: Number(row.children[3].textContent.trim())
          }));

      if (selectedFurniture.length > 0) {
          let totalPrice = selectedFurniture.reduce((sum, f) => sum + f.price, 0);
          let avgDecFactor = selectedFurniture.reduce((sum, f) => sum + f.decFactor, 0) / selectedFurniture.length;

          outputTextArea.value = `Bought furniture: ${selectedFurniture.map(f => f.name).join(', ')}\n`
              + `Total price: ${totalPrice.toFixed(2)}\n`
              + `Average decoration factor: ${avgDecFactor}`;
      }
  });
}