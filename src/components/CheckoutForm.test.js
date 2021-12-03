import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />)
        const firstNameField = screen.getByLabelText(/first name:/i);
            userEvent.type(firstNameField, 'Phillip');

        const lastNameField = screen.getByLabelText(/last name:/i);
            userEvent.type(lastNameField, 'McCrevis');

        const addressField = screen.getByLabelText(/address:/i);
            userEvent.type(addressField, '1234 Coolguy lane');

        const cityField = screen.getByLabelText(/city:/i);
            userEvent.type(cityField, 'Radsburgh');

        const stateField = screen.getByLabelText(/state:/i);
            userEvent.type(stateField, 'Washington');

        const zipField = screen.getByLabelText(/zip:/i);
            userEvent.type(zipField, '42069');

        const button = screen.getByRole('button');
            userEvent.click(button);
            
        const successMessage = screen.getByTestId('successMessage');
            expect(successMessage).toBeInTheDocument();
});
