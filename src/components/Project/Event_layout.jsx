import React from 'react';
import "./Menu_Name.css";
import "./Event_layout.css";
import Navbar from './Navbar';
import headertabs from './Images/headertabs10.jpg';
import { NavLink } from "react-router-dom"; 
import Stetoskop from './Images/iconstetoskop.png';
import Ambulance from './Images/iconambulance.png';
import {VscCircleFilled} from 'react-icons/vsc';
import {FaIdCard} from 'react-icons/fa';
import {FaUserClock} from 'react-icons/fa';
import {FaAllergies} from 'react-icons/fa';
import {FaRegWindowClose} from 'react-icons/fa';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';
import Footer from '../Layout/Footer/Footer';
import poster5 from './Images/post-5.jpg';
import EventLayoutFrm from '../Layout/forms/EventLayout';

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
                        <div className="left-Heading border-left">Vaccinne for Eldery</div>
                            <div className="Heading-s ml-0">
                                <h4>Events Overview </h4>
                            </div>
                        
                            <div className="para7">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit sed. Dictum varius duis at consectetur lorem donec massa. </p>						                </div>
                                <div className="Heading-s ml-0">
                                    <h4>Date and Time </h4>
                                </div>
                                <div className="para6">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>						                
                                </div>
                                <div className="List">
                                    <div className="">
                                        <NavLink className="Li"  to="/event-layout"><VscCircleFilled/>Vaccine Section 1</NavLink>
                                        <NavLink className="float-right Li" to="/event-layout">21 June: 08.00 Am to 17.00 Pm</NavLink><hr/>
                                        <NavLink className="Li" to="/event-layout"><VscCircleFilled/>Vaccine Section 2</NavLink>
                                        <NavLink className="float-right Li" to="/event-layout">21 Mei: 08.00 Am to 20.00 Pm</NavLink><br/>
                                    </div>
                                </div>
                                <div className="title3">
                                    <h4>Place</h4>
                                </div>
                                <div className="para6">
                                    <p>East Wing Building, Riverside Building, London, SE-90, East Wing Room, Vaccinne <br/>Department</p>						                
                                </div>

                                <div className="container">
                                    <div class="mapouter">
                                        <div class="gmap_canvas">
                                            <iframe 
                                                class="gmap_iframe" 
                                                frameborder="0" 
                                                scrolling="no" 
                                                marginheight="0" 
                                                marginwidth="0" 
                                                src="https://maps.google.com/maps?width=800&amp;height=400&amp;hl=en&amp;q=WeCare&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                            </iframe>
                                        </div>
                                    </div>
                                </div>
                                <div className="Header-s">
                                    <h2>Frequently Asked Questions</h2>
                                </div>
                                <EventLayoutFrm/>
                                </div>

                            <div className="col-lg-4  col-md-6">
                                <div className="colbox">
                                    <div className="Header_element">
                                        <b>Don't Miss Our Events</b>
                                    </div>

                                    <div className="Heading-s">
                                        <h4 className="ml-3">Requirements for Vaccines</h4>
                                    </div>
                                    <div className="para5">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                    <div className="nameabout cols">
                                        <NavLink to="/event-layout"><FaIdCard/>&nbsp;&nbsp; Have United Kingdom ID</NavLink><br/><hr width="580px"/>
                                        <NavLink to="/event-layout"><FaUserClock/>&nbsp;&nbsp; Age Minimum 13 Years Old</NavLink><br/><hr width="580px"/>
                                        <NavLink to="/event-layout"><FaAllergies/>&nbsp;&nbsp; No Allergics</NavLink><br/><hr width="580px"/>
                                        <NavLink to="/event-layout"><FaRegWindowClose/>&nbsp;&nbsp; Never Vaccine Before</NavLink>
                                    </div>
                                    <div className="Heading-s">
                                        <h4 className="ml-3">Other Events</h4>
                                    </div>
                                    <div className="nameabout cols">
                                        <NavLink to="/event-layout"> Vaccine for Eldery</NavLink><br/><hr width="580px"/>
                                        <NavLink to="/event-layout"> Vaccine for Public</NavLink><br/><hr width="580px"/>
                                        <NavLink to="/event-layout"> Folio Vaccine</NavLink><br/><hr width="580px"/>
                                        <NavLink to="/event-layout"> Inufluenza Vaccine</NavLink><br/><hr width="580px"/>
                                        <NavLink to="/event-layout"> Covid 19 Seminar</NavLink>
                                    </div>
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

                    <NewsFlex/>


                    <Footer/>
  </>
  );
};

export default Events_layout;