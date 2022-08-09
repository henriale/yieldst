import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Survey from "./Survey";


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
describe('<Survey/>', () => {
    describe('Buttons', () => {
        it('should disable previous button on step 1', () => {
            jest.spyOn(React, 'useState').mockImplementation(() => [false, jest.fn()]);
            render(<Survey/>);
            const button = screen.getByText('Previous');
            expect(button).toBeInTheDocument();
            expect(button).toBeDisabled();
        });
        it('should enable previous button on step 2', () => {
            jest.spyOn(React, 'useReducer').mockImplementation(() => [2, jest.fn()]);
            jest.spyOn(React, 'useState').mockImplementation(() => [false, jest.fn()]);
            render(<Survey/>);
            const button = screen.getByText('Previous');
            expect(button).toBeInTheDocument();
            expect(button).not.toBeDisabled();
        });
        it('should not display submit button on step 1', () => {
            jest.spyOn(React, 'useReducer').mockImplementation(() => [1, jest.fn()]);
            jest.spyOn(React, 'useState').mockImplementation(() => [false, jest.fn()]);
            render(<Survey/>);
            const button = screen.queryByText('Submit');
            expect(button).not.toBeInTheDocument();
        });
        it('should display submit button on step 4', () => {
            jest.spyOn(React, 'useReducer').mockImplementation(() => [4, jest.fn()]);
            jest.spyOn(React, 'useState').mockImplementation(() => [false, jest.fn()]);
            render(<Survey/>);
            const button = screen.queryByText('Submit');
            expect(button).toBeInTheDocument();
        });
        it('should not display next button on step 4', () => {
            jest.spyOn(React, 'useReducer').mockImplementation(() => [4, jest.fn()]);
            jest.spyOn(React, 'useState').mockImplementation(() => [false, jest.fn()]);
            render(<Survey/>);
            const button = screen.queryByText('Next');
            expect(button).not.toBeInTheDocument();
        });
        it('should display next button on step 1', () => {
            jest.spyOn(React, 'useReducer').mockImplementation(() => [1, jest.fn()]);
            jest.spyOn(React, 'useState').mockImplementation(() => [false, jest.fn()]);
            render(<Survey/>);
            const button = screen.queryByText('Next');
            expect(button).toBeInTheDocument();
        });
        it('should dispatch decrement on click previous button', () => {
            const dispatchMock = jest.fn()
            jest.spyOn(React, 'useReducer').mockImplementation(() => [2, dispatchMock]);
            jest.spyOn(React, 'useState').mockImplementation(() => [false, dispatchMock]);
            render(<Survey/>);
            const button = screen.queryByText('Previous');
            fireEvent.click(button!)

            expect(dispatchMock).toBeCalledWith({type: 'decrement'});
        });
        it('should dispatch increment on click next button', () => {
            const dispatchMock = jest.fn()
            jest.spyOn(React, 'useReducer').mockImplementation(() => [2, dispatchMock]);
            jest.spyOn(React, 'useState').mockImplementation(() => [false, dispatchMock]);
            render(<Survey/>);
            const button = screen.queryByText('Next');
            fireEvent.click(button!)

            expect(dispatchMock).toBeCalledWith({type: 'increment'});
        });
        it('should dispatch reset on click submit button', () => {
            const dispatchMock = jest.fn()
            jest.spyOn(React, 'useReducer').mockImplementation(() => [4, dispatchMock]);
            jest.spyOn(React, 'useState').mockImplementation(() => [false, dispatchMock]);
            render(<Survey/>);
            const button = screen.queryByText('Submit');
            fireEvent.click(button!)

            expect(dispatchMock).toBeCalledWith({type: 'reset'});
        });
    })
})




