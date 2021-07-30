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
                    <div className="left-Heading border-left">Work at <span>WCLH</span></div>
                        <div className="title1 mt-2 mb-2"><span>Jobs Career</span> </div>

                        <div className="para4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>	
                        </div>
                        <div className="Heading-s ml-0">
                            <h4>Requirements to Apply</h4>
                        </div>
                        <div className="para4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>	
                        </div>
                        <div className="Lists">
                            <NavLink className="Li" to="/career"><VscCircleFilled/> GPA Minimum 3.25 </NavLink><hr/>
                            <NavLink className="Li" to="/career"><VscCircleFilled/> Graduated from Reputable University </NavLink><hr/>
                            <NavLink className="Li" to="/career"><VscCircleFilled/> Fluent in English </NavLink><hr/>
                            <NavLink className="Li" to="/career"><VscCircleFilled/> Can Work With Team </NavLink>
                        </div>

                        <div className="Heading-s ml-0">
                            <h4>WCLH Career Tips</h4>
                        </div>
                        <div className="Question mt-3">
                            <Accordioncareer/>
                        </div>
                        <div className="title1">
                            <h4>Work Environments</h4>
                        </div>
                        <div className="video1">
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/XHOmBV4js_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="colbox">
                            <div className="Header_element">
                                <strong>Carrer You Might Apply</strong>
                            </div>

                            
                                <div className="Heading-s">
                                    <h4 className="ml-3">Search the <br/> Jobe Here</h4>
                                </div>  
                                <div className="sbutton">
                    
                                    <div className="mt-4">
                                        <input type="text" placeholder="Keyword(s)..." className="search_box"></input>
                                        <SearchOutlinedIcon className="search_icons"/>
                                    </div>
                                </div>
                                <div className="Heading-s">
                                    <h4 className="ml-3">Job List <br/> From A to Z</h4>
                                </div>
                                <div className="nameabout cols ">
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
                            <div className="mb-5"><br/></div>

                        </div>
                    
                    </div>
                
                    <div className="col-lg-1"></div>

                </div>
            </div>
            




    
            
        <div className="container mt-4 border-left border-right border-top border-bottom">
            <div className="slidername m-4">
                <h4>Spotless Career</h4>
            </div>
            <div className="careerslider m-3">
               <CareerSlider/> 
            </div>
        </div>

        <NewsFlex/>
        <Footer/>
    </>
  );
  
};

export default Career;