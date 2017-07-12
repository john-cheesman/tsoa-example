import { TestAccount } from './account';
import { expect } from 'chai';
import 'mocha';

describe('TestAccount', () => {
    let account: TestAccount;

    before(() => {
        account = {
            id: 1,
            address: 'TestAddress',
            name: 'TestName'
        }
    });

    describe('id', () => {
        it('Should exist', () => {
            expect(account).to.have.property('id');
        });

        it('Should be a number', () => {
            expect(account.id).to.be.a('number');
        });

        it('Should have the correct value', () => {
            expect(account.id).to.equal(1);
        });
    });

    describe('address', () => {
        it('Should exist', () => {
            expect(account).to.have.property('address');
        });

        it('Should be a string', () => {
            expect(account.address).to.be.a('string');
        });

        it('Should have the correct value', () => {
            expect(account.address).to.equal('TestAddress');
        });
    });

    describe('name', () => {
        it('Should exist', () => {
            expect(account).to.have.property('name');
        });

        it('Should be a string', () => {
            expect(account.name).to.be.a('string');
        });

        it('Should have the correct value', () => {
            expect(account.name).to.equal('TestName');
        });
    });
});
