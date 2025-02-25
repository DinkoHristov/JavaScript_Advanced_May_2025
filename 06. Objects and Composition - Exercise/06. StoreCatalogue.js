function storeCatalogue(input) {
    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }

    let products = [];

    for (let i = 0; i < input.length; i++) {
        let productInfo = input[i].split(' : ');

        let product = new Product(productInfo[0], Number(productInfo[1]));
        products.push(product);
    }

    products.sort( (a, b) => a.name.localeCompare(b.name));

    let alphabets = [];
    for (let j = 0; j < products.length; j++) {
        let currentProduct = products[j];

        if (!alphabets.some(x => x == currentProduct.name[0])) {
            alphabets.push(currentProduct.name[0]);
        }
    }

    let currentAlphabet = alphabets.shift();
    console.log(currentAlphabet);

    for (let i = 0; i < products.length; i++) {
        let product = products[i];

        if (currentAlphabet !== product.name[0]) {
            currentAlphabet = alphabets.shift();
            console.log(currentAlphabet);
        }

        console.log(`  ${product.name}: ${product.price}`);
    }
}