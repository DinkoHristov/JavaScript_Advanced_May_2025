function sortArray(array, order) {
    if (order === 'asc') {
        return array.sort( (a, b) => a - b);
    }

    return array.sort( (a, b) => b - a);
}