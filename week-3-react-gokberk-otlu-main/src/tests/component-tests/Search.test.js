import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../../components/Search';

const mockedFetchWithSearchName = jest.fn();

describe("Search", () => {
    it('should render input element', () => {
        render(
            <Search 
                searchName={''}
                fetchWithSearchName={mockedFetchWithSearchName}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Search Name/i);
        expect(inputElement).toBeInTheDocument();
    })

    it('should have the value of searchName as its input value', async () => {
        render(
            <Search 
                searchName={'Test Search Area'}
                fetchWithSearchName={mockedFetchWithSearchName}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Search Name/i);
        expect(inputElement.value).toBe("Test Search Area");
    });
})