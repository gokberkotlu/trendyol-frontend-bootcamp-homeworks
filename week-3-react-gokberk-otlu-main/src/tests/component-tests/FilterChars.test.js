import { render, screen, fireEvent } from '@testing-library/react';
import FilterChars from '../../components/FilterChars';

const mockedFetchWithStatus = jest.fn();
const mockedFetchWithSpecies = jest.fn();
const mockedFetchWithGender = jest.fn();
const mockedFetchWithSearchName = jest.fn();


describe('FilterChars radio and reset button behaviour', () => {
    it('should check and uncheck radio button', () => {
        render(
            <FilterChars
                fetchWithStatus={mockedFetchWithStatus}
                fetchWithSpecies={mockedFetchWithSpecies}
                fetchWithGender={mockedFetchWithGender}
            />
        );
        const radioElements = screen.getAllByRole('radio');
        expect(radioElements.length).toBe(13);
        for(let i = 0; i < radioElements.length; i++) {
            expect(radioElements[i]).not.toBeChecked();
            fireEvent.click(radioElements[i]);
            expect(radioElements[i]).toBeChecked();
        }
    })
    
    it('should reset radio buttons by clicking reset button', () => {
        render(
            <FilterChars
                fetchWithStatus={mockedFetchWithStatus}
                fetchWithSpecies={mockedFetchWithSpecies}
                fetchWithGender={mockedFetchWithGender}
                fetchWithSearchName={mockedFetchWithSearchName}
            />
        );
        const radioInputElement = screen.getAllByRole('radio')[1];
        fireEvent.click(radioInputElement);
        const resetButton = screen.getByRole('button', { name: 'Reset'});
        fireEvent.click(resetButton);
        expect(radioInputElement).not.toBeChecked();
    })
})