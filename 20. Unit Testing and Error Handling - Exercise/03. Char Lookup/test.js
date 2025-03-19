const assert = require('chai').assert;
const lookupChar = require('./solve').lookupChar;

describe('lookupChar Function Tests', () => {

    describe('Check inputs', () => {
        it('Returns undefined when String input is not of type string and Index input is integer', () => {
            assert.isUndefined(lookupChar(10, 2));
        });

        it('Returns undefined when Index input it is not of type integer and String input is string', () => {
            assert.isUndefined(lookupChar('string', 2.4));
        });
        
        it('Returns undefined when both of the inputs are incorrect', () => {
            assert.isUndefined(lookupChar(10, 'string'));
        });

        it('Returns undefined when String input is missing', () => {
            assert.isUndefined(lookupChar(10));
        });

        it('Returns undefined when Index input is missing', () => {
            assert.isUndefined(lookupChar('string'));
        });
    });

    describe('Check for Incorrect index', () => {
        it('Returns Incorrect index message when String input length is smaller than Index input', () => {
            assert.equal(lookupChar('small', 6) , 'Incorrect index');
        });

        it('Returns Incorrect index message when String input length is equal to Index input', () => {
            assert.equal(lookupChar('hello', 5) , 'Incorrect index');
        });

        it('Returns Incorrect index message when Index input is smaller than 0', () => {
            assert.equal(lookupChar('string', -1) , 'Incorrect index');
        });
    });

    describe('Function returns correct result', () => {
        it('Returns the index of char element', () => {
            assert.equal(lookupChar('small', 2), 'a');
        });
    });

});