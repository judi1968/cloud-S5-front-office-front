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
                            limit={3}
                            url="annonce_valides_recent"
                        />
                        <AnnonceBand 
                            title="Moin chere" 
                            onChangePage={() => handleToChangeAnnoncePage(2)} 
                            isShowAll={false}
                            limit={3}
                            url="annonce_valides_moin_chere" 
                        />
                    </>
                    ) : (
                    <>
                        {annoncePage === 1 ? (
                        <AnnonceBand 
                            title="Plus recent" 
                            onChangePage={() => handleToChangeAnnoncePage(0)} 
                            isShowAll={true}
                            limit={8} 
                            url="annonce_valides_recent"
                        />
                        ) : (
                        <AnnonceBand 
                            title="Moin chere" 
                            onChangePage={() => handleToChangeAnnoncePage(0)} 
                            isShowAll={true}
                            limit={8}
                            url="annonce_valides_moin_chere"
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