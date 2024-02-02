import ControlledCarousel from '../components/ControlledCarousel';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './../asset/css/Accueil.css';

export const Accueil = () => {
    return(
        <div className='container-home'>
            <header>
                <Header></Header>
            </header>

                <ControlledCarousel></ControlledCarousel>
                
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
}