import axios from 'axios';
import HTTP from 'http-status-code';
import MovieReposiory from './MovieRepository';
import env from '../env';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Movie Repository', () => {
    const response = {
        status: HTTP.OK,
        data: [
            { id: 'tt3606756', titulo: 'Os Incríveis 2', ano: 2018, nota: 8.5 },
            { id: 'tt4881806', titulo: 'Jurassic World: Reino Ameaçado', ano: 2018, nota: 6.7 },
            { id: 'tt5164214', titulo: 'Oito Mulheres e um Segredo', ano: 2018, nota: 6.3 },
            { id: 'tt7784604', titulo: 'Hereditário', ano: 2018, nota: 7.8 },
            { id: 'tt4154756', titulo: 'Vingadores: Guerra Infinita', ano: 2018, nota: 8.8 },
            { id: 'tt5463162', titulo: 'Deadpool 2', ano: 2018, nota: 8.1 },
            { id: 'tt3778644', titulo: 'Han Solo: Uma História Star Wars', ano: 2018, nota: 7.2 },
            { id: 'tt3501632', titulo: 'Thor: Ragnarok', ano: 2017, nota: 7.9 },
            { id: 'tt2854926', titulo: 'Te Peguei!', ano: 2018, nota: 7.1 },
            { id: 'tt0317705', titulo: 'Os Incríveis', ano: 2004, nota: 8.0 },
            { id: 'tt3799232', titulo: 'A Barraca do Beijo', ano: 2018, nota: 6.4 },
            { id: 'tt1365519', titulo: 'Tomb Raider: A Origem', ano: 2018, nota: 6.5 },
            { id: 'tt1825683', titulo: 'Pantera Negra', ano: 2018, nota: 7.5 },
            { id: 'tt5834262', titulo: 'Hotel Artemis', ano: 2018, nota: 6.3 },
            { id: 'tt7690670', titulo: 'Superfly', ano: 2018, nota: 5.1 },
            { id: 'tt6499752', titulo: 'Upgrade', ano: 2018, nota: 7.8 },
        ],
    };

    let repository = null;

    beforeEach(() => {
        repository = new MovieReposiory();
    });

    afterEach(() => {
        repository = null;
    });

    describe('getAll', () => {
        it('should call axios get', () => {
            repository.getAll();

            expect(mockedAxios.get)
                .toHaveBeenCalled();
        });

        it('should call the right endpoint', () => {
            repository.getAll();

            expect(mockedAxios.get)
                .toHaveBeenCalledWith(`${env.movie_api}/api/filmes`);
        });

        it('should fetch a list', done => {
            mockedAxios.get.mockResolvedValue(response);

            return repository.getAll().then(res => {
                expect(res.data.length).toBeDefined();
                expect(res.data.length).toBeGreaterThan(0);
                done();
            });
        });

        it('should fetch a list of movies', done => {
            mockedAxios.get.mockResolvedValue(response);

            return repository.getAll().then(res => {
                expect(res.data).toBe(response.data);
                done();
            });
        });
    });
});
