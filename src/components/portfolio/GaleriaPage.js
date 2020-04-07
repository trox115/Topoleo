import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import { useLocation } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { findByLabelText } from '@testing-library/react';

const options = {
  overlayColor: 'rgb(25, 136, 124)',
  captionColor: '#a6cfa5',
  captionFontFamily: 'Raleway, sans-serif',
  captionFontSize: '22px',
  captionFontWeight: '300',
  captionFontStyle: 'capitalize',
  buttonsBackgroundColor: '#1b5245',
  buttonsIconColor: 'rgba(126, 172, 139, 0.8)',
  autoplaySpeed: 1500,
  transitionSpeed: 900,
  zIndex: '999999999999 !important',
  position: 'fixed',
};

const callbacks = {
  onLightboxClosed: () => {
    const item = document.getElementById('teste');
    item.style.display = 'block';
  },
  onLightboxOpened: () => {
    const item = document.getElementById('teste');
    if (item != null) {
      item.style.display = 'none';
    }
  },
};

function GaleriaPage(props) {
  function imageExists(image_url) {
    const http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status !== 404;
  }
  const location = useLocation();

  const nome = location.state.name.name;
  const imgUrl = '/galerias/' + nome;
  let items = [];
  for (let i = 1; i <= 13; i += 1) {
    if (imageExists(imgUrl + '/' + i + '.jpg')) {
      items.push(
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
          <img src={imgUrl + '/' + i + '.jpg'} alt="Topoleo" />
        </div>,
      );
    } else {
      i = 13;
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <button className="filter-button" value="todos">
            Todos
          </button>
          <button className="filter-button" value="habitacao">
            Habitação
          </button>
          <button className="filter-button" value="industrial">
            Industrial
          </button>
          <button className="filter-button" value="servicos">
            Serviços
          </button>
        </div>
        <SRLWrapper
          options={options}
          callbacks={callbacks}
          className="col-md-12"
        >
          {items}
        </SRLWrapper>
      </div>
    </div>
  );
}
export default GaleriaPage;
