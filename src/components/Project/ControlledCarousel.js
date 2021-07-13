import React,{useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './css/style.css';
import Slide1 from './Images/slide-1.jpg';
import Slide2 from './Images/slide-4.jpg';

function ControlledCarousel() {
        return (
      <Carousel fade interval={2000} controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide1}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        
      </Carousel>
    );
  }
  
  export default ControlledCarousel
  
  