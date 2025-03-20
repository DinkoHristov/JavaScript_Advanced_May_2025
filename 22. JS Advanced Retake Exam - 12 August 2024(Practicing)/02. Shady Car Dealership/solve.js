class ShadyCarDealership {
    constructor(dealerName) {
        this.dealerName = dealerName;
        this.availableCars = [];
        this.soldCars = [];
        this.revenue = 0;
    }

    addCar (model, year, mileage, price) {
        if (model.trim() === '' || typeof(year) !== 'number' || year < 1950 || mileage < 0 || price < 0) {
            throw new Error('Invalid car!');
        }

        this.availableCars.push({
            model,
            year,
            mileage,
            price,
        });

        return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
    }

    sellCar (model, desiredYear) {
        let foundCar = this.availableCars.find(x => x.model == model);

        if (foundCar === undefined) {
            return `${model} was not found!`;
        }

        let yearDifference = Math.abs(foundCar.year - desiredYear);

        if (foundCar.year < desiredYear && yearDifference <= 5) {
            foundCar.price -= foundCar.price * 0.10;
        } else if (foundCar.year < desiredYear && yearDifference > 5) {
            foundCar.price -= foundCar.price * 0.20;
        }

        this.availableCars.splice(this.availableCars.indexOf(foundCar), 1);
        this.soldCars.push(foundCar);
        this.revenue += foundCar.price;

        return `${foundCar.model} (${foundCar.year}) was sold for ${foundCar.price.toFixed(2)}$`;
    }

    prepareCarForSale (model) {
        let foundCar = this.availableCars.find(x => x.model == model);

        if (foundCar === undefined) {
            return `${model} was not found for preparation!`;
        }

        foundCar.mileage -= foundCar.mileage * 0.50;
        foundCar.price += foundCar.price * 0.30;

        return `${foundCar.model} (${foundCar.year}) is prepared for sale with ${foundCar.mileage} km. - ${foundCar.price.toFixed(2)}$`;
    }

    salesJournal (criteria) {
        if (criteria !== 'year' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }

        if (criteria === 'year') {
            this.soldCars.sort( (a, b) => b.year - a.year);
        } else if (criteria === 'model') {
            this.soldCars.sort( (a, b) => a.model.localeCompare(b.model));
        }

        let result = '';

        result += `${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$\n`;
        result += `${this.soldCars.length} cars sold:\n`;

        result += this.soldCars.map(x => `${x.model} (${x.year}) / ${x.mileage} km. / ${x.price.toFixed(2)}$`).join('\n');
        
        return result.trimEnd();
    }
}

const dealership = new ShadyCarDealership('Shady Motors');

console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
console.log(dealership.prepareCarForSale('Honda CR-V'));
console.log(dealership.prepareCarForSale('BMW X3'));
console.log(dealership.sellCar('Honda CR-V', 2012));
console.log(dealership.sellCar('BMW X3', 2012));
console.log(dealership.salesJournal('model'));