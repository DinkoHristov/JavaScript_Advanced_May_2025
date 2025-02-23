function rotateArray(array, rotationsCOunt) {
    for (let i = 1; i <= rotationsCOunt; i++) {
        let currentElement = array.pop();
        array.unshift(currentElement);
    }

    console.log(array.join(' '));
}