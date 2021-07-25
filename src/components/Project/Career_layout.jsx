import React from 'react';
import "./Menu_Name.css";
//import "./Career_layout.css";
import Navbar from './Navbar';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';
import CareerFrm from '../Layout/forms/CareerFrm';
import CareerLayoutSlider from "./CareerLayoutSlider";
import headertabs from './Images/headertabs5.jpg';
import { NavLink } from "react-router-dom"; 
import {VscCircleFilled} from 'react-icons/vsc';
import Footer from '../Layout/Footer/Footer';


const Career_layout = () => {
    return(
    <>
        <Navbar/>

        <div className="header_flex">
                <div className="container-fluid" >
                    <div className="row align-items-center ">
                        <div className="col-lg-1"></div>
                        
                        <div className=" col-lg-6 col-md-6 col-sm-6 ">
                            <span className="main_heading "><b>CAREER LAYOUT<br/><small>Home &gt; Career Layout</small></b></span>
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
                        <div className="left-Heading">Doctor <span> Specialist</span></div>
                        <div className="left-inline Heading mt-2 mb-2"><h3>Jobs Overview</h3> </div>
                        <div className="para4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>	
                        </div>
                        <div className="title1">
                            <h4>How to Apply?</h4>
                        </div>
                        <div className="para4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>	
                        </div>
                        <div className="points">
                            <NavLink  to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp; Prepare your CV </NavLink><hr/><br/>
                            <NavLink  to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp;  Prepare your Certificate </NavLink><hr/><br/>
                            <NavLink  to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp;  Prepare your English Certificate </NavLink><hr/><br/>
                            <NavLink  to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp;  Send to carreer@wclh.co.uk </NavLink><br/>
                        </div>
                        <div className="title1">
                            <h4>Frequently Asked Questions</h4>
                        </div>
                        <div className="title1">
                            <h4>Apply Now</h4>
                        </div>
                        <CareerFrm/> 
                    



                    </div>

                    <div className="col-lg-4  col-md-6">
                        <div className="colbox">
                            <div className="Header_element">
                                <strong>Carrer You Might Apply</strong>
                            </div>

                            
                            <div className="inline_heading">
                                Requirements to Apply
                            </div>

                            <div className="nameabout col">
                                <NavLink to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp; GPA Minimum 3.25</NavLink><br/><hr width="580px"/>
                                <NavLink to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp; Graduated from Reputable University</NavLink><br/><hr width="580px"/>
                                <NavLink to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp; Fluent in English</NavLink><br/><hr width="580px"/>
                                <NavLink to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp; Can Work With Team</NavLink>
                            </div>
                            <div className="inline_heading">
                                Job Desk
                            </div>
                            <div className="">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                            <div className="inline_heading">
                                Salary
                            </div>
                            <div className="nameabout col">
                                <NavLink to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp; 2000 USD to 3000 USD/Month</NavLink><br/>
                            </div>
                       
                            
                        </div> 
                        


                    </div>
                </div>
            </div>





    
    
        <div className="SpotlessSlider">
            <div className="slidername">
                <span>Spotless Career</span>
            </div>
            <div className="careerslider">
               <CareerLayoutSlider/> 
            </div>
        </div>

        <NewsFlex/>
    <Footer/>
  </>
  );
};

export default Career_layout;