function lastKeyNumbers(n, k) {
    let array = [];
    const firstElement = 1;
    array.push(firstElement);

    for (let i = 1; i < n; i++) {
        let arrCopy = array.slice();
        let cutCount = 0;
        if (i > k) {
            cutCount = i - k;
        }

        let currentElement = arrCopy
            .slice(cutCount, i)
            .reduce( (acc, el) => acc + el, 0);
        
        array.push(currentElement);
    }

    return array;
}