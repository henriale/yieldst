import React from 'react';
import { render, screen } from '@testing-library/react';
import { Favorites } from "./Favorites";

describe('<Favorites/>', () => {
    it('should render empty book input', () => {
        render(<Favorites />);
        const input = screen.getByTestId('book');
        expect(input).toBeInTheDocument();
        expect(input.getAttribute('value')).toBe("");
    });

    it('should render unchecked red checkbox', () => {
        render(<Favorites />);
        const checkbox = screen.getByTestId('red');
        expect(checkbox).toBeInTheDocument();
        expect(checkbox.getAttributeNames().includes('checked')).toBeFalsy();
    });

    it('should render unchecked blue checkbox', () => {
        render(<Favorites />);
        const checkbox = screen.getByTestId('blue');
        expect(checkbox).toBeInTheDocument();
        expect(checkbox.getAttributeNames().includes('checked')).toBeFalsy();
    });
})




