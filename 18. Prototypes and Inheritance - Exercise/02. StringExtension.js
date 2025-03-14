String.prototype.ensureStart = function(str) {
    if (this.startsWith(str)) {
        return this.toString();
    }

    return str.concat(this);
}

String.prototype.ensureEnd = function(str) {
    if (this.endsWith(str)) {
        return this.toString();
    }

    return this.toString().concat(str);
}

String.prototype.isEmpty = function() {
    return this.toString().trim().length === 0;
}

String.prototype.truncate = function(n) {
    if (this.length <= n) {
        return this.toString();
    }

    if (n < 4) {
        return '.'.repeat(n);
    }

    if (this.includes(' ')) {
        let word = this.toString();

        while (word.length > n) {
            let lastSpaceIndex = word.lastIndexOf(' ');

            word = word.substring(0, lastSpaceIndex);
            word += '...';
        }

        return word;
    } else {
        let word = this.toString().substring(0, n - 3);

        return word;
    }
}

String.format = function (string, ...params) {
    let palceholderCounter = 0;

    params.forEach(param => {
        string = string.replace(`{${palceholderCounter}}`, param);
        palceholderCounter++;
    });

    return string;
}

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox', 'quick', 'brown');
str = String.format('jumps {0} {1}', 'dog');

// IIFE wrapped:
// (function solve() {
//     String.prototype.ensureStart = function(str) {
//         if (this.startsWith(str)) {
//             return this.toString();
//         }
    
//         return str.concat(this);
//     }
    
//     String.prototype.ensureEnd = function(str) {
//         if (this.endsWith(str)) {
//             return this.toString();
//         }
    
//         return this.toString().concat(str);
//     }
    
//     String.prototype.isEmpty = function() {
//         return this.toString().trim().length === 0;
//     }
    
//     String.prototype.truncate = function(n) {
//         if (this.length <= n) {
//             return this.toString();
//         }
    
//         if (n < 4) {
//             return '.'.repeat(n);
//         }
    
//         if (this.includes(' ')) {
//             let word = this.toString();
    
//             while (word.length > n) {
//                 let lastSpaceIndex = word.lastIndexOf(' ');
    
//                 word = word.substring(0, lastSpaceIndex);
//                 word += '...';
//             }
    
//             return word;
//         } else {
//             let word = this.toString().substring(0, n - 3);
    
//             return word;
//         }
//     }
    
//     String.format = function (string, ...params) {
//         let palceholderCounter = 0;
    
//         params.forEach(param => {
//             string = string.replace(`{${palceholderCounter}}`, param);
//             palceholderCounter++;
//         });
    
//         return string;
//     }
// })()