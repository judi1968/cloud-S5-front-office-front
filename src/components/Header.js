/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './../assets component/css/Header.css';
import { FaNewspaper, FaPowerOff, FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineMessage } from 'react-icons/ai';
import { GoHome } from 'react-icons/go';
import { useEffect, useState } from 'react';
import { connect_token } from '../services/token.service';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const checkConnection = async () => {
    try {
      const data = await connect_token();
      if (data.status === 200) {
        setIsConnected(true);
        setUsername(data.personne.personne.nom);
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

  const disconnectAction = () => {
    localStorage.removeItem('tknidclient');
    setIsConnected(false);
    setUsername('');
    navigate('/');
  };

  return (
    <div className='header'>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 fixed-top">
          <Container fluid>
            <Navbar.Brand href="#"><img src="%PUBLIC_URL%/../assets/images/logo/logo_trial rgba(a0) large.png" alt="logo du VaikaNet" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className=''>
                <Nav className="justify-content-end ">
                  <Nav.Link href="/" className='d-flex items-center header-link'><GoHome className='icon-header' /><span>Accueil</span></Nav.Link>
                  <Nav.Link href="/list-annonce" className='d-flex items-center header-link'><FaNewspaper className='icon-header' /><span>Annonce</span></Nav.Link>
                  <Nav.Link href="/message" className='d-flex items-center header-link'><AiOutlineMessage className='icon-header' /><span>Message</span></Nav.Link>
                  {isConnected ? (
                    <Nav.Link href="#" className='d-flex items-center header-link' style={{ color: 'black' }}><FaRegUserCircle className='icon-header' /><span>{username}</span></Nav.Link>
                  ) : null}
                </Nav>
                {!isConnected ? (
                  <a className='btn btn-success d-flex items-center btn-deconnection' href='/login'><FaPowerOff className='icon-header'></FaPowerOff><span> Connecter</span></a>
                ) : (
                  <a className='btn btn-danger d-flex items-center btn-deconnection' onClick={disconnectAction}><FaPowerOff className='icon-header'></FaPowerOff><span> deconnecter</span></a>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
