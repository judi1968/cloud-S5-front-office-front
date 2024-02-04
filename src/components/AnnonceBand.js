import { useEffect, useState } from 'react';
import './../assets component/css/AnnonceBand.css'
import { FaEye } from 'react-icons/fa';
const AnnonceBand = ({
  title
}
) => {
  const [annoncesData,setAnnonceData] = useState([]);

  useEffect(() =>{
    const annonces = [
      {id:'ANC0001',nom:'Rakoto',prenom:'Jean',marque:'Audi',categorie:'Limousine',prix:1500000,couleur:"45eeff",dateModification:'24-04-2001'},
      {id:'ANC0002',nom:'Rabe',prenom:'Jons',marque:'BMW',categorie:'Camion',prix:1570000,couleur:"453ef5",dateModification:'24-04-2001'},
      {id:'ANC0003',nom:'Razaka',prenom:'Rasoa',marque:'Chevrolet',categorie:'Sprinter',prix:1200000,couleur:"f5e6ff",dateModification:'24-04-2001'}
    ];
    setAnnonceData(annonces);
  }, []);
    return(
        
    <div class="row align-items-md-stretch annonce-band">
      <h1 className='title'>{title}</h1>
      <div class="row mb-2">
        {annoncesData?.map((annonce) => (
         <div class="col-md-4">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">{annonce.nom} {annonce.prenom}</strong>
              <h3 class="mb-0">{annonce.marque} | {annonce.categorie} </h3>
              <div class="mb-1 text-muted">{annonce.dateModification}</div>
              <p class="card-text mb-auto"><strong>Prix : </strong>{annonce.prix}</p>
              <p class="card-text mb-auto"><strong>Couleur : </strong><span style={{color:'rgba(0,0,0,0)',backgroundColor:`#${annonce.couleur}`,borderRadius:'5px'}}>................</span></p>
              <a href="#" class="stretched-link">Voir le detail</a>
            </div>
          </div>
        </div>
        ))}
      </div>
      <p className='text-end '><a className='btn btn-primary'  style={{marginRight:'5%'}}><FaEye style={{marginRight:'5px'}}></FaEye>Voir tout</a></p>
      <hr></hr>
    </div>
    );
}
export default AnnonceBand;