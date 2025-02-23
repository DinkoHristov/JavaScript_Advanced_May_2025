function squareOfStars(number) {
    if (number <= 0) {
        let counter = 5;

        while (counter > 0) {
            console.log('* '.repeat(5));
            counter--;
        }
    } else {
        let counter = number;

        while (counter > 0) {
            console.log('* '.repeat(number));
            counter--;
        }
    }
}