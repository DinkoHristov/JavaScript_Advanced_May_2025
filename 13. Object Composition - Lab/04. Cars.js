function solve(input) {
    function processCars() {
        let cars = [];

        return {
            create: name => cars.push({ name }),
            inherit: function(name, parentName) {
                let foundCar = cars.find(c => c.name == parentName);

                if (foundCar) {
                    newCar = Object.create(foundCar);
                    newCar.name = name;

                    cars.push(newCar);
                }
            }, 
            set: function(name, key, value) {
                let foundCar = cars.find(c => c.name == name);

                if (foundCar) {
                    foundCar[key] = value;
                }
            },
            print: function(name) {
                let foundCar = cars.find(c => c.name == name);

                let result = [];
                for (const key in foundCar) {
                    if (key == 'name') {
                        continue;
                    }
                    
                    result.push(`${key}:${foundCar[key]}`);
                }
                console.log(result.join(', '));
            }
        }
    }

    let carsProcessors = processCars();

    input.forEach(currCommand => {
        [command, ...others] = currCommand.split(' ');

        if (command == 'create' && others.length == 1) {
            let [name] = others;

            carsProcessors[command](name);
        } else if (command == 'create' && others.length > 1) {
            let [name, otherCommand, parentName] = others;

            carsProcessors[otherCommand](name, parentName);
        } else if (command == 'set') {
            let [name, key, value] = others;

            carsProcessors[command](name, key, value);
        } else if (command == 'print') {
            let [name] = others;

            carsProcessors[command](name);
        }
    });
}