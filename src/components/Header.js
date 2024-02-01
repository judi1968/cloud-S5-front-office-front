import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './../assets component/css/Header.css';
import { useState } from 'react';
import { FaPowerOff, FaRegUserCircle } from 'react-icons/fa';
import {AiOutlineMessage } from 'react-icons/ai';
import { GoHome } from 'react-icons/go'

const Header = () => {
  const [isConnected,setIsConected] = useState(Boolean);
  return (
    <div className='header'>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
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
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="recherche..."
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
                <Nav className="justify-content-end ">
                  <Nav.Link href="#action1" className='d-flex items-center header-link'><GoHome className='icon-header'/><span>Accueil</span></Nav.Link>
                  <Nav.Link href="#action2" className='d-flex items-center header-link'><AiOutlineMessage className='icon-header'/><span>Message</span></Nav.Link>
                  <Nav.Link href="#action1" className='d-flex items-center header-link'><FaRegUserCircle className='icon-header'/><span>Profil</span></Nav.Link>
                </Nav>
                
                <a className='btn btn-danger d-flex items-center btn-deconnection'><FaPowerOff className='icon-header'></FaPowerOff> <span>Deconnection</span></a>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;