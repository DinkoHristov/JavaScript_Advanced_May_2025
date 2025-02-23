function addAndRemoveElements(commands) {
    let resultArray = []

    for (let i = 0; i <= commands.length; i++) {
        let currentCommand = commands[i];
        let currentValue = i + 1;

        if (currentCommand === 'add') {
            resultArray.push(currentValue);
        } else if (currentCommand === 'remove') {
            if (resultArray.length > 0) {
                resultArray.pop();
            }
        }
    }

    if (resultArray.length <= 0) {
        console.log('Empty');
    } else {
        resultArray.forEach(element => console.log(element));
    }
}