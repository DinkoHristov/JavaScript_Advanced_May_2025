function lowestPrices(input) {
    class Town {
        constructor(name, product, price) {
            this.name = name;
            this.product = product;
            this.price = price;
        }
    }

    let towns = [];

    for (let i = 0; i < input.length; i++) {
        let townInfo = input[i].split(' | ');

        let town = new Town(townInfo[0], townInfo[1], Number(townInfo[2]));
        towns.push(town);
    }

    let filteredTowns = [];

    for (const town of towns) {
        if (filteredTowns.some(x => x.product === town.product)) {
            let foundTown = filteredTowns.find(x => x.product === town.product);

            if (town.price < foundTown.price) {
                foundTown.name = town.name;
            }
            let minPrice = Math.min(town.price, foundTown.price);
            foundTown.price = minPrice;
        } else {
            let newTown = new Town(town.name, town.product, town.price);
            filteredTowns.push(newTown);
        }
    }

    filteredTowns.forEach(town => console.log(`${town.product} -> ${town.price} (${town.name})`));
}