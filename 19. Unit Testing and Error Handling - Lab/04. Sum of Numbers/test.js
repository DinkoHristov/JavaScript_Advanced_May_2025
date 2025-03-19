const assert = require('chai').assert;
const sum = require('./sum').sum;

describe('sum function Tests', () => {

    describe('Test the sum of the array', () => {
        it('Returned correct sum with positive values array only', () => {
            assert.equal(sum([1, 2, 3, 4, 5, 6]), 21);
        });

        it('Returned correct sum with negative values array only', () => {
            assert.equal(sum([-1, -2, -3, -4, -5, -6]), -21);
        });
    });

});