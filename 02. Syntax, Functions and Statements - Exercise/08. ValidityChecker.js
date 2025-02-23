function validityChecker(x1, y1, x2, y2) {
    let firstComparison = Number.isInteger(Math.sqrt((Math.pow((0 - x1), 2)) + Math.pow((0 - y1), 2)));
    let secondComparison = Number.isInteger(Math.sqrt((Math.pow((x2 - 0), 2)) + Math.pow((y2 - 0), 2)));
    let thirdComparison = Number.isInteger(Math.sqrt((Math.pow((x2 - x1), 2)) + Math.pow((y2 - y1), 2)));

    console.log(`{${x1}, ${y1}} to {${0}, ${0}} is ${firstComparison == true ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {${0}, ${0}} is ${secondComparison == true ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${thirdComparison == true ? 'valid' : 'invalid'}`);
}