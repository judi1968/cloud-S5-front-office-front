import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Annonce from '../components/Annonce';
import AnnonceDetail from '../components/AnnonceDetail';
import './../assets/css/Home.css';
import './../assets/css/statTables.css';
import './../assets/css/ListAnnonce.css';

const ListAnnonce = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleToggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const [selectedAnnonce, setSelectedAnnonce] = useState(null);
  const annoncesData = [
    {
      id: 1,
      date: '2024-03-15',
      vendeur: 'John Doe',
      marqueVoiture: 'Audi',
      type: 'SUV',
      prix: 35000,
      commissionPropose: 2000,
      description: 'Audi SUV en excellent état à vendre.',
      
    },
    {
      id: 2,
      date: '2024-03-16',
      vendeur: 'Jane Smith',
      marqueVoiture: 'Mercedes',
      type: 'Berline',
      prix: 28000,
      commissionPropose: 1500,
      description: 'Mercedes Berline, faible kilométrage, à vendre.'
    },
    {
      id: 3,
      date: '2024-03-17',
      vendeur: 'Bob Johnson',
      marqueVoiture: 'Toyota',
      type: 'Compacte',
      prix: 18000,
      commissionPropose: 1000,
      description: 'Toyota Compacte en bon état, à vendre à un bon prix.'
    },
    // Ajoutez autant d'annonces que nécessaire
  ];
  

  const handleDetailClick = (annonce) => {
    setSelectedAnnonce(annonce);
  };
  const handleFermerClick = () => {
    setSelectedAnnonce(null);
  };
  const renderAnnonceList = (nombre) => {
    return annoncesData.map((annonce) => (
      <div key={annonce.id} className={`mb-${nombre} col-md-${nombre}`}>
        <Annonce
          titre={`Annonce ${annonce.id}`}
          description={annonce.description}
          date={annonce.date}
          vendeur={annonce.vendeur}
          marqueVoiture={annonce.marqueVoiture}
          type={annonce.type}
          prix={annonce.prix}
          commissionPropose={annonce.commissionPropose}
          onDetailClick={() => handleDetailClick(annonce)}
        />
      </div>
    ));
  };

  
  

  return (
    <div className="container mt-12">
      <header>
        <Header />
      </header>
      
      <main className="mt-12 grid-container container">
      <div className='row'>   
      <div className={`recherche-annonce recherche-div ${isSearchOpen ? 'open' : 'closed'}`}>
      {isSearchOpen ? (
        <div className="d-flex flex-wrap align-items-center">
          <form className="row g-3 needs-validation" noValidate>
                <div class="col-md-4">
                  <label for="validationCustom00" class="form-label">Chercher un annonce</label>
                  <input type="text" class="form-control" id="validationCustom00" placeholder='text,titre,nom de voiture ,...'/>
                </div>
                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label">Marque</label>
                  <select class="form-select" id="validationCustom01">
                    <option selected value="*">tout</option>
                    <option value="1">Audi</option>
                    <option value="2">Mercedes</option>

                  </select>
                </div>
                <div class="col-md-4">
                  <label for="validationCustom02" class="form-label">Model</label>
                  <select class="form-select" id="validationCustom02" required>
                    <option selected value="*">Tout</option>
                    <option value="1">X5</option>
                    <option value="2">X6</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="validationCustom03" class="form-label">Date debut</label>
                  <input type="date" class="form-control" id="validationCustom03" />
                </div>
                <div class="col-md-3">
                <label for="validationCustom04" class="form-label">Date fin</label>
                  <input type="date" class="form-control" id="validationCustom04" />
                </div>
                <div class="col-md-3">
                  <label for="validationCustom05" class="form-label">Valeur minimum</label>
                  <input type="number" class="form-control" id="validationCustom05" />
                </div>
                <div class="col-md-3">
                <label for="validationCustom06" class="form-label">Valeur maximum</label>
                  <input type="number" class="form-control" id="validationCustom06" />
                </div>
                
              </form>
              
              <button className="btn btn-primary btn-ferme" onClick={handleToggleSearch}>
                Fermer le recherche
              </button>
            </div>
            ) : (
              <button className="btn btn-primary btn-ouvre" onClick={handleToggleSearch}>
                Faire de la recherche
              </button>
            )}
        </div>
        <div className="container table-container annonce-div">
          <h1>Liste des annonces de vente de voitures</h1>
          <br></br>
          <div className='row'>
            {selectedAnnonce ? (
              // Si une annonce est sélectionnée, afficher les détails de l'annonce à droite
              <>
                <div className="col-md-8">
                  <AnnonceDetail annonce={selectedAnnonce} onFermerClick={handleFermerClick} />
                </div>
                <div className="col-md-4 mb-4">
                  {renderAnnonceList(12)}
                </div>
              </>
            ) : (
              // Si aucune annonce n'est sélectionnée, afficher simplement la liste des annonces
              <div className="row d-flex flex-wrap col-12">
                {renderAnnonceList(4)}
              </div>
            )}
          </div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default ListAnnonce;
