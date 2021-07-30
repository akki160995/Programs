import React from 'react';
import "./Menu_Name.css";
import "./Doctor_profile.css";
import Navbar from './Navbar';
import {FaAmbulance} from 'react-icons/fa';
import {RiVirusFill} from 'react-icons/ri';
import headertabs from './Images/headertabs7.jpg';
import { NavLink } from "react-router-dom"; 
import{FaRegFilePdf} from 'react-icons/fa';
import {FaFax} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {VscCircleFilled} from 'react-icons/vsc';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import CallIcon from '@material-ui/icons/Call';
import InstagramIcon from '@material-ui/icons/Instagram';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';
import Footer from '../Layout/Footer/Footer';
import Testimonial from './Testimonial';
import poster5 from './Images/post-5.jpg';
import Appointment from '../Layout/forms/Appointment';

const Doctor_profile = () => {
  return(
    <>
        <Navbar/>

        <div className="header_flex">
                <div className="container-fluid" >
                    <div className="row align-items-center ">
                        <div className="col-lg-1"></div>
                        <div className=" col-lg-6 col-md-6 col-sm-6 ">
                            <span className="main_heading "><b>DOCTOR LAYOUT<br/><small>Home &gt; Doctor Layout</small></b></span>
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
                        <div className="left-Heading border-left">dr. Daisy Ridley</div>
                        <div className="Heading-s ml-0"><h4>Biography</h4> </div>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit sed. Dictum varius duis at consectetur lorem donec massa. 
                        </p>
                        <div className=" Heading-s ml-0"><h4>Education</h4> </div>
                        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>
                        
                        <div className="Lists">
                        <NavLink className="Li" to="/doctor-profile-layout"><VscCircleFilled/>&nbsp;&nbsp; 2010: Bachelor from Havard University </NavLink><hr/>
                        <NavLink className="Li" to="/doctor-profile-layout"><VscCircleFilled/>&nbsp;&nbsp; 2012: Master from Oxford University </NavLink><hr/>
                        <NavLink className="Li" to="/doctor-profile-layout"><VscCircleFilled/>&nbsp;&nbsp; 2013: Surgery Specialist at Oxford University </NavLink><hr/>
                        <NavLink className="Li" to="/doctor-profile-layout"><VscCircleFilled/>&nbsp;&nbsp; 2021: Doctoral Degree from Chicago University </NavLink>
                </div>
                <div className="Heading-s ml-0">
                    <h4 className="ml-0">Expertise</h4>
                </div>
                <div className="para6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>						                
                </div>
                <div className="Lists">
                        <NavLink className="Li" to="/doctor-profile-layout"><VscCircleFilled/>&nbsp;&nbsp; Surgery </NavLink><hr/>
                        <NavLink className="Li" to="/doctor-profile-layout"><VscCircleFilled/>&nbsp;&nbsp; Internal Disease </NavLink>
                </div>
                <div className="title3">
                    <h4>Career  History</h4>
                </div>
                <div className="para6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>						                
                </div>
                <div className="Lists">
                        <NavLink className="Li" to="/doctor-profile-layout"><VscCircleFilled/>&nbsp;&nbsp; 2013-2014: RAF Hospital, Leceister </NavLink><hr/>
                        <NavLink className="Li" to="/doctor-profile-layout"><VscCircleFilled/>&nbsp;&nbsp; 2015 - Now: WCLH Hospital, London </NavLink>
                </div>
                <div className="title3">
                    <h4>Research </h4>
                </div>
                <div className="Lists">
                    <div className="Lists">
                        <NavLink className="Li" to="/doctor-profile-layout">Covid 19 Symptomps</NavLink><NavLink className="Li float-right" to="/doctor-profile-layout"><FaRegFilePdf /> Download </NavLink><hr/>
                        <NavLink className="Li" to="/doctor-profile-layout">Brain Surgery for Store</NavLink><NavLink className="Li float-right" to="/doctor-profile-layout"><FaRegFilePdf /> Download </NavLink><hr/>
                        <NavLink className="Li" to="/doctor-profile-layout">Internal Disease Treatment</NavLink><NavLink className="Li float-right" to="/doctor-profile-layout"><FaRegFilePdf /> Download </NavLink><hr/>
                        <NavLink className="Li" to="/doctor-profile-layout">Safe Surgery for Human</NavLink><NavLink className="Li float-right" to="/doctor-profile-layout"><FaRegFilePdf /> Download </NavLink>
                    </div>
                </div>

                        
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="colbox">
                            <div className="Header_element">
                                <strong>doctor-profile </strong> 
                            </div>
                            <div>
                            <div className="Heading-s mt-5">
                                <h5 className="ml-3">Emergency Hotline</h5>
                            </div>
                            <div className="nameabout cols">
                                <NavLink to="/covid-19-report"><FaAmbulance/>&nbsp;&nbsp; Emergency: 777 888 999</NavLink><br/><hr width="580px"/>
                                <NavLink to="/covid-19-report"><RiVirusFill/>&nbsp;&nbsp; Covid 19: 777 888 111</NavLink>
                            </div>
                            
                                <div className="Heading-s">
                                    <h4 className="ml-3">Office</h4>
                                </div>

                                <div className="para5">
                                    <p>Riverside Building, London, SE-90, East Wing Room, Surgery Department</p>
                                </div>

                                <div class="mapouter">
                                    <div class="gmap_canvas">
                                        <iframe 
                                            class="gmap_iframe" 
                                            frameborder="0" 
                                            scrolling="no" 
                                            marginheight="0" 
                                            marginwidth="0" 
                                            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=WeCare&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                        </iframe>
                                        <a href="https://www.fridaynightfunkin.net/friday-night-funkin-mods-fnf-play-online/">
                                        </a>
                                    </div>
                                </div>
            

                                <div className="Heading-s ">
                                    <h4 className="ml-3">Contact </h4>
                                </div>
                                <div className="nameabout col">
                                    <NavLink to="/doctor-profile-layout"><WhatsAppIcon/> +1 222 333 444</NavLink><br/><hr width="580px"/>
                                    <NavLink to="/doctor-profile-layout"><CallIcon/> +1 222 333 333</NavLink><br/><hr width="580px"/>
                                    <NavLink to="/doctor-profile-layout"><FaFax/> +1 222 333 222</NavLink>
                                </div>
                                <div className="Heading-s">
                                    <h4 className="ml-3">Social Media </h4>
                                </div>
                                <div className="nameabout col">
                                    <NavLink to="/doctor-profile-layout"><FaFacebookF/> +1 222 333 444</NavLink><br/><hr width="580px"/>
                                    <NavLink to="/doctor-profile-layout"><InstagramIcon/> +1 222 333 333</NavLink><br/><hr width="580px"/>
                                    <NavLink to="/doctor-profile-layout"><TwitterIcon/> +1 222 333 222</NavLink>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="container">
                    
                    </div>
                    

                </div>
                </div>

        
        
        
            
            <Testimonial/>

            <div className="container mt-3 mb-3">
                <div className="row border-top border-bottom border-left border-right">
                    <div className="col-md-8 col-sm-6">
                        <Appointment/>
                    </div>
                    <div className="col-md-4 col-sm-6 posterform">
                        <img src={poster5} alt="poster5" className=""/>
                    </div>
                    </div>

                </div>


            <NewsFlex/>
            <Footer/>       
  </>
  );
};

export default Doctor_profile;