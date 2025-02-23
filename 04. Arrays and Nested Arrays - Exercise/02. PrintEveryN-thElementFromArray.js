function printNthElement(array, number) {
    let resultArray = [];

    for (let i = 0; i < array.length; i += number) {
        resultArray.push(array[i]);
    }

    return resultArray;
}