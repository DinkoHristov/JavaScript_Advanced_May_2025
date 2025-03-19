const assert = require('chai').assert;
const rgbToHexColor = require('./solve').rgbToHexColor;

describe('rgbToHexColor Function Tests', () => {

    describe('Test the Red value input', () => {
        it('Returns undefined when Red value is not an integer', () => {
            assert.isUndefined(rgbToHexColor('red', 1, 1));
        });

        it('Returns undefined when Red value is smaller than 0', () => {
            assert.isUndefined(rgbToHexColor(-2, 1, 1));
        });

        it('Returns undefined when Red value is bigger than 255', () => {
            assert.isUndefined(rgbToHexColor(256, 1, 1));
        });
    });

    describe('Test the Green value input', () => {
        it('Returns undefined when Green value is not an integer', () => {
            assert.isUndefined(rgbToHexColor(1, 'green', 1));
        });

        it('Returns undefined when Green value is smaller than 0', () => {
            assert.isUndefined(rgbToHexColor(1, -2, 1));
        });

        it('Returns undefined when Green value is bigger than 255', () => {
            assert.isUndefined(rgbToHexColor(1, 256, 1));
        });
    });

    describe('Test the Blue value input', () => {
        it('Returns undefined when Blue value is not an integer', () => {
            assert.isUndefined(rgbToHexColor(1, 1, 'blue'));
        });

        it('Returns undefined when Blue value is smaller than 0', () => {
            assert.isUndefined(rgbToHexColor(1, 2, -3));
        });

        it('Returns undefined when Blue value is bigger than 255', () => {
            assert.isUndefined(rgbToHexColor(1, 1, 256));
        });
    });

    describe('Returns correct hex result', () => {
        it('Returns correct hex for (5, 6, 7)', () => {
            assert.equal(rgbToHexColor(5, 6, 7), "#050607");
        });

        it('Returns correct hex for (0, 0, 0) - Black', () => {
            assert.equal(rgbToHexColor(0, 0, 0), "#000000");
        });

        it('Returns correct hex for (255, 255, 255) - White', () => {
            assert.equal(rgbToHexColor(255, 255, 255), "#FFFFFF");
        });

        it('Returns correct hex for (123, 45, 67)', () => {
            assert.equal(rgbToHexColor(123, 45, 67), "#7B2D43");
        });
    });

});