import { render, screen } from '@testing-library/react';
import Episodes from '../../components/Episodes';
import useFetch from '../../hooks/useFetch';

const mockedData = {
    data: {"id":41,
    "name":"Star Mort: Rickturn of the Jerri",
    "air_date":"May 31, 2020",
    "episode":"S04E10",
    "characters":["https://rickandmortyapi.com/api/character/1",
    "https://rickandmortyapi.com/api/character/2",
    "https://rickandmortyapi.com/api/character/3",
    "https://rickandmortyapi.com/api/character/4",
    "https://rickandmortyapi.com/api/character/5",
    "https://rickandmortyapi.com/api/character/107",
    "https://rickandmortyapi.com/api/character/344",
    "https://rickandmortyapi.com/api/character/592",
    "https://rickandmortyapi.com/api/character/667",
    "https://rickandmortyapi.com/api/character/668",
    "https://rickandmortyapi.com/api/character/669",
    "https://rickandmortyapi.com/api/character/670",
    "https://rickandmortyapi.com/api/character/671"],
    "url":"https://rickandmortyapi.com/api/episode/41",
    "created":"2020-08-06T05:51:52.079Z"}
}

jest.mock('../../hooks/useFetch', () => jest.fn());
  

beforeEach(() => {
    useFetch.mockImplementation(f => mockedData)
});

describe("Episodes", () => {
    it('should has fetch return', async () => {
        render(
            <Episodes />
        );
        const episodeElement = await screen.queryByText(/Star Mort: Rickturn of the Jerri/i);
        expect(episodeElement).toBeTruthy();
    })
})