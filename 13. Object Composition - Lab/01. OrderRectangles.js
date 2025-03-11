function solve(input) {
    let result = input.map(([width, height]) => {
        return {
            width,
            height,
            area: function() {
                return this.width * this.height;
            },
            compareTo: function(rect) {
                return rect.area() - this.area() || rect.width - this.width;
            }
        };
    })
    .sort( (a, b) => a.compareTo(b));

    return result;
}