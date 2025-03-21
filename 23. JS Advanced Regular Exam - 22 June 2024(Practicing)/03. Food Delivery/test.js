const assert = require('chai').assert;
const foodDelivery = require('./food delivery');

describe('foodDelivery Object Tests', () => {

    describe('getCategory Function Tests', () => {
        it('If Category Input is Vegan returns first message', () => {
            assert.equal(foodDelivery.getCategory('Vegan') ,'Dishes that contain no animal products.');
        });

        it('If Category Input is Vegetarian returns second message', () => {
            assert.equal(foodDelivery.getCategory('Vegetarian') ,'Dishes that contain no meat or fish.');
        });

        it('If Category Input is Gluten-Free returns third message', () => {
            assert.equal(foodDelivery.getCategory('Gluten-Free') ,'Dishes that contain no gluten.');
        });

        it('If Category Input is All returns forth message', () => {
            assert.equal(foodDelivery.getCategory('All') ,'All available dishes.');
        });

        it('If Category Input is not one of the above throws error', () => {
            assert.throw(() => foodDelivery.getCategory('Invalid'), 'Invalid Category!');
        });
    });

    describe('addMenuItem Function Tests', () => {
        it('If menuItem Input is not of type array throws error', () => {
            assert.throw(() => foodDelivery.addMenuItem('Invalid', 10), 'Invalid Information!');
        });

        it('If maxPrice Input is not of type number throws error', () => {
            assert.throw(() => foodDelivery.addMenuItem([10], 'string'), 'Invalid Information!');
        });

        it('If menuItem Input length is smaller than 1 throws error', () => {
            assert.throw(() => foodDelivery.addMenuItem([], 10), 'Invalid Information!');
        });

        it('If maxPrice Input is smaller than 5 throws error', () => {
            assert.throw(() => foodDelivery.addMenuItem([10], 4), 'Invalid Information!');
        });

        it('Function returns correct message', () => {
            assert.equal(foodDelivery.addMenuItem([{price: 1}, {price: 5}, {price: 8}, {price: 12}], 10), 
            `There are 3 available menu items matching your criteria!`);
        });
    });

    describe('calculateOrderCost Function Tests', () => {
        it('If shipping Input is not an array throws error', () => {
            assert.throw(() => foodDelivery.calculateOrderCost('string', [10], true), 'Invalid Information!');
        });

        it('If addons Input is not an array throws error', () => {
            assert.throw(() => foodDelivery.calculateOrderCost([10], 'string', true), 'Invalid Information!');
        });

        it('If discount Input is a boolean type throws error', () => {
            assert.throw(() => foodDelivery.calculateOrderCost([10], [10], 'string'), 'Invalid Information!');
        });

        it('Returns first correct message when discount is true', () => {
            assert.equal(foodDelivery.calculateOrderCost(['standard', 'express', 'standard'], ['sauce', 'sauce', 'beverage'], true) , 
            'You spend $14.03 for shipping and addons with a 15% discount!');
        });

        it('Returns first correct message when discount is false', () => {
            assert.equal(foodDelivery.calculateOrderCost(['standard', 'express', 'standard'], ['sauce', 'sauce', 'beverage'], false) , 
            'You spend $16.50 for shipping and addons!');
        });
    });
    
});