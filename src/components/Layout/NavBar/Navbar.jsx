import React from 'react';
import '../nav.css';
import logo from '../Resources/logo-flamingo-color.png';
import Footer from './Footer/footerx';
import {BrowserRouter as Router, Route,NavLink, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Career from '../Pages/Career';
import Services from '../Pages/Services';
import News from '../Pages/news/News';
import Contact from '../Pages/Contact';
import CareerLayout from '../Pages/CareerLayout';
import CovidReport from '../Pages/CovidReport';
import DeptProfile from '../Pages/DeptProfile';
import DeptTemplate from '../Pages/DeptTemplate';
import DoctorProfile from '../Pages/DoctorProfile';
import DoctorTemp from '../Pages/DoctorTemp';
import EventDate from '../Pages/EventDate';
import EventLayout from '../Pages/EventLayout';

import Admin from '../../Admin/Admin';

import NotFound from '../Pages/NotFound';

const Navbar = () => {
    return (
        <div >
            
        <Router>
            <div className="notification container-float">
                <span className="left"> COVID-19 CORONAVIRUS UPDATE</span>
                <a className="right" href="./covid_report">Information For Patients And Public Goes Here &#xe093;</a>
            </div>


            <div className="container-float">

                <nav className="navbar navbar-expand-lg row ">
              
                <a href="./"className="navbar-brand col-md-6"><img src={logo} alt="Logo"/></a>
                <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                             <span class="navbar-toggler-icon"></span>
                         </button>
                <div className="collapse navbar-collapse col-md-6 " id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item ">
                            <NavLink activeClassName="active" className="nav-link "exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link"exact to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"exact to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"exact to="/news">News</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"exact to="/career">Career</NavLink>
                        </li>
                  
                  
                        <li className="nav-item">
                            <NavLink className="nav-link "exact to="/contact">Contact</NavLink>
                        </li>
                    
              
                    <div className="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Layout
                                </a>
                        <div class="dropdown-menu">
                            <NavLink className="dropdown-item"exact to="/career_layout">Career Layout</NavLink>
                            <NavLink className=" dropdown-item"exact to="/covid_report">Covid Report</NavLink>
                            <NavLink className=" dropdown-item"exact to="/doctor_template">Doctor Template List</NavLink>
                            <NavLink className=" dropdown-item"exact to="/doctor_profile_list">Doctor Profile List</NavLink>
                            <NavLink className=" dropdown-item"exact to="/dept_temp_list">Deprtment Template List</NavLink>
                            <NavLink className=" dropdown-item"exact to="/dept_profile">Department Profile Layout</NavLink>
                            <NavLink className=" dropdown-item"exact to="/Event_Dates">Event Dates</NavLink>
                            <NavLink className=" dropdown-item"exact to="/event_layout">Event Layout</NavLink>
                        </div>
                    </div>
                    </ul>
                </div>
            </nav>
            

            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/career" component={Career}/>
            <Route exact path="/services" component={Services}/>
            <Route exact path="/news" component={News}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/career_layout" component={CareerLayout}/>
            <Route exact path="/covid_report" component={CovidReport}/>
            <Route exact path="/doctor_template" component={DoctorTemp}/>
            <Route exact path="/doctor_profile_list" component={DoctorProfile}/>
            <Route exact path="/dept_temp_list" component={DeptTemplate}/>
            <Route exact path="/dept_profile" component={DeptProfile}/>
            <Route exact path="/Event_Dates" component={EventDate}/>
            <Route exact path="/event_layout" component={EventLayout}/>
            <Route exact path="/Admin" component={Admin}/>
            

            
            
            <Route component={NotFound}/>
      </Switch>

        </div>
        </Router>
        <Footer/>
    </div>
    )
}

export default Navbar
