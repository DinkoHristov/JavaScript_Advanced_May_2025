function ticTacToe(turns) {
    let dashboard = [[false, false, false], [false, false, false], [false, false, false]];
    const playerOneMark = 'X';
    const playerTwoMark = 'O';

    let isPlayerOneTurn = true;
    let emptyCells = 9; // Track remaining empty spaces to avoid excessive loops

    function checkDashboard(r, c, mark) {
        // Check row
        if (dashboard[r][0] === mark && dashboard[r][1] === mark && dashboard[r][2] === mark) {
            console.log(`Player ${mark} wins!`);
            return true;
        }
        // Check column
        if (dashboard[0][c] === mark && dashboard[1][c] === mark && dashboard[2][c] === mark) {
            console.log(`Player ${mark} wins!`);
            return true;
        }
        // Check main diagonal
        if (r === c && dashboard[0][0] === mark && dashboard[1][1] === mark && dashboard[2][2] === mark) {
            console.log(`Player ${mark} wins!`);
            return true;
        }
        // Check secondary diagonal
        if (r + c === 2 && dashboard[0][2] === mark && dashboard[1][1] === mark && dashboard[2][0] === mark) {
            console.log(`Player ${mark} wins!`);
            return true;
        }
        return false;
    }

    function printDashboard() {
        for (let row of dashboard) {
            console.log(row.map(cell => (cell === false ? 'false' : cell)).join('\t'));
        }
    }

    for (let i = 0; i < turns.length; i++) {
        let [r, c] = turns[i].split(' ').map(Number);

        if (dashboard[r][c] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue; // No need to decrement `i`—just skip this turn.
        }

        let currentMark = isPlayerOneTurn ? playerOneMark : playerTwoMark;
        dashboard[r][c] = currentMark;
        emptyCells--; // Decrement empty cell count
        isPlayerOneTurn = !isPlayerOneTurn;

        if (checkDashboard(r, c, currentMark)) {
            printDashboard();
            return;
        }

        // Check for draw
        if (emptyCells === 0) {
            console.log("The game ended! Nobody wins :(");
            printDashboard();
            return;
        }
    }
}