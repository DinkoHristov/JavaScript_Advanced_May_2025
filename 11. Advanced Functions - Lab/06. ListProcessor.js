function listProcessor(comamnds) {
    let words = [];

    comamnds.forEach(command => {
        let [currCommand, value] = command.split(' ');

        if (currCommand === 'add') {
            words.push(value);
        } else if (currCommand === 'remove') {
            while (words.some(w => w === value)) {
                let itemIndex = words.indexOf(value);
                words.splice(itemIndex, 1);
            }
        } else if (currCommand === 'print') {
            console.log(words.join(','));
        }
    });
}