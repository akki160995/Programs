import React from 'react';
import "./Menu_Name.css";
import "./Event_layout.css";
import Navbar from './Navbar';
import headertabs from './Images/headertabs10.jpg';
import { NavLink } from "react-router-dom"; 
import logo from './Images/logo.png';
import iconstetoskop from './Images/iconstetoskop.png';
import iconambulance from './Images/iconambulance.png';
import {VscCircleFilled} from 'react-icons/vsc';
import {FaAmericanSignLanguageInterpreting} from 'react-icons/fa';
import {FaLanguage} from 'react-icons/fa';
import {FaIdCard} from 'react-icons/fa';
import {FaUserClock} from 'react-icons/fa';
import {FaAllergies} from 'react-icons/fa';
import {FaRegWindowClose} from 'react-icons/fa';
import {FaStethoscope} from 'react-icons/fa';
import {FaFax} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import TwitterIcon from '@material-ui/icons/Twitter';
import CallIcon from '@material-ui/icons/Call';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';

const Events_layout = () => {
  return(
    <>
        <Navbar/>

        <div className="header_flex">
                <div className="container-fluid" >
                    <div className="row align-items-center ">
                        <div className="col-lg-1"></div>
                        <div className=" col-lg-6 col-md-6 col-sm-6 ">
                            <span className="main_heading "><b>WCLH EVENTS<br/><small>Home &gt; Events</small></b></span>
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
                        <div className="left-Heading">Vaccinne for Eldery</div>
                            <div className="left-inlineHeading mt-2 mb-2">
                                <h4>Events Overview </h4>
                            </div>
                        
                            <div className="para7">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit sed. Dictum varius duis at consectetur lorem donec massa. </p>						                </div>
                                <div className="title3">
                                    <h4>Date and Time </h4>
                                </div>
                                <div className="para6">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>						                
                                </div>
                                <div className="List">
                                    <div className="LeftList">
                                        <NavLink  to="/event-layout"><VscCircleFilled/>&nbsp;&nbsp;&nbsp;Vaccine Section 1</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<NavLink  to="/event-layout">21 June: 08.00 Am to 17.00 Pm</NavLink><hr/><br/>
                                        <NavLink  to="/event-layout"><VscCircleFilled/>&nbsp;&nbsp;&nbsp;Vaccine Section 2</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<NavLink  to="/event-layout">21 Mei: 08.00 Am to 20.00 Pm</NavLink><br/>
                                    </div>
                                </div>
                                <div className="title3">
                                    <h4>Place</h4>
                                </div>
                                <div className="para6">
                                    <p>East Wing Building, Riverside Building, London, SE-90, East Wing Room, Vaccinne <br/>Department</p>						                
                                </div>
                                <div className="title3">
                                    <h4>Frequently Asked Questions</h4>
                                </div>
                                <div className="title3">
                                    <h4>Registration</h4>
                                </div>

                            </div>

                            <div className="col-lg-4  col-md-6">
                                <div className="colbox">
                                    <div className="Header_element">
                                        <b>Don't Miss Our Events</b>
                                    </div>

                                    <div className="title2">
                                        <h3>Requirements for Vaccines</h3>
                                    </div>
                                    <div className="para5">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                    <div className="Icons">
                                        <NavLink to="/event-layout"><FaIdCard/>&nbsp;&nbsp; Have United Kingdom ID</NavLink><br/><hr width="580px"/>
                                        <NavLink to="/event-layout"><FaUserClock/>&nbsp;&nbsp; Age Minimum 13 Years Old</NavLink><br/><hr width="580px"/>
                                        <NavLink to="/event-layout"><FaAllergies/>&nbsp;&nbsp; No Allergics</NavLink><br/><hr width="580px"/>
                                        <NavLink to="/event-layout"><FaRegWindowClose/>&nbsp;&nbsp; Never Vaccine Before</NavLink>
                                    </div>
                                    <div className="title2">
                                        <h3>Other Events</h3>
                                    </div>
                                    <div className="OtherEvents">
                                        <NavLink to="/event-layout"> Vaccine for Eldery</NavLink><br/><hr width="580px"/>
                                        <NavLink to="/event-layout"> Vaccine for Public</NavLink><br/><hr width="580px"/>
                                        <NavLink to="/event-layout"> Folio Vaccine</NavLink><br/><hr width="580px"/>
                                        <NavLink to="/event-layout"> Inufluenza Vaccine</NavLink><br/><hr width="580px"/>
                                        <NavLink to="/event-layout"> Covid 19 Seminar</NavLink>
                                    </div>
                                    <div className="icon1">
                                        <img src={iconstetoskop} alt="icon1" height="150px" width="160px"/>
                                        <div className="icon1Name">
                                            <h3>Booking <br/> your dates Here</h3>
                                        </div>
                                    </div>
                                    <div className="icon2">
                                        <img src={iconambulance} alt="icon2" height="150px" width="160px"/>
                                        <div className="icon2Name">
                                            <h3>Do you have <br/> an Emergency?</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>

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
                        <NavLink to="/event-layout"><h3><FaAmericanSignLanguageInterpreting size="50"/> &nbsp;Interpreter</h3></NavLink>
                    </div>
                    <div className="center">
                    <NavLink to="/event-layout"><h3><FaLanguage size="50" /> &nbsp;Language</h3></NavLink>
                    </div>
                </div>
                <div className="Cmid">
                        <div className="head">
                        <h3>Quicklinks</h3>
                        </div>
                        <div className="link">
                            <div className="leftlink">
                                <NavLink to="/event-layout">A-Z listing</NavLink><hr/>
                                <NavLink to="/event-layout">Parking</NavLink><hr/>
                                <NavLink to="/event-layout">Visiting Hours</NavLink><hr/>
                                <NavLink to="/event-layout">Finding Around</NavLink>  
                            </div>   
                            <div className="rightlink">
                                <NavLink to="/event-layout">Patient Support</NavLink><hr/>
                                <NavLink to="/event-layout">Covid-19 Support</NavLink><hr/>
                                <NavLink to="/event-layout">Condition Service</NavLink><hr/>
                                <NavLink to="/event-layout">Emegency</NavLink>
                            </div> 
                        </div>
                </div>
                <div className="Cright">
                        <div className="heading">
                        <h3>Contact Us</h3>
                        </div>
                        <div className="contactdetail">
                            <div className="numbers">
                                <NavLink to="/event-layout"><CallIcon />&nbsp;&nbsp;+62 8888 999</NavLink><br/><hr/>
                                <NavLink to="/event-layout"><FaStethoscope />&nbsp;&nbsp;&nbsp;+62 8888 333</NavLink><br/><hr/>
                                <NavLink to="/event-layout"><FaFax />&nbsp;&nbsp;&nbsp;+62 8888 444</NavLink>
                            </div>
                            <div className="place">
                                <NavLink to="/event-layout"><LocationOnIcon />&nbsp;&nbsp;Riverside Building,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>London, SE-90</span></NavLink>
                                <br/><br/><br/>
                                <div className="icons">
                                    <NavLink to="/event-layout"><FaFacebookF/></NavLink>
                                    <NavLink to="/event-layout"><TwitterIcon/></NavLink>
                                    <NavLink to="/event-layout"><InstagramIcon/></NavLink>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="Container2">
                    <div className="Side1">
                        <NavLink to="/event-layout">Copyright</NavLink>
                        <NavLink to="/event-layout">Accessibility</NavLink>
                        <NavLink to="/event-layout">Disclaimer</NavLink>
                        <NavLink to="/event-layout">Privacy</NavLink><br/><br/>
                        <NavLink to="/event-layout">Sitemap</NavLink>
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

export default Events_layout;