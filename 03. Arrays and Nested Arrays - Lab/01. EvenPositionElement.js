function evenElement(numbers) {
    let evenPositionElements = numbers
        .filter( (x, i) => i % 2 === 0)
        .join(' ');

    console.log(evenPositionElements);
}