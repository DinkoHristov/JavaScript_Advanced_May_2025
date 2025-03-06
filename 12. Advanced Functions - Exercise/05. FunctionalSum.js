function add(number) {
    let sum = number;

    function inner(newNumber) {
        sum += newNumber;

        return inner;
    }

    inner.toString = function () {
        return sum;
    };

    return inner;
}