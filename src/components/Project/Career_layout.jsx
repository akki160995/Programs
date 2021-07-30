import React from 'react';
import "./Menu_Name.css";
//import "./Career_layout.css";
import Navbar from './Navbar';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';
import CareerFrm from '../Layout/forms/CareerFrm';
import CareerSlider from "./CareerSlider";
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
                        <div className="left-Heading border-left">Doctor <span> Specialist</span></div>
                        <div className="left-inline Heading-s ml-0"><h4>Jobs Overview</h4> </div>
                        <div className="para4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>	
                        </div>
                        <div className="Heading-s ml-0">
                            <h4>How to Apply?</h4>
                        </div>
                        <div className="para4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>	
                        </div>
                        <div className="Lists">
                            <NavLink className="Li" to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp; Prepare your CV </NavLink><hr/>
                            <NavLink className="Li" to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp;  Prepare your Certificate </NavLink><hr/>
                            <NavLink className="Li" to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp;  Prepare your English Certificate </NavLink><hr/>
                            <NavLink className="Li" to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp;  Send to carreer@wclh.co.uk </NavLink>
                        </div>
                        <CareerFrm/> 
                    



                    </div>

                    <div className="col-lg-4  col-md-6">
                        <div className="colbox">
                            <div className="Header_element">
                                <strong>Carrer You Might Apply</strong>
                            </div>

                            
                            <div className="Heading-s mt-5 mb-5">
                                <h4 className="ml-4">Requirements to Apply</h4>
                            </div>

                            <div className="nameabout col mt-4">
                                <NavLink to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp; GPA Minimum 3.25</NavLink><br/><hr width="580px"/>
                                <NavLink to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp; Graduated from Reputable University</NavLink><br/><hr width="580px"/>
                                <NavLink to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp; Fluent in English</NavLink><br/><hr width="580px"/>
                                <NavLink to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp; Can Work With Team</NavLink>
                            </div>
                            <div className="Heading-s mb-5">
                                <h4 className="ml-4">Job Desk</h4>
                            </div>
                            <div className="ml-5 mr-5 mb-3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                            <div className="Heading-s mt-5">
                                <h4 className="ml-4">Salary</h4>
                            </div>
                            <div className="nameabout col">
                                <NavLink to="/career-layout"><VscCircleFilled/>&nbsp;&nbsp; 2000 USD to 3000 USD/Month</NavLink><br/>
                            </div>
                       
                            
                        </div> 
                        


                    </div>
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

export default Career_layout;