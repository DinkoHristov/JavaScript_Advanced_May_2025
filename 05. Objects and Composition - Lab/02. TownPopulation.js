function townPopulations(input) {
    class Town {
        constructor(name, population) {
            this.name = name;
            this.population = population;
        }
    }

    let towns = [];
    for (let i = 0; i < input.length; i++) {
        let currentTown = input[i].split(' <-> ');
        let townName = currentTown[0];
        let population = Number(currentTown[1]);

        if (towns.some(x => x.name === townName)) {
            let foundTown = towns.find(x => x.name === townName);

            foundTown.population += population;
        } else {
            let newTown = new Town(townName, population);
            towns.push(newTown);
        }
    }

    towns.forEach(town => {
        console.log(`${town.name} : ${town.population}`);
    });
}