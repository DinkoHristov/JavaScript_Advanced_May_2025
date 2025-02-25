function cityTaxes(name, population, treasury) {
    class City {
        constructor (name, population, treasury) {
            this.name = name;
            this.population = population;
            this.treasury = treasury;
            this.taxRate = 10;
        }

        collectTaxes() {
            this.treasury += population * this.taxRate;
        }

        applyGrowth(percentage) {
            this.population *= (1 + (percentage / 100));
        }

        applyRecession(percentage) {
            this.treasury *= (1 - (percentage / 100));
        }
    }

    return new City(name, population, treasury);
}