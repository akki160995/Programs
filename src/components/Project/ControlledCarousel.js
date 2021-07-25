import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Project/css/style.css';
import Slide1 from './Images/slide-1.jpg';
import Slide2 from './Images/slide-4.jpg';

function ControlledCarousel() {
        return (
          < div className="back">
            <div className="indicator row">
            <a href="/" className=" col" >
              <div className="indicatorheading">Emergency<hr/></div>
              <div className="indicatortext">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
            </a>
            <a href="/" className="col" >
              <div className="indicatorheading">Corona Virus<hr/></div>
              <div className="indicatortext">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
            </a>
            </div>
            
      <Carousel fade interval={10000} controls={false}>
        
        <Carousel.Item className="mt-0">
          
          <img
            className=" opacity"
            src={Slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="mt-0">
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
  
  