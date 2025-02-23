function smallestTwoNumbers(numbers) {
    let smallestNumbers = numbers.sort( (a, b) => a - b).slice(0, 2);

    console.log(smallestNumbers.join(' '));
}