import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import MovieCounter from './MovieCounter';

describe('Movie Counter', () => {
    let container = null;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });


    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('renders correctly', () => {
        const tree = renderer.create(
            <MovieCounter />
            ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with the right number', () => {
        const tree = renderer.create(<MovieCounter count={5}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with string', () => {
        const tree = renderer.create(<MovieCounter count="5"/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
