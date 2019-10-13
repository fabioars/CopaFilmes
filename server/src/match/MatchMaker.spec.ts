import { Movie } from '../movies/interfaces';
import MatchMaker from './MatchMaker';

describe('Match Maker', () => {
    let movies: Movie[];

    beforeEach(() => {
        movies = [
            ...[],
            { id: 'tt3606756', titulo: 'Os Incríveis 2', ano: 2018, nota: 8.5 },
            { id: 'tt4881806', titulo: 'Jurassic World: Reino Ameaçado', ano: 2018, nota: 6.7 },
            { id: 'tt5164214', titulo: 'Oito Mulheres e um Segredo', ano: 2018, nota: 6.3 },
            { id: 'tt7784604', titulo: 'Hereditário', ano: 2018, nota: 7.8 },
            { id: 'tt4154756', titulo: 'Vingadores: Guerra Infinita', ano: 2018, nota: 8.8 },
            { id: 'tt5463162', titulo: 'Deadpool 2', ano: 2018, nota: 8.1 },
            { id: 'tt3778644', titulo: 'Han Solo: Uma História Star Wars', ano: 2018, nota: 7.2 },
            { id: 'tt3501632', titulo: 'Thor: Ragnarok', ano: 2017, nota: 7.9 },
        ];
    });

    it('should return 4 matches', () => {
        const matches = MatchMaker.make(movies);

        expect(matches.length).toBe(4);
    });

    it('should make matches "first vs last"', () => {
        const firstMatch = MatchMaker.make(movies)[0];

        expect(firstMatch.home).toBe(movies[0]);
        expect(firstMatch.away).toBe(movies[movies.length - 1]);
    });

    it('should make all maches "first vs last"', () => {
        const matches = MatchMaker.make(movies);

        matches.forEach(match => {
            expect(match.home).toBe(movies.shift());
            expect(match.away).toBe(movies.pop());
        });
    });

    it('should throw an exception if the array is odd length', () => {
        movies.pop();

        expect(() => MatchMaker.make(movies)).toThrowError('OddListError');
    });

    it('should throw an exception if it\'s empty', () => {
        expect(() => MatchMaker.make([])).toThrowError('EmptyList');
    });
});
