const assert = require('chai').assert;
const isSymmetric = require('./isSymetric').isSymmetric;

describe('isSymmetric Function Tests', () => {

    describe('Test the functionalityt', () => {
        it('Passed argument is not an array and should return false', () => {
            assert.isFalse(isSymmetric('not array'));
        });

        it('Output is correct and array is mirrored and returns true', () => {
            assert.isTrue(isSymmetric([1, 2, 1]));
        });

        it('Output is correct and array is mirrored and returns true', () => {
            assert.isTrue(isSymmetric([]));
        });

        it('Output is correct and array is not mirrored and returns false', () => {
            assert.isFalse(isSymmetric([1, 2, 3]));
        });

        it('Output is correct and array is not mirrored and returns false', () => {
            assert.isFalse(isSymmetric([1, 2, '1']));
        });
    });

});