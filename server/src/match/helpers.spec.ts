import { Movie } from '../movies/interfaces'
import { sortCriteriaMaker } from './helpers';

describe('sortCriteriaMaker', () => {
    let listToSort: Movie[];

    beforeEach(() => {
        listToSort = [
            ...[],
            { id: 'tt3606756', titulo: 'Os Incríveis 2', ano: 2018, nota: 8.5 },
            { id: 'tt1365519', titulo: 'Tomb Raider: A Origem', ano: 2018, nota: 6.5 },
            { id: 'tt3778644', titulo: 'Han Solo: Uma História Star Wars', ano: 2018, nota: 7.2 },
        ];
    });

    it('should sort by title', () => {
        const sortByTitle = sortCriteriaMaker('titulo');
        listToSort.sort(sortByTitle);

        expect(listToSort[0].titulo).toBe('Han Solo: Uma História Star Wars');
        expect(listToSort[1].titulo).toBe('Os Incríveis 2');
        expect(listToSort[2].titulo).toBe('Tomb Raider: A Origem');
    });

    it('should sort by grade', () => {
        const sortByNota = sortCriteriaMaker('nota');
        listToSort.sort(sortByNota);

        expect(listToSort[0].nota).toBe(6.5);
        expect(listToSort[1].nota).toBe(7.2);
        expect(listToSort[2].nota).toBe(8.5);
    })
});
