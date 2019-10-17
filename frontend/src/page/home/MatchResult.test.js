import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import MatchResult from './MatchResult';

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
        const tree = renderer.create(<MatchResult />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
