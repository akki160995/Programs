import React from 'react';
import "./Menu_Name.css";
import "./Department_profile.css";
import Navbar from './Navbar';
import headertabs from './Images/headertabs8.jpg';
import { NavLink } from "react-router-dom"; 
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import {FaFax} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import TwitterIcon from '@material-ui/icons/Twitter';
import CallIcon from '@material-ui/icons/Call';
import InstagramIcon from '@material-ui/icons/Instagram';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';
import Footer from '../Layout/Footer/Footer';
import poster5 from './Images/post-5.jpg';
import Appointment from '../Layout/forms/Appointment';

const Department_profile = () => {
  return(
    <>
        <Navbar/>

        <div className="header_flex">
                <div className="container-fluid" >
                    <div className="row align-items-center ">
                        <div className="col-lg-1"></div>
                        <div className=" col-lg-6 col-md-6 col-sm-6 ">
                            <span className="main_heading "><b>DEPARTMENT LAYOUT<br/><small>Home &gt; Department Layout</small></b></span>
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
                        <div className="left-Heading">Department of Eldery</div>
                        <div className="left-inlineHeading mt-2 mb-2"><h3>About</h3></div>
                        <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi.
                        </p>
                        <div className="left-inlineHeading mt-2 mb-2"><h3>Visiting Hours</h3></div>
                        <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi.
                        </p>
                        <div>
                            <ul className="mt-2">
                                <li>Sunday to Thursday<span className="float-right">08.00 Am to 17.00 Pm</span></li><hr/>
                                <li>Friday to Saturday<span className="float-right">08.00 Am to 20.00 Pm</span></li><hr/>
                                <li>Sunday<span className="float-right">10.00 Am to 20.00 Pm</span> </li>
                            </ul>
                        </div>
                        <div className="left-inlineHeading mt-2 mb-2"><h3>Emergency Medicine Consultants</h3></div>
                        <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi.
                        </p>
                        <div className="mt-5 mb-3">
                            <li>dr. Daisy Ridley</li><hr/>
                            <li>dr. Jason Bourne</li><hr/>
                            <li>dr. Bruce Banner</li><hr/>
                            <li>Ms. Hanna Lee</li><hr/>
                            <li>Ms. Robin Ward </li>   
                        </div>
                        <div className="left-inlineHeading mt4- mb-2"><h3>Emergency Contact</h3></div>
                        <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi.
                        </p>
                        <div>
                            <li>+1 777 888 000</li><hr/>
                            <li>+1 777 888 999</li>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="colbox">
                            <div className="Header_element">
                                <strong>About Department</strong> 
                            </div>
                            <div>
                                <div className="inline_heading">
                                    <h3>Office</h3>
                                </div>
                                <p className="nameabout col mr-2"><h6>Riverside Building, London, SE-90, East Wing Room, Surgery Department</h6></p>
                                <div className="container">
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe 
                        class="gmap_iframe"
                        title="map" 
                        frameborder="0" 
                        scrolling="no" 
                        marginheight="0" 
                        marginwidth="0" 
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=WeCare&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                    <a href="https://www.fridaynightfunkin.net/friday-night-funkin-mods-fnf-play-online/">
                        Friday Night Funkin Mods
                    </a>
                </div>
            </div>
            </div>
            

                                <div className="inline_heading">
                                    <h3>Contact </h3>
                                </div>
                                <div className="nameabout col">
                                    <li><NavLink to="/department-profile-layout"><WhatsAppIcon/> +1 222 333 444</NavLink><br/><hr/></li>
                                    <NavLink to="/department-profile-layout"><CallIcon/> +1 222 333 333</NavLink><br/><hr/>
                                    <NavLink to="/department-profile-layout"><FaFax/> +1 222 333 222</NavLink>
                                </div>
                                <div className="inline_heading">
                                    <h3>Social Media </h3>
                                </div>
                                <div className="nameabout col ">
                                    <NavLink to="/department-profile-layout"><FaFacebookF/> wclh.eldery</NavLink><br/><hr/>
                                    <NavLink to="/department-profile-layout"><InstagramIcon/> @wclh.eldery</NavLink><br/><hr/>
                                    <NavLink to="/department-profile-layout"><TwitterIcon/> @wclh.eldery</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <NewsFlex/>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6">
                        <Appointment/>
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

export default Department_profile;