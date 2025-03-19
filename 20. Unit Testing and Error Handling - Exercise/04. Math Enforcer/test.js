const assert = require('chai').assert;
const mathEnforcer = require('./solve').mathEnforcer;

describe('mathEnforcer Object Tests', () => {
    
    describe('Object is correctly created', () => {
        it('mathEnforcer should be an object', () => {
            assert.isObject(mathEnforcer);
        });

        it('mathEnforcer should have key addFive', () => {
            assert.property(mathEnforcer, 'addFive');
        });
        
        it('mathEnforcer should have key subtractTen', () => {
            assert.property(mathEnforcer, 'subtractTen');
        });
        
        it('mathEnforcer should have key sum', () => {
            assert.property(mathEnforcer, 'sum');
        });
    });

    describe('addFive Function Tests', () => {
        it('Returns undefined when input is not a number', () => {
            assert.isUndefined(mathEnforcer.addFive('string'));
            assert.isUndefined(mathEnforcer.addFive(null));
            assert.isUndefined(mathEnforcer.addFive(undefined));
            assert.isUndefined(mathEnforcer.addFive([]));
            assert.isUndefined(mathEnforcer.addFive({}));
        });

        it('Returns correct result when input is a positive number', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
        });

        it('Returns correct result when input is a negative number', () => {
            assert.equal(mathEnforcer.addFive(-5), 0);
        });

        it('Returns correct result when input is zero', () => {
            assert.equal(mathEnforcer.addFive(0), 5);
        });

        it('Returns correct result when input is a floating-point number', () => {
            assert.closeTo(mathEnforcer.addFive(2.5), 7.5, 0.01);
        });
    });

    describe('subtractTen Function Tests', () => {
        it('Returns undefined when input is not a number', () => {
            assert.isUndefined(mathEnforcer.subtractTen('string'));
            assert.isUndefined(mathEnforcer.subtractTen(null));
            assert.isUndefined(mathEnforcer.subtractTen(undefined));
            assert.isUndefined(mathEnforcer.subtractTen([]));
            assert.isUndefined(mathEnforcer.subtractTen({}));
        });

        it('Returns correct result when input is a positive number', () => {
            assert.equal(mathEnforcer.subtractTen(25), 15);
        });

        it('Returns correct result when input is a negative number', () => {
            assert.equal(mathEnforcer.subtractTen(-5), -15);
        });

        it('Returns correct result when input is zero', () => {
            assert.equal(mathEnforcer.subtractTen(0), -10);
        });

        it('Returns correct result when input is a floating-point number', () => {
            assert.closeTo(mathEnforcer.subtractTen(10.5), 0.5, 0.01);
        });
    });

    describe('sum Function Tests', () => {
        it('Returns undefined when first parameter is not a number', () => {
            assert.isUndefined(mathEnforcer.sum('string', 10));
            assert.isUndefined(mathEnforcer.sum(null, 10));
            assert.isUndefined(mathEnforcer.sum(undefined, 10));
            assert.isUndefined(mathEnforcer.sum([], 10));
            assert.isUndefined(mathEnforcer.sum({}, 10));
        });

        it('Returns undefined when second parameter is not a number', () => {
            assert.isUndefined(mathEnforcer.sum(10, 'string'));
            assert.isUndefined(mathEnforcer.sum(10, null));
            assert.isUndefined(mathEnforcer.sum(10, undefined));
            assert.isUndefined(mathEnforcer.sum(10, []));
            assert.isUndefined(mathEnforcer.sum(10, {}));
        });

        it('Returns correct sum when both numbers are positive', () => {
            assert.equal(mathEnforcer.sum(10, 20), 30);
        });

        it('Returns correct sum when both numbers are negative', () => {
            assert.equal(mathEnforcer.sum(-10, -20), -30);
        });

        it('Returns correct sum when numbers have different signs', () => {
            assert.equal(mathEnforcer.sum(-10, 20), 10);
        });

        it('Returns correct sum when one number is zero', () => {
            assert.equal(mathEnforcer.sum(0, 10), 10);
            assert.equal(mathEnforcer.sum(10, 0), 10);
        });

        it('Returns correct sum when using floating-point numbers', () => {
            assert.closeTo(mathEnforcer.sum(1.1, 2.2), 3.3, 0.01);
            assert.closeTo(mathEnforcer.sum(-1.1, -2.2), -3.3, 0.01);
        });
    });

});