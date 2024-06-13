import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { render, fireEvent, cleanup} from '@testing-library/react';
import React from 'react';
import Button from '../Button';

describe('Button component', () => {
    //@ts-ignore 
    let component: RenderResult;
    let button: HTMLElement;

    const defaultProps = {
        title: 'Test Button',
        handleClick: () => 42,
        classes: 'bg-blue-500 hover:bg-blue-600',
    };

    beforeAll(() => {
        component = render(<Button {...defaultProps}/>);
        button = component.getByTestId('qa-button');
    });

    it('renders component', () => {
        expect(button).toBeTruthy(); 
    })

    it('renders the button title', () => {
        expect(button.textContent).toBe(defaultProps.title);
    });

    it('triggers the handleClick function when clicked', async () => {
        const spy = vi.spyOn(defaultProps, 'handleClick')
        fireEvent.click(button)
        expect(spy).toHaveBeenCalledOnce();
    });

    it('applies the given classes to the button', () => {
        expect(button.classList.value).contains(defaultProps.classes);
    });

    afterAll(() => {
        component.unmount();
        cleanup();
    });
});