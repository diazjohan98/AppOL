import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from "react";
import { peticionNotificacion } from "../../services/apiNotificaciones"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imgLogo from "../../assets/img/LogoOl.jpg";
import imgPerfil from "../../assets/img/perfil.jpg"
import "../../assets/css/Navbar.css";
import * as FaIcons from "react-icons/fa"
import { NavLink } from "react-router-dom"


function Notificacion() {

  const [attentive, setAttentive] = useState(true)
  // const params = useParams();
  useEffect(() => {
    peticionNotificacion(setAttentive)
  }, [])

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand ><img src={imgLogo} className="img-dashboard" alt="User Icon" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <FaIcons.FaBell className="iconoNotificacion" />
            <NavDropdown id="basic-nav-dropdown" className="boton-despegable">
              <p className='tituloNotificacion'>Notificaciones</p>
              <NavDropdown.Item className='containerA'>
                <div className='exclamation'><FaIcons.FaExclamation className="fabicon" /></div>
                <div className='barAction'>
                  <p className='parrafoNoti'>Error Despliegue</p>
                  <div className='textoNotificaciones'>{attentive[0]?.time}</div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item className='containerA'>
                <div className='config'><FaIcons.FaRegSun className='fabicon' /></div>
                <div className='barAction'>
                  <p className='parrafoNoti'>Despliegue Realizado</p>
                  <div className='textoNotificaciones'>{attentive[1]?.time}</div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item className='containerA'>
                <div className='user'><FaIcons.FaRegUser className="fabicon" /></div>
                <div className='barAction'>
                  <p className='parrafoNoti'>Nc's Registradas</p>
                  <div className='textoNotificaciones'>{attentive[2]?.time}</div>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
            <div> <img src={imgPerfil} alt="Profile" className="profile-image" /></div>
            <NavDropdown id="basic-nav-dropdown">
              <NavDropdown.Item >
                <NavLink to="/" className="rounded py-2 w-100 m-20 d-inline-block px-3 " >
                  <FaIcons.FaPowerOff className="me-3" /> Logout</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Notificacion;