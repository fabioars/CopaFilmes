import React from 'react';
import renderer from 'react-test-renderer';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Button from './Button';

describe('Button', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        render(<Button>Hello</Button>, div);
        unmountComponentAtNode(div);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<Button>Hello</Button>).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly disabled', () => {
        const tree = renderer.create(<Button disabled>Hello</Button>).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should call the function on click', () => {
        const callback = jest.fn();
        const div = document.createElement('div');
        document.body.appendChild(div);

        act(() => {
            render(<Button onClick={callback}>Hello</Button>, div);
        });

        div.querySelector('button').click();

        expect(callback.mock.calls.length).toBe(1);
        unmountComponentAtNode(div);
    })
});
