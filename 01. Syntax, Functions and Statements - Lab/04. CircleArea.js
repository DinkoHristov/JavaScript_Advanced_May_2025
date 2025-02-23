function circleArea(input) {
    if (typeof(input) === 'number') {
        let area = (Math.pow(input, 2) * Math.PI).toFixed(2);
        console.log(area);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`);
    }
}