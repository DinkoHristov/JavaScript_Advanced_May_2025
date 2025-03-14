class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    plus(number) {
        if (typeof(number) == 'number') {
            let newValue = this.value + number;

            return new Hex(newValue);
        }

        let newValue = this.value + number;

        return new Hex(newValue);
    }

    minus(number) {
        if (typeof(number) == 'number') {
            let newValue = this.value - number;

            return new Hex(newValue);
        }

        let newValue = this.value - number;

        return new Hex(newValue);
    }

    parse(string) {
        return Number(parseInt(string, 16));
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));

// Expected Output:
// -> 0XFF
// -> 0XF
// -> true
// -> 2730