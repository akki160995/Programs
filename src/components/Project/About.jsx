import React from 'react';
//import "./About.css";
import Navbar from './Navbar';
import Achart from "./Achart";
import NewsFlex from '../Layout/NewsFlex/NewsFlex';
import Slider from "./Slider";
//import "./Menu_Name.css";
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
import { NavLink } from "react-router-dom"; 
import headertabs from './Images/headertabs1.jpg';
import Stetoskop from './Images/iconstetoskop.png';
import Ambulance from './Images/iconambulance.png';
import{FaRegFilePdf} from 'react-icons/fa';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ReactNavbar from '../Layout/ReactNavbar';

const About = () => {
  return (
    <>
        <ReactNavbar/>
        <Navbar/>

        <div className="header_flex">
                <div className="container-fluid" >
                    <div className="row align-items-center ">
                        <div className="col-lg-1"></div>
                        <div className=" col-lg-6 col-md-6 col-sm-6 ">
                            <span className="main_heading "><b>ABOUT US	<br/><small>Home &gt; About Us</small></b></span>
                        </div> 
                        <div className=" col-lg-4 col-md-6 col-sm-6 ">
                            <img src={headertabs} className="poster_size" alt="xyz" />
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>    
            </div>
            <div>
                
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6  col-md-6">
                        <div className="left-Heading">About <span>WCLH</span></div>
                        <div className="left-inline Heading mt-2 mb-2">Overview </div>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit sed. Dictum varius duis at consectetur lorem donec massa. 
                        </p>
                        
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit sed. Dictum varius duis at consectetur lorem donec massa. 
                        </p>
                        
                        <div className="video1">
                            <iframe 
                                width="100%" 
                                height="500em" 
                                src="https://www.youtube.com/embed/XHOmBV4js_E" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allowfullscreen/>
                        </div>
                        <div className="profile">
                            <h3>Company Profile Download</h3>
                        </div>
                        <div className="Lists">
                            <div className="leftlists">
                                <a href="test_file.zip" download>Company Profile<span className="float-right"><FaRegFilePdf />Download</span></a><hr/><br/>
                                <a href="test_file.zip" download>Brochure Download<span className="float-right"><FaRegFilePdf />Download</span></a><hr/><br/>
                                <a href="test_file.zip" download>Outpatient Brochure<span className="float-right"><FaRegFilePdf />Download</span></a><hr/><br/>
                                <a href="test_file.zip" download>Covid 19 Support Brochure<span className="float-right"><FaRegFilePdf />Download</span></a>
                                </div>
                        </div>

                        <div>
                            <div className="inline-Heading">
                                <h3>Leading the Way With Clinical Technology</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus. Ullamcorper sit amet risus nullam eget. Turpis egestas pretium aenean pharetra magna. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.</p><p>Accumsan lacus vel facilisis volutpat est. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Molestie a iaculis at erat pellentesque. Ac tortor vitae purus faucibus ornare.</p>
                        </div>
                        <div className="PatientGraph">
                            <div className="Pname">
                                <span>Patients Graph</span>
                                <p>2020 - 2021</p>
                            </div>
                            <div className="graph">
                                <Achart/>
                            </div>

                            <div>

                            
                            </div>
                </div>


                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="colbox">
                            <div className="Header_element">
                                <strong>Department &amp; Doctor</strong> 
                            </div>


                            <div className="inline_heading">
                                <h3>Doctor Specialist</h3>
                            </div>
                <div className="nameabout col">
                        <NavLink to="/about"> Children Specialist</NavLink><br/><hr/>
                        <NavLink to="/about"> Cancer Specialist</NavLink><br/><hr/>
                        <NavLink to="/about"> Heart Specialist</NavLink><br/><hr/>
                        <NavLink to="/about"> Dentist Specialist</NavLink><br/><hr/>
                        <NavLink to="/about"> Geriatric Specialist</NavLink><br/><hr/>
                        <NavLink to="/about"> Obstetrician Specialist</NavLink><br/>
                </div>
                <div className="inline_heading">
                    <h3>Department Specialist</h3>
                </div>
                <div className="nameabout col">
                        <NavLink to="/about"> Geriatric Department</NavLink><br/><hr/>
                        <NavLink to="/about"> Allergists Department</NavLink><br/><hr/>
                        <NavLink to="/about"> Dermatologists Department</NavLink><br/><hr/>
                        <NavLink to="/about"> Infectious Disease Department</NavLink><br/><hr/>
                        <NavLink to="/about"> Ophthalmologists Department</NavLink><br/><hr/>
                        <NavLink to="/about"> Ophthalmologists Department</NavLink><br/><hr/>
                        <NavLink to="/about"> Obstetrician/Gynecologists</NavLink><br/>
                </div>
                <div className="search inline_heading">
                    <h3>Looking <br/> For Something?</h3>
                </div>
                <div className="sbutton">
                    <form action="/news" method="get">
                        <input
                            type="text"
                            id="header-search"
                            placeholder="Keyword(S)"
                            name="s"
                        />
                        <button type="submit"><SearchOutlinedIcon/></button>
                    </form>
                </div>
                <div className="nameabout col">    
                    <NavLink to="/about"> View A–Z list of services</NavLink><br/><hr width="560px"/>
                    <NavLink to="/about"> View our hospital map</NavLink><br/><hr width="560px"/>
                    <NavLink to="/about"> Find Our Doctor</NavLink><br/>
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
    <Slider/>
    <NewsFlex/>



        
        
        
            
        <div className="Footer"> <br/>
            <div className="Container1">
                <div className="Cleft">
                    <div className="top">
                        <NavLink to="/"><img src={logo} alt="Logo"/></NavLink>
                    </div>
                    <div className="mid">
                        <NavLink to="/about"><h3><FaAmericanSignLanguageInterpreting size="50"/> Interpreter</h3></NavLink>
                    </div>
                    <div className="center">
                    <NavLink to="/about"><h3><FaLanguage size="50" /> Language</h3></NavLink>
                    </div>
                </div>
                <div className="Cmid">
                        <div className="head">
                            <h3>Quicklinks</h3>
                        </div>
                        <div className="link">
                            <div className="leftlink">
                                <NavLink to="/about">A-Z listing</NavLink><hr/>
                                <NavLink to="/about">Parking</NavLink><hr/>
                                <NavLink to="/about">Visiting Hours</NavLink><hr/>
                                <NavLink to="/about">Finding Around</NavLink>  
                            </div>   
                            <div className="rightlink">
                                <NavLink to="/about">Patient Support</NavLink><hr/>
                                <NavLink to="/about">Covid-19 Support</NavLink><hr/>
                                <NavLink to="/about">Condition Service</NavLink><hr/>
                                <NavLink to="/about">Emegency</NavLink>
                            </div> 
                        </div>
                </div>
                <div className="Cright">
                        <div className="heading">
                            <h3>Contact Us</h3>
                        </div>
                        <div className="contactdetail">
                            <div className="numbers">
                                <NavLink to="/about"><CallIcon />+62 8888 999</NavLink><br/><hr/>
                                <NavLink to="/about"><FaStethoscope />+62 8888 333</NavLink><br/><hr/>
                                <NavLink to="/about"><FaFax />+62 8888 444</NavLink>
                            </div>
                            <div className="place">
                                <NavLink to="/about"><LocationOnIcon />&nbsp;&nbsp;Riverside Building,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>London, SE-90</span></NavLink>
                                <br/><br/><br/>
                                <div className="icons">
                                    <NavLink to="/about"><FaFacebookF/></NavLink>
                                    <NavLink to="/about"><TwitterIcon/></NavLink>
                                    <NavLink to="/about"><InstagramIcon/></NavLink>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="Container2">
                    <div className="Side1">
                        <NavLink to="/about">Copyright</NavLink>
                        <NavLink to="/about">Accessibility</NavLink>
                        <NavLink to="/about">Disclaimer</NavLink>
                        <NavLink to="/about">Privacy</NavLink><br/><br/>
                        <NavLink to="/about">Sitemap</NavLink>
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
export default About;