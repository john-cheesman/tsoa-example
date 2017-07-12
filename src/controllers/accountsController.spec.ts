import { AccountsController } from './accountsController';
import { expect, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as chaiThings from 'chai-things';
import 'mocha';

use(chaiThings);
use(chaiAsPromised);


describe('AccountsController', () => {
    let controller: AccountsController;

    before(() => {
        controller = new AccountsController();
    });

    describe('current', () => {
        it('Should return a promise', () => {
            expect(controller.current()).to.be.a('Promise');
        });

        it('Should eventually return a TestAccount', () => {
            expect(controller.current()).to.eventually.have.property('id', 600);
            expect(controller.current()).to.eventually.have.property('name', 'test');
        });
    });

    describe('getUsers', () => {
        it('Should return a promise', () => {
            expect(controller.getUsers()).to.be.a('Promise');
        });

        it('Should eventually return a User array', () => {
            expect(controller.getUsers()).to.eventually.be.an('Array');
            expect(controller.getUsers()).to.eventually.have.length(2);
            expect(controller.getUsers()).to.eventually.all.have.property('id');
        });
    });
});

