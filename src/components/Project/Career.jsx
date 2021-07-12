import React from 'react';
import "./Menu_Name.css";
//import "./Career.css";
import Navbar from './Navbar';
import CareerSlider from "./CareerSlider";
import Accordioncareer from "./Accordioncareer";
import headertabs from './Images/headertabs2.jpg';
import { NavLink } from "react-router-dom"; 
import logo from './Images/logo.png';
import {FaAmericanSignLanguageInterpreting} from 'react-icons/fa';
import {FaLanguage} from 'react-icons/fa';
import {FaRegNewspaper} from 'react-icons/fa';
import {VscCircleFilled} from 'react-icons/vsc';
import{FaRegFilePdf} from 'react-icons/fa';
import {FaStethoscope} from 'react-icons/fa';
import {FaFax} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import TwitterIcon from '@material-ui/icons/Twitter';
import CallIcon from '@material-ui/icons/Call';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';

const Career = () => {
  return (
    <>
        <Navbar/>

        
        <div className="header_flex">
                <div className="container-fluid" >
                    <div className="row align-items-center ">
                        <div className="col-lg-1"></div>
                        
                        <div className=" col-lg-6 col-md-6 col-sm-6 ">
                            <span className="main_heading "><b>CAREER<br/><small>Home &gt; Career</small></b></span>
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
                    <div className="left-Heading">Work at <span>WCLH</span></div>
                        <div className="left-inline Heading mt-2 mb-2"><h3>Jobs Career</h3> </div>

                        <div className="para4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>	
                        </div>
                        <div className="title1">
                            <h4>Requirements to Apply</h4>
                        </div>
                        <div className="para4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>	
                        </div>
                        <div className="points">
                            <NavLink  to="/career"><VscCircleFilled/>&nbsp;&nbsp; GPA Minimum 3.25 </NavLink><hr/><br/>
                            <NavLink  to="/career"><VscCircleFilled/>&nbsp;&nbsp; Graduated from Reputable University </NavLink><hr/><br/>
                            <NavLink  to="/career"><VscCircleFilled/>&nbsp;&nbsp; Fluent in English </NavLink><hr/><br/>
                            <NavLink  to="/career"><VscCircleFilled/>&nbsp;&nbsp; Can Work With Team </NavLink><br/>
                        </div>

                        <div className="title1">
                            <h4>WCLH Career Tips</h4>
                        </div>
                        <div className="Question">
                            <Accordioncareer/>
                        </div>
                        <div className="title1">
                            <h4>Work Environments</h4>
                        </div>
                        <div className="video1">
                            <iframe width="100%" height="500" src="https://www.youtube.com/embed/XHOmBV4js_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="colbox">
                            <div className="Header_element">
                                <strong>Carrer You Might Apply</strong>
                            </div>

                            
                                <div className="inline_heading">
                                    <h3>Search the <br/> Jobe Here</h3>
                                </div>  
                                <div className="Search">
                                    <form action="/news" method="get">
                                        <input
                                            type="text"
                                            id="header-search"
                                            placeholder="Keyword(S)"
                                            name="s"
                                        />
                                        <button type="submit"><SearchOutlinedIcon/></button>
                                    </form>
                                </div>
                                <div className="inline_heading">
                                    <h3>Job List <br/> From A to Z</h3>
                                </div>
                                <div className="nameabout col">
                                    <NavLink to="/career"> Children Specialist</NavLink><br/><hr/>
                                    <NavLink to="/career"> Cancer Specialist</NavLink><br/><hr/>
                                    <NavLink to="/career"> Heart Specialist</NavLink><br/><hr/>
                                    <NavLink to="/career"> Dentist Specialist</NavLink><br/><hr/>
                                    <NavLink to="/career"> Geriatric Specialist</NavLink><br/><hr/>
                                    <NavLink to="/career"> Obstetrician Specialist</NavLink><br/><hr/>
                                    <NavLink to="/career"> Orderly Services</NavLink><br/><hr/>
                                    <NavLink to="/career"> Catering</NavLink><br/><hr/>
                                    <NavLink to="/career"> Car Park Services</NavLink><br/>
                                </div>
                            

                        </div>
                    
                    </div>
                
                    <div className="col-lg-1"></div>

                </div>
            </div>
            




    
            
        <div className="SpotlessSlider">
            <div className="slidername">
                <span>Spotless Career</span>
            </div>
            <div className="careerslider">
               <CareerSlider/> 
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
                        <NavLink to="/career"><h3><FaAmericanSignLanguageInterpreting size="50"/> &nbsp;Interpreter</h3></NavLink>
                    </div>
                    <div className="center">
                    <NavLink to="/career"><h3><FaLanguage size="50" /> &nbsp;Language</h3></NavLink>
                    </div>
                </div>
                <div className="Cmid">
                        <div className="head">
                        <h3>Quicklinks</h3>
                        </div>
                        <div className="link">
                            <div className="leftlink">
                                <NavLink to="/career">A-Z listing</NavLink><hr/>
                                <NavLink to="/career">Parking</NavLink><hr/>
                                <NavLink to="/career">Visiting Hours</NavLink><hr/>
                                <NavLink to="/career">Finding Around</NavLink>  
                            </div>   
                            <div className="rightlink">
                                <NavLink to="/career">Patient Support</NavLink><hr/>
                                <NavLink to="/career">Covid-19 Support</NavLink><hr/>
                                <NavLink to="/career">Condition Service</NavLink><hr/>
                                <NavLink to="/career">Emegency</NavLink>
                            </div> 
                        </div>
                </div>
                <div className="Cright">
                        <div className="heading">
                        <h3>Contact Us</h3>
                        </div>
                        <div className="contactdetail">
                            <div className="numbers">
                                <NavLink to="/career"><CallIcon />&nbsp;&nbsp;+62 8888 999</NavLink><br/><hr/>
                                <NavLink to="/career"><FaStethoscope />&nbsp;&nbsp;&nbsp;+62 8888 333</NavLink><br/><hr/>
                                <NavLink to="/career"><FaFax />&nbsp;&nbsp;&nbsp;+62 8888 444</NavLink>
                            </div>
                            <div className="place">
                                <NavLink to="/career"><LocationOnIcon />&nbsp;&nbsp;Riverside Building,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>London, SE-90</span></NavLink>
                                <br/><br/><br/>
                                <div className="icons">
                                    <NavLink to="/career"><FaFacebookF/></NavLink>
                                    <NavLink to="/career"><TwitterIcon/></NavLink>
                                    <NavLink to="/career"><InstagramIcon/></NavLink>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="Container2">
                    <div className="Side1">
                        <NavLink to="/career">Copyright</NavLink>
                        <NavLink to="/career">Accessibility</NavLink>
                        <NavLink to="/career">Disclaimer</NavLink>
                        <NavLink to="/career">Privacy</NavLink><br/><br/>
                        <NavLink to="/career">Sitemap</NavLink>
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

export default Career;