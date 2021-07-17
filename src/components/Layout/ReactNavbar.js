import React from 'react';
import "./navbar.css";
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom"; 
import logo from '../Project/Images/logo.png';

function ReactNavbar() {
    return (
        <div className="container">          
            <Navbar expand="lg" className="row border-left border-right">
                <Navbar.Brand className="col-lg-6 col-md-6">
                    <a href="./"className="navbar-brand">
                        <img src={logo} alt="Logo" className="Logo" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav col-lg-6 col-md-6" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link >
                                <NavLink className="nav-link "exact to="/">Home</NavLink>      
                            </Nav.Link>
                            <Nav.Link >
                                <NavLink className="nav-link  "exact to="/about">About</NavLink>      
                            </Nav.Link>
                            <Nav.Link >
                                <NavLink className="nav-link"exact to="/service">Services</NavLink>
                            </Nav.Link>
                            <Nav.Link >
                                <NavLink className="nav-link"exact to="/news">News</NavLink>
                            </Nav.Link>
                            <Nav.Link >
                                <NavLink className="nav-link"exact to="/career">Career</NavLink>
                            </Nav.Link>

                            <NavDropdown title="Layout" className="mt-2 mb-0" id="collasible-nav-dropdown">
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
                        <Nav.Link >
                            <NavLink className="nav-link"exact to="/contact">Contact</NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default ReactNavbar
