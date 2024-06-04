import { render, fireEvent } from 'vitest';
import React from 'react';
import Button from './Button';

describe('Button component', () => {
    //@ts-ignore 
    let component: RenderResult;
    let button: HTMLElement;

    const defaultProps = {
        title: 'Test Button',
        handleClick: vi.fn(),
        classes: 'bg-blue-500 hover:bg-blue-600',
    };

    beforeAll(() => {
        component = render(<Button />);
    });

    it('renders the button with the given title', () => {
        component.rerender(<Button title={defaultProps.title}></Button>)
        button = component.getByTestId('qa-button');
        expect(button).toBeInTheDocument();
    });

    it('triggers the handleClick function when clicked', () => {
        component.rerender(<Button handleClick={defaultProps.handleClick} />);
        button = component.getByTestId('qa-button');
        fireEvent.click(button);
        expect(defaultProps.handleClick).toHaveBeenCalled();
    });

    it('applies the given classes to the button', () => {
        component.rerender(<Button classes={defaultProps.classes} />);
        button = component.getByTestId('qa-button');
        expect(button).toHaveClass(defaultProps.classes);
    });

    afterAll(() => {
        component.unmount();
        cleanup();
    });
});