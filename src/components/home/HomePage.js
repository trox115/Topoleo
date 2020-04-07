import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slider1 from '../../assets/slider1.jpg';
import topoleo2 from '../../assets/topoleo2.jpg';

const HomePage = () => {
  return (
    <div className="container-fluid homepage-slider p-0">
      <Carousel>
        <div>
          <img src={slider1} alt="topoleo1" />
        </div>
      </Carousel>
    </div>
  );
};

export default HomePage;
