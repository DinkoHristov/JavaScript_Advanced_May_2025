function mathOperations(numOne, numTwo, strInput) {
    switch (strInput) {
        case '+':
            console.log(numOne + numTwo)
            break;
        
        case '-':
            console.log(numOne - numTwo)
            break;

        case '*':
            console.log(numOne * numTwo)
            break;

        case '/':
            console.log(numOne / numTwo)
            break;

        case '%':
            console.log(numOne % numTwo)
            break;

        case '**':
            console.log(numOne ** numTwo)
            break;
    }
}