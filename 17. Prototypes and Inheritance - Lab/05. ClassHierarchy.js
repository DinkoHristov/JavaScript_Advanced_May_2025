function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {
            throw new Error("Area getter must be implemented in subclasses");
        }

        convertUnits(value) {
            if (this.units === 'mm') return value * 10;
            if (this.units === 'm') return value / 100;
            return value;
        }

        changeUnits(unit) {
            this.units = unit;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units = 'cm') {
            super(units);
            this.baseRadius = radius;
        }

        get radius() {
            return this.convertUnits(this.baseRadius);
        }

        get area() {
            return Math.PI * this.radius ** 2;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units = 'cm') {
            super(units);
            this.baseWidth = width;
            this.baseHeight = height;
        }

        get width() {
            return this.convertUnits(this.baseWidth);
        }

        get height() {
            return this.convertUnits(this.baseHeight);
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return { Figure, Circle, Rectangle };
}


let classes = solve();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50