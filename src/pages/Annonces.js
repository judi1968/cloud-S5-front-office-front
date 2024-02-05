import { useState } from "react";
import AnnonceBand from "../components/AnnonceBand";
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
                <AnnonceBand title="Plus recent"></AnnonceBand>   
                <AnnonceBand title="Moin chere"></AnnonceBand>   
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
}
export default Annonces;