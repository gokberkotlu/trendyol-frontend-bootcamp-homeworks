import { render, screen, waitFor } from '@testing-library/react';
import UseFetchExample from './__mocks__/UseFetchExample'
import fetchMock from 'fetch-mock-jest'

const mockFetchedData = {
    results: {"id" : 1},
    isPending: false,
    error: null
}

describe("useFetch", () => {
    it('should have fetch data from api and watch on rendered jsx', async () => {
        fetchMock
        .get('http://example.com/users', mockFetchedData);
        render(<UseFetchExample url={"http://example.com/users"} />)
        await waitFor(() => expect(screen.queryByText("1")).toBeTruthy());
    })
})