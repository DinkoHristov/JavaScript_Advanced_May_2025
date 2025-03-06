function argumentInfo(...input) {
    let result = [];

    input.forEach(element => {
        if (!result.some(x => x.name === typeof(element))) {
            let inputType = typeof(element);
            result.push({
                name: inputType,
                quantity: 1
            });
        } else {
            let foundElement = result.find(x => x.name === typeof(element));
            foundElement.quantity++;
        }
        console.log(`${typeof(element)}: ${element}`);
    });

    let sortedResult = result.sort( (a, b) => b.quantity - a.quantity);

    sortedResult.forEach(element => {
        console.log(`${element.name} = ${element.quantity}`);
    });
}