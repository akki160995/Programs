import React from 'react';
import "./navbar.css";
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom"; 
import logo from '../Project/Images/logo.png';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function ReactNavbar() {
    return (
        <div>
            <div className="notification">
                <span className="left "> <ReportProblemOutlinedIcon/> COVID-19 CORONAVIRUS UPDATE</span>
                <a className="right " href="./covid_report">Information For Patients And Public Goes Here <ArrowForwardOutlinedIcon /></a>
          </div>
        
        <div className="container">          
            <Navbar expand="lg" className="w-100 row border-left border-right">
                <Navbar.Brand className="col-lg-6 col-md-6">
                    <a href="./"className="navbar-brand">
                        <img src={logo} alt="Logo" className="Logo" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls=" col-lg-6 col-md-6" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                            <Nav>
                                <NavLink className="nav-link  "exact to="/">Home</NavLink>      
                            </Nav>
                            <Nav >
                                <NavLink className="nav-link  "exact to="/about">About</NavLink>      
                            </Nav>
                            <Nav >
                                <NavLink className="nav-link"exact to="/service">Services</NavLink>
                            </Nav>
                            <Nav >
                                <NavLink className="nav-link"exact to="/news">News</NavLink>
                            </Nav>
                            <Nav >
                                <NavLink className="nav-link"exact to="/career">Career</NavLink>
                            </Nav>

                            
                            <NavDropdown title="Layout" className=" " id="collasible-nav-dropdown">
                                <NavDropdown.Item >
                                    <NavLink className="dropdown-item pl-0 "exact to="/career-layout">Career Layout</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <NavLink className=" dropdown-item pl-0"exact to="/covid-19-report">Covid Report</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <NavLink className=" dropdown-item pl-0"exact to="/doctor_template">Doctor Template List</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <NavLink className=" dropdown-item pl-0"exact to="/doctor_profile_list">Doctor Profile List</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <NavLink className=" dropdown-item pl-0"exact to="/department-template-list">Deprtment Template List</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <NavLink className=" dropdown-item pl-0 "exact to="/department-profile-layout">Department Profile Layout</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <NavLink className=" dropdown-item pl-0 "exact to="/event-dates-layout">Event Dates</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <NavLink className=" dropdown-item pl-0 "exact to="/event-layout">Event Layout</NavLink>              
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav >
                            <NavLink className="nav-link"exact to="/contact">Contact</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink className="nav-link" exact to="/"><SearchOutlinedIcon/></NavLink>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        </div>
    )
}

export default ReactNavbar
