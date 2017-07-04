import {TestAccount} from './account';
import {expect} from 'chai';
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
    	it('Should be a number', () => {         
            expect(account).to.have.property('id');
            expect(account.id).to.be.a('number');
	});
    });
});

