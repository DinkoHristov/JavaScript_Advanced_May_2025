function solve() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    }
    Array.prototype.skip = function(n) {
        if (n >= 0 && n < this.length) {
            return this.slice(n, this.length);
        }
    }
    Array.prototype.take = function(n) {
        if (n >= 0 && n < this.length) {
            return this.slice(0, n);
        }
    }
    Array.prototype.sum = function() {
        return this.reduce( (acc, el) => acc += el, 0);
    }
    Array.prototype.average = function() {
        return this.sum() / this.length;
    }
};

solve();
let myArr = [1, 2, 3, 4, 5, 6];
console.log(myArr.last()); // 6
console.log(myArr.skip(2)); // [3, 4, 5, 6]
console.log(myArr.take(3)) // [1, 2, 3]
console.log(myArr.sum()); // 21
console.log(myArr.average()); // 3.5

// IIFE wrapped:
// (function solve() {
//     Array.prototype.last = function() {
//         return this[this.length - 1];
//     }
//     Array.prototype.skip = function(n) {
//         if (n >= 0 && n < this.length) {
//             return this.slice(n, this.length);
//         }
//     }
//     Array.prototype.take = function(n) {
//         if (n >= 0 && n < this.length) {
//             return this.slice(0, n);
//         }
//     }
//     Array.prototype.sum = function() {
//         return this.reduce( (acc, el) => acc += el, 0);
//     }
//     Array.prototype.average = function() {
//         return this.sum() / this.length;
//     }
// })();