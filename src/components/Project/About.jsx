import React from 'react';
import Navbar from './Navbar';
import Achart from "./Achart";
import NewsFlex from '../Layout/NewsFlex/NewsFlex';
import Slider from "./Slider";
//import "./Menu_Name.css";
import { NavLink } from "react-router-dom"; 
import headertabs from './Images/headertabs1.jpg';
import Stetoskop from './Images/iconstetoskop.png';
import Ambulance from './Images/iconambulance.png';
import{FaRegFilePdf} from 'react-icons/fa';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Footer from '../Layout/Footer/Footer';

const About = () => {
  return (
    <>
        
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
                        <div className="left-inlineHeading mt-2 mb-2">Overview </div>
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
                        <div className="Heading-s">
                            <h4 >Company Profile Download</h4>
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
                            <div className="Heading-s">
                                <h4>Leading the Way With Clinical Technology</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus. Ullamcorper sit amet risus nullam eget. Turpis egestas pretium aenean pharetra magna. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.</p><p>Accumsan lacus vel facilisis volutpat est. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Molestie a iaculis at erat pellentesque. Ac tortor vitae purus faucibus ornare.</p>
                        </div>
                        <div className="border-left border-right border-top border-bottom ">
                            <div className="Heading-s mt-4 ml-4">
                                <h4>Patients Graph</h4>
                                <p>2020 - 2021</p>
                            </div>
                            <div className="graph mb-3">
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
                                <h4>Doctor Specialist</h4>
                            </div>
                <div className="nameabout col">
                        <NavLink to="/about"> Children Specialist</NavLink><br/><hr/>
                        <NavLink to="/about"> Cancer Specialist</NavLink><br/><hr/>
                        <NavLink to="/about"> Heart Specialist</NavLink><br/><hr/>
                        <NavLink to="/about"> Dentist Specialist</NavLink><br/><hr/>
                        <NavLink to="/about"> Geriatric Specialist</NavLink><br/><hr/>
                        <NavLink to="/about"> Obstetrician Specialist</NavLink><br/>
                </div>
                <div className="">
                    <h4>Department Specialist</h4>
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
                    <h4>Looking <br/> For Something?</h4>
                </div>
                <div className="sbutton">
                    
                    <div className="mt-4">
                        <input type="text" placeholder="Keyword(s)..." className="search_box"></input>
                        <SearchOutlinedIcon className="search_icons"/>
                    </div>
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
                <div className="mb-5">
                    <br/>
                </div>
            </div>
        </div>
        </div>
    </div>
    <div className="container">
        <Slider/>
    </div>
    
    <NewsFlex/>
    <Footer/>
    </>
  );
  
};
export default About;