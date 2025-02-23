function aggregateElements(array) {
    let sum = array.reduce( (accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);
    console.log(sum);

    let inverseSum = array.reduce( (accumulator, currentValue) => {
        return accumulator + 1 / currentValue;
    }, 0);
    console.log(inverseSum);

    let concat = '';
    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];

        concat += currentNumber;
    }
    console.log(concat);
}