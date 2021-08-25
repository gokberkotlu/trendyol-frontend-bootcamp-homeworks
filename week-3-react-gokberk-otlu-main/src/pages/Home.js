import { useCallback, useState } from 'react';
import useFetch from '../hooks/useFetch'
import CharList from '../components/CharList';
import FilterChars from '../components/FilterChars';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import '../styles/pagination.css'
import '../styles/search.css'

const Home = () => {
    // Filter Parameters
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');
    const [species, setSpecies] = useState('');
    const [searchName, setSearchName] = useState('');

    // Set Url Structure
    let url = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchName}&status=${status}&gender=${gender}&species=${species}`;

    // Fetch Data with Filter Parameters
    let { data: characters, isPending, error } = useFetch(url);
    
    // Pagination Next Page Button Function
    const nextPage = () => {
        if(page < characters.info.pages )
        setPage(page + 1);
    }

    // Pagination Previous Page Button Function
    const previousPage = () => {
        if(page > 1)
        setPage(page - 1);
    }

    // Set Status Parameter by Calling Inside of Pagination Component
    const fetchWithStatus = useCallback((statusValue) => {
        setStatus(statusValue);
        setPage(1);
    }, []);

    // Set Gender Parameter by Calling Inside of Pagination Component
    const fetchWithGender = useCallback((genderValue) => {
        setGender(genderValue);
        setPage(1);
    }, []);

    // Set Species Parameter by Calling Inside of Pagination Component
    const fetchWithSpecies = useCallback((speciesValue) => {
        setSpecies(speciesValue);
        setPage(1);
    }, []);

    // Set Name Parameter by Calling Inside of Pagination Component
    const fetchWithSearchName = useCallback((searchNameValue) => {
        setSearchName(searchNameValue);
        setPage(1);
    }, []);
    
    return (
        <div className="home">
            <Search searchName={searchName} fetchWithSearchName={fetchWithSearchName} />
            {characters && <Pagination page={page} numberOfPages={characters.info.pages} previousPage={previousPage} nextPage={nextPage}/>}
            {error && <div className="fetch-error">{error}</div>}
            {isPending && <div className="loading"><i className="fas fa-3x fa-circle-notch fa-spin"></i></div>}
            <div className="character-page-container">
                {<FilterChars
                    fetchWithStatus={fetchWithStatus}
                    fetchWithGender={fetchWithGender}
                    fetchWithSpecies={fetchWithSpecies}
                    fetchWithSearchName={fetchWithSearchName}
                />}
                {!error && characters && <CharList characters={ characters.results } pages={characters.info.pages}/>}
            </div>
        </div>
    );
}
 
export default Home;