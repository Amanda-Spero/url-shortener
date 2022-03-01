import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import AddUrl from '../AddUrl/add-url';

function renderComponent() {
    return render(
        <AddUrl />
    )
}

afterEach(() => {
    cleanup();
});

describe('Add Url page', () => {
    test('contains the header "Create an Itty Bitty URL"', () => {
        const {getByText} = renderComponent();
        expect(getByText('Create an Itty Bitty URL')).toBeInTheDocument();
    });

    test('displays an input box', () => {
        const {getByTestId} = renderComponent();
        expect(getByTestId('add-input')).toBeInTheDocument();
    });

    test('displays text entered in input box', () => {
        const {getByTestId} = renderComponent();
        let input = getByTestId('add-input');
        fireEvent.change(input, {target: {value: `https://www.google.com`}});
        expect(input.value).toBe('https://www.google.com');
    });

    test('clears input box on click of Clear button', () => {
        const {getByTestId, getByText} = renderComponent();
        let input = getByTestId('add-input');
        fireEvent.change(input, {target: {value: `https://www.google.com`}});
        let clearButton = getByText('Clear');
        fireEvent.click(clearButton);
        expect(input.value).toBe('');
    });

    test('contains a submit button', () => {
        const {getByText} = renderComponent();
        expect(getByText('Submit')).toBeInTheDocument();
    });

    test('contains a submit button', () => {
        const {getByText} = renderComponent();
        expect(getByText('Clear')).toBeInTheDocument();
    });

});