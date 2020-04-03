import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: '#515151' };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" activeStyle={activeStyle} exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/sobre-nos" activeStyle={activeStyle}>
              Sobre
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/sobre-nos" activeStyle={activeStyle}>
              Portfólio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/servicos" activeStyle={activeStyle}>
              Serviços
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contacto" activeStyle={activeStyle}>
              Contactos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
