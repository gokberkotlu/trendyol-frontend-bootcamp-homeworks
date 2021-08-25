import { Link } from 'react-router-dom';
const CharList = ({ characters }) => {

    // Status Icon Class Selection
    const statusClass = {
        'Alive': 'status-alive',
        'Dead': 'status-dead',
        'unknown': 'status-unknown'
    }

    // Return list of characters
    const listCharacters =  (characters) => {
        return (
            characters.map(character => (
                <Link to={`/characters/${character.id}`} className="character-preview" key={character.id} data-testid="character-item-test">
                    <div className="character-image">
                        <img src={character.image} alt={character.name} />
                    </div>
                    <div className="character-detail">
                        <div className="character-detail-header">
                            <h2>{character.name}</h2>
                            <p className="character-detail-status">
                                <span className={`status-icon ${statusClass[character.status]}`}></span>
                                <span>
                                    {character.status} - {character.species}
                                </span>
                            </p>
                        </div>
                        <div className="character-detail-gender">
                            <h3 className="char-subtitle">Gender:</h3>
                            <span>{character.gender}</span>
                        </div>
                        <div className="character-detail-location">
                            <h3 className="char-subtitle">Last known location:</h3>
                            <span>{character.location.name}</span>
                        </div>
                    </div>
                </Link>
            ))
        )
    };

    return (
        <div className="character-list">
            { listCharacters(characters) }
        </div>
    );
}

export default CharList;