/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import './../assets component/css/Conversation.css'
import { FaBackspace } from "react-icons/fa";

const Conversation = ({
    returnToMessageGeneral
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
            <h2>
                Conversation avec Rakoto
            </h2>   
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
            
        </div>
    )
}
export default Conversation;