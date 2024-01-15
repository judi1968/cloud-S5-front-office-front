// Dans le composant AnnonceDetail

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/AnnonceDetail.css';
import { faEnvelope, faHeart,  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button,Modal } from 'react-bootstrap';

const AnnonceDetail = ({ annonce, onFermerClick }) => {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState('');

  const handleActionClick = (action) => {
    setShowModal(true);
    setAction(action);
  };

  const handleClose = () => {
    setShowModal(false);
    setAction('');
  };

  const handleConfirm = () => {
    // Ajoutez ici la logique pour gérer le clic sur "Oui"
    // Vous pouvez utiliser l'état `action` pour déterminer quelle action a été confirmée
    console.log(`Action confirmée: ${action}`);
    handleClose();
  };
  if (!annonce) {
    return null;
  }

  return (
    <div className="annonce-detail-container">
      <h2>Détails de l'annonce</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{`Annonce ${annonce.id}`}</h5>
          <p className="card-text">{annonce.description}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Date:</strong> {annonce.date}</li>
            <li className="list-group-item"><strong>Vendeur:</strong> {annonce.vendeur}</li>
            <li className="list-group-item"><strong>Marque de la voiture:</strong> {annonce.marqueVoiture}</li>
            <li className="list-group-item"><strong>Type:</strong> {annonce.type}</li>
            <li className="list-group-item"><strong>Prix:</strong> ${annonce.prix}</li>
            <li className="list-group-item"><strong>Commission proposée:</strong> ${annonce.commissionPropose}</li>
          </ul>
          <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group me-2" role="group" aria-label="First group">
            <button className="btn btn-ferme btn-primary mt-3" onClick={onFermerClick} >
               Ferme
            </button>
            <button className="btn btn-primary mt-3" onClick={() => handleActionClick('Acheter')}>
              <FontAwesomeIcon icon={faShoppingCart} /> Acheter
            </button>
            <button className="btn btn-primary mt-3" onClick={() => handleActionClick('Contacter')}>
              <FontAwesomeIcon icon={faEnvelope} /> Contacter
            </button>
            <button className="btn btn-primary mt-3" onClick={() => handleActionClick('Favoris')}>
              <FontAwesomeIcon icon={faHeart} /> Favoris
            </button>
          </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous sûr de vouloir {action.toLowerCase()} ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Non
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Oui
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AnnonceDetail;
