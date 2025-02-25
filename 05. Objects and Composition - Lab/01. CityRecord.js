function cityRecord(cityName, population, treasury) {
    class City {
        constructor(name, population, treasury) {
            this.name = name;
            this.population = population;
            this.treasury = treasury;
        }
    }

    let city = new City(cityName, population, treasury);

    return city;
}