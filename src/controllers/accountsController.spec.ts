import { AccountsController } from './accountsController';

describe('AccountsController', () => {
    let controller: AccountsController;

    beforeAll(() => {
        controller = new AccountsController();
    });

    describe('AccountsController.current', () => {
        it('Should return a promise', () => {
            let returnedValue;

            returnedValue = controller.current();

            expect(returnedValue).toEqual(jasmine.any(Promise));
        });

        it('Should be true', () => {
            expect(false).toBeTruthy();
        });
    });
});
