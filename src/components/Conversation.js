/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import './../assets component/css/Conversation.css'
import { FaBackspace, FaPaperPlane } from "react-icons/fa";

const Conversation = ({
    returnToMessageGeneral,
    personneSelected
}) => {
    // style


    const [conversationData,setConversationData] = useState([]);
    useEffect(()=>{
        const conversations = [
            {id:'PERS002',message:'Bonjour, je suis interesse de votre annonce, puis-je j avoire plus de detail',isPropriety:false},
            {id:'PERS002',message:'Bonjour',isPropriety:true},
            {id:'PERS002',message:'Ca va ?',isPropriety:false},
            {id:'PERS002',message:'oui et toi',isPropriety:true},
            {id:'PERS002',message:'Ca va',isPropriety:false},
            {id:'PERS002',message:'Bien',isPropriety:true},
            {id:'PERS002',message:'ok ',isPropriety:false},
            {id:'PERS002',message:'Au revoir',isPropriety:true}
        ]
        setConversationData(conversations)
    },[])
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
                    {(conversation.isPropriety === true) ? (    
                    <li className="conversation-text col-12 conversation-text-no-propriety"><p>{conversation.message}</p></li>
                    ) : 
                    <li className="conversation-text col-12 conversation-text-propriety"><p>{conversation.message}</p></li>                    
                    }
                    <br></br>
                </>
            ))}
            </ul>
            <div className="form-send-message">
                <div class="input-group mb-3">
                    <input type="text" class="form-control col-10" placeholder="Ecrire un message" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button class="btn btn-outline-secondary col-2" type="button" id="button-addon2"><FaPaperPlane></FaPaperPlane></button>
                </div>
            </div>
        </div>
    )
}
export default Conversation;