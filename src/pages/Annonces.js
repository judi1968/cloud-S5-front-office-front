import AnnonceHeader from "../components/AnnonceHeader";
import CarouselAnnonce from "../components/CarouselAnnonce";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Annonces = () => {
    return(
        <div>
            <header>
                <Header></Header>
            </header>
                <CarouselAnnonce></CarouselAnnonce>
                <AnnonceHeader></AnnonceHeader>       
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
}
export default Annonces;