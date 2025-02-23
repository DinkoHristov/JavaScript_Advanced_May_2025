function greatestCommonDivisor(numOne, numTwo) {
    let numOneDivisors = new Array();
    for (let currNumber = 0; currNumber <= numOne; currNumber++) {
        if (numOne % currNumber == 0) {
            numOneDivisors.push(currNumber);
        }
    }

    let numTwoDivisors = new Array();
    for (let currNumber = 0; currNumber <= numTwo; currNumber++) {
        if (numTwo % currNumber == 0) {
            numTwoDivisors.push(currNumber);
        }
    }

    let commonDivisors = numOneDivisors.filter(divisor => numTwoDivisors.includes(divisor));
    let greatesCommonDIvisor = Math.max(...commonDivisors);

    console.log(greatesCommonDIvisor);
}