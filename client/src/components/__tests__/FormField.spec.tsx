import React from 'react';
import { RenderResult, render, fireEvent } from '@testing-library/react';
import { vi, it, describe, expect, beforeEach } from 'vitest';
import { FormFieldProps } from '../../interfaces/index.js'
import FormField from '../FormField';

describe('FormField component',()=>{
    let component: RenderResult;
    let input: HTMLInputElement;

    const defaultProps: FormFieldProps  = {
        labelName: 'Label Name', 
        placeholder: 'Placeholder value', 
        inputType: 'text', 
        isTextArea: false,
        value: 'Default value',
        handleChange: vi.fn()
    }

    const inputTypes = ['date', 'url', 'text']

    beforeEach(() => {
        component = render(<FormField {...defaultProps}></FormField>)
        //@ts-ignore
        input = component.getByTestId(`qa-formfield_${defaultProps.inputType}`)
    })

    it('renders the FormField component',()=> {
        expect(component).toBeTruthy();
    })
    it('verifies if a value is rendered',()=> {
        //@ts-ignore
        input = component.getByTestId(`qa-formfield_${defaultProps.inputType}`)
        expect(input.value).toBe(defaultProps.value)
    })
    it('checks if isTextArea renders a textarea input ',()=> {
        const updatedProps = {...defaultProps, isTextArea: true }
        component.rerender(<FormField {...updatedProps}></FormField>)
        //@ts-ignore
        input = component.getByTestId(`qa-formfield_textarea`)
        expect(input).toBeTruthy();
    })
    it('checks if input type value is valid ',()=> {
        // check a list of input types and validates it
        expect(inputTypes).toContain(defaultProps.inputType)
    })
    it('checks if the correct input elemnt is redenred based on type prop value',()=> {
        const type = 'date'
        const updatedProps = {...defaultProps, inputType: type }
        component.rerender(<FormField {...updatedProps}></FormField>)
        //@ts-ignore
        input = component.getByTestId(`qa-formfield_${type}`)
        expect(input).toHaveProperty("type", type);
    })
    it('verifies if placeholder is rendered',()=> {
        expect(input).toHaveProperty("placeholder", defaultProps.placeholder);
    })
    it('onChange event works', async ()=> {
        const updatedValue = 'test value'
        await fireEvent.change(input, { target: { value: updatedValue } })
        expect(defaultProps.handleChange).toHaveBeenCalledOnce();
    })
})