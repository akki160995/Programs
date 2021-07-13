import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom"; 
import logo from '../Project/Images/logo.png';

function ReactNavbar() {
    return (
        <div>
            
            <Navbar expand="lg" className="row">
                <Navbar.Brand className="col-lg-6 col-md-6">
                    <a href="./"className="navbar-brand"><img src={logo} alt="Logo"/></a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav col-lg-6 col-md-6" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-5">
                            <Nav.Link >
                                <NavLink className="nav-link  "exact to="/">Home</NavLink>      
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

      <NavDropdown title="Layout" className="mt-2" id="basic-nav-dropdown">
        <NavDropdown.Item >
            <NavLink className="dropdown-item"exact to="/career-layout">Career Layout</NavLink>
            </NavDropdown.Item>
        <NavDropdown.Item >
            <NavLink className=" dropdown-item"exact to="/covid-19-report">Covid Report</NavLink>
            </NavDropdown.Item>
        <NavDropdown.Item >
            <NavLink className=" dropdown-item"exact to="/doctor_template">Doctor Template List</NavLink>
            </NavDropdown.Item>
        <NavDropdown.Item >
            <NavLink className=" dropdown-item"exact to="/doctor_profile_list">Doctor Profile List</NavLink>
            </NavDropdown.Item>
        <NavDropdown.Item >
            <NavLink className=" dropdown-item"exact to="/department-template-list">Deprtment Template List</NavLink>
            </NavDropdown.Item>
        <NavDropdown.Item >
            <NavLink className=" dropdown-item"exact to="/department-profile-layout">Department Profile Layout</NavLink>
            </NavDropdown.Item>
        <NavDropdown.Item >
            <NavLink className=" dropdown-item"exact to="/event-dates-layout">Event Dates</NavLink>
            </NavDropdown.Item>
        <NavDropdown.Item >
            <NavLink className=" dropdown-item"exact to="/event-layout">Event Layout</NavLink>              
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
