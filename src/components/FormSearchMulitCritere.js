import { FaSearch } from "react-icons/fa";
import './../asset/css/style-color.css'
import './../assets component/css/FormSearchMulitCritere.css'
const FormSearchMulitCritere = () => {
    return(
        <div className="card container mt-5 p-4 mb-5 form-search-multi-critere">
            <center>
                <h1 className="text-font-two">Faite des recherches multi-critere</h1>
            </center>
            <form>
            <div className="row">
                <div class="col-md-4">
                <label for="country" class="form-label">Marque</label>
                <select class="form-select" id="country">
                    <option value="">Audi</option>
                    <option>Mercedes</option>
                    <option>Porche</option>
                </select>
                </div>
                <div class="col-md-4">
                <label for="state" class="form-label">Categorie</label>
                <select class="form-select" id="state">
                    <option value="">Limousine</option>
                    <option>Camion</option>
                </select>
                </div>
                <div class="col-md-4">
                <label for="state" class="form-label">Type caburant</label>
                <select class="form-select" id="state" >
                    <option value="">Essence</option>
                    <option>Electrique</option>
                </select>
                </div>
            </div>
            <div className="row">
                <div class="col-md-4">
                <label for="country" class="form-label">Transmission</label>
                <select class="form-select" id="country">
                    <option value="">Audi</option>
                    <option>Mercedes</option>
                    <option>Porche</option>
                </select>
                </div>
                <div class="col-md-4">
                <label for="state" class="form-label">Categorie</label>
                <select class="form-select" id="state">
                    <option value="">Limousine</option>
                    <option>Camion</option>
                </select>
                </div>
                <div class="col-md-4">
                <label for="state" class="form-label">Equipement interne</label>
                <select class="form-select" id="state" >
                    <option value="">Essence</option>
                    <option>Electrique</option>
                </select>
                </div>
            </div>


          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Annee de fabrication</label>
              <div className="row">
                <div className="col-6">
                    <input type="date" class="form-control col-6" id="cc-name" placeholder=""/>
                    <small class="text-muted">Anne minimale </small>
                </div>
                <div className="col-6">
                    <input type="date" class="form-control col-6" id="cc-name" placeholder=""/>
                    <small class="text-muted">Anne minimale </small>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-name" class="form-label">Date de l'annonce</label>
              <div className="row">
                <div className="col-6">
                    <input type="date" class="form-control col-6" id="cc-name" placeholder=""/>
                    <small class="text-muted">Date debut</small>
                </div>
                <div className="col-6">
                    <input type="date" class="form-control col-6" id="cc-name" placeholder=""/>
                    <small class="text-muted">Date fin</small>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Prix minimum</label>
              <input type="number" class="form-control" id="cc-expiration" placeholder="An Ariary" />
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">Prix maximum</label>
              <input type="number" class="form-control" id="cc-cvv" placeholder="en Ariary" />
            </div>
          </div>

          <hr class="my-4"/>

          <button class="w-100 btn btn-primary btn-lg" type="submit">Chercher <FaSearch></FaSearch></button>
          </form>
        </div>
    );
}
export default FormSearchMulitCritere;