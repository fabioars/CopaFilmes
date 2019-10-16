import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import MovieSelector from './MovieSelector';


describe('Movie Selector', () => {
    let container = null;
    const movies = [
        { id: 'tt3606756', titulo: 'Os Incríveis 2', ano: 2018, nota: 8.5 },
        { id: 'tt4881806', titulo: 'Jurassic World: Reino Ameaçado', ano: 2018, nota: 6.7 },
        { id: 'tt5164214', titulo: 'Oito Mulheres e um Segredo', ano: 2018, nota: 6.3 },
        { id: 'tt7784604', titulo: 'Hereditário', ano: 2018, nota: 7.8 },
        { id: 'tt4154756', titulo: 'Vingadores: Guerra Infinita', ano: 2018, nota: 8.8 },
        { id: 'tt5463162', titulo: 'Deadpool 2', ano: 2018, nota: 8.1 },
        { id: 'tt3778644', titulo: 'Han Solo: Uma História Star Wars', ano: 2018, nota: 7.2 },
        { id: 'tt3501632', titulo: 'Thor: Ragnarok', ano: 2017, nota: 7.9 },
    ];

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);

        jest.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve([...movies])
            }));
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;

        global.fetch.mockRestore();
    });

    it('should render a list of movies', async () => {
        await act(async () => {
            render(<MovieSelector />, container);
        });

        expect(container.querySelectorAll('li').length).toBe(movies.length);
    });

});
