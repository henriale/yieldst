import React from 'react';
import { render, screen } from '@testing-library/react';
import { Details } from "./Details";

describe('<Details/>', () => {
    it('should render age select', () => {
        render(<Details />);
        const select = screen.getByTestId('age');
        expect(select).toBeInTheDocument();
    });

    it('should render male, female and other gender options', () => {
        render(<Details />);
        const male = screen.getByTestId('gender-male');
        const female = screen.getByTestId('gender-female');
        const other = screen.getByTestId('gender-other');
        expect(male).toBeInTheDocument();
        expect(female).toBeInTheDocument();
        expect(other).toBeInTheDocument();
    });

    it('should have all inputs as required', () => {
        render(<Details />);
        const select = screen.getByTestId('age');
        expect(select.getAttribute('required')).not.toBeNull();
    });
})




