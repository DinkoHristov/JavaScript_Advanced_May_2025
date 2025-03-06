function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    let inputArray = JSON.parse(input);

    let result = [];
    inputArray.forEach(element => {
        result.push({
            area: area.call(element),
            volume: vol.call(element),
        })
    });

    return result;
}