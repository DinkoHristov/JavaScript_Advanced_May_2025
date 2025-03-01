function solve() {
    let tableElement = document.querySelector('table');
    let divPElement = document.getElementById('check').querySelector('p');

    let inputElements = document.querySelector('tbody').querySelectorAll('input[type="number"]');
    let buttonElements = document.querySelector('tfoot').querySelectorAll('button');

    let checkButtonElement = buttonElements[0];
    let cleatButtonElement = buttonElements[1];

    checkButtonElement.addEventListener('click', checkTheSudoku);
    cleatButtonElement.addEventListener('click', clearTheSudoku);

    function checkTheSudoku() {
        let sudoku = [];

        let row = [];
        let counter = 0;
        inputElements.forEach(inputElement => {
            if (counter <= 3) {
                if (inputElement.value === '') {
                    row.push(0);  
                } else {
                    row.push(Number(inputElement.value));
                }

                counter++;
            }

            if (counter === 3) {
                sudoku.push(row);
                row = [];
                counter = 0;
            }
        });

        let isSudokuFilledCorrect = checkSudoku(sudoku);

        if (isSudokuFilledCorrect) {
            tableElement.style.border = '2px solid green';
            divPElement.textContent = 'You solve it! Congratulations!';
            divPElement.style.color = 'green';
        } else {
            tableElement.style.border = '2px solid red';
            divPElement.textContent = 'NOP! You are not done yet...';
            divPElement.style.color = 'red';
        }
    }

    function clearTheSudoku() {
        inputElements.forEach(inputElement => {
            inputElement.value = '';
        });

        tableElement.style.border = '';
        divPElement.textContent = '';
    }

    function checkSudoku(sudokuMatrix) {
        let isSudokuCorrect = true;

        // Check rows
        for (let row = 0; row < 3; row++) {
            for (let col = 1; col < 3; col++) {
                let firstRowNumber = sudokuMatrix[row][0];
                let nextRowNumber = sudokuMatrix[row][col];

                if (firstRowNumber === nextRowNumber) {
                    isSudokuCorrect = false;
                    break;
                }
            }

            if (!isSudokuCorrect) {
                break;
            }
        }

        // Check cols
        for (let col = 0; col < 3; col++) {
            for (let row = 1; row < 3; row++) {
                let firstColNumber = sudokuMatrix[0][col];
                let nextColElement = sudokuMatrix[row][col];

                if (firstColNumber === nextColElement) {
                    isSudokuCorrect = false;
                    break;
                }

                if (!isSudokuCorrect) {
                    break;
                }
            }
        }

        return isSudokuCorrect;
    }
}