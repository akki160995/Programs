import React from 'react';
import "./Menu_Name.css";
import "./Department_template.css";
import Navbar from './Navbar';
import headertabs from './Images/headertabs9.jpg';
import { NavLink } from "react-router-dom"; 
import logo from './Images/logo.png';
import Stetoskop from './Images/iconstetoskop.png';
import Ambulance from './Images/iconambulance.png';
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
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';

const Department_template = () => {
  return(
    <>
        <Navbar/>

        <div className="header_flex">
                <div className="container-fluid" >
                    <div className="row align-items-center ">
                        <div className="col-lg-1"></div>
                        <div className=" col-lg-6 col-md-6 col-sm-6 ">
                            <span className="main_heading "><b>DEPARTMENT LIST<br/><small>Home &gt; Department List</small></b></span>
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
                        <div className="left-Heading">Contact <span>WCLH</span></div>
                        
                        <div className="">
                            <div className="Alphabates">
                                <div>
                                    <h3>
                                        <NavLink exact activeClassName="active_class" to="/department-template-list"> A </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> B </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> C </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> D </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> E </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> F </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> G </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> H </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> I </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> J </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> K </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> L </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> M </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> N </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> O </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> P </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> Q </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> R </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> S </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> T </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> U </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> V </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> W </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> X </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> Y </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> Z </NavLink>
                                    </h3>
                                </div>


                                <div className="Information">
                                    <div className="">
                                        <h4> A </h4><hr  color="#f5ecec"/>
                                        <div className="title1">
                                            <h4>Anaesthetics</h4>
                                        </div>
                                        <div className="para4">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>						                
                                        </div>
                                        <div className="Button">
                                            <div className="btnView">
                                                <NavLink to="/department-template-list">Quick View </NavLink>
                                            </div>
                                        <div className="Link">
                                            <NavLink to="/department-template-list">More Info</NavLink>
                                        </div>
                                    </div>
                                    <div className="title1">
                                        <h4>Acute medical unit </h4>
                                    </div>
                                    <div className="para4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>						                
                                    </div>
                                    <div className="Button">
                                        <div className="btnView">
                                            <NavLink to="/department-template-list">Quick View </NavLink>
                                        </div>
                                        <div className="Link">
                                            <NavLink to="/department-template-list">More Info</NavLink>
                                        </div>
                                    </div>
                                    <div className="title1">
                                        <h4>Adult Burns Centre </h4>
                                    </div>
                                    <div className="para4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>						                
                                    </div>
                                    <div className="Button">
                                        <div className="btnView">
                                            <NavLink to="/department-template-list">Quick View </NavLink>
                                        </div>
                                        <div className="Link">
                                            <NavLink to="/department-template-list">More Info</NavLink>
                                        </div>
                                    </div>
                                    <div className="title1">
                                        <h4>Aged care service </h4>
                                    </div>
                                    <div className="para4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>						                
                                    </div>
                                    <div className="Button">
                                        <div className="btnView">
                                            <NavLink to="/department-template-list">Quick View </NavLink>
                                        </div>
                                        <div className="Link">
                                            <NavLink to="/department-template-list">More Info</NavLink>
                                        </div>
                                    </div>
                                    <div className="title1">
                                        <h4>Allergy &amp; Immunology</h4>
                                    </div>
                                    <div className="para4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>						                
                                    </div>
                                    <div className="Button">
                                        <div className="btnView">
                                            <NavLink to="/department-template-list">Quick View </NavLink>
                                        </div>
                                        <div className="Link">
                                            <NavLink to="/department-template-list">More Info</NavLink>
                                        </div>
                                    </div>
                                    <div className="title1">
                                        <h4>Allergy and Immunology outpatient clinics</h4>
                                    </div>
                                    <div className="para4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>						                
                                    </div>
                                    <div className="Button">
                                        <div className="btnView">
                                            <NavLink to="/department-template-list">Quick View </NavLink>
                                        </div>
                                        <div className="Link">
                                            <NavLink to="/department-template-list">More Info</NavLink>
                                        </div>
                                    </div>
                                    <div className="title1">
                                        <h4>Allied Health</h4>
                                    </div>
                                    <div className="para4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>						                
                                    </div>
                                    <div className="Button">
                                        <div className="btnView">
                                            <NavLink to="/department-template-list">Quick View </NavLink>
                                        </div>
                                        <div className="Link">
                                            <NavLink to="/department-template-list">More Info</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="colbox">
                            <div className="Header_element">
                                <strong>WCLH Hotline</strong> 
                            </div>
                            <div className="Heading1">
                                <h3>Department from to A-Z</h3>
                            </div>  
                            <div className="Search">
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
                            <div className="inline_heading">
                                <h3>Department By Category</h3>
                            </div>
                            <div className="nameabout col">
                                <NavLink to="/department-template-list"> Children Specialist</NavLink><br/><hr/>
                                <NavLink to="/department-template-list"> Cancer Specialist</NavLink><br/><hr/>
                                <NavLink to="/department-template-list"> Heart Specialist</NavLink><br/><hr/>
                                <NavLink to="/department-template-list"> Dentist Specialist</NavLink><br/><hr/>
                                <NavLink to="/department-template-list"> Geriatric Specialist</NavLink><br/><hr/>
                                <NavLink to="/department-template-list"> Obstetrician Specialist</NavLink><br/><hr/>
                                <NavLink to="/department-template-list"> Covid 19 Specialist</NavLink><br/><hr/>
                                <NavLink to="/department-template-list"> Surgery Specialist</NavLink><br/>
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
                        <NavLink to="/department-template-list"><h3><FaAmericanSignLanguageInterpreting size="50"/> &nbsp;Interpreter</h3></NavLink>
                    </div>
                    <div className="center">
                    <NavLink to="/department-template-list"><h3><FaLanguage size="50" /> &nbsp;Language</h3></NavLink>
                    </div>
                </div>
                <div className="Cmid">
                        <div className="head">
                        <h3>Quicklinks</h3>
                        </div>
                        <div className="link">
                            <div className="leftlink">
                                <NavLink to="/department-template-list">A-Z listing</NavLink><hr/>
                                <NavLink to="/department-template-list">Parking</NavLink><hr/>
                                <NavLink to="/department-template-list">Visiting Hours</NavLink><hr/>
                                <NavLink to="/department-template-list">Finding Around</NavLink>  
                            </div>   
                            <div className="rightlink">
                                <NavLink to="/department-template-list">Patient Support</NavLink><hr/>
                                <NavLink to="/department-template-list">Covid-19 Support</NavLink><hr/>
                                <NavLink to="/department-template-list">Condition Service</NavLink><hr/>
                                <NavLink to="/department-template-list">Emegency</NavLink>
                            </div> 
                        </div>
                </div>
                <div className="Cright">
                        <div className="heading">
                        <h3>Contact Us</h3>
                        </div>
                        <div className="contactdetail">
                            <div className="numbers">
                                <NavLink to="/department-template-list"><CallIcon />&nbsp;&nbsp;+62 8888 999</NavLink><br/><hr/>
                                <NavLink to="/department-template-list"><FaStethoscope />&nbsp;&nbsp;&nbsp;+62 8888 333</NavLink><br/><hr/>
                                <NavLink to="/department-template-list"><FaFax />&nbsp;&nbsp;&nbsp;+62 8888 444</NavLink>
                            </div>
                            <div className="place">
                                <NavLink to="/department-template-list"><LocationOnIcon />&nbsp;&nbsp;Riverside Building,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>London, SE-90</span></NavLink>
                                <br/><br/><br/>
                                <div className="icons">
                                    <NavLink to="/department-template-list"><FaFacebookF/></NavLink>
                                    <NavLink to="/department-template-list"><TwitterIcon/></NavLink>
                                    <NavLink to="/department-template-list"><InstagramIcon/></NavLink>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="Container2">
                    <div className="Side1">
                        <NavLink to="/department-template-list">Copyright</NavLink>
                        <NavLink to="/department-template-list">Accessibility</NavLink>
                        <NavLink to="/department-template-list">Disclaimer</NavLink>
                        <NavLink to="/department-template-list">Privacy</NavLink><br/><br/>
                        <NavLink to="/department-template-list">Sitemap</NavLink>
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

export default Department_template;