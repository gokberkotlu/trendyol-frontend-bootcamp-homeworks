const Search = ({searchName, fetchWithSearchName}) => {
    return (
        <input className="search-name"
            type="text"
            value={ searchName }
            onChange={(e) => fetchWithSearchName(e.target.value)}
            placeholder="Search Name"
        />
    );
}
 
export default Search;