import React from 'react';
import { render, screen } from '@testing-library/react';
import { Identity } from "./Identity";

describe('<Identity/>', () => {
    it('should render empty name input', () => {
        render(<Identity />);
        const input = screen.getByTestId('name');
        expect(input).toBeInTheDocument();
        expect(input.getAttribute('value')).toBe("");
    });

    it('should render empty email input', () => {
        render(<Identity />);
        const input = screen.getByTestId('email');
        expect(input).toBeInTheDocument();
        expect(input.getAttribute('value')).toBe("");
    });

    it('should not have required inputs', () => {
        render(<Identity />);
        const name = screen.getByTestId('name');
        const email = screen.getByTestId('email');
        expect(name.getAttribute('required')).toBeNull();
        expect(email.getAttribute('required')).toBeNull();
    });
})




