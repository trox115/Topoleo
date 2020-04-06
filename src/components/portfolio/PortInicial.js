import React from 'react';
import { useHistory } from 'react-router-dom';

function PortInicial(props) {
  const history = useHistory();
  const endereco = '/galerias/';
  const { nome, categoria } = props;
  const ultima = '/1.jpg';
  const final1 = endereco.concat(nome) + ultima;
  function handleClick(e) {
    e.preventDefault();
    const name = e.currentTarget.getAttribute('nome');
    history.push('/Galeria', { name: { name } });
  }
  return (
    <div
      className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter"
      data-id={categoria}
      a
      href="#"
      onClick={handleClick}
      nome={nome}
    >
      <img src={final1} className="img-responsive" alt="teste" />
    </div>
  );
}

export default PortInicial;
