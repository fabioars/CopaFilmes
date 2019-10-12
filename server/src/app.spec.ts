import application from './app';

describe('Application', () => {
    describe('Smoke tests', () => {
        it('should return true', () => {
            expect(application).toBeDefined();
        });
    });
});
