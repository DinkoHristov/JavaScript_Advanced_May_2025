function biggestElement(numbers) {
    let biggestElement = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < numbers.length; i++) {
        let currentBiggestElement = numbers[i].sort( (a, b) => a - b).pop();

        if (currentBiggestElement > biggestElement) {
            biggestElement = currentBiggestElement;
        }
    }

    return biggestElement;
}