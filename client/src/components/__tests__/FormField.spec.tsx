import { RenderResult, render, screen } from '@testing-library/react';
import { vi, beforeAll, it, describe, expect, beforeEach } from 'vitest';
import { useNavigate } from 'react-router-dom';
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
        handleChange: () => {}
    }

    const inputTypes = ['date', 'url', 'text']

    beforeEach(() => {
        component = render(<FormField {...defaultProps}></FormField>)
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
    //WIP
    it('checks if the correct input elemnt is redenred based on type prop value',()=> {})
    it('verifies if placeholder is rendered',()=> {})
    it('onChange event works and sends the correct data back',()=> {
        // const spy = vi.spyOn(defaultProps, 'handleClick')
    })
})