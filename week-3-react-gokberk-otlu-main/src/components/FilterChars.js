import '../styles/filter-chars.css'
import '../styles/reset-button.css'

const FilterChars = ({fetchWithStatus, fetchWithGender, fetchWithSpecies, fetchWithSearchName}) => {

    // Reset the Filter Parameters from Fetch URL
    const resetFilter = () => {
        fetchWithStatus('');
        fetchWithGender('');
        fetchWithSpecies('');
        fetchWithSearchName('');
        var radios = document.querySelectorAll('input[type=radio]:checked');
        radios.forEach(radio => radio.checked = false);
    }

    // Set the filter parameters by using functions which come from Home.js
    return (
        <div className="filter-aside">
            <button className="reset-filter" onClick={resetFilter}>Reset</button>
            <h3 className="filter-aside-title">Status</h3>
            <ul className="filter-aside-status-list">
                <li>
                    <input type="radio" name="status" id="status-none" value="" onChange={(e) => {fetchWithStatus(e.target.value)}} />
                    <label htmlFor="status-none">None</label>
                </li>
                <li>
                    <input type="radio" name="status" id="alive" value="Alive" onChange={(e) => {fetchWithStatus(e.target.value)}} />
                    <label htmlFor="alive">Alive</label>
                </li>
                <li>
                    <input type="radio" name="status" id="dead" value="Dead" onChange={(e) => {fetchWithStatus(e.target.value)}} />
                    <label htmlFor="dead">Dead</label>
                </li>
                <li>
                    <input type="radio" name="status" id="unknown-status" value="unknown" onChange={(e) => {fetchWithStatus(e.target.value)}} />
                    <label htmlFor="unknown-status">Unknown</label>
                </li>
            </ul>
            <hr />
            <h3 className="filter-aside-title">Species</h3>
            <ul className="filter-aside-species-list">
                <li>
                    <input type="radio" name="species" id="species-none" value="" onChange={(e) => {fetchWithSpecies(e.target.value)}} />
                    <label htmlFor="species-none">None</label>
                </li>
                <li>
                    <input type="radio" name="species" id="human" value="Human" onChange={(e) => {fetchWithSpecies(e.target.value)}}  />
                    <label htmlFor="human">Human</label>
                </li>
                <li>
                    <input type="radio" name="species" id="alien" value="Alien" onChange={(e) => {fetchWithSpecies(e.target.value)}}  />
                    <label htmlFor="alien">Alien</label>
                </li>
                <li>
                    <input type="radio" name="species" id="humanoid" value="Humanoid" onChange={(e) => {fetchWithSpecies(e.target.value)}}  />
                    <label htmlFor="humanoid">Humanoid</label>
                </li>
            </ul>
            <hr />
            <h3 className="filter-aside-title">Gender</h3>
            <ul className="filter-aside-gender-list">
                <li>
                    <input type="radio" name="gender" id="gender-none" value="" onChange={(e) => {fetchWithGender(e.target.value)}} />
                    <label htmlFor="gender-none">None</label>
                </li>
                <li>
                    <input type="radio" name="gender" id="male" value="Male" onChange={(e) => {fetchWithGender(e.target.value)}}  />
                    <label htmlFor="male">Male</label>
                </li>
                <li>
                    <input type="radio" name="gender" id="female" value="Female" onChange={(e) => {fetchWithGender(e.target.value)}}  />
                    <label htmlFor="female">Female</label>
                </li>
                <li>
                    <input type="radio" name="gender" id="unknown-gender" value="unknown" onChange={(e) => {fetchWithGender(e.target.value)}}  />
                    <label htmlFor="unknown-gender">Unknown</label>
                </li>
                <li>
                    <input type="radio" name="gender" id="genderless" value="Genderless" onChange={(e) => {fetchWithGender(e.target.value)}}  />
                    <label htmlFor="genderless">Genderless</label>
                </li>
            </ul>
        </div>
    );
}
 
export default FilterChars;