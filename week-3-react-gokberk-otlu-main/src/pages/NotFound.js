import GoToHome from '../components/GoToHome';
import '../styles/not-found.css'

const NotFound = () => {
    return (
        <div className="not-found-container">
            <p className="not-found-message">404</p>
            <GoToHome />
        </div>
    );
}
 
export default NotFound;