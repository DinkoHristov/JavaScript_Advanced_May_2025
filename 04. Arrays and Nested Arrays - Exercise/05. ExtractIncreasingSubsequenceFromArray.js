function extractSubsequence(numbers) {
    let currentBiggestNumber = Number.MIN_SAFE_INTEGER;
    let extractedNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];

        if (currentNumber >= currentBiggestNumber) {
            extractedNumbers.push(currentNumber);
            currentBiggestNumber = currentNumber;
        }
    }

    return extractedNumbers;
}