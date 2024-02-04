import './../assets component/css/AnnonceBand.css'
const AnnonceBand = ({
  title
}
) => {
    return(
        
    <div class="row align-items-md-stretch annonce-band">
      <h1 className='title'>{title}</h1>
  <div class="row mb-2">
    <div class="col-md-4">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">Rakoto Jean</strong>
          <h3 class="mb-0">Audi | categorie </h3>
          <div class="mb-1 text-muted">24 novembre 2023</div>
          <p class="card-text mb-auto"><strong>Prix : </strong>150 000Ar</p>
          <p class="card-text mb-auto"><strong>Couleur : </strong><span style={{'color':'rgba(0,0,0,0)','backgroundColor':'red','borderRadius':'5px'}}>................</span></p>
          <a href="#" class="stretched-link">Voir le detail</a>
        </div>
      </div>
    </div>
  

  </div>

  </div>
    );
}
export default AnnonceBand;