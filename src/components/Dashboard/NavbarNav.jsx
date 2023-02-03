import React from 'react';
import logo from "../../assets/img/LogoOl.jpg";
import "../../assets/css/Navbar.css";
import fotoPerfil from "../../assets/img/perfil.jpg";
import * as FaIcons from "react-icons/fa"


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavbarNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });

  }

  logout(){
    // firebase.auth().signOut().then(console.log);
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src={logo} className="img-dashboard" alt="User Icon" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <FaIcons.FaBars className="iconoBar" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
            <FaIcons.FaBell className="iconoNotificacion" />
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                 <img src={fotoPerfil} alt="Profile" className="profile-image"></img>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Mi perfil
                  </DropdownItem>
                  <DropdownItem>
                    Configuraciones
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.logout}>
                    Cerrar Sesión
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
