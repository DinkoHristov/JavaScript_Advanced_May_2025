function solve(input) {
    let finalCoctail = [];
    let coctail = [];

    input.forEach(element => {
        let [name, quantity] = element.split(' => ');

        let foundFruit = coctail.find(c => c.name == name);

        if (foundFruit) {
            foundFruit.quantity += Number(quantity);
        } else {
            coctail.push({
                name,
                quantity: Number(quantity),
            });
        }

        foundFruit = coctail.find(c => c.name == name);

        if (foundFruit.quantity >= 1000) {
            let foundFinalFruit = finalCoctail.find(c => c.name == name);

            if (foundFinalFruit) {
                foundFinalFruit.quantity += parseInt(foundFruit.quantity / 1000);
            } else {
                finalCoctail.push({
                    name: foundFruit.name,
                    quantity: parseInt(foundFruit.quantity / 1000),
                });
            }

            foundFruit.quantity -= parseInt(foundFruit.quantity / 1000) * 1000;
        }
    });

    finalCoctail.forEach(juice => {
        console.log(`${juice.name} => ${juice.quantity}`);
    });
}