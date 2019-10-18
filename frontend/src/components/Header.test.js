import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<Header/>).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with title', () => {
        const tree = renderer.create(<Header title="Fase de Seleção" />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with children', () => {
        const tree = renderer.create(
            <Header title="Fase de Seleção">Uma descrição básica para o teste</Header>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
