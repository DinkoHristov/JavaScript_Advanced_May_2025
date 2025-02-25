function rectangle(width, height, color) {
    class Rectangle {
        constructor(width, height, color) {
            this.width = width;
            this.height = height;
            this.color = color;
        }

        calcArea() {
            return this.width * this.height;
        }
    }

    let newColor = color[0].toUpperCase() + color.slice(1, color.length);
    return (new Rectangle(width, height, newColor));
}