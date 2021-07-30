import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import Ambulance from './Images/iconambulance.png';
import Stetoskop from './Images/iconstetoskop.png'
import NewsFlex from '../Layout/NewsFlex/NewsFlex';
import ControlledCarousel from '../Layout/ControlledCarousel';
import doctor1 from './Images/doctor-1.jpg';
import doctor2 from './Images/doctor-2.jpg';
import doctor3 from './Images/doctor-3.jpg';
import Doctor1 from './Images/doctor1.jpg';
import Doctor2 from './Images/doctor2.jpg';
import Doctorbg from './Images/doctor-bg.jpg';
import Doctorbgtab from "./Images/doctor-bg-tabs.jpg"
import Footer from "../Layout/Footer/Footer";
import Testimonial from './Testimonial';
import ReactNavbar from '../Layout/ReactNavbar';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Home = () => {
    return (
        <div >
            <div>
                <ReactNavbar className="over"/>
            </div>
            
            <div>
                <ControlledCarousel className="back"/>
            </div>
            <div>
                
            </div>

            
            <div class="container ">
                <div class="row ml-0 border-left border-right border-bottom border-top">
                    <div class="col-lg-3 m-0 p-0">
      
                        <div className="Heading-s">Coming to <br/>WeCare Hospital</div>
                        <div className="Lists">
                            <li>Transport and parking</li><hr/>
                            <li>Finding your way Around</li><hr/>
                            <li>Visiting and Visiting Hours</li><hr/>
                            <li>Covid 19 Protocoler</li>
                        </div>

                    </div>  
    
                    <div class="col-lg-3 mr-0 ml-0 mb-0">
                        <Carousel fade interval={2000} indicators={false}>
                            <Carousel.Item>
                                <img
                                    className=" doctor-slider"
                                    src={doctor1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className=" doctor-slider"
                                    src={doctor2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className=" doctor-slider"
                                    src={doctor3}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    
                    <div class="col-lg-3 mr-0 ml-0 mb-0 color-orange ">
                        <div className=" ml-0 mb-0">
                            <div className="">                    
                                <small>
                                    <b>Accessing</b> 
                                </small>
                                <h1>Our Service</h1>
                            </div>
                            <div className="mt-4">
                                <input type="text" placeholder="search..." className="home_search"></input>
                                <SearchOutlinedIcon className="search_icon"/>
                            </div>
                        </div>
                        <div className="row ">
                            <iframe                               
                                className="fix" 
                                src="https://www.youtube.com/embed/XHOmBV4js_E" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allowfullscreen
                            />
                        </div>
                    </div>

                    <div class="col-lg-3 mr-0 ml-0 border-right color-orange">
                        <div className="mt-0">
                            <b><small><strong>Dates</strong></small><br/>
                                <h1>Vaccine Dates</h1></b>
                        </div>
                            
                        <div className="row mt-2">
                            <img src={Doctor1} alt="Doctor1" className="circle col"/>
                            <div className="m-auto col">
                                Vaccine for Eldery<br/>
                                19 April 2021
                            </div>
                        </div>

                        <div className="row mt-2">
                            <img src={Doctor2} alt="Doctor2" className="circle col "/>
                            <div className="m-auto col">
                                Vaccine for Public<br/>
                                21 April 2021
                            </div>
                        </div>

                        <div className="p-3">
                            <b>All Dates</b>
                        </div>
                            
                    </div>


                    <div class="col-lg-4 mr-0 ml-0">
                        <div className="ambulance">
                            <div>
                                <img src={Ambulance} alt="Stetoscope"/>
                            </div>
                                        
                            <div className="icon_text">
                                <span>Do you have</span><br/>
                                <span>an Emergency?</span>
                            </div>
                        </div>

                        <div>
                            <div className="Heading-s">
                                Looking<br/>
                                For Something?<br/>
                                
                            </div>
                            <div className="sbutton ">
                    
                                <div className="mt-4">
                                    <input type="text" placeholder="Keyword(s)..." className="search_box"></input>
                                    <SearchOutlinedIcon className="search_icons"/>
                                </div>
                            </div>
                
                            <div className="Lists">
                                <li>
                                     View A–Z list of services</li><hr/>
                                <li>
                                    View our hospital map
                                </li><hr/>
                                <li>
                                    Find Our Doctor
                                </li>
                            </div>
                        </div>
                    </div>
                    

                    <div class="col-lg-4 mr-0 ml-0">
                        <div className="Heading-s">
                            Find our<br/>
                            Department Here
                        </div>
                        <div className="Lists">
                            <li>
                                Geriatric Department
                            </li><hr/>
                            <li>
                                Allergists Department
                            </li><hr/>
                            <li>
                                Dermatologists Department
                            </li><hr/>
                            <li>
                                Infectious Disease Department
                            </li><hr/>
                            <li>
                                Ophthalmologists Department
                            </li><hr/>
                            <li>
                                Ophthalmologists Department
                            </li><hr/>
                            <li>
                                Obstetrician/Gynecologists
                            </li>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 mr-0 ml-0 border-right colbox">
                        <div>
                            <div className="Heading-s">
                                Consulting with<br/>
                                Doctor Specialist
                            </div>
                            <div className="Lists">
                                <li>
                                    Children Specialist
                                </li><hr/>
                                <li>
                                    Cancer Specialist
                                </li><hr/>
                                <li>
                                    Heart Specialist
                                </li><hr/>
                                <li>
                                    Dentist Sepcialist
                                </li>
                            </div>
                        </div>
                        <div className="stetoscope">
                            <div className="m-auto">
                                <img src={Stetoskop} alt="Stetoscope"/>
                            </div>
                            <div className="icon_text">
                                <span>Booking</span><br/>
                                <span>your dates Here</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NewsFlex/>   

            <div className="container mt-3 h-100">
                <div className="row taketour">
                    <div className="col-md-3">
                        <div className="heading_white">
                            LEARN MORE ABOUT OUR WORLD-CLASS FACILITY<br/>
                            <small>Discover More</small>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <img src={Doctorbg} alt="DoctorBG" className="doctorbg"/>
                    </div>
                </div>
            </div>

            <div className="container mt-3" >
                <div className="row ml-0 border-left border-right border-top border-bottom">
                    <div className="col-md-3 Heading-s mt-2 ml-0 mr-0 mb-2">
                        Hospital<br/>Service 24/7
                    </div>
                   
                </div>
            </div>

            <div className="container mt-3 Clinic-info">
                <div className="row ml-0 border-left border-right border-top border-bottom">
                    <div className="col-md-3 ml-0 Lists">                     
                        <li>
                            Routine Medical Care
                        </li>
                        <hr/>
                        <li>
                            Full Blood Picture
                        </li>
                        <hr/>
                        <li>
                            MRI Diagnostics
                        </li>
                        <hr/>
                        <li>
                            X-Ray Diagnostircs
                        </li>
                        <hr/>
                        <li>
                            Ophthalmologists
                        </li>
                        <hr/>
                        <li>
                            Obstetrician/Gynecologists
                        </li>
                        <hr/>
                        <li>
                            Geriatric Care
                        </li>
                        <hr/>
                    </div>

                    <div className="col-md-9">
                        <div className="Heading-s ml-0">Service Overview</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at urna. Erat imperdiet sed euismod nisi. Turpis egestas maecenas pharetra convallis posuere morbi. Amet facilisis magna etiam tempor orci eu lobortis. Neque sodales ut etiam sit. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Odio aenean sed adipiscing diam. Eu mi bibendum neque egestas congue quisque egestas diam in. Augue eget arcu dictum varius duis. Id aliquet risus feugiat in ante.</p>
                        
                    <div className="row">
                        <div className="col-md-6 serviceimg ">
                            <img src={Doctorbgtab} alt="Doctorimg"/>
                        </div>
                        <div className="col-md-6 servicetext border-left border-right border-top border-bottom">
                            <div className="Heading-s ml-0">Open Hours</div>
                            <div>
                                <div className="">
                                    Mon - Thurs
                                    <div className="float-right">
                                        08.00 Am - 20.00 Pm
                                    </div>
                                </div>
                                
                                <div className="">
                                    Friday
                                    <div className="float-right">
                                        09.00 Am - 20.00 Pm
                                    </div>
                                </div>
                                
                                <div className="">
                                    Sat - Sun
                                    <div className="float-right">
                                        09.00 Am - 20.00 Pm
                                    </div>
                                </div>
                                
                            </div>
                            <div>
                                <button className="w-100 mt-2 mb-2" >Discover More</button>
                            </div>
                                
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Testimonial/>
            <Footer/>

        </div>
    )
}

export default Home
