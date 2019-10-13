import Match from './Match';
import { Movie } from 'src/movies/interfaces';

describe('Match', () => {
    let match: Match;
    let home: Movie;
    let away: Movie;

    beforeEach(() => {
        home = Object.assign({}, { id: 'tt3606756', titulo: 'Os Incríveis 2', ano: 2018, nota: 8.5 });
        away = Object.assign({}, { id: 'tt1365519', titulo: 'Tomb Raider: A Origem', ano: 2018, nota: 6.5 });

        match = new Match(home, away);
    });

    it('should return the winnig movie', () => {
        expect(match.getWinner()).toBe(home);

        match.home.nota = 2.5;
        home.nota = 2.5;

        expect(match.getWinner()).toBe(away);
    });

    it('should return the winnig one alphabetical order if it\'s a tie', () => {
        match.home.nota = 6.5;
        home.nota = 6.5;

        expect(match.getWinner()).toBe(home);

        match.away.titulo = 'Os Incríveis';
        away.titulo = 'Os Incríveis';

        expect(match.getWinner()).toBe(away);
    });

    it('should return the loosing movie', () => {
        expect(match.getLooser()).toBe(away);
    });

    it('should return the loosing one alphabetical order if it\'s a tie', () => {
        match.home.nota = 6.5;
        home.nota = 6.5;

        expect(match.getLooser()).toBe(away);
    });

    it('should return always the oposite', () => {
        expect(match.getWinner()).toBe(home);
        expect(match.getLooser()).toBe(away);
    });
});
