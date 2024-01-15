import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Annonce.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal,Button } from 'react-bootstrap';
import { faInfo, faShoppingCart, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Annonce = ({ titre, description, date, vendeur, marqueVoiture, type, prix, commissionPropose, onDetailClick }) => {
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
  return (
    <div className="animated-annonce-card">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{titre}</h5>
          <p className="card-text">{description}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Date:</strong> {date}</li>
            <li className="list-group-item"><strong>Vendeur:</strong> {vendeur}</li>
            <li className="list-group-item"><strong>Marque de la voiture:</strong> {marqueVoiture}</li>
            <li className="list-group-item"><strong>Type:</strong> {type}</li>
            <li className="list-group-item"><strong>Prix:</strong> ${prix}</li>
            <li className="list-group-item"><strong>Commission proposée:</strong> ${commissionPropose}</li>
          </ul>
          <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group me-2" role="group" aria-label="First group">
          <button className="btn btn-primary mt-3" onClick={onDetailClick}>
            <FontAwesomeIcon icon={faInfo} /> Detail
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

export default Annonce;
