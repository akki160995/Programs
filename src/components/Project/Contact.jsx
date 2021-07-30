import React from 'react';
import "./Menu_Name.css";
import "./Contact.css";
import Navbar from './Navbar';
import ContactFrm from '../Layout/forms/Contact';
import headertabs from './Images/slide1.jpg';
import { NavLink } from "react-router-dom"; 
import Stetoskop from './Images/iconstetoskop.png';
import Ambulance from './Images/iconambulance.png';
import {FaAmbulance} from 'react-icons/fa';
import {RiVirusFill} from 'react-icons/ri';
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
                    <div className="col-lg-6  col-md-6 ">
                        <div className="left-Heading border-left">Contact  <span>WCLH</span></div>
                            <div className="left-inline Heading-s mt-2 mb-2 ml-0">
                                <h4>Emergencies</h4>
                            </div>
                            <p className="mt-3">
                                Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit sed. Dictum varius duis at consectetur lorem donec massa. 
                            </p>

                            <div className="">
                                <div class="hr-theme-slash-2">
                                        <div class="hr-icon"><FaAmbulance size="35"/></div>
                                    </div> 
                                    <div className="borderEmergency row">
                                    <div className=" col mt-4">
                                        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ut elit tellus,luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                    <div className=" col">
                                        <button className="bcovidbtn"><NavLink to="/contact"><p>Emergency</p> </NavLink></button>
                                    </div>

                                </div> 
                            </div>
                <div className="Heading-s ml-0">
                    <h4>Covid 19 Emergencies</h4>
                </div>
                <div className="Lists">
                        <NavLink className="Li" to="/contact"><FaAmbulance/> &nbsp;&nbsp;Emergency: 777 888 999</NavLink><hr/>
                        <NavLink className="Li" to="/contact"><RiVirusFill/> &nbsp;&nbsp;Covid 19: 777 888 111</NavLink>
                </div>
                <div className="Heading-s ml-0">
                    <h4>WELH Address</h4>
                </div>
                <div className="para6">
                    <p>Riverside Building, County Hall, South Bank, London SE1 7PB, Inggris Raya</p>						                
                </div>
                <div className="container">
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe 
                        title="map"
                        class="gmap_iframe" 
                        frameborder="0" 
                        scrolling="no" 
                        marginheight="0" 
                        marginwidth="0" 
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=WeCare&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                    <a href="https://www.fridaynightfunkin.net/friday-night-funkin-mods-fnf-play-online/">
                    
                    </a>
                </div>
            </div>
            </div>
            <ContactFrm/>
            
                        

                    </div>

                    <div className="col-lg-4 col-md-6">
                    <div className="colbox">
                            <div className="Header_element">
                                <strong>WCLH Hotline</strong> 
                            </div>
                            <div>
                                <div className="Heading-s pl-4 mt-5">
                                    <h5>Emergency Hotline</h5>
                                </div>
                                <div className="nameabout col mt-0">
                                    <NavLink className="Li" to="/contact"><FaAmbulance/> &nbsp;&nbsp;Emergency: 777 888 999</NavLink><hr/>
                                    <NavLink className="Li" to="/contact"><RiVirusFill/> &nbsp;&nbsp;Covid 19: 777 888 111</NavLink>
                                </div>

                                <div className="Heading-s pl-4 mt-5">
                                    <h5>E-Mail Hotline</h5>
                                </div>
                                <div className=" nameabout col mt-0">
                                    <a href="/Contact">info@wclh.co.uk</a><hr/>
                                    <a href="/Contact">report@wclh.co.uk</a>
                                </div>
                                <div className="Heading-s pl-4 mt-5">
                                <h5>Department Hotline</h5>
                                </div>
                                <div className=" nameabout col mt-0">
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