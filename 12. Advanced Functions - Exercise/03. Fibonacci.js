function getFibonator(number = 0) {
    let previousValue = 1;

    return function () {
        let sum = number + previousValue;

        if (sum == 0) {
            previousValue = number;
            number = sum;

            return 1;
        }

        previousValue = number;
        number = sum;

        return sum;
    }
}