import Header from '../components/Header';
import './../asset/css/Accueil.css';

export const Accueil = () => {
    return(
        <div className='container-home'>
            {/* Header */}
            <div className='row'>
                <Header></Header>
            </div>
        </div>
    );
}