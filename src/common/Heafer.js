import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const activeStyle = { color: '#515151' };

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-light bg-light">
      <NavLink to="/" className="navbar-brand" activeStyle={activeStyle} exact>
        <img src="/topoleo.png" alt="logo-topoleo" />
      </NavLink>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Item>
            <NavLink
              to="/"
              className="nav-link"
              activeStyle={activeStyle}
              exact
            >
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/sobre-nos" className="nav-link" exact>
              Sobre
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/portfolio" className="nav-link" exact>
              Portfólio
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/servicos" className="nav-link" exact>
              Serviços
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/contacto" className="nav-link" exact>
              Contactos
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
