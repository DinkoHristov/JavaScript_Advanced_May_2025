function diagonalAttack(numbers) {
    let parsedMatrix = [];
    for (let row = 0; row < numbers.length; row++) {
        let currentRowNumbers = [];
        let currentRow = numbers[row].split(' ');

        currentRow.forEach(number => {
            currentRowNumbers.push(Number(number));
        });

        parsedMatrix.push(currentRowNumbers);
    }

    let mainDiagonalSum = 0;
    for (let row = 0; row < parsedMatrix.length; row++) {
        for (let col = 0; col < parsedMatrix.length; col++) {
            if (row === col) {
                mainDiagonalSum += parsedMatrix[row][col];
            }
        }
    }

    let secondDiagonalSum = 0;
    for (let row = 0; row < parsedMatrix.length; row++) {
        for (let col = 0; col < parsedMatrix.length; col++) {
            if (row === parsedMatrix.length - col - 1) {
                secondDiagonalSum += parsedMatrix[row][col];
            }
        }
    }

    if (mainDiagonalSum === secondDiagonalSum) {
        for (let row = 0; row < parsedMatrix.length; row++) {
            for (let col = 0; col < parsedMatrix.length; col++) {
                if (row !== col && row !== parsedMatrix.length - col - 1) {
                    parsedMatrix[row][col] = mainDiagonalSum;
                }
            }
        }
    }

    parsedMatrix.forEach(element => console.log(element.join(' ')));
}