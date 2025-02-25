function jansNotations(instructions) {
    let saved = [];
    
    let isNotEnoughArgsHit = false;
    for (let i = 0; i < instructions.length; i++) {
        if (typeof(instructions[i]) === 'number') {
            saved.push(instructions[i]);
        } else {
            if (saved.length >= 2) {
                let secondNumber = saved.pop();
                let firstNumber = saved.pop();

                let newValue = 0;
                if (instructions[i] === '+') {
                    newValue = firstNumber + secondNumber;
                } else if (instructions[i] === '-') {
                    newValue = firstNumber - secondNumber;
                } else if (instructions[i] === '*') {
                    newValue = firstNumber * secondNumber;
                } else if (instructions[i] === '/') {
                    newValue = firstNumber / secondNumber;
                } 

                saved.push(newValue);
                isNotEnoughArgsHit = false;
            } else {
                console.log('Error: not enough operands!');
                isNotEnoughArgsHit = true;
            } 
        }
    }

    if (saved.length > 1) {
        console.log('Error: too many operands!');
    } else if (!isNotEnoughArgsHit) {
        console.log(saved[0]);
    }
}