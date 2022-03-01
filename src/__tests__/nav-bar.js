import React from 'react';
import {cleanup, fireEvent, render, waitForElementToBeRemoved} from '@testing-library/react';
import NavSidebar from '../NavSidebar/nav-sidebar';
import App from '../App';

function renderComponent() {
    return render(
        <App />
    )
}

afterEach(() => {
    cleanup();
});

describe('Navigational Sidebar within App page', () => {
    test('contains "Add a New URL" link', () => {
        const {getByText} = renderComponent();
        const addNewUrlLink = getByText('Add a New URL');
        expect(addNewUrlLink).toBeInTheDocument();
        expect(addNewUrlLink.closest('a')).toHaveAttribute('href', '/');
    });

    test('contains a "My URLs" link', () => {
        const {getByText} = renderComponent();
        const addNewUrlLink = getByText('My URLs');
        expect(addNewUrlLink).toBeInTheDocument();
        expect(addNewUrlLink.closest('a')).toHaveAttribute('href', '/my-lists');
    });

});