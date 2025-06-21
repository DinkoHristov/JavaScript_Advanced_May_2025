const assert = require('chai').assert;
const medicalCheckup = require('./medicalCheckup');

describe('Test medicalCheckup Class Functionality', () => {
    describe('Test scheduleAppointment Method', () => {
        it('Incorrect patientsCount Input param throws error', () => {
            assert.throws(() => medicalCheckup.scheduleAppointment('5', 10, 10), 'Invalid Information!');
        });
        it('Incorrect costPerPatient Input param throws error', () => {
            assert.throws(() => medicalCheckup.scheduleAppointment(5, '10', 10), 'Invalid Information!');
        });
        it('Incorrect clinicLocation Input param throws error', () => {
            assert.throws(() => medicalCheckup.scheduleAppointment(5, 10, 10), 'Invalid Information!');
        });
        it('Incorrect patientsCount Input param is string throws error', () => {
            assert.throws(() => medicalCheckup.scheduleAppointment('string', 10, 10), 'Invalid Information!');
        });
        it('Incorrect costPerPatient Input param is string throws error', () => {
            assert.throws(() => medicalCheckup.scheduleAppointment(5, 'string', 10), 'Invalid Information!');
        });
        it('Incorrect clinicLocation Input param is empty string throws error', () => {
            assert.throws(() => medicalCheckup.scheduleAppointment(5, 10, ''), 'Invalid Information!');
        });
        it('If clinicLocation Input param is Sofia and patientsCount is 30 and costPerPatient is 50 returns first message', () => {
            assert.equal(medicalCheckup.scheduleAppointment(30, 50, 'Sofia'), `This clinic meets the requirements, with capacity for 30 patients at 50$ per checkup.`);
        });
        it('If clinicLocation Input param is Sofia and patientsCount is more than 30 and costPerPatient is smaller than 50 returns first message', () => {
            assert.equal(medicalCheckup.scheduleAppointment(35, 46, 'Sofia'), `This clinic meets the requirements, with capacity for 35 patients at 46$ per checkup.`);
        });
        it('If clinicLocation Input param is Sofia and patientsCount is smaller than 30 and costPerPatient is 50 returns second message', () => {
            assert.equal(medicalCheckup.scheduleAppointment(25, 46, 'Sofia'), `This clinic does not meet your requirements!`);
        });
        it('If clinicLocation Input param is Sofia and patientsCount is more than 30 and costPerPatient is more than 50 returns second message', () => {
            assert.equal(medicalCheckup.scheduleAppointment(35, 56, 'Sofia'), `This clinic does not meet your requirements!`);
        });
        it('If clinicLocation Input param is not Sofiag throws error', () => {
            assert.throws(() => medicalCheckup.scheduleAppointment(5, 10, 'Haskovo'), 'The location of this clinic is not in the correct city!');
        });
    });

    describe('Test additionalServices Method', () => {
        it('Incorrect labTests Input params throws error', () => {
            assert.throws(() => medicalCheckup.additionalServices('string', ['general'], true), 'Invalid Information!');
        });
        it('Incorrect consultations Input params throws error', () => {
            assert.throws(() => medicalCheckup.additionalServices(['blood'], 'general', true), 'Invalid Information!');
        });
        it('Incorrect hasInsurance Input params throws error', () => {
            assert.throws(() => medicalCheckup.additionalServices(['blood'], ['general'], 'true'), 'Invalid Information!');
        });
        it('Returns first message when hasInsurance is true and totalCost is correct when labTests is not equals to the desired', () => {
            assert.equal(medicalCheckup.additionalServices(['test'], ['general'], true) ,`You spend 80$ for lab tests and consultations with 20% insurance discount!`);
        });
        it('Returns first message when hasInsurance is true and totalCost is correct when labTests is not equals to the desired', () => {
            assert.equal(medicalCheckup.additionalServices(['test'], ['specialist'], true) ,`You spend 160$ for lab tests and consultations with 20% insurance discount!`);
        });
        it('Returns first message when hasInsurance is true and totalCost is correct when consultations is not equals to the desired', () => {
            assert.equal(medicalCheckup.additionalServices(['blood'], ['test'], true) ,`You spend 16$ for lab tests and consultations with 20% insurance discount!`);
        });
        it('Returns first message when hasInsurance is true and totalCost is correct when consultations is not equals to the desired', () => {
            assert.equal(medicalCheckup.additionalServices(['urine'], ['test'], true) ,`You spend 12$ for lab tests and consultations with 20% insurance discount!`);
        });
        it('Returns first message when hasInsurance is true', () => {
            assert.equal(medicalCheckup.additionalServices(['blood'], ['general'], true) ,`You spend 96$ for lab tests and consultations with 20% insurance discount!`);
        });
        it('Returns second message when hasInsurance is false and totalCost is correct when labTests is not equals to the desired', () => {
            assert.equal(medicalCheckup.additionalServices(['test'], ['general'], false) ,`You spend 100$ for lab tests and consultations!`);
        });
        it('Returns second message when hasInsurance is false and totalCost is correct when labTests is not equals to the desired', () => {
            assert.equal(medicalCheckup.additionalServices(['test'], ['specialist'], false) ,`You spend 200$ for lab tests and consultations!`);
        });
        it('Returns second message when hasInsurance is false and totalCost is correct when consultations is not equals to the desired', () => {
            assert.equal(medicalCheckup.additionalServices(['blood'], ['test'], false) ,`You spend 20$ for lab tests and consultations!`);
        });
        it('Returns second message when hasInsurance is false and totalCost is correct when consultations is not equals to the desired', () => {
            assert.equal(medicalCheckup.additionalServices(['urine'], ['test'], false) ,`You spend 15$ for lab tests and consultations!`);
        });
        it('Returns second message when hasInsurance is false', () => {
            assert.equal(medicalCheckup.additionalServices(['urine'], ['specialist'], false) ,`You spend 215$ for lab tests and consultations!`);
        });
    });

    describe('Test roomDistribution Method', () => {
        it('Incorrect patients Input throws error', () => {
            assert.throws(() => medicalCheckup.roomDistribution('string', 10), 'Invalid Information!');
        });
        it('Incorrect rooms Input throws error', () => {
            assert.throws(() => medicalCheckup.roomDistribution(10, 'string'), 'Invalid Information!');
        });
        it('Smaller than 0 patients Input throws error', () => {
            assert.throws(() => medicalCheckup.roomDistribution(-1, 10), 'Invalid Information!');
        });
        it('Smaller than 0 rooms Input throws error', () => {
            assert.throws(() => medicalCheckup.roomDistribution(10, -1), 'Invalid Information!');
        });
        it('Equals to 0 patients Input throws error', () => {
            assert.throws(() => medicalCheckup.roomDistribution(0, 10), 'Invalid Information!');
        });
        it('Equals to 0 rooms Input throws error', () => {
            assert.throws(() => medicalCheckup.roomDistribution(10, 0), 'Invalid Information!');
        });
        it('Returns first message when is smaller than 4', () => {
            assert.equal(medicalCheckup.roomDistribution(6, 2), `There is only 3 patient in every room, consider rearranging.`);
        });
        it('Returns second message when is bigger than 4', () => {
            assert.equal(medicalCheckup.roomDistribution(10, 2), `You have 2 rooms with 5 patients in each room.`);
        });
        it('Returns second message when is equal to 4', () => {
            assert.equal(medicalCheckup.roomDistribution(8, 2), `You have 2 rooms with 4 patients in each room.`);
        });
    });
});