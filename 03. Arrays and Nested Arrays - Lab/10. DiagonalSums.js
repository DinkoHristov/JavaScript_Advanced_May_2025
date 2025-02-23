function diagonalSums(array) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array.length; col ++) {
            if (row === col) {
                mainDiagonalSum += array[row][col];
            }
            
            if (row === array.length - col - 1) {
                secondaryDiagonalSum += array[row][col];
            }
        }
    }

    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
}