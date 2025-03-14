function solve(input) {
    let cars = {};

    input.forEach(element => {
        let [brand, model, producedCars] = element.split(' | ');

        let foundCar = cars[brand];

        if (foundCar) {
            let foundModel = foundCar.find(c => c.model == model);

            if (foundModel) {
                foundModel.producedCars += Number(producedCars);
            } else {
                foundCar.push({
                    model,
                    producedCars: Number(producedCars),
                });
            }
        } else {
            cars[brand] = [{
                model,
                producedCars: Number(producedCars),
            }];
        }
    });

    for (const brand in cars) {
        console.log(`${brand}`);
        let allCars = cars[brand].map(c => `###${c.model} -> ${c.producedCars}`).join('\n');

        console.log(allCars);
    }
}

solve(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'
    ]        
);

// Expected Output:
// -> Audi
// -> ###Q7 -> 1000
// -> ###Q6 -> 100
// -> BMW
// -> ###X5 -> 1000
// -> ###X6 -> 100
// -> Citroen
// -> ###C4 -> 145
// -> ###C5 -> 10
// -> Volga
// -> ###GAZ-24 -> 1000000
// -> Lada
// -> ###Niva -> 1000000
// -> ###Jigula -> 1000000