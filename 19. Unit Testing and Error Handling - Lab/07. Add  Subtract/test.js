const assert = require('chai').assert;
const createCalculator = require('./solve').createCalculator;

describe('createCalculator Function Tests', () => {

    describe('Check function creation', () => {
        it('Returns an object', () => {
            let calculator = createCalculator();
            assert.isObject(calculator);
        });

        it('Has an "add" method', () => {
            let calculator = createCalculator();
            assert.isFunction(calculator.add);
        });

        it('Has a "subtract" method', () => {
            let calculator = createCalculator();
            assert.isFunction(calculator.subtract);
        });

        it('Has a "get" method', () => {
            let calculator = createCalculator();
            assert.isFunction(calculator.get);
        });

        it('Does not expose the internal value', () => {
            let calculator = createCalculator();
            assert.isUndefined(calculator.value);
        });
    });

    describe('Get function Test', () => {
        it('Get returns 0 without any changes', () => {
            let calculator = createCalculator();
            assert.equal(calculator.get(), 0);
        });

        it('Get returns 5 when 5 is added to the value', () => {
            let calculator = createCalculator();
            calculator.add(5);
            assert.equal(calculator.get(), 5);
        });

        it('Get returns 10 when 5 is subtracted from 15', () => {
            let calculator = createCalculator();
            calculator.add(15);
            calculator.subtract(5);
            assert.equal(calculator.get(), 10);
        });
    });

    describe('Add function Test', () => {
        it('Returns 5 when 5 is added to the value', () => {
            let calculator = createCalculator();
            calculator.add(5);
            assert.equal(calculator.get(), 5);
        });

        it('Returns -5 when -5 is added to the value', () => {
            let calculator = createCalculator();
            calculator.add(-5);
            assert.equal(calculator.get(), -5);
        });

        it('Returns 10 when 5 is added two times to the value', () => {
            let calculator = createCalculator();
            calculator.add(5);
            calculator.add(5);
            assert.equal(calculator.get(), 10);
        });

        it('Correctly parses numbers from strings', () => {
            let calculator = createCalculator();
            calculator.add("5");
            assert.equal(calculator.get(), 5);
        });

        it('Returns NaN when a non-numeric string is added', () => {
            let calculator = createCalculator();
            calculator.add("abc");
            assert.isNaN(calculator.get());
        });
    });

    describe('Subtract function Test', () => {
        it('Returns -5 when 5 is subtracted from the value', () => {
            let calculator = createCalculator();
            calculator.subtract(5);
            assert.equal(calculator.get(), -5);
        });

        it('Returns 5 when 5 is subtracted from 10', () => {
            let calculator = createCalculator();
            calculator.add(10);
            calculator.subtract(5);
            assert.equal(calculator.get(), 5);
        });

        it('Returns -10 when 5 is subtracted two times from the value', () => {
            let calculator = createCalculator();
            calculator.subtract(5);
            calculator.subtract(5);
            assert.equal(calculator.get(), -10);
        });

        it('Correctly parses numbers from strings', () => {
            let calculator = createCalculator();
            calculator.subtract("5");
            assert.equal(calculator.get(), -5);
        });

        it('Returns NaN when a non-numeric string is subtracted', () => {
            let calculator = createCalculator();
            calculator.subtract("abc");
            assert.isNaN(calculator.get());
        });
    });

});