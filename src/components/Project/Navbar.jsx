import React from 'react';
import './Navbar.css';
import "./nav.css";
import './css/style.css';
import { NavLink } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle';
import logo from './Images/logo.png';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';
//import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Navbar = () => {
    return (
        <>  


          <div className="notification">
                <span className="left "> <ReportProblemOutlinedIcon/> COVID-19 CORONAVIRUS UPDATE</span>
                <a className="right " href="./covid_report">Information For Patients And Public Goes Here <ArrowForwardOutlinedIcon /></a>
          </div>


            <div className="container">
              <nav className="navbar navbar-expand-lg justify-content-between">
                <a href="./"className="navbar-brand"><img src={logo} alt="Logo"/></a>
                <div className="">
                  <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                  </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                      <ul className="navbar-nav ">
                        <li className="nav-item ">
                          <NavLink activeClassName="active" className="nav-link  "exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink activeClassName="active" className="nav-link"exact to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link"exact to="/service">Services</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link"exact to="/news">News</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link"exact to="/career">Career</NavLink>
                        </li>    

                        <div className="nav-item dropdown">
                          <a href="##" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Layout
                          </a>
                          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink className="dropdown-item"exact to="/career-layout">Career Layout</NavLink>
                            <NavLink className=" dropdown-item"exact to="/covid-19-report">Covid Report</NavLink>
                            <NavLink className=" dropdown-item"exact to="/doctor_template">Doctor Template List</NavLink>
                            <NavLink className=" dropdown-item"exact to="/doctor_profile_list">Doctor Profile List</NavLink>
                            <NavLink className=" dropdown-item"exact to="/department-template-list">Deprtment Template List</NavLink>
                            <NavLink className=" dropdown-item"exact to="/department-profile-layout">Department Profile Layout</NavLink>
                            <NavLink className=" dropdown-item"exact to="/event-dates-layout">Event Dates</NavLink>
                            <NavLink className=" dropdown-item"exact to="/event-layout">Event Layout</NavLink>
                          </div>
                        </div>
              
                        <li className="nav-item">
                          <NavLink className="nav-link "exact to="/contact">Contact</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                
              </div>

              
        </>


    );
};

export default Navbar;