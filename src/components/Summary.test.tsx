import React from 'react';
import { render, screen } from '@testing-library/react';
import { Summary } from "./Summary";

const mockedSurvey = {
    name: "mocked-name",
    email: "mocked-email",
    age: 10,
    gender: 1,
    book: "mocked-book",
    colors: {
        red: true,
        blue: false
    }
}
jest.mock('../hooks/surveystorage.hook', () => ({
    useSurveyStorage: () => [mockedSurvey, jest.fn()]
}));
describe('<Summary/>', () => {
    it('should render all survey information', () => {
        render(<Summary />);
        const nameListItem = screen.getByText(/mocked-name/i);
        const emailListItem = screen.getByText(/mocked-email/i);
        const ageListItem = screen.getByText(/10 years old/i);
        const genderListItem = screen.getByText(/female/i);
        const bookListItem = screen.getByText(/mocked-book/i);
        const colorsListItem = screen.getByText(/red/i);
        expect(nameListItem).toBeInTheDocument();
        expect(emailListItem).toBeInTheDocument();
        expect(ageListItem).toBeInTheDocument();
        expect(genderListItem).toBeInTheDocument();
        expect(bookListItem).toBeInTheDocument();
        expect(colorsListItem).toBeInTheDocument();
    });

    it('should render colors separated by comma', () => {
        mockedSurvey.colors = {
            red: true,
            blue: true
        }
        render(<Summary />);
        const colorsListItem = screen.getByText(/red,blue/i);
        expect(colorsListItem).toBeInTheDocument();
    });

})




