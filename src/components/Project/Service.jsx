import React from 'react';
import "./Menu_Name.css";
import Navbar from './Navbar';
import Accordion from "./Accordion";
import headertabs from './Images/headertabs3.jpg';
import { NavLink } from "react-router-dom"; 
import Stetoskop from './Images/iconstetoskop.png';
import Ambulance from './Images/iconambulance.png';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';
import Footer from '../Layout/Footer/Footer';

const Service = () => {
  return(
    <>
        <Navbar/>

        <div className="header_flex">
            <div className="container-fluid" >
                <div className="row align-items-center ">
                    <div className="col-lg-1"></div>
                    <div className=" col-lg-6 col-md-6 col-sm-6 ">
                        <span className="main_heading "><b>SERVICE	<br/><small>Home &gt; Service</small></b></span>
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
                <div className="col-lg- 6 col-md-6">
                    <div className="Alphabates">
                        <div className="row">
                            <NavLink exact activeClassName="active_class col" to="/service"> A </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> B </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> C </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> D </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> E </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> F </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> G </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> H </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> I </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> J </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> K </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> L </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> M </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> N </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> O </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> P </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> Q </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> R </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> S </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> T </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> U </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> V </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> W </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> X </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> Y </NavLink>
                            <NavLink exact activeClassName="active_class col" to="/"> Z </NavLink>
                        </div>
                    </div>
                    <div className="container">
                        <h4> A </h4><hr  color="#f5ecec"/>
                        <div className="title1">
                                    <h4>Allergy &amp; Immunology</h4>
                                </div>
                                <div className="para4">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>
                                </div>
                                <div className="title1">
                                    <h4>Anaesthesia </h4>
                                </div>
                                <div className="para4">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>
                                </div>
                                <div className="title1">
                                    <h4>Adult Burns Centre </h4>
                                </div>
                                <div className="para4">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>
                                </div>
                                <div className="title1">
                                    <h4>Aged care service </h4>
                                </div>
                                <div className="para4">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>
                                </div>
                                <div className="title1">
                                    <h4>Allergy &amp; Immunology</h4>
                                </div>
                                <div className="para4">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>
                                </div>
                                <div className="title1">
                                    <h4>Allergy and Immunology outpatient clinics</h4>
                                </div>
                                <div className="para4">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>
                                </div>
                                <div className="title1">
                                    <h4>Allied Health</h4>
                                </div>
                                <div className="para4">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>
                                </div>

                        <div>
                        <div className="Heading-s ml-0 mt-5">
                            <h2>Freq' Asked Questions</h2>
                        </div>
                        <div>
                            <Accordion className="ml-0"/>
                        </div>
                    </div>
                <div>
            </div>

        </div>

    </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="colbox">
                        <div className="Header_element">
                            Service From A to Z
                        </div>

                                <div className="Heading-s">
                                    <h4 className="ml-4">Service from to A-Z</h4>
                                </div>  
                                <div className="sbutton">
                                    <div className="mt-4">
                                        <input type="text" placeholder="Keyword(s)..." className="search_box"></input><SearchOutlinedIcon className="search_icons"/>
                                    </div>
                                </div>
                            <div className="Heading-s">
                                    <h4 className="ml-4">Specialist Doctor</h4>
                                </div>
                                <div className="nameabout cols">
                                    <NavLink to="/service"> Children Specialist</NavLink><br/><hr/>
                                    <NavLink to="/service"> Cancer Specialist</NavLink><br/><hr/>
                                    <NavLink to="/service"> Heart Specialist</NavLink><br/><hr/>
                                    <NavLink to="/service"> Dentist Specialist</NavLink><br/><hr/>
                                    <NavLink to="/service"> Geriatric Specialist</NavLink><br/><hr/>
                                    <NavLink to="/service"> Obstetrician Specialist</NavLink><br/><hr/>
                                    <NavLink to="/service"> Covid 19 Specialist</NavLink><br/><hr/>
                                    <NavLink to="/service"> Surgery Specialist</NavLink><br/>
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
                                    <div className="Heading-s ">
                                    <h4 className="ml-4">Department Specialist</h4>
                                </div>
                                <div className="nameabout cols">
                                    <NavLink to="/service"> Geriatric Department</NavLink><br/><hr width="580px"/>
                                    <NavLink to="/service"> Allergists Department</NavLink><br/><hr width="580px"/>
                                    <NavLink to="/service"> Dermatologists Department</NavLink><br/><hr width="580px"/>
                                    <NavLink to="/service"> Infectious Disease Department</NavLink><br/><hr width="580px"/>
                                    <NavLink to="/service"> Ophthalmologists Department</NavLink><br/><hr width="580px"/>
                                    <NavLink to="/service"> Ophthalmologists Department</NavLink><br/><hr width="580px"/>
                                    <NavLink to="/service"> Obstetrician/Gynecologists</NavLink><br/>
                                </div>
                            </div>
                        

                        </div>
                    
                <div className="col-lg-1"><br/></div>
                

            </div>
        </div>

        <NewsFlex/>
        <Footer/>
  </>
  );
};

export default Service;