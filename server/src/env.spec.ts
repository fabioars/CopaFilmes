import env from './env';

describe('Environment', () => {
    describe('Smoke tests', () => {
        it('shoud have a env property', () => {
            expect(env).toHaveProperty('env');
        });

        it('shoud have a movie_api property', () => {
            expect(env).toHaveProperty('movie_api');
        });

        it('shoud have a port property', () => {
            expect(env).toHaveProperty('port');
        });
    });
});
