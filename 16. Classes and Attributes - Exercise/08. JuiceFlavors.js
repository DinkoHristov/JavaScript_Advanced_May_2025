function solve(input) {
    let juices = [];
    let obtainedBottles = [];

    input.forEach(element => {
        let [name, quantity] = element.split(' => ');

        let foundJuice = juices.find(j => j.name == name);
        if (foundJuice) {
            foundJuice.quantity += Number(quantity);
        } else {
            juices.push({
                name,
                quantity: Number(quantity),
            });
        }

        foundJuice = juices.find(j => j.name == name);
        if (foundJuice.quantity >= 1000) {
            let bottlesCount = parseInt(foundJuice.quantity / 1000);

            foundJuice.quantity -= bottlesCount * 1000;

            let foundBottle = obtainedBottles.find(b => b.name == foundJuice.name);
            if (foundBottle) {
                foundBottle.bottles += bottlesCount;
            } else {
                obtainedBottles.push({
                    name: foundJuice.name,
                    bottles: bottlesCount,
                });
            }
        }
    });

    obtainedBottles.forEach(juice => {
       console.log(`${juice.name} => ${juice.bottles}`); 
    });
}

solve(
    ['Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789'
    ]             
);

// Expected Output:
// -> Pear => 8
// -> Watermelon => 10
// -> Kiwi => 4