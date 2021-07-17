import React from 'react';
import "./Menu_Name.css";
import "./Department_profile.css";
import Navbar from './Navbar';
import headertabs from './Images/headertabs8.jpg';
import { NavLink } from "react-router-dom"; 
import logo from './Images/logo.png';
import {FaAmericanSignLanguageInterpreting} from 'react-icons/fa';
import {FaLanguage} from 'react-icons/fa';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import {FaStethoscope} from 'react-icons/fa';
import {FaFax} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import TwitterIcon from '@material-ui/icons/Twitter';
import CallIcon from '@material-ui/icons/Call';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';

const Department_profile = () => {
  return(
    <>
        <Navbar/>

        <div className="header_flex">
                <div className="container-fluid" >
                    <div className="row align-items-center ">
                        <div className="col-lg-1"></div>
                        <div className=" col-lg-6 col-md-6 col-sm-6 ">
                            <span className="main_heading "><b>DEPARTMENT LAYOUT<br/><small>Home &gt; Department Layout</small></b></span>
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
                        <div className="left-Heading">Department of Eldery</div>
                        <div className="left-inlineHeading mt-2 mb-2"><h3>About</h3></div>
                        <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi.
                        </p>
                        <div className="left-inlineHeading mt-2 mb-2"><h3>Visiting Hours</h3></div>
                        <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi.
                        </p>
                        <div>
                            <ul className="mt-2">
                                <li>Sunday to Thursday<span className="float-right">08.00 Am to 17.00 Pm</span></li><hr/>
                                <li>Friday to Saturday<span className="float-right">08.00 Am to 20.00 Pm</span></li><hr/>
                                <li>Sunday<span className="float-right">10.00 Am to 20.00 Pm</span> </li>
                            </ul>
                        </div>
                        <div className="left-inlineHeading mt-2 mb-2"><h3>Emergency Medicine Consultants</h3></div>
                        <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi.
                        </p>
                        <div className="mt-5 mb-3">
                            <li>dr. Daisy Ridley</li><hr/>
                            <li>dr. Jason Bourne</li><hr/>
                            <li>dr. Bruce Banner</li><hr/>
                            <li>Ms. Hanna Lee</li><hr/>
                            <li>Ms. Robin Ward </li>   
                        </div>
                        <div className="left-inlineHeading mt4- mb-2"><h3>Emergency Contact</h3></div>
                        <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi.
                        </p>
                        <div>
                            <li>+1 777 888 000</li><hr/>
                            <li>+1 777 888 999</li>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="colbox">
                            <div className="Header_element">
                                <strong>About Department</strong> 
                            </div>
                            <div>
                                <div className="inline_heading">
                                    <h3>Office</h3>
                                </div>
                                <p className="nameabout col mr-2"><h6>Riverside Building, London, SE-90, East Wing Room, Surgery Department</h6></p>
                                
                                <div className="inline_heading">
                                    <h3>Contact </h3>
                                </div>
                                <div className="nameabout col">
                                    <li><NavLink to="/department-profile-layout"><WhatsAppIcon/> +1 222 333 444</NavLink><br/><hr/></li>
                                    <NavLink to="/department-profile-layout"><CallIcon/> +1 222 333 333</NavLink><br/><hr/>
                                    <NavLink to="/department-profile-layout"><FaFax/> +1 222 333 222</NavLink>
                                </div>
                                <div className="inline_heading">
                                    <h3>Social Media </h3>
                                </div>
                                <div className="nameabout col ">
                                    <NavLink to="/department-profile-layout"><FaFacebookF/> wclh.eldery</NavLink><br/><hr/>
                                    <NavLink to="/department-profile-layout"><InstagramIcon/> @wclh.eldery</NavLink><br/><hr/>
                                    <NavLink to="/department-profile-layout"><TwitterIcon/> @wclh.eldery</NavLink>
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
                        <NavLink to="/department-profile-layout"><h3><FaAmericanSignLanguageInterpreting size="50"/> &nbsp;Interpreter</h3></NavLink>
                    </div>
                    <div className="center">
                    <NavLink to="/department-profile-layout"><h3><FaLanguage size="50" /> &nbsp;Language</h3></NavLink>
                    </div>
                </div>
                <div className="Cmid">
                        <div className="head">
                        <h3>Quicklinks</h3>
                        </div>
                        <div className="link">
                            <div className="leftlink">
                                <NavLink to="/department-profile-layout">A-Z listing</NavLink><hr/>
                                <NavLink to="/department-profile-layout">Parking</NavLink><hr/>
                                <NavLink to="/department-profile-layout">Visiting Hours</NavLink><hr/>
                                <NavLink to="/department-profile-layout">Finding Around</NavLink>  
                            </div>   
                            <div className="rightlink">
                                <NavLink to="/department-profile-layout">Patient Support</NavLink><hr/>
                                <NavLink to="/department-profile-layout">Covid-19 Support</NavLink><hr/>
                                <NavLink to="/department-profile-layout">Condition Service</NavLink><hr/>
                                <NavLink to="/department-profile-layout">Emegency</NavLink>
                            </div> 
                        </div>
                </div>
                <div className="Cright">
                        <div className="heading">
                        <h3>Contact Us</h3>
                        </div>
                        <div className="contactdetail">
                            <div className="numbers">
                                <NavLink to="/department-profile-layout"><CallIcon />&nbsp;&nbsp;+62 8888 999</NavLink><br/><hr/>
                                <NavLink to="/department-profile-layout"><FaStethoscope />&nbsp;&nbsp;&nbsp;+62 8888 333</NavLink><br/><hr/>
                                <NavLink to="/department-profile-layout"><FaFax />&nbsp;&nbsp;&nbsp;+62 8888 444</NavLink>
                            </div>
                            <div className="place">
                                <NavLink to="/department-profile-layout"><LocationOnIcon />&nbsp;&nbsp;Riverside Building,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>London, SE-90</span></NavLink>
                                <br/><br/><br/>
                                <div className="icons">
                                    <NavLink to="/department-profile-layout"><FaFacebookF/></NavLink>
                                    <NavLink to="/department-profile-layout"><TwitterIcon/></NavLink>
                                    <NavLink to="/department-profile-layout"><InstagramIcon/></NavLink>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="Container2">
                    <div className="Side1">
                        <NavLink to="/department-profile-layout">Copyright</NavLink>
                        <NavLink to="/department-profile-layout">Accessibility</NavLink>
                        <NavLink to="/department-profile-layout">Disclaimer</NavLink>
                        <NavLink to="/department-profile-layout">Privacy</NavLink><br/><br/>
                        <NavLink to="/department-profile-layout">Sitemap</NavLink>
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

export default Department_profile;