import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import Movie from './Movie';

describe('Movie', () => {
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

    describe('Header', () => {
        it('renders correctly', () => {
            const tree = renderer.create(
                <Movie movie={{ id: 'tt3606756', titulo: 'Os Incríveis 2', ano: 2018, nota: 8.5 }} />
                ).toJSON();

            expect(tree).toMatchSnapshot();
        });

        it('should call onClick props onClick', () => {
            const callback = jest.fn();

            act(() => {
                render(
                    <Movie
                        movie={{ id: 'tt3606756', titulo: 'Os Incríveis 2', ano: 2018, nota: 8.5 }}
                        onClick={callback}
                    />,
                    container
                );
            });

            container.querySelector('.Movie').click();
            expect(callback.mock.calls.length).toBe(1);
        });

        it('should have a Movie--selected class if isSelected iquals true', () => {
            act(() => {
                render(
                    <Movie
                        movie={{ id: 'tt3606756', titulo: 'Os Incríveis 2', ano: 2018, nota: 8.5 }}
                        isSelected={true}
                    />,
                    container
                );
            });

            expect(document.querySelector('.Movie--selected')).toBeTruthy();
        });
    });

});
