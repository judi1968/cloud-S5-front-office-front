/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import './../assets component/css/Conversation.css'
import { FaBackspace, FaPaperPlane } from "react-icons/fa";
import { api_domain } from "../services/serviceAPI";
import { connect_token } from "../services/token.service";

const Conversation = ({
    returnToMessageGeneral,
    personneSelected,
    personneAuthSelected
}) => {
    // style
    const [conversationData,setConversationData] = useState([]);
    const fetchConversation = async () => {
            try {
                const response = await fetch(`${api_domain}message/${personneAuthSelected}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem("tknidclient")}`
                    },
                    
                });
                if (response.ok) {
                    const data = await response.json();
                    setConversationData(data);
                } else {
    
                }
            } catch (error) {
                console.error('Erreur lors de la demande au serveur:', error);

            }        
      };
      useEffect(() => {
        fetchConversation();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    const [isConnected, setIsConnected] = useState(false);
    const [messageData,setMessageData] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [personneConnectedData, setPersonneConnectedData] = useState([]);
    const sendMessage = async (idPersonne) => {
    if (messageData.trim().length > 0) { 
        try {
            console.log(isConnected);
            const response = await fetch(`${api_domain}message`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("tknidclient")}`
                },
                body: JSON.stringify({
                    texto: messageData,
                    idReceive: idPersonne
                }),
            });
            console.log(response);
            fetchConversation();
            setMessageData('');
        } catch (error) {
            // Si une erreur se produit, elle sera affichée dans la console
            console.error('Erreur lors de la demande au serveur :', error);
            return {
                status: 500,
                message: 'Erreur lors de la demande au serveur : ' + error.message
            };
        }
    }
}

  const checkConnection = async () => {
    try {
      const data = await connect_token();
      if (data.status === 200) {
        console.log(data);
        setPersonneConnectedData(data.personne)
        setIsConnected(true);
      } else {
        setIsConnected(false);
      }
    } catch (error) {
      console.error('Une erreur est survenue lors de la récupération de la personne:', error);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);
    return(
        <div className="container-conversation">
            <a className="btn-back" onClick={returnToMessageGeneral}><FaBackspace></FaBackspace> Retour</a>
            <center style={{marginTop:'5px'}}>
            <h2>
                Conversation avec {personneSelected.nom} {personneSelected.prenom}
            </h2>   
            </center>
            <ul>
            {conversationData?.map((conversation) => (
                <>
                    {(conversation.idsender === personneAuthSelected) ? (    
                    <li className="conversation-text col-12 conversation-text-no-propriety"><p>{conversation.texto}</p></li>
                    ) : 
                    <li className="conversation-text col-12 conversation-text-propriety"><p>{conversation.texto}</p></li>                    
                    }
                    <br></br>
                </>
            ))}
            </ul>
            <div className="form-send-message">
                <div class="input-group mb-3">
                 
                    <input  onChange={(e) => { setMessageData(e.target.value); }} value={messageData} type="text" class="form-control col-10" placeholder="Ecrire un message" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button onClick={() => { sendMessage(personneAuthSelected); }} class="btn btn-outline-secondary col-2" type="button" id="button-addon2"><FaPaperPlane></FaPaperPlane></button>
                </div>
            </div>
        </div>
    )
}
export default Conversation;