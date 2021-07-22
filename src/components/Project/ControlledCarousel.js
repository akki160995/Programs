import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Project/css/style.css';
import Slide1 from './Images/slide-1.jpg';
import Slide2 from './Images/slide-4.jpg';

function ControlledCarousel() {
        return (
          < div className="back">
      <Carousel fade interval={2000} controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className=" opacity"
            src={Slide1}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" opacity"
            src={Slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        
      </Carousel>
      </div>
    );
  }
  
  export default ControlledCarousel
  
  