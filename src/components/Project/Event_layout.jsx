import React from 'react';
import "./Menu_Name.css";
import "./Event_layout.css";
import Navbar from './Navbar';
import headertabs from './Images/headertabs10.jpg';
import { NavLink } from "react-router-dom"; 
import iconstetoskop from './Images/iconstetoskop.png';
import iconambulance from './Images/iconambulance.png';
import {VscCircleFilled} from 'react-icons/vsc';
import {FaIdCard} from 'react-icons/fa';
import {FaUserClock} from 'react-icons/fa';
import {FaAllergies} from 'react-icons/fa';
import {FaRegWindowClose} from 'react-icons/fa';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';
import Footer from '../Layout/Footer/Footer';

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
                    <Footer/>
  </>
  );
};

export default Events_layout;