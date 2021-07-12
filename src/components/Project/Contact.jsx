import React from 'react';
import "./Menu_Name.css";
import "./Contact.css";
import Navbar from './Navbar';

import headertabs from './Images/slide1.jpg';
import { NavLink } from "react-router-dom"; 
import logo from './Images/logo.png';
import Stetoskop from './Images/iconstetoskop.png';
import Ambulance from './Images/iconambulance.png';
import {FaAmbulance} from 'react-icons/fa';
import {RiVirusFill} from 'react-icons/ri';
import {RiVirusLine} from 'react-icons/ri';
import {GiSpeaker} from 'react-icons/gi';
import {FaPhoneAlt} from 'react-icons/fa';
import {FaAmericanSignLanguageInterpreting} from 'react-icons/fa';
import {FaLanguage} from 'react-icons/fa';
import {FaRegNewspaper} from 'react-icons/fa';
import {FaStethoscope} from 'react-icons/fa';
import {FaFax} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import TwitterIcon from '@material-ui/icons/Twitter';
import CallIcon from '@material-ui/icons/Call';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';
import Footer from '../Layout/Footer/Footer';


const Contact = () => {
  return (
      <>
        <Navbar/>
            <div className="header_flex">
                <div className="container-fluid" >
                    <div className="row align-items-center ">
                        <div className="col-lg-1"></div>
                        <div className=" col-lg-6 col-md-6 col-sm-6 ">
                            <span className="main_heading "><b>CONTACT US<br/><small>Home &gt; Contact Us</small></b></span>
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
                        <div className="left-Heading">Contact  <span>WCLH</span></div>
                            <div className="left-inline Heading mt-2 mb-2">
                                <h3>Emergencies</h3>
                            </div>
                            <p className="mt-3">
                                Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit sed. Dictum varius duis at consectetur lorem donec massa. 
                            </p>

                            <div className="title4">
                    <h4>Emergencies </h4>
                </div>
                <div className="para6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>						                
                </div>
                <div className="EmergencyBox">
                    <div class="hr-theme-slash-2">
                            <div class="hr-line"></div>
                            <div class="hr-icon"><FaAmbulance size="35"/></div>
                            <div class="hr-line"></div>
                    </div> 
                    <div className="border">
                            <div className="bcovidleft">
                                <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ut elit tellus,luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                            <div className="bcovidright">
                               <NavLink to="/contact">Emergency </NavLink>
                            </div>

                    </div> 
                </div>
                <div className="title3">
                    <h4>Covid 19 Emergencies</h4>
                </div>
                <div className="points">
                        <NavLink  to="/contact"><FaAmbulance/>&nbsp;&nbsp; Emergency: 777 888 999</NavLink><hr/><br/>
                        <NavLink  to="/contact"><RiVirusFill/>&nbsp;&nbsp; Covid 19: 777 888 111</NavLink><br/>
                </div>
                <div className="title3">
                    <h4>WELH Address</h4>
                </div>
                <div className="para6">
                    <p>Riverside Building, County Hall, South Bank, London SE1 7PB, Inggris Raya</p>						                
                </div>
                        

                    </div>

                    <div className="col-lg-4 col-md-6">
                    <div className="colbox">
                            <div className="Header_element">
                                <strong>WCLH Hotline</strong> 
                            </div>
                            <div>
                                <div className="inline_heading">
                                    Emergency Hotline
                                </div>
                                <div className="nameabout col">
                                
                                    Emergency:<a href="/Contact"> 777 888 999</a><hr/>
                                    Covid 19:<a href="/Contact"> 777 888 111</a>
                                   
                                </div>

                                <div>
                                    <strong className="inline_heading">E-Mail Hotline</strong>
                                </div>
                                <div className=" nameabout col">
                                    <a href="/Contact">info@wclh.co.uk</a><hr/>
                                    <a href="/Contact">report@wclh.co.uk</a>
                                </div>
                                <div>
                                <strong className="inline_heading">Department Hotline</strong>
                                </div>
                                <div className=" nameabout col">
                                    <a href="/Contact">Geriatric Department: Ext 111</a><hr/>
                                    <a href="/Contact">Allergists Department: Ext 222</a><hr/>
                                    <a href="/Contact">Dermatologists Department: Ext 333</a><hr/>
                                    <a href="/Contact">Infectious Disease Department: Ext 444</a><hr/>
                                    <a href="/Contact">Ophthalmologists Department: Ext: 555</a><hr/>
                                    <a href="/Contact">Ophthalmologists Department: 999</a><hr/>
                                    <a href="/Contact">Obstetrician/Gynecologists: 777</a>
                                </div>
                            </div>
                            

                                <div>
                                    <div className="stetoscope">
                                        <div className="">
                                            <img src={Stetoskop} alt="Stetoscope"/>
                                        </div>
                                        
                                        <div className="icon_text">
                                            <span>Booking</span><br/>
                                            <span>your dates Here</span>
                                        </div>
                                    </div>

                                    <div className="ambulance">
                                        <div>
                                            <img src={Ambulance} alt="Stetoscope"/>
                                        </div>
                                        
                                        <div className="icon_text">
                                            <span>Do you have</span><br/>
                                            <span>an Emergency?</span>
                                        </div>
                                    </div>
                                    
                                                          
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        <NewsFlex/>
        <Footer/>
    
      </>
  );
  
};

export default Contact;