import React from 'react';
import "./Menu_Name.css";
//import "./Career.css";
import Navbar from './Navbar';
import CareerSlider from "./CareerSlider";
import Accordioncareer from "./Accordioncareer";
import headertabs from './Images/headertabs2.jpg';
import { NavLink } from "react-router-dom"; 
import {VscCircleFilled} from 'react-icons/vsc';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';
import Footer from '../Layout/Footer/Footer';

const Career = () => {
  return (
    <>
        <Navbar/>

        
        <div className="header_flex">
                <div className="container-fluid" >
                    <div className="row align-items-center ">
                        <div className="col-lg-1"></div>
                        
                        <div className=" col-lg-6 col-md-6 col-sm-6 ">
                            <span className="main_heading "><b>CAREER<br/><small>Home &gt; Career</small></b></span>
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
                    <div className="left-Heading">Work at <span>WCLH</span></div>
                        <div className="left-inline Heading mt-2 mb-2"><h3>Jobs Career</h3> </div>

                        <div className="para4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>	
                        </div>
                        <div className="title1">
                            <h4>Requirements to Apply</h4>
                        </div>
                        <div className="para4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>	
                        </div>
                        <div className="points">
                            <NavLink  to="/career"><VscCircleFilled/>&nbsp;&nbsp; GPA Minimum 3.25 </NavLink><hr/><br/>
                            <NavLink  to="/career"><VscCircleFilled/>&nbsp;&nbsp; Graduated from Reputable University </NavLink><hr/><br/>
                            <NavLink  to="/career"><VscCircleFilled/>&nbsp;&nbsp; Fluent in English </NavLink><hr/><br/>
                            <NavLink  to="/career"><VscCircleFilled/>&nbsp;&nbsp; Can Work With Team </NavLink><br/>
                        </div>

                        <div className="title1">
                            <h4>WCLH Career Tips</h4>
                        </div>
                        <div className="Question">
                            <Accordioncareer/>
                        </div>
                        <div className="title1">
                            <h4>Work Environments</h4>
                        </div>
                        <div className="video1">
                            <iframe width="100%" height="500" src="https://www.youtube.com/embed/XHOmBV4js_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="colbox">
                            <div className="Header_element">
                                <strong>Carrer You Might Apply</strong>
                            </div>

                            
                                <div className="inline_heading">
                                    <h3>Search the <br/> Jobe Here</h3>
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
                                    <h3>Job List <br/> From A to Z</h3>
                                </div>
                                <div className="nameabout col">
                                    <NavLink to="/career"> Children Specialist</NavLink><br/><hr/>
                                    <NavLink to="/career"> Cancer Specialist</NavLink><br/><hr/>
                                    <NavLink to="/career"> Heart Specialist</NavLink><br/><hr/>
                                    <NavLink to="/career"> Dentist Specialist</NavLink><br/><hr/>
                                    <NavLink to="/career"> Geriatric Specialist</NavLink><br/><hr/>
                                    <NavLink to="/career"> Obstetrician Specialist</NavLink><br/><hr/>
                                    <NavLink to="/career"> Orderly Services</NavLink><br/><hr/>
                                    <NavLink to="/career"> Catering</NavLink><br/><hr/>
                                    <NavLink to="/career"> Car Park Services</NavLink><br/>
                                </div>
                            

                        </div>
                    
                    </div>
                
                    <div className="col-lg-1"></div>

                </div>
            </div>
            




    
            
        <div className="SpotlessSlider">
            <div className="slidername">
                <span>Spotless Career</span>
            </div>
            <div className="careerslider">
               <CareerSlider/> 
            </div>
        </div>

        <NewsFlex/>
        <Footer/>
    </>
  );
  
};

export default Career;