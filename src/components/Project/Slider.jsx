import React from "react";
import "./Slider.css";
import { NavLink } from "react-router-dom"; 
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import teamdoctor1 from './Images/teamdoctor1.jpg';
import teamdoctor2 from './Images/teamdoctor2.jpg';
import teamdoctor3 from './Images/teamdoctor3.jpg';
import teamdoctor4 from './Images/teamdoctor4.jpg';
import teamdoctor5 from './Images/teamdoctor5.jpg';
import {FaFacebookF} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import {IoIosArrowDropleftCircle} from 'react-icons/io';
import {IoIosArrowDroprightCircle} from 'react-icons/io';

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
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
        <div className="Box">
            <img src={teamdoctor1} alt="teamdoctor1" width="400px" height="590px" title="team-doctor-1"/>   
            <div className="overlay">
                <div className="text">
                    <div><h4>dr. Cole Young</h4></div>
                    <div><span>Head Surgery</span></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <div className="icon">
                        <NavLink to="/about"><FaFacebookF/></NavLink>
                        <NavLink to="/about"><TwitterIcon/></NavLink>
                        <NavLink to="/about"><FaLinkedinIn/></NavLink>
                        <NavLink to="/about"><InstagramIcon/></NavLink>
                    </div>
                </div>
            </div>
        </div> 
        <div className="Box">
            <img src={teamdoctor2} alt="teamdoctor2" width="400px" height="590px" title="team-doctor-2"/> 
            <div className="overlay">
                <div className="text">
                    <div><h4>dr. Josh Lawson</h4></div>
                    <div><span>Head Geriatric</span></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <div className="icon">
                        <NavLink to="/about"><FaFacebookF/></NavLink>
                        <NavLink to="/about"><TwitterIcon/></NavLink>
                        <NavLink to="/about"><FaLinkedinIn/></NavLink>
                        <NavLink to="/about"><InstagramIcon/></NavLink>
                    </div>
                </div>
            </div>   
        </div>
        <div className="Box">
            <img src={teamdoctor3} alt="teamdoctor3" width="400px" height="590px" title="team-doctor-3"/>    
            <div className="overlay">
                <div className="text">
                    <div><h4>dr. Nathan Jones</h4></div>
                    <div><span>Head Covid 19</span></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <div className="icon">
                        <NavLink to="/about"><FaFacebookF/></NavLink>
                        <NavLink to="/about"><TwitterIcon/></NavLink>
                        <NavLink to="/about"><FaLinkedinIn/></NavLink>
                        <NavLink to="/about"><InstagramIcon/></NavLink>
                    </div>
                </div>
            </div>
        </div>
        <div className="Box">
            <img src={teamdoctor4} alt="teamdoctor4" width="400px" height="590px" title="team-doctor-4-2"/> 
            <div className="overlay">
                <div className="text">
                    <div><h4>dr. Mike Foenander</h4></div>
                    <div><span>Head Ophthalmologists</span></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <div className="icon">
                        <NavLink to="/about"><FaFacebookF/></NavLink>
                        <NavLink to="/about"><TwitterIcon/></NavLink>
                        <NavLink to="/about"><FaLinkedinIn/></NavLink>
                        <NavLink to="/about"><InstagramIcon/></NavLink>
                    </div>
                </div>
            </div>
        </div>
        <div className="Box">
            <img src={teamdoctor5} alt="teamdoctor5" width="400px" height="590px" title="team-doctor-5"/>  
            <div className="overlay">
                <div className="text">
                    <div><h4>dr. Jessica McNamee</h4></div>
                    <div><span>Head Research</span></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <div className="icon">
                        <NavLink to="/about"><FaFacebookF/></NavLink>
                        <NavLink to="/about"><TwitterIcon/></NavLink>
                        <NavLink to="/about"><FaLinkedinIn/></NavLink>
                        <NavLink to="/about"><InstagramIcon/></NavLink>
                    </div>
                </div>
            </div>
        </div>   
        
       
    </Carousel>
    
    </>   
  );
}