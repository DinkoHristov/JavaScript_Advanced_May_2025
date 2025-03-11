function solve(input) {
    let result = [];

    input.forEach(element => {
        let [letter] = element;
        let [name, price] = element.split(' : ');

        let foundLetter = result.find(x => x.letter == letter);

        if (foundLetter) {
            if (foundLetter.items == undefined) {  
                foundLetter.items = [];
                foundLetter.items.push(`${name}: ${Number(price)}`);
            } else {
                foundLetter.items.push(`${name}: ${Number(price)}`);
            }
        } else {
            result.push({
                letter
            });

            foundLetter = result.find(x => x.letter == letter);

            if (foundLetter.items == undefined) {  
                foundLetter.items = [];
                foundLetter.items.push(`${name}: ${Number(price)}`);
            } else {
                foundLetter.items.push(`${name}: ${Number(price)}`);
            }
        }
    });

    result.sort( (a, b) => a.letter.localeCompare(b.letter));

    result.forEach(element => {
        console.log(element.letter);

        element.items.sort( (a, b) => a.localeCompare(b) ).forEach(item => {
            console.log(`  ${item}`);
        });
    });
}