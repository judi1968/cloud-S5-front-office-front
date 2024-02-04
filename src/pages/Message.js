import { FaComments } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './../asset/css/Message.css'
import { useEffect, useState } from "react";
import Conversation from "../components/Conversation";
const Message = () => {
    const [messageData,setMessageData] = useState([]);
    const [messageShow,setMessageShow] = useState(true);
    useEffect(() => {
        const messages = [
            {id:'PERS001',nom:'Rakoto',prenom:'Jean',lastMessage:'Bonjour',lastTime:'01-01-03 18:00'},
            {id:'PERS002',nom:'Rabe',prenom:'Soa',lastMessage:'On le vend',lastTime:'01-01-03 18:00'},
            {id:'PERS003',nom:'Randria',prenom:'Mika',lastMessage:'Okay okay',lastTime:'01-01-03 18:00'},
            {id:'PERS004',nom:'Tiana',prenom:'Rasoa',lastMessage:'Je suis interesse',lastTime:'01-01-03 18:00'},
            {id:'PERS005',nom:'Rahary',prenom:'Henry',lastMessage:'A plus',lastTime:'01-01-03 18:00'},

        ];
        setMessageData(messages)
    },[]);

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
                        <a onClick={handleClickShowMessage} class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                            <div class="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 class="mb-0">{message.nom} {message.prenom}</h6>
                                <p class="mb-0 opacity-75">{message.lastMessage}</p>
                            </div>
                            <small class="opacity-50 text-nowrap">{message.lastTime}</small>
                            </div>
                        </a>
                        ))}
                    </div>
                </div>
                ):(
                    <Conversation  returnToMessageGeneral={handleClickShowMessage}></Conversation>
                )}
            </div>
            <footer>
            <Footer></Footer>
        </footer>
    </div>
    );
};
export default Message;