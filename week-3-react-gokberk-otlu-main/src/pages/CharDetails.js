import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Episodes from "../components/Episodes";
import GoToHome from "../components/GoToHome";
import '../styles/char-details.css'
import '../styles/fetch-error.css'

const CharDetails = () => {
    const {id} = useParams();
    const { data: character, isPending, error } = useFetch(`https://rickandmortyapi.com/api/character/${id}`);
    // Status Icons Styling Classes
    const status = {
        'Alive': 'status-alive',
        'Dead': 'status-dead',
        'unknown': 'status-unknown'
    }

    // Details of character which is called by id parameter
    return (
        <>
            <div className="char-details">
                { isPending && <div className="loading"><i className="fas fa-3x fa-circle-notch fa-spin"></i></div> }
                { error && <div className="fetch-error">{ error }</div> }
                { character && (
                    <article>
                        <div className="char-details-header">
                            <div className="char-details-img">
                                <img src={character.image} alt={character.name}/>
                            </div>
                            <div className="char-details-detail">
                                <h2 className="char-details-detail-name">Name: { character.name }</h2>
                                <p className="character-detail-status">
                                    <span className={`status-icon ${status[character.status]}`}></span>
                                    <span>
                                        {character.status} - {character.species}
                                    </span>
                                </p>
                                <p>Gender: { character.gender }</p>
                                <div>Location: { character.location.name }</div>
                            </div>
                        </div>
                        <div className="char-details-episodes">
                            <h2 className="episodes-title">Last Episodes:</h2>
                            <ul className="episode-list">
                                {character.episode.slice(0).reverse().slice(0,5).map((episode) => (
                                    <a href={episode} key={episode.split("episode/")[1]}>
                                        <li>Episode - {episode.split("episode/")[1]} <Episodes key={episode.split("episode/")[1]} episodeURL={episode} /></li>
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </article>
                ) }
            </div>
            <GoToHome />
        </>
    );
}

export default CharDetails;