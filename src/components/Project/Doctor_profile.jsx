import React from 'react';
import "./Menu_Name.css";
import "./Doctor_profile.css";
import Navbar from './Navbar';
import ProfileSlider from "./ProfileSlider";
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
                        <div className="left-Heading">dr. Daisy Ridley</div>
                        <div className="left-inlineHeading mt-2 mb-2">Biography </div>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit sed. Dictum varius duis at consectetur lorem donec massa. 
                        </p>
                        <div className="left-inlineHeading mt-2 mb-2">Education </div>
                        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>
                        
                        <div className="points">
                        <NavLink  to="/doctor-profile-layout"><VscCircleFilled/>&nbsp;&nbsp; 2010: Bachelor from Havard University </NavLink><hr/><br/>
                        <NavLink  to="/doctor-profile-layout"><VscCircleFilled/>&nbsp;&nbsp; 2012: Master from Oxford University </NavLink><hr/><br/>
                        <NavLink  to="/doctor-profile-layout"><VscCircleFilled/>&nbsp;&nbsp; 2013: Surgery Specialist at Oxford University </NavLink><hr/><br/>
                        <NavLink  to="/doctor-profile-layout"><VscCircleFilled/>&nbsp;&nbsp; 2021: Doctoral Degree from Chicago University </NavLink><br/>
                </div>
                <div className="title3">
                    <h4>Expertise</h4>
                </div>
                <div className="para6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>						                
                </div>
                <div className="points">
                        <NavLink  to="/doctor-profile-layout"><VscCircleFilled/>&nbsp;&nbsp; Surgery </NavLink><hr/><br/>
                        <NavLink  to="/doctor-profile-layout"><VscCircleFilled/>&nbsp;&nbsp; Internal Disease </NavLink><br/>
                </div>
                <div className="title3">
                    <h4>Career  History</h4>
                </div>
                <div className="para6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>						                
                </div>
                <div className="points">
                        <NavLink  to="/doctor-profile-layout"><VscCircleFilled/>&nbsp;&nbsp; 2013-2014: RAF Hospital, Leceister </NavLink><hr/><br/>
                        <NavLink  to="/doctor-profile-layout"><VscCircleFilled/>&nbsp;&nbsp; 2015 - Now: WCLH Hospital, London </NavLink><br/>
                </div>
                <div className="title3">
                    <h4>Research </h4>
                </div>
                <div className="Lists">
                    <div className="leftlists">
                        <NavLink  to="/doctor-profile-layout">Covid 19 Symptomps</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<NavLink  to="/doctor-profile-layout"><FaRegFilePdf />&nbsp; Download </NavLink><hr/><br/>
                        <NavLink  to="/doctor-profile-layout">Brain Surgery for Store</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<NavLink  to="/doctor-profile-layout"><FaRegFilePdf />&nbsp; Download </NavLink><hr/><br/>
                        <NavLink  to="/doctor-profile-layout">Internal Disease Treatment</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<NavLink  to="/doctor-profile-layout"><FaRegFilePdf />&nbsp; Download </NavLink><hr/><br/>
                        <NavLink  to="/doctor-profile-layout">Safe Surgery for Human</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<NavLink  to="/doctor-profile-layout"><FaRegFilePdf />&nbsp; Download </NavLink><br/>
                    </div>
                </div>

                        
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="colbox">
                            <div className="Header_element">
                                <strong>doctor-profile </strong> 
                            </div>
                            <div>
                                <div className="inline_heading">
                                    Emergency Hotline
                                </div>
                                <div className="nameabout col">
                                
                                    Emergency:<a href="/Contact"> 777 888 999</a><hr/>
                                    Covid 19:<a href="/Contact"> 777 888 111</a>
                                   
                                </div>

                                <div className="inline_heading">
                                    <h3>Office </h3>
                                </div>
                                <div className="para5">
                                    <p>Riverside Building, London, SE-90, East Wing Room, Surgery Department</p>
                                </div>
                                <div className="title2">
                                    <h3>Contact </h3>
                                </div>
                                <div className="nameabout col">
                                    <NavLink to="/doctor-profile-layout"><WhatsAppIcon/> +1 222 333 444</NavLink><br/><hr width="580px"/>
                                    <NavLink to="/doctor-profile-layout"><CallIcon/> +1 222 333 333</NavLink><br/><hr width="580px"/>
                                    <NavLink to="/doctor-profile-layout"><FaFax/> +1 222 333 222</NavLink>
                                </div>
                                <div className="inline_heading">
                                    <h3>Social Media </h3>
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
            <NewsFlex/>
            <Footer/>       
  </>
  );
};

export default Doctor_profile;