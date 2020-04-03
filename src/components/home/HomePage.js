import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Topoleo</h1>
      <Link to="sobre-nos" className="btn btn-primay">
        Sobre nós
      </Link>
    </div>
  );
};

export default HomePage;
