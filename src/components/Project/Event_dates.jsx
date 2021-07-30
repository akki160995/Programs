import React from 'react';
import "./Menu_Name.css";
import "./Event_dates.css";
import Navbar from './Navbar';
import headertabs from './Images/headertabs11.jpg';
import Accordion from "./Accordion";
import { NavLink } from "react-router-dom"; 
import Stetoskop from './Images/iconstetoskop.png';
import Ambulance from './Images/iconambulance.png';
import {FaIdCard} from 'react-icons/fa';
import {FaUserClock} from 'react-icons/fa';
import {FaAllergies} from 'react-icons/fa';
import {FaRegWindowClose} from 'react-icons/fa';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';
import Footer from '../Layout/Footer/Footer';
import EventDateLayoutFrm from '../Layout/forms/EventDatesLayout';
import poster5 from './Images/post-5.jpg';


const Events_dates = () => {
  return(
    <>
    <Navbar/>
            <div className="header_flex">
                <div className="container-fluid" >
                    <div className="row align-items-center ">
                        <div className="col-lg-1"></div>
                        <div className=" col-lg-6 col-md-6 col-sm-6 ">
                            <span className="main_heading "><b>EVENTS LAYOUT<br/><small>Home &gt; Events Layout</small></b></span>
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
                    <div className="col-lg-6  col-md-6 ">
                    <div className="left-Heading border-left">Events <span>at WCLH</span></div>
    
                    <div>
                        <div className="Heading-s ml-0">
                            <h4>What's Event?</h4>
                        </div>
                        <div className="para7">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit sed. Dictum varius duis at consectetur lorem donec massa. </p>						                </div>
                            <div className="Heading-s ml-0">
                                <h4>June 2021</h4> <hr/>
                            </div>
                            <div className="dtevent1">
                                <div className="dteventleft">
                                    <h4>21</h4>
                                </div>
                                <div className="dteventright">
                                    <div className="eventdatedesc">
                                        <span className="einfo">Covid 19 Vaccine for Eldery</span><br/>
                                        <span className="dinfo">09.00 Am - 05.00 PM, East Wings of WCLH</span><hr/>
                                    </div>
                                    
                                    <div className="eventpara">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus<br/>nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                    <div className="readevent">
                                        <NavLink to="/event-dates-layout"><span>Read More</span></NavLink>                                    
                                    </div>
                                </div>
                            </div>

                            <div className="dtevent2">
                                <div className="dteventleft">
                                    <h4>22</h4>
                                </div>
                                <div className="dteventright">
                                    <div className="eventdatedesc">
                                        <span className="einfo">Covid 19 Vaccine for Public</span><br/>
                                        <span className="dinfo">09.00 Am - 05.00 PM, East Wings of WCLH</span>
                                    </div><hr/>
                                    <div className="eventpara">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus<br/>nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                    <div className="readevent">
                                        <NavLink to="/event-dates-layout"><span>Read More</span></NavLink>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="dtevent2">
                                <div className="dteventleft">
                                    <h4>23</h4>
                                </div>
                                <div className="dteventright">
                                    <div className="eventdatedesc">
                                        <span className="einfo">Folio Vaccinne</span><br/>
                                        <span className="dinfo">09.00 Am - 05.00 PM, East Wings of WCLH</span>
                                    </div><hr/>
                                    <div className="eventpara">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus<br/>nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                    <div className="readevent">
                                        <NavLink to="/event-dates-layout"><span>Read More</span></NavLink>
                                    </div>
                                </div>
                            </div>        
                            
                            <div className="dtevent2">
                                <div className="dteventleft">
                                    <h4>24</h4>
                                </div>
                                <div className="dteventright">
                                    <div className="eventdatedesc">
                                        <span className="einfo">Smallpox Vaccinne </span><br/>
                                        <span className="dinfo">09.00 Am - 05.00 PM, East Wings of WCLH</span>
                                    </div><hr/>
                                    <div className="eventpara">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus<br/>nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                    <div className="readevent">
                                        <NavLink to="/event-dates-layout"><span>Read More</span></NavLink>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="dtevent2">
                                <div className="dteventleft">
                                    <h4>25</h4>
                                </div>
                                <div className="dteventright">
                                    <div className="eventdatedesc">
                                        <span className="einfo">Herpes Vaccinne </span><br/>
                                        <span className="dinfo">09.00 Am - 05.00 PM, East Wings of WCLH</span>
                                    </div><hr/>
                                    <div className="eventpara">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus<br/>nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                    <div className="readevent">
                                        <NavLink to="/event-dates-layout"><span>Read More</span></NavLink>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="dtevent2">
                                <div className="dteventleft">
                                    <h4>26</h4>
                                </div>
                                <div className="dteventright">
                                    <div className="eventdatedesc">
                                        <span className="einfo">Squint Operation </span><br/>
                                        <span className="dinfo">09.00 Am - 05.00 PM, East Wings of WCLH</span>
                                    </div><hr/>
                                    <div className="eventpara">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus<br/>nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                    <div className="readevent">
                                        <NavLink to="/event-dates-layout"><span>Read More</span></NavLink>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="dtevent2">
                                <div className="dteventleft">
                                    <h4>27</h4>
                                </div>
                                <div className="dteventright">
                                    <div className="eventdatedesc">
                                        <span className="einfo">Covid 19 Seminar</span><br/>
                                        <span className="dinfo">09.00 Am - 05.00 PM, East Wings of WCLH</span>
                                    </div><hr/>
                                    <div className="eventpara">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus<br/>nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                    <div className="readevent">
                                        <NavLink to="/event-dates-layout"><span>Read More</span></NavLink>
                                    </div>
                                </div>
                            </div>


                                                     
                        </div>

                    </div>

                    <div className="col-lg-4  col-md-6">
                        <div className="colbox">
                            <div className="Header_element">
                                <strong>Carrer You Might Apply</strong>
                            </div>

                            <div className="Heading-s">
                            <h4 className="ml-3">Requirements for Vaccines</h4>
                            </div>
                            <div className="para5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                            <div className="nameabout cols">
                                <NavLink to="/event-dates-layout"><FaIdCard/>&nbsp;&nbsp; Have United Kingdom ID</NavLink><br/><hr />
                                <NavLink to="/event-dates-layout"><FaUserClock/>&nbsp;&nbsp; Age Minimum 13 Years Old</NavLink><br/><hr />
                                <NavLink to="/event-dates-layout"><FaAllergies/>&nbsp;&nbsp; No Allergics</NavLink><br/><hr />
                                <NavLink to="/event-dates-layout"><FaRegWindowClose/>&nbsp;&nbsp; Never Vaccine Before</NavLink>
                            </div>
                            <div className="Heading-s">
                                <h4 className="ml-3" >Doctor Specialist</h4 >
                            </div>
                            <div className="nameabout cols">
                                <NavLink to="/event-dates-layout"> Children Specialist</NavLink><br/><hr />
                                <NavLink to="/event-dates-layout"> Cancer Specialist</NavLink><br/><hr />
                                <NavLink to="/event-dates-layout"> Heart Specialist</NavLink><br/><hr />
                                <NavLink to="/event-dates-layout"> Dentist Sepcialist</NavLink><br/><hr />
                                <NavLink to="/event-dates-layout"> Geriatric Specialist</NavLink><br/><hr />
                                <NavLink to="/event-dates-layout"> Obstetrician Specialist</NavLink>
                            </div>
                            <div className="Heading-s">
                                <h4 className="ml-3" >Department Specialist</h4 >
                            </div>
                            <div className="nameabout cols">
                                <NavLink to="/event-dates-layout"> Geriatric Department</NavLink><br/><hr />
                                <NavLink to="/event-dates-layout"> Allergists Department</NavLink><br/><hr />
                                <NavLink to="/event-dates-layout"> Dermatologists Department</NavLink><br/><hr />
                                <NavLink to="/event-dates-layout"> Infectious Disease Department</NavLink><br/><hr />
                                <NavLink to="/event-dates-layout"> Ophthalmologists Department</NavLink><br/><hr />
                                <NavLink to="/event-dates-layout"> Ophthalmologists Department</NavLink><br/><hr />
                                <NavLink to="/event-dates-layout"> Obstetrician/Gynecologists</NavLink>
                            </div><div className="stetoscope">
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
            <div className="container border-left border-right border-top border-bottom mt-5">
                                <div className="Heading-s ml-0 mt-3">
                                    <h4>Freq' Asked Questions</h4>
                                </div>          
                        
                            <div className="Data mb-3">
                                <Accordion/>
                            </div>
                            </div>
            <NewsFlex/>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6">
                        <EventDateLayoutFrm/>
                    </div>
                    <div className="col-md-4 col-sm-6 posterform">
                        <img src={poster5} alt="poster5" className=""/>
                    </div>
                    </div>

                </div>
            <Footer/>
  </>
  );
};

export default Events_dates;