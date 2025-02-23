function biggerHalf(array) {
    let sortedArray = array.sort( (a, b) => a - b);
    let elementsToTake = Math.ceil(array.length / 2);

    let resultArray = sortedArray.slice(array.length - elementsToTake, array.length);
    return resultArray;
}