function sameNumbers(number) {
    let allDigits = new Array();
    let sumDigits = 0;

    while(number > 0) {
        let currentDigit = number % 10;

        sumDigits += currentDigit;
        allDigits.push(currentDigit);
        number = parseInt(number / 10);
    }

    let areDigitsEqual = allDigits.every(digit => digit == allDigits[0]);

    console.log(areDigitsEqual);
    console.log(sumDigits);
}