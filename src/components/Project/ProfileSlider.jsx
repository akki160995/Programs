import React from "react";
import "./ProfileSlider.css";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialbg1 from './Images/testimonialbg1.jpg';
import testimonialbg2 from './Images/testimonialbg2.jpg';
import testimonialbg3 from './Images/testimonialbg3.jpg';
import {IoIosArrowDropleftCircle} from 'react-icons/io';
import {IoIosArrowDroprightCircle} from 'react-icons/io';

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <div className="next-slick-arrow"> <IoIosArrowDroprightCircle/> </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> <IoIosArrowDropleftCircle/> </div>
      </div>
    )
  };
  
  return (
    <>
    <Carousel {...settings} >
      <div className="TestimonialSlider">
        <div className="Testimonial">
            <div className="TestimonialLeft"> 
                <div className="textBlock">
                  <h5>Testimonial</h5>
                </div>
                <img src={testimonialbg1} alt="testimonialbg1" width="700px" height="550px" />
            </div>
            <div className="TestimonialRight">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h5>Sarah Winter</h5>
                <span>CEO</span>
            </div>
        </div>
      </div>
      <div className="TestimonialSlider">
        <div className="Testimonial">
            <div className="TestimonialLeft"> 
                <div className="textBlock">
                  <h5>Testimonial</h5>
                </div>
                <img src={testimonialbg2} alt="testimonialbg2" width="700px" height="550px" />
            </div>
            <div className="TestimonialRight">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h5>Natasha Romanoff</h5>
                <span>CEO</span>
            </div>
        </div>
      </div>
      <div className="TestimonialSlider">
        <div className="Testimonial">
            <div className="TestimonialLeft"> 
                <div className="textBlock">
                  <h5>Testimonial</h5>
                </div>
                <img src={testimonialbg3} alt="testimonialbg3" width="700px" height="550px" />
            </div>
            <div className="TestimonialRight">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h5>Dua Lipa</h5>
                <span>CEO</span>
            </div>
        </div>
      </div>
    </Carousel>
    
    </>   
  );
}