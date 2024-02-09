import { FaComments } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './../asset/css/Message.css'
import { useEffect, useState } from "react";
import Conversation from "../components/Conversation";
import { Navigate } from "react-router-dom";
import { api_domain } from "../services/serviceAPI";
const Message = () => {
    const [messageData,setMessageData] = useState([]);
    const [messageShow,setMessageShow] = useState(true);
    const fetchData = async () => {
        try {
          const response = await fetch(`${api_domain}clients`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (response.ok) {
              const data = await response.json();
              setMessageData(data.personnes);
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
    },[]);
    const [personneSelected,setPersonneSeleced] = useState({})
    const handleClickShowMessage = () => {
        if (messageShow===true) {
            setMessageShow(false)
        }else{
            setMessageShow(true)
        }
    }

    return(
        <div>
        <header>
            <Header></Header>
        </header>
            <div className="row container-message">
                <h1 className="titleOne">Message <FaComments></FaComments> </h1>
                {messageShow===true?(

                    <div className="row list-personne-message">
                    <div class="list-group">
                        {messageData?.map((message) => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a onClick={() => {handleClickShowMessage(); setPersonneSeleced(message.personne)}} class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                            <div class="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 class="mb-0">{message.personne.nom} {message.personne.prenom}</h6>
                            </div>
                            </div>
                        </a>
                        ))}
                    </div>
                </div>
                ):(
                    <Conversation personneSelected={personneSelected} returnToMessageGeneral={handleClickShowMessage}></Conversation>
                )}
            </div>
            <footer>
            <Footer></Footer>
        </footer>
    </div>
    );
};
export default Message;