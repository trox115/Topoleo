import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ImageExists from '../auxiliar/ImageExists';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function GaleriaPage(props) {
  function imageExists(image_url) {
    const http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;
  }
  const location = useLocation();

  const nome = location.state.name.name;
  const imgUrl = '/galerias/' + nome;
  let items = [];
  for (let i = 1; i <= 13; i += 1) {
    if (imageExists(imgUrl + '/' + i + '.jpg')) {
      items.push(
        <div>
          <img src={imgUrl + '/' + i + '.jpg'} />
        </div>,
      );
    } else {
      i = 13;
    }
  }

  return (
    <Carousel infiniteLoop useKeyboardArrows autoPlay>
      {items}
    </Carousel>
  );
}
export default GaleriaPage;
