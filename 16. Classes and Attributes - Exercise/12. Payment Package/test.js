const assert = require('chai').assert;
const PaymentPackage = require('./12. PaymentPackage').PaymentPackage;

describe('PaymentPackage class Tests', () => {

    describe('Constructor and Getters and Setters', () => {

        it('Constructor is correctly initialized with 2 parameters(name, value) passed', () => {
            let paymentClass = new PaymentPackage('card', 10);
            assert.equal('card', paymentClass.name);
            assert.equal(10, paymentClass.value);
            assert.equal(20, paymentClass.VAT);
            assert.isTrue(paymentClass.active);
        });

        it('Constructor without name parameter(undefined) throws error', () => {
            assert.throw(() => new PaymentPackage(10), 'Name must be a non-empty string');
        });

        it('Constructor with incorrect name parameter type throws error', () => {
            assert.throw(() => new PaymentPackage(10, 10), 'Name must be a non-empty string');
        });

        it('Constructor without value parameter(undefined) throws error', () => {
            assert.throw(() => new PaymentPackage('card'), 'Value must be a non-negative number');
        });

        it('Constructor with incorrect value parameter type throws error', () => {
            assert.throw(() => new PaymentPackage('card', 'visa'), 'Value must be a non-negative number');
        });

        it('Constructor with name with length equals to 0 throws error', () => {
            assert.throw(() => new PaymentPackage('', 10), 'Name must be a non-empty string');
        });

        it('Constructor with value with negative number throws error', () => {
            assert.throw(() => new PaymentPackage('card', -6), 'Value must be a non-negative number');
        });

        it('Value setter sets correct value to 0', () => {
            let paymentClass = new PaymentPackage('card', 10);
            paymentClass.value = 0;
            assert.equal(0, paymentClass.value);
        });

        it('VAT setter with incorrect type throws error', () => {
            let paymentClass = new PaymentPackage('card', 16);
            assert.throw(() => paymentClass.VAT = 'invalid', 'VAT must be a non-negative number');
        });
        
        
        it('VAT setter with negative value throws error', () => {
            let paymentClass = new PaymentPackage('card', 16);
            assert.throw(() => paymentClass.VAT = -9, 'VAT must be a non-negative number');
        });

        it('VAT setter with returns correct value', () => {
            let paymentClass = new PaymentPackage('card', 16);
            paymentClass.VAT = 9;
            assert.equal(9, paymentClass.VAT);
        });

        it('Active setter with incorrect value type throws error', () => {
            let paymentClass = new PaymentPackage('card', 16);
            assert.throw(() => paymentClass.active = 'invalid', 'Active status must be a boolean');
        });

        it('Active setter returns correct value', () => {
            let paymentClass = new PaymentPackage('card', 16);
            paymentClass.active = false;
            assert.isFalse(paymentClass.active);
        });
    });

    describe('ToString method', () => {
        it('Returns correct string for active package', () => {
            let paymentClass = new PaymentPackage('Consultation', 800);
            const expectedResult = [
                `Package: Consultation`,
                `- Value (excl. VAT): 800`,
                `- Value (VAT 20%): 960`
            ].join('\n');
            assert.equal(paymentClass.toString(), expectedResult);
        });

        it('Returns correct string for inactive package', () => {
            let paymentClass = new PaymentPackage('Consultation', 800);
            paymentClass.active = false;
            const expectedResult = [
                `Package: Consultation (inactive)`,
                `- Value (excl. VAT): 800`,
                `- Value (VAT 20%): 960`
            ].join('\n');
            assert.equal(paymentClass.toString(), expectedResult);
        });

        it('Returns correct string with different VAT', () => {
            let paymentClass = new PaymentPackage('Consultation', 1000);
            paymentClass.VAT = 10;
            const expectedResult = [
                `Package: Consultation`,
                `- Value (excl. VAT): 1000`,
                `- Value (VAT 10%): 1100`
            ].join('\n');
            assert.equal(paymentClass.toString(), expectedResult);
        });

        it('Handles floating point numbers correctly', () => {
            let paymentClass = new PaymentPackage('Service', 100.5);
            paymentClass.VAT = 5.5;
            const expectedResult = [
                `Package: Service`,
                `- Value (excl. VAT): 100.5`,
                `- Value (VAT 5.5%): ${100.5 * 1.055}`
            ].join('\n');
            assert.equal(paymentClass.toString(), expectedResult);
        });
    });

});