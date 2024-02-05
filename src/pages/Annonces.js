import { useState } from "react";
import AnnonceBand from "../components/AnnonceBand";
import CarouselAnnonce from "../components/CarouselAnnonce";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Annonces = () => {
    const [annoncePage,setAnnoncePage] = useState(0);
    const handleToChangeAnnoncePage = (number) => {
        setAnnoncePage(number)
    }
    return(
        <div>
            <header>
                <Header></Header>
            </header>
                <CarouselAnnonce></CarouselAnnonce>
                {annoncePage === 0 ? (
                    <>
                        <AnnonceBand 
                            title="Plus recent" 
                            onChangePage={() => handleToChangeAnnoncePage(1)} 
                            isShowAll={false}    
                        />
                        <AnnonceBand 
                            title="Moin chere" 
                            onChangePage={() => handleToChangeAnnoncePage(2)} 
                            isShowAll={false}    
                        />
                    </>
                    ) : (
                    <>
                        {annoncePage === 1 ? (
                        <AnnonceBand 
                            title="Plus recent" 
                            onChangePage={() => handleToChangeAnnoncePage(0)} 
                            isShowAll={true}    
                        />
                        ) : (
                        <AnnonceBand 
                            title="Moin chere" 
                            onChangePage={() => handleToChangeAnnoncePage(0)} 
                            isShowAll={true}
                        />
                        )}
                    </>
                    )}

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
}
export default Annonces;