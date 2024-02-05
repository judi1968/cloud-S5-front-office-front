import { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import './../assets component/css/AnnonceBand.css';

const AnnonceModal = ({ show, handleClose, annonce }) => {
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
            <p>Couleur: {annonce.couleur}</p>
            {/* Ajoutez d'autres détails de l'annonce ici */}
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

const AnnonceBand = ({ title,clickShow }) => {
  const [annoncesData, setAnnonceData] = useState([]);
  const [selectedAnnonce, setSelectedAnnonce] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const annonces = [
      { id: 'ANC0001', nom: 'Rakoto', prenom: 'Jean', marque: 'Audi', categorie: 'Limousine', prix: 1500000, couleur: "45eeff", dateModification: '24-04-2001' },
      { id: 'ANC0002', nom: 'Rabe', prenom: 'Jons', marque: 'BMW', categorie: 'Camion', prix: 1570000, couleur: "453ef5", dateModification: '24-04-2001' },
      { id: 'ANC0003', nom: 'Razaka', prenom: 'Rasoa', marque: 'Chevrolet', categorie: 'Sprinter', prix: 1200000, couleur: "f5e6ff", dateModification: '24-04-2001' }
    ];
    setAnnonceData(annonces);
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
      <h1 className='title'>{title}</h1>
      <div className="row mb-2">
        {annoncesData?.map((annonce) => (
          <div className="col-md-4" key={annonce.id}>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">{annonce.nom} {annonce.prenom}</strong>
                <h3 className="mb-0">{annonce.marque} | {annonce.categorie} </h3>
                <div className="mb-1 text-muted">{annonce.dateModification}</div>
                <p className="card-text mb-auto"><strong>Prix : </strong>{annonce.prix}</p>
                <p className="card-text mb-auto"><strong>Couleur : </strong><span style={{ color: 'rgba(0,0,0,0)', backgroundColor: `#${annonce.couleur}`, borderRadius: '5px' }}>................</span></p>
                <a href="#" className="stretched-link" onClick={() => handleVoirToutClick(annonce)}>Voir le détail</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className='text-end '><a className='btn btn-primary' style={{ marginRight: '5%' }} onClick={() => clickShow()}><FaEye style={{ marginRight: '5px' }}></FaEye>Voir tout</a></p>
      <hr></hr>
      <AnnonceModal show={showModal} handleClose={handleCloseModal} annonce={selectedAnnonce} />
    </div>
  );
}

export default AnnonceBand;
