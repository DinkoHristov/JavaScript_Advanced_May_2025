function solution() {
    let microElements = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0, };

    const products = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }

    return function(currentCommand) {
        let commandInfo = currentCommand.split(' ');
        let command = commandInfo[0];

        if (command === 'restock') {
            let microelement = commandInfo[1];
            let quantity = Number(commandInfo[2]);

            microElements[microelement] += quantity;

            return 'Success';

        } else if (command === 'prepare') {
            let initialMicros = Object.assign({}, microElements);

            let recipe = commandInfo[1];
            let quantity = Number(commandInfo[2]);

            let productMicros = products[recipe];

            for (let currentMicro of Object.keys(productMicros)) {
                let totalMicro = microElements[currentMicro];
                let requiredAmount = quantity * productMicros[currentMicro];

                if (totalMicro < requiredAmount) {
                    // Restore Micro Elements
                    microElements = initialMicros;

                    return `Error: not enough ${currentMicro} in stock`;
                }

                microElements[currentMicro] -= requiredAmount;
            }

            return 'Success';
        
        } else if (command === 'report') {
            return `protein=${microElements.protein} carbohydrate=${microElements.carbohydrate} fat=${microElements.fat} flavour=${microElements.flavour}`;
        }
    }
}