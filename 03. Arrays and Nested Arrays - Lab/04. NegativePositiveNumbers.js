function negativeAndPositioveNumbers(numbers) {
    let sortedArray = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            sortedArray.unshift(numbers[i]);
        } else {
            sortedArray.push(numbers[i]);
        }
    }

    return sortedArray.forEach(element => {
        console.log(element);
    });
}