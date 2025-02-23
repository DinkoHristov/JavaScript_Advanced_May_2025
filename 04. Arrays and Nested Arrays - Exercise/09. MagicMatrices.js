function magicMatrix(numbers) {
    let rowSum = Number.MIN_SAFE_INTEGER;
    let colSum = Number.MIN_SAFE_INTEGER;

    let isMatrixMagical = true;
    for (let row = 0; row < numbers.length; row++) {
        let currentRowSum = numbers[row].reduce( (acc, number) => acc + number, 0);
        
        if (row === 0) { // Do this only for the first row as default row sum
            rowSum = currentRowSum;
        }

        if (rowSum !== currentRowSum) {
            isMatrixMagical = false;
            break;
        }
    }

    if (!isMatrixMagical) {
        return false;
    } else {
        for (let col = 0; col < numbers.length; col++) {
            let currentColSum = 0;

            for (let row = 0; row < numbers.length; row++) {
                currentColSum += numbers[row][col];
            }

            if (col == 0) { // Do this only for the first col as default col sum
                colSum = currentColSum;
            }

            if (colSum !== currentColSum) {
                isMatrixMagical = false;
                break;
            }
        }
    }

    if (!isMatrixMagical) {
        return false;
    }

    return true;
}