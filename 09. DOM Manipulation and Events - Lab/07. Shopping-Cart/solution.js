function solve() {
   let outputElement = document.querySelector('textarea');
   let checkoutButton = document.querySelector('.checkout');
   let buttonElements = document.querySelectorAll('.add-product');

   buttonElements.forEach(button => {
      button.addEventListener('click', onButtonClicked);
   });

   checkoutButton.addEventListener('click', onCheckoutClicked);

   function onButtonClicked(e) {
      let productName = e.target.parentElement.parentElement.querySelector('.product-title').textContent;
      let productPrice = Number(e.target.parentElement.parentElement.querySelector('.product-line-price').textContent);

      outputElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
   }

   function onCheckoutClicked() {
      let addedItems = outputElement.textContent.split('\n').filter(x => x !== '');

      let listNames = [];
      let totalPrice = 0;
      addedItems.forEach(item => {
         let itemInfo = item.split(' ');

         if (!listNames.some(x => x === itemInfo[1])) {
            listNames.push(itemInfo[1]);
         }
         totalPrice += Number(itemInfo[3]);
      });

      outputElement.textContent += `You bought ${listNames.join(', ')} for ${totalPrice.toFixed(2)}.`;

      buttonElements.forEach(button => {
         button.setAttribute('disabled', true);
      });

      checkoutButton.setAttribute('disabled', true);
   }
}