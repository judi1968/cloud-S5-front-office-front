import { useState } from "react";
import AnnonceBand from "../components/AnnonceBand";
import CarouselAnnonce from "../components/CarouselAnnonce";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AnnonceListTout = (
    title,
    url
) => {

    return(
        <div>
            <header>
                <Header></Header>
            </header>
                <CarouselAnnonce></CarouselAnnonce>
                <AnnonceBand title={title}></AnnonceBand>   
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
}
export default AnnonceListTout;