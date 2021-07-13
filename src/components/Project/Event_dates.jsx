import React from 'react';
import "./Menu_Name.css";
import "./Event_dates.css";
import Navbar from './Navbar';
import headertabs from './Images/headertabs11.jpg';
import Accordion from "./Accordion";
import { NavLink } from "react-router-dom"; 
import iconstetoskop from './Images/iconstetoskop.png';
import iconambulance from './Images/iconambulance.png';
import logo from './Images/logo.png';
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
                    <div className="col-lg-6  col-md-6">
                        
                    <div>
                        <div className="title4">
                            <h4>What's Event?</h4>
                        </div>
                        <div className="para7">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit sed. Dictum varius duis at consectetur lorem donec massa. </p>						                </div>
                            <div className="title6">
                                <h4>June 2021</h4>
                            </div>
                            <div className="dtevent1">
                                <div className="dteventleft">
                                    <h3>21</h3>
                                </div>
                                <div className="dteventright">
                                    <div className="eventdatedesc">
                                        <span className="einfo">Covid 19 Vaccine for Eldery</span><br/>
                                        <span className="dinfo">09.00 Am - 05.00 PM, East Wings of WCLH</span>
                                    </div>
                                    <div className="bline">
                                        <hr width="500px"></hr>
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
                                    <h3>22</h3>
                                </div>
                                <div className="dteventright">
                                    <div className="eventdatedesc">
                                        <span className="einfo">Covid 19 Vaccine for Public</span><br/>
                                        <span className="dinfo">09.00 Am - 05.00 PM, East Wings of WCLH</span>
                                    </div>
                                    <div className="bline">
                                        <hr width="500px"></hr>
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
                                    <h3>23</h3>
                                </div>
                                <div className="dteventright">
                                    <div className="eventdatedesc">
                                        <span className="einfo">Folio Vaccinne</span><br/>
                                        <span className="dinfo">09.00 Am - 05.00 PM, East Wings of WCLH</span>
                                    </div>
                                    <div className="bline">
                                        <hr width="500px"></hr>
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
                                    <h3>24</h3>
                                </div>
                                <div className="dteventright">
                                    <div className="eventdatedesc">
                                        <span className="einfo">Smallpox Vaccinne </span><br/>
                                        <span className="dinfo">09.00 Am - 05.00 PM, East Wings of WCLH</span>
                                    </div>
                                    <div className="bline">
                                        <hr width="500px"></hr>
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
                                    <h3>25</h3>
                                </div>
                                <div className="dteventright">
                                    <div className="eventdatedesc">
                                        <span className="einfo">Herpes Vaccinne </span><br/>
                                        <span className="dinfo">09.00 Am - 05.00 PM, East Wings of WCLH</span>
                                    </div>
                                    <div className="bline">
                                        <hr width="500px"></hr>
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
                                    <h3>26</h3>
                                </div>
                                <div className="dteventright">
                                    <div className="eventdatedesc">
                                        <span className="einfo">Squint Operation </span><br/>
                                        <span className="dinfo">09.00 Am - 05.00 PM, East Wings of WCLH</span>
                                    </div>
                                    <div className="bline">
                                        <hr width="500px"></hr>
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
                                    <h3>27</h3>
                                </div>
                                <div className="dteventright">
                                    <div className="eventdatedesc">
                                        <span className="einfo">Covid 19 Seminar</span><br/>
                                        <span className="dinfo">09.00 Am - 05.00 PM, East Wings of WCLH</span>
                                    </div>
                                    <div className="bline">
                                        <hr width="500px"></hr>
                                    </div>
                                    <div className="eventpara">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus<br/>nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                    <div className="readevent">
                                        <NavLink to="/event-dates-layout"><span>Read More</span></NavLink>
                                    </div>
                                </div>
                            </div>


                            <div className="accordian">
                                <div className="Title">
                                    <span>Freq' Asked Questions</span>
                                </div>

                            </div>
            
                        
                            <div className="Data">
                                <Accordion/>
                            </div>                         
                        </div>

                    </div>

                    <div className="col-lg-4  col-md-6">
                        <div className="colbox">
                            <div className="Header_element">
                                <strong>Carrer You Might Apply</strong>
                            </div>

                            <div className="title2">
                            <h3>Requirements for Vaccines</h3>
                            </div>
                            <div className="para5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                            <div className="Icons">
                                <NavLink to="/event-dates-layout"><FaIdCard/>&nbsp;&nbsp; Have United Kingdom ID</NavLink><br/><hr width="580px"/>
                                <NavLink to="/event-dates-layout"><FaUserClock/>&nbsp;&nbsp; Age Minimum 13 Years Old</NavLink><br/><hr width="580px"/>
                                <NavLink to="/event-dates-layout"><FaAllergies/>&nbsp;&nbsp; No Allergics</NavLink><br/><hr width="580px"/>
                                <NavLink to="/event-dates-layout"><FaRegWindowClose/>&nbsp;&nbsp; Never Vaccine Before</NavLink>
                            </div>
                            <div className="title2">
                                <h3>Doctor Specialist</h3>
                            </div>
                            <div className="OtherEvents">
                                <NavLink to="/event-dates-layout"> Children Specialist</NavLink><br/><hr width="580px"/>
                                <NavLink to="/event-dates-layout"> Cancer Specialist</NavLink><br/><hr width="580px"/>
                                <NavLink to="/event-dates-layout"> Heart Specialist</NavLink><br/><hr width="580px"/>
                                <NavLink to="/event-dates-layout"> Dentist Sepcialist</NavLink><br/><hr width="580px"/>
                                <NavLink to="/event-dates-layout"> Geriatric Specialist</NavLink><br/><hr width="580px"/>
                                <NavLink to="/event-dates-layout"> Obstetrician Specialist</NavLink>
                            </div>
                            <div className="title2">
                                <h3>Department Specialist</h3>
                            </div>
                            <div className="OtherEvents">
                                <NavLink to="/event-dates-layout"> Geriatric Department</NavLink><br/><hr width="580px"/>
                                <NavLink to="/event-dates-layout"> Allergists Department</NavLink><br/><hr width="580px"/>
                                <NavLink to="/event-dates-layout"> Dermatologists Department</NavLink><br/><hr width="580px"/>
                                <NavLink to="/event-dates-layout"> Infectious Disease Department</NavLink><br/><hr width="580px"/>
                                <NavLink to="/event-dates-layout"> Ophthalmologists Department</NavLink><br/><hr width="580px"/>
                                <NavLink to="/event-dates-layout"> Ophthalmologists Department</NavLink><br/><hr width="580px"/>
                                <NavLink to="/event-dates-layout"> Obstetrician/Gynecologists</NavLink>
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
                        <NavLink to="/event-dates-layout"><h3><FaAmericanSignLanguageInterpreting size="50"/> &nbsp;Interpreter</h3></NavLink>
                    </div>
                    <div className="center">
                    <NavLink to="/event-dates-layout"><h3><FaLanguage size="50" /> &nbsp;Language</h3></NavLink>
                    </div>
                </div>
                <div className="Cmid">
                        <div className="head">
                        <h3>Quicklinks</h3>
                        </div>
                        <div className="link">
                            <div className="leftlink">
                                <NavLink to="/event-dates-layout">A-Z listing</NavLink><hr/>
                                <NavLink to="/event-dates-layout">Parking</NavLink><hr/>
                                <NavLink to="/event-dates-layout">Visiting Hours</NavLink><hr/>
                                <NavLink to="/event-dates-layout">Finding Around</NavLink>  
                            </div>   
                            <div className="rightlink">
                                <NavLink to="/event-dates-layout">Patient Support</NavLink><hr/>
                                <NavLink to="/event-dates-layout">Covid-19 Support</NavLink><hr/>
                                <NavLink to="/event-dates-layout">Condition Service</NavLink><hr/>
                                <NavLink to="/event-dates-layout">Emegency</NavLink>
                            </div> 
                        </div>
                </div>
                <div className="Cright">
                        <div className="heading">
                        <h3>Contact Us</h3>
                        </div>
                        <div className="contactdetail">
                            <div className="numbers">
                                <NavLink to="/event-dates-layout"><CallIcon />&nbsp;&nbsp;+62 8888 999</NavLink><br/><hr/>
                                <NavLink to="/event-dates-layout"><FaStethoscope />&nbsp;&nbsp;&nbsp;+62 8888 333</NavLink><br/><hr/>
                                <NavLink to="/event-dates-layout"><FaFax />&nbsp;&nbsp;&nbsp;+62 8888 444</NavLink>
                            </div>
                            <div className="place">
                                <NavLink to="/event-dates-layout"><LocationOnIcon />&nbsp;&nbsp;Riverside Building,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>London, SE-90</span></NavLink>
                                <br/><br/><br/>
                                <div className="icons">
                                    <NavLink to="/event-dates-layout"><FaFacebookF/></NavLink>
                                    <NavLink to="/event-dates-layout"><TwitterIcon/></NavLink>
                                    <NavLink to="/event-dates-layout"><InstagramIcon/></NavLink>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="Container2">
                    <div className="Side1">
                        <NavLink to="/event-dates-layout">Copyright</NavLink>
                        <NavLink to="/event-dates-layout">Accessibility</NavLink>
                        <NavLink to="/event-dates-layout">Disclaimer</NavLink>
                        <NavLink to="/event-dates-layout">Privacy</NavLink><br/><br/>
                        <NavLink to="/event-dates-layout">Sitemap</NavLink>
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

export default Events_dates;