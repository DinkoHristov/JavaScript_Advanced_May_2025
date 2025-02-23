function sortingNumbers(numbers) {
    let sortedNumbers = [];

    while (numbers.length > 0) {
        numbers.sort( (a, b) => a - b);

        if (numbers.length >= 2) {
            let minNumber = numbers.shift();
            let maxNumber = numbers.pop(); 

            sortedNumbers.push(minNumber);
            sortedNumbers.push(maxNumber);
        } else {
            let maxNumber = numbers.pop(); 
            sortedNumbers.push(maxNumber);
        }
    }

    return sortedNumbers;
}