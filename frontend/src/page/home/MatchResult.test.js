import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import MatchResult from './MatchResult';

describe('Movie Counter', () => {
    let container = null;
    let match = null;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);

        match = {
            first:{
                id: "tt4154756",
                titulo: "Vingadores: Guerra Infinita",
                ano: 2018,
                nota: 8.8
            },
            second:{
                id: "tt3606756",
                titulo: "Os Incríveis 2",
                ano: 2018,
                nota: 8.5
            }
        };
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
        match = null;
    });

    it('renders correctly', () => {
        const tree = renderer.create(<MatchResult match={match} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
