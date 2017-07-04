import {AccountsController} from './accountsController';
import {expect} from 'chai';
import 'mocha';

describe('AccountsController', () => {
    let controller: AccountsController;

    before(() => {
        controller = new AccountsController();
    });

    describe('AccountsController.current', () => {
        it('Should return a promise', () => {
            let returnedValue;

            returnedValue = controller.current();

	    expect(returnedValue).to.be.a('Promise');
        });

        it('Should be true', () => {
            expect(false).to.be.true;
        });
    });
});

