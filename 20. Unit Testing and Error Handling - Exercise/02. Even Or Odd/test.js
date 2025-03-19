const assert = require('chai').assert;
const isOddOrEven = require('./solve').isOddOrEven;

describe('isOddOrEven Function Tests', () => {

    describe('Test input type', () => {
        it('Input type is not correct and returns undefined', () => {
            assert.isUndefined(isOddOrEven(10));
        });
    });

    describe('Test even or odd', () => {
        it('Function returns even when parameter is empty and his length has even length', () => {
            assert.equal(isOddOrEven(''), 'even');
        });
        
        it('Function returns even when parameter and his length has even length', () => {
            assert.equal(isOddOrEven('hello my'), 'even');
        });

        it('Function returns odd when parameter and his length has odd length', () => {
            assert.equal(isOddOrEven('hello my friend'), 'odd');
        });
    });

});