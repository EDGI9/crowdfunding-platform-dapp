import React from 'react';
import { describe, it, expect, beforeEach, afterAll, vi } from 'vitest';
import { render, fireEvent, cleanup} from '@testing-library/react';
import Button from '../Button';

describe('Button component', () => {
    //@ts-ignore 
    let component: RenderResult;
    let button: HTMLElement;

    const defaultProps = {
        title: 'Test Button',
        handleClick: vi.fn(),
        classes: 'bg-blue-500 hover:bg-blue-600',
    };

    beforeEach(() => {
        component = render(<Button {...defaultProps}/>);
        button = component.getByTestId('qa-button');
    });

    it('renders component', () => {
        expect(button).toBeTruthy(); 
    })

    it('renders the button title', () => {
        expect(button.textContent).toBe(defaultProps.title);
    });

    it('triggers the handleClick function when clicked', () => {
        fireEvent.click(button)
        expect(defaultProps.handleClick).toHaveBeenCalledOnce();
    });

    it('applies the given classes to the button', () => {
        expect(button.classList.value).contains(defaultProps.classes);
    });

    afterAll(() => {
        component.unmount();
        cleanup();
    });
});