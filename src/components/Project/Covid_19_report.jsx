import React from 'react';
import "./Menu_Name.css";
import "./Covid_19_report.css";
import Navbar from './Navbar';
import Achart from "./Achart";
import ProgressGraph from "./ProgressGraph";
import headertabs from './Images/headertabs6.jpg';
import { NavLink } from "react-router-dom"; 
import {FaAmbulance} from 'react-icons/fa';
import {BiEnvelope} from 'react-icons/bi';
import {RiVirusFill} from 'react-icons/ri';
import {FaEnvelope} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';
import {FaPrescriptionBottleAlt} from 'react-icons/fa';
import {FaWindowClose} from 'react-icons/fa';
import Stetoskop from './Images/iconstetoskop.png';
import Ambulance from './Images/iconambulance.png';
import logo from './Images/logo.png';
import {FaAmericanSignLanguageInterpreting} from 'react-icons/fa';
import {FaLanguage} from 'react-icons/fa';
import {FaStethoscope} from 'react-icons/fa';
import {FaFax} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import TwitterIcon from '@material-ui/icons/Twitter';
import CallIcon from '@material-ui/icons/Call';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';

const Covid_19_report = () => {
  return(
    <>
        <Navbar/>
        
        <div className="header_flex">
                <div className="container-fluid" >
                    <div className="row align-items-center ">
                        <div className="col-lg-1"></div>
                        <div className=" col-lg-6 col-md-6 col-sm-6 ">
                            <span className="main_heading "><b>COVID-19 REPORT<br/><small>Home &gt; Covid-19 Report</small></b></span>
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
                        <div className="left-Heading">Covid 19 <span>Report</span></div>
                        <div className="left-inline Heading mt-2 mb-2">Overview </div>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit sed. Dictum varius duis at consectetur lorem donec massa. 
                        </p>
                        
                        <p>
                            Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit sed. Dictum varius duis at consectetur lorem donec massa. 
                        </p>

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
                               <NavLink to="/covid-19-report">Emergency </NavLink>
                            </div>
                        </div> 

                        <div className="ReportName">
                            <span>Report March 2021</span>
                        </div>
                        <div className="ReportGraph">
                            <ProgressGraph/>
                        </div>
                        <div className="CovidGraph">
                            <div className="Cname">
                            <span>Covid 19 Graph</span>
                            <p>2020 - 2021</p>
                        </div>
                        <div className="covid19graph">
                            <Achart/>
                        </div>

                        <div className="title3">
                            <h4>Covid 19 Protocol</h4>
                        </div>
                        <div className="para6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>						                
                        </div>
                        <div className="points">
                            <NavLink  to="/covid-19-report">&nbsp;&nbsp; Wash Hand</NavLink><hr/><br/>
                            <NavLink  to="/covid-19-report"><FaPrescriptionBottleAlt/>&nbsp;&nbsp; Bring Handsanitizer </NavLink><hr/><br/>
                            <NavLink  to="/covid-19-report"><FaWindowClose/>&nbsp;&nbsp; Keep Distance </NavLink><hr/><br/>
                            <NavLink  to="/covid-19-report">&nbsp;&nbsp; Wear Mask </NavLink><br/>
                        </div>

                    </div>
                
                    </div>
                

                    </div>


                    <div className="col-lg-4 col-md-6">
                        <div className="colbox">
                            <div className="Header_element">
                                <strong>COVID 19 HOTLINE</strong> 
                            </div>


                            <div className="inline_heading">
                                <h5>Emergency Hotline</h5>
                            </div>
                            <div className="nameabout col">
                                <NavLink to="/covid-19-report"><FaAmbulance/>&nbsp;&nbsp; Emergency: 777 888 999</NavLink><br/><hr width="580px"/>
                                <NavLink to="/covid-19-report"><RiVirusFill/>&nbsp;&nbsp; Covid 19: 777 888 111</NavLink>
                            </div>
                            <div className="inline_heading">
                                <h3>E-Mail Hotline</h3>
                            </div>
                            <div className="nameabout col">
                                <NavLink to="/covid-19-report"><BiEnvelope/>&nbsp;&nbsp; info@wclh.co.uk</NavLink><br/><hr width="580px"/>
                                <NavLink to="/covid-19-report"><FaEnvelope/>&nbsp;&nbsp; report@wclh.co.uk</NavLink>
                            </div>
                            <div className="inline_heading">
                                <h3>Department Hotline</h3>
                            </div>
                            <div className="nameabout col">
                                <NavLink to="/covid-19-report"><FaPhoneAlt/>&nbsp;&nbsp; Covid 19 Emergency Hotline: Ext 888</NavLink><br/><hr width="580px"/>
                                <NavLink to="/covid-19-report"><FaPhoneAlt/>&nbsp;&nbsp; Covid 19 Report: Ext 777</NavLink><br/><hr width="580px"/>
                                <NavLink to="/covid-19-report"><FaPhoneAlt/>&nbsp;&nbsp; Help and Consultation: Ext 666</NavLink>
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

        

                 

        <div className="Footer"> <br/>
            <div className="Container1">
                <div className="Cleft">
                    <div className="top">
                        <NavLink to="/"><img src={logo} alt="Logo"/></NavLink>
                    </div>
                    <div className="mid">
                        <NavLink to="/covid-19-report"><h3><FaAmericanSignLanguageInterpreting size="50"/> &nbsp;Interpreter</h3></NavLink>
                    </div>
                    <div className="center">
                    <NavLink to="/covid-19-report"><h3><FaLanguage size="50" /> &nbsp;Language</h3></NavLink>
                    </div>
                </div>
                <div className="Cmid">
                        <div className="head">
                        <h3>Quicklinks</h3>
                        </div>
                        <div className="link">
                            <div className="leftlink">
                                <NavLink to="/covid-19-report">A-Z listing</NavLink><hr/>
                                <NavLink to="/covid-19-report">Parking</NavLink><hr/>
                                <NavLink to="/covid-19-report">Visiting Hours</NavLink><hr/>
                                <NavLink to="/covid-19-report">Finding Around</NavLink>  
                            </div>   
                            <div className="rightlink">
                                <NavLink to="/covid-19-report">Patient Support</NavLink><hr/>
                                <NavLink to="/covid-19-report">Covid-19 Support</NavLink><hr/>
                                <NavLink to="/covid-19-report">Condition Service</NavLink><hr/>
                                <NavLink to="/covid-19-report">Emegency</NavLink>
                            </div> 
                        </div>
                </div>
                <div className="Cright">
                        <div className="heading">
                        <h3>Contact Us</h3>
                        </div>
                        <div className="contactdetail">
                            <div className="numbers">
                                <NavLink to="/covid-19-report"><CallIcon />&nbsp;&nbsp;+62 8888 999</NavLink><br/><hr/>
                                <NavLink to="/covid-19-report"><FaStethoscope />&nbsp;&nbsp;&nbsp;+62 8888 333</NavLink><br/><hr/>
                                <NavLink to="/covid-19-report"><FaFax />&nbsp;&nbsp;&nbsp;+62 8888 444</NavLink>
                            </div>
                            <div className="place">
                                <NavLink to="/covid-19-report"><LocationOnIcon />&nbsp;&nbsp;Riverside Building,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>London, SE-90</span></NavLink>
                                <br/><br/><br/>
                                <div className="icons">
                                    <NavLink to="/covid-19-report"><FaFacebookF/></NavLink>
                                    <NavLink to="/covid-19-report"><TwitterIcon/></NavLink>
                                    <NavLink to="/covid-19-report"><InstagramIcon/></NavLink>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="Container2">
                    <div className="Side1">
                        <NavLink to="/covid-19-report">Copyright</NavLink>
                        <NavLink to="/covid-19-report">Accessibility</NavLink>
                        <NavLink to="/covid-19-report">Disclaimer</NavLink>
                        <NavLink to="/covid-19-report">Privacy</NavLink><br/><br/>
                        <NavLink to="/covid-19-report">Sitemap</NavLink>
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

export default Covid_19_report;