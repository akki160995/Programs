import React from 'react';
import "./Menu_Name.css";
//import "./Career_layout.css";
import Navbar from './Navbar';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';
import CareerFrm from '../Layout/forms/CareerFrm';
import CareerLayoutSlider from "./CareerLayoutSlider";
import headertabs from './Images/headertabs5.jpg';
import { NavLink } from "react-router-dom"; 
import logo from './Images/logo.png';
import {FaAmericanSignLanguageInterpreting} from 'react-icons/fa';
import {FaLanguage} from 'react-icons/fa';
import {FaStethoscope} from 'react-icons/fa';
import {FaFax} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {VscCircleFilled} from 'react-icons/vsc';
import TwitterIcon from '@material-ui/icons/Twitter';
import CallIcon from '@material-ui/icons/Call';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const Career_layout = () => {
    return(
    <>
        <Navbar/>

        <div className="header_flex">
                <div className="container-fluid" >
                    <div className="row align-items-center ">
                        <div className="col-lg-1"></div>
                        
                        <div className=" col-lg-6 col-md-6 col-sm-6 ">
                            <span className="main_heading "><b>CAREER LAYOUT<br/><small>Home &gt; Career Layout</small></b></span>
                        </div> 
                        
                        <div className=" col-lg-4 col-md-6 col-sm-6 ">
                            <img src={headertabs} className="poster_size" alt="xyz" />
                        </div>
                        
                        <div className="col-lg-1"></div>
                    </div>
                </div>    
            </div>

            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-1"></div>

                    <div className="col-lg-6  col-md-6">
                        <div className="left-Heading">Doctor <span> Specialist</span></div>
                        <div className="left-inline Heading mt-2 mb-2"><h3>Jobs Overview</h3> </div>
                        <div className="para4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>	
                        </div>
                        <div className="title1">
                            <h4>How to Apply?</h4>
                        </div>
                        <div className="para4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>	
                        </div>
                        <div className="points">
                            <NavLink  to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp; Prepare your CV </NavLink><hr/><br/>
                            <NavLink  to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp;  Prepare your Certificate </NavLink><hr/><br/>
                            <NavLink  to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp;  Prepare your English Certificate </NavLink><hr/><br/>
                            <NavLink  to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp;  Send to carreer@wclh.co.uk </NavLink><br/>
                        </div>
                        <div className="title1">
                            <h4>Frequently Asked Questions</h4>
                        </div>
                        <div className="title1">
                            <h4>Apply Now</h4>
                        </div>
                        <CareerFrm/> 
                    



                    </div>

                    <div className="col-lg-4  col-md-6">
                        <div className="colbox">
                            <div className="Header_element">
                                <strong>Carrer You Might Apply</strong>
                            </div>

                            
                            <div className="inline_heading">
                                Requirements to Apply
                            </div>

                            <div className="nameabout col">
                                <NavLink to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp; GPA Minimum 3.25</NavLink><br/><hr width="580px"/>
                                <NavLink to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp; Graduated from Reputable University</NavLink><br/><hr width="580px"/>
                                <NavLink to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp; Fluent in English</NavLink><br/><hr width="580px"/>
                                <NavLink to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp; Can Work With Team</NavLink>
                            </div>
                            <div className="inline_heading">
                                Job Desk
                            </div>
                            <div className="">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                            <div className="inline_heading">
                                Salary
                            </div>
                            <div className="nameabout col">
                                <NavLink to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp; 2000 USD to 3000 USD/Month</NavLink><br/>
                            </div>
                       
                            
                        </div> 
                        


                    </div>
                </div>
            </div>





    
    
        <div className="SpotlessSlider">
            <div className="slidername">
                <span>Spotless Career</span>
            </div>
            <div className="careerslider">
               <CareerLayoutSlider/> 
            </div>
        </div>

        <NewsFlex/>
    
      <div className="Footer"> <br/>
          <div className="Container1">
              <div className="Cleft">
                  <div className="top">
                      <NavLink to="/"><img src={logo} alt="Logo"/></NavLink>
                  </div>
                  <div className="mid">
                      <NavLink to="/career-layout"><h3><FaAmericanSignLanguageInterpreting size="50"/> &nbsp;Interpreter</h3></NavLink>
                  </div>
                  <div className="center">
                  <NavLink to="/career-layout"><h3><FaLanguage size="50" /> &nbsp;Language</h3></NavLink>
                  </div>
              </div>
              <div className="Cmid">
                    <div className="head">
                      <h3>Quicklinks</h3>
                    </div>
                    <div className="link">
                        <div className="leftlink">
                            <NavLink to="/career-layout">A-Z listing</NavLink><hr/>
                            <NavLink to="/career-layout">Parking</NavLink><hr/>
                            <NavLink to="/career-layout">Visiting Hours</NavLink><hr/>
                            <NavLink to="/career-layout">Finding Around</NavLink>  
                        </div>   
                        <div className="rightlink">
                            <NavLink to="/career-layout">Patient Support</NavLink><hr/>
                            <NavLink to="/career-layout">Covid-19 Support</NavLink><hr/>
                            <NavLink to="/career-layout">Condition Service</NavLink><hr/>
                            <NavLink to="/career-layout">Emegency</NavLink>
                        </div> 
                    </div>
              </div>
              <div className="Cright">
                    <div className="heading">
                      <h3>Contact Us</h3>
                    </div>
                    <div className="contactdetail">
                        <div className="numbers">
                            <NavLink to="/career-layout"><CallIcon />&nbsp;&nbsp;+62 8888 999</NavLink><br/><hr/>
                            <NavLink to="/career-layout"><FaStethoscope />&nbsp;&nbsp;&nbsp;+62 8888 333</NavLink><br/><hr/>
                            <NavLink to="/career-layout"><FaFax />&nbsp;&nbsp;&nbsp;+62 8888 444</NavLink>
                        </div>
                        <div className="place">
                            <NavLink to="/career-layout"><LocationOnIcon />&nbsp;&nbsp;Riverside Building,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>London, SE-90</span></NavLink>
                            <br/><br/><br/>
                            <div className="icons">
                                <NavLink to="/career-layout"><FaFacebookF/></NavLink>
                                <NavLink to="/career-layout"><TwitterIcon/></NavLink>
                                <NavLink to="/career-layout"><InstagramIcon/></NavLink>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
          <div className="Container2">
                <div className="Side1">
                    <NavLink to="/career-layout">Copyright</NavLink>
                    <NavLink to="/career-layout">Accessibility</NavLink>
                    <NavLink to="/career-layout">Disclaimer</NavLink>
                    <NavLink to="/career-layout">Privacy</NavLink><br/><br/>
                    <NavLink to="/career-layout">Sitemap</NavLink>
                    <div className="bottom">
                        <p>© WeCare London Hospital 2021 (CC)<br/> London Department for Health and Ageing</p>
                    </div>
                </div>
                <div className="Side2">
                   <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit sed. Dictum varius duis at consectetur lorem donec massa. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ultrices dui sapien eget mi proin sed libero enim sed. A erat nam at lectus urna duis convallis. Ac turpis egestas maecenas pharetra convallis. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Facilisi etiam dignissim diam quis. </span>						
                </div>
          </div>
      </div>
  </>
  );
};

export default Career_layout;