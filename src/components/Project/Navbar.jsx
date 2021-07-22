import React from 'react';
import "./nav.css";
//import './Navbar.css'
import './css/style.css';
import { NavLink } from "react-router-dom"; 
import logo from './Images/logo.png';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
//import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Navbar = () => {
    return (
        <>  
          <div className="notification">
                <span className="left "> <ReportProblemOutlinedIcon/> COVID-19 CORONAVIRUS UPDATE</span>
                <a className="right " href="./covid_report">Information For Patients And Public Goes Here <ArrowForwardOutlinedIcon /></a>
          </div>

          <div className="container border-left border-right">
          <nav className="navbar navbar-expand-lg">
            <div className="row w-100">
              <div className="col">
                <a href="./"className="navbar-brand">
                  <img src={logo} alt="Logo" className="Logo" />
                </a>
              </div>

              <div className="col">

                <button class="navbar-toggler navbar-light float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon  "></span>
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
                          <div class="dropdown-menu dropdown-fix" aria-labelledby="navbarDropdown">
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
              </div>
            </nav>
          </div>
        </>
    );
};

export default Navbar;