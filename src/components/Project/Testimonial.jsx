import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Project/css/style.css';
import Testimonial1 from './Images/testimonial-bg-1.jpg';
import Testimonial2 from './Images/testimonial-bg-2.jpg';
import Testimonial3 from './Images/testimonial-bg-3.jpg';

function Testimonial() {
        return (
            <div className="container mt-3">
                <div className="fix-Testimonial">
                                <div className="Box_left"><b>Testimonial</b></div>
                            </div>
                            
                <Carousel  interval={2000}>
                <Carousel.Item>
                        
                        <div className="row testimonial">
                            <div className="col-lg-5 col-md-6">
                                <img
                                    className=" opacity"
                                    src={Testimonial1}
                                    alt="First slide"
                                />
                            </div>
                            
                            <div className=" col-lg-5 col-md-6 ">
                                <div className="ml-3 mr-3 mb-3">
                                    <div className="Testimonial-para ">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, molestiae laborum ipsa vero est delectus.<br/>
                                    </div>
                                        <div className="Testimonial-name">
                                        <b>Natasha Romanoff</b><br/>
                                        CEO
                                    </div>
                                </div> 
                            </div>                    
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <div className="row testimonial">
                            <div className="col-lg-5 col-md-6">
                                <img
                                    className=" opacity"
                                    src={Testimonial2}
                                    alt="First slide"
                                />
                            </div>
                            
                            <div className=" col-lg-5 col-md-6 ">
                                <div className="ml-3 mr-3 mb-3">
                                    <div className="Testimonial-para ">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, molestiae laborum ipsa vero est delectus.<br/>
                                    </div>
                                        <div className="Testimonial-name">
                                        <b>Dua Lupa</b><br/>
                                        CEO
                                    </div>
                                </div> 
                            </div>                    
                        </div>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <div className="row testimonial">
                            <div className="col-lg-5 col-md-6">
                                <img
                                    className=" opacity"
                                    src={Testimonial3}
                                    alt="Second slide"
                                />
                            </div>
                            <div className=" col-lg-5 col-md-6">
                                <div className="ml-3 mr-3">
                                    <div className="Testimonial-para ">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, molestiae laborum ipsa vero est delectus.<br/>
                                    </div>
                                        <div className="Testimonial-name">
                                        <b>Dua Lupa</b><br/>
                                        CEO
                                    </div>
                                </div>                     

                            </div>
                        </div>
                    </Carousel.Item>
        
                </Carousel>
            </div>
        );
    }
  
  export default Testimonial
  
  