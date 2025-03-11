function solve(input) {
    let cars = [];
    
    input.forEach(element => {
        let [carBrand, carModel, producedCars] = element.split(' | ');

        let foundCar = cars.find(c => c.brand == carBrand);

        if (foundCar) {
            let foundModel = foundCar.cars.find(c => c.model == carModel);

            if (foundModel) {
                foundModel.producedCars += Number(producedCars);
            } else {
                foundCar.cars.push({
                    model: carModel,
                    producedCars: Number(producedCars),
                });
            }
        } else {
            cars.push({
                brand: carBrand,
                cars: [{
                    model: carModel,
                    producedCars: Number(producedCars),
                }]
            });
        }
    });

    cars.forEach(car => {
        console.log(car.brand);

        car.cars.forEach(model => {
            console.log(`###${model.model} -> ${model.producedCars}`);
        });
    });
}