import request from 'supertest';
import axios from 'axios';
import HTTP from 'http-status-code';
import application from './app';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Application', () => {
    let app;
    let testPort: string;
    const apiResponse = {
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

    beforeAll(() => {
        testPort = '54321';
        app = application(testPort);
    });

    afterAll(() => {
        app.close();
    });

    describe('Application', () => {
        describe('Movies Module', () => {
            it('should respond with a list of movies', async () => {
                mockedAxios.get.mockResolvedValue(apiResponse);

                const response = await request(app).get('/api/movies');

                expect(response.status).toEqual(200);
                expect(response.body).toEqual(apiResponse.data);
            });
        });

        describe('Match Module', () => {
            it('should respond the winning movies', async () => {
                const data = [
                    { id: 'tt3606756', titulo: 'Os Incríveis 2', ano: 2018, nota: 8.5 },
                    { id: 'tt4881806', titulo: 'Jurassic World: Reino Ameaçado', ano: 2018, nota: 6.7 },
                    { id: 'tt5164214', titulo: 'Oito Mulheres e um Segredo', ano: 2018, nota: 6.3 },
                    { id: 'tt7784604', titulo: 'Hereditário', ano: 2018, nota: 7.8 },
                    { id: 'tt4154756', titulo: 'Vingadores: Guerra Infinita', ano: 2018, nota: 8.8 },
                    { id: 'tt5463162', titulo: 'Deadpool 2', ano: 2018, nota: 8.1 },
                    { id: 'tt3778644', titulo: 'Han Solo: Uma História Star Wars', ano: 2018, nota: 7.2 },
                    { id: 'tt3501632', titulo: 'Thor: Ragnarok', ano: 2017, nota: 7.9 },
                ];

                const response = await request(app).post('/api/match').send(data);

                expect(response.status).toEqual(200);
                expect(response.body).toEqual({
                    first: { id: 'tt4154756', titulo: 'Vingadores: Guerra Infinita', ano: 2018, nota: 8.8 },
                    second: { id: 'tt3606756', titulo: 'Os Incríveis 2', ano: 2018, nota: 8.5 },
                });
            });

            it('should respond 500 if send an odd list', async () => {
                const data = [
                    { id: 'tt3606756', titulo: 'Os Incríveis 2', ano: 2018, nota: 8.5 },
                    { id: 'tt4881806', titulo: 'Jurassic World: Reino Ameaçado', ano: 2018, nota: 6.7 },
                    { id: 'tt5164214', titulo: 'Oito Mulheres e um Segredo', ano: 2018, nota: 6.3 },
                    { id: 'tt7784604', titulo: 'Hereditário', ano: 2018, nota: 7.8 },
                    { id: 'tt4154756', titulo: 'Vingadores: Guerra Infinita', ano: 2018, nota: 8.8 },
                    { id: 'tt5463162', titulo: 'Deadpool 2', ano: 2018, nota: 8.1 },
                    { id: 'tt3778644', titulo: 'Han Solo: Uma História Star Wars', ano: 2018, nota: 7.2 },
                ];

                const response = await request(app).post('/api/match').send(data);

                expect(response.status).toEqual(500);
            });
        });
    });
});
