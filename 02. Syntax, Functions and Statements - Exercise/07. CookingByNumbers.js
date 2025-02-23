function cookingByNumbers(startingPoint, ...commands) {
//     •	chop - divide the number by two
// •	dice - square root of a number
// •	spice - add 1 to the number
// •	bake - multiply number by 3
// •	fillet - subtract 20% from the number

    let number = parseInt(startingPoint);
    commands.forEach(command => {
        switch (command) {
            case 'chop':
                number = number / 2
                console.log(number);
                break;

            case 'dice':
                number = Math.sqrt(number, 2);
                console.log(number);
                break;

            case 'spice':
                number = number + 1
                console.log(number)
                break;

            case 'bake':
                number = number * 3;
                console.log(number);
                break;

            case 'fillet':
                number = number - number * 0.2;
                console.log(number);
                break;
        }
    });
}