function calculateMoney(fruit, weightGrams, priceKilo) {
    let weightKilos = (weightGrams / 1000);
    let money = weightKilos * priceKilo;

    console.log(`I need $${money.toFixed(2)} to buy ${weightKilos.toFixed(2)} kilograms ${fruit}.`);
}