import { Container } from 'react-bootstrap';
import ControlledCarousel from '../components/ControlledCarousel';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './../asset/css/Accueil.css';
import FormSearchMulitCritere from '../components/FormSearchMulitCritere';

export const Accueil = () => {
    return(
        <div className='container-home'>
            <header>
                <Header></Header>
            </header>
                <ControlledCarousel></ControlledCarousel>   
                <FormSearchMulitCritere></FormSearchMulitCritere>             
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
}