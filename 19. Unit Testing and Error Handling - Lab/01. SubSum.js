function subSum(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > array.length - 1) {
        endIndex = array.length - 1;
    }

    let numbers = array.map(x => Number(x));

    let sumNumbers = 0;

    for(let i = startIndex; i <= endIndex; i++) {
        sumNumbers += numbers[i];
    }

    return sumNumbers;
}

console.log(subSum(
    [1.1, 2.2, 3.3, 4.4, 5.5], -3, 1
)); // 3.3