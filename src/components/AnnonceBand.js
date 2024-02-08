/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { GrNext } from "react-icons/gr";
import { Modal } from 'react-bootstrap';
import './../assets component/css/AnnonceBand.css';
import { TiArrowBack } from "react-icons/ti";
import { FaPaperPlane } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';
import { api_domain } from '../services/serviceAPI';
const AnnonceModal = ({ show, handleClose, annonce }) => {
  const handleAcheter = () => {
    console.log('okay');
  }
  
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Détails de l'annonce</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {annonce && (
          <div>
            <p>Nom: {annonce.nom} {annonce.prenom}</p>
            <p>Marque: {annonce.marque}</p>
            <p>Catégorie: {annonce.categorie}</p>
            <p>Prix: {annonce.prix}</p>
            <p>Couleur: #{annonce.couleur}</p>
            {/* Ajoutez d'autres détails de l'annonce ici */}
            <a href="#" className='btn-acheter' onClick={handleAcheter}>Acheter</a>
            <div className="form-send-message" style={{marginTop:'10px'}}>
                <div class="input-group mb-3">
                    <input type="text" class="form-control col-10" placeholder="Contacter le vendeur ici" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button class="btn btn-outline-secondary col-2" type="button" id="button-addon2"><FaPaperPlane></FaPaperPlane></button>
                </div>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          Fermer
        </button>
      </Modal.Footer>
    </Modal>
  );
};

const AnnonceBand = ({ title,onChangePage,url,isShowAll,limit }) => {
  const [annoncesData, setAnnonceData] = useState([]);
  const [selectedAnnonce, setSelectedAnnonce] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [annonceLimit,setAnnonceLimit] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(`${api_domain}${url}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tknidadmin")}`
        },
      });
      if (response.ok) {
          const data = await response.json();
          setAnnonceData(data.annoces);
        }else{
          Navigate('/error', {
            state: {
              errorStatus: response.status,
              errorMessage: response.message,
              errorTitle: response.title,
            },
          });
        }
      
    } catch (error) {
      console.error('Erreur lors de la demande au serveur:', error);
      Navigate('/error', {
        state: {
          errorStatus: 404,
          errorMessage: error,
          errorTitle: `Erreur lors de la demande au serveur`,
        },
      });
    }
  };
  useEffect(() => {
    fetchData();
    isShowAll===false?setAnnonceLimit(limit):setAnnonceLimit(annoncesData.length)
  }, []);
  
  const handleVoirToutClick = (annonce) => {
    setSelectedAnnonce(annonce);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };



  return (
    <div className="row align-items-md-stretch annonce-band">
      {isShowAll===true ? (
        <>
        <p><a className='btn btn-primary' style={{ marginRight: '5%' }} onClick={() => onChangePage()}><TiArrowBack style={{ marginRight: '5px' }} />Retour</a></p>
        </>
      ) : (null)}
      <h1 className='title'>{title}</h1>
      <div className="row mb-2">
        {annoncesData?.slice(0, annonceLimit).map((annonce) => (
          <div className="col-md-4" key={annonce.annonce.annonceId}>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">{annonce.personneClient.nom} {annonce.personneClient.prenom}</strong>
                <h3 className="mb-0">{annonce.catalogVoiture.marqueVoitureNom} | {annonce.catalogVoiture.categorieVoitureNom} </h3>
                <div className="mb-1 text-muted">{annonce.dateModification}</div>
                <p className="card-text mb-auto"><strong>Prix : </strong>{annonce.voiturePrix.prix}</p>
                <p className="card-text mb-auto"><strong>Couleur : </strong><span style={{ color: 'rgba(0,0,0,0)', backgroundColor: `#${annonce.catalogVoiture.couleur}`, borderRadius: '5px' }}>................</span></p>
                <a href="#" className="stretched-link btn-voir-detail" onClick={() => handleVoirToutClick(annonce)}>Voir le détail</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isShowAll===false ? (
        <>
        <p className='text-end '><a className='btn btn-primary' style={{ marginRight: '5%' }} onClick={() => onChangePage()}>Voir tout <GrNext style={{ marginLeft: '5px' }}></GrNext></a></p>
        </>
      ) : (null)}
      <hr></hr>
      <AnnonceModal show={showModal} handleClose={handleCloseModal} annonce={selectedAnnonce} />
    </div>
  );
}

export default AnnonceBand;
