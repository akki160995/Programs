import React, { Component } from 'react';
import {BrowserRouter as Router, Route,NavLink } from 'react-router-dom';
import Appointment from './Appointment/AllData';
import Switch from 'react-bootstrap/esm/Switch';
import EditAppointment from './Appointment/EditData';
import ViewAppointment from './Appointment/ViewData';

import Career from './Career/AllData';
import EditCareer from './Career/EditData';
import ViewCareer from './Career/ViewData';

import Contacts from './Contacts/AllData';
import EditContacts from './Contacts/EditData';
import ViewContacts from './Contacts/ViewData';

import DeptAppoint from './DeptAppoint/AllData';
import EditDeptAppoint from './DeptAppoint/EditData';
import ViewDeptAppoint from './DeptAppoint/ViewData';

import EventInfo from './EventInfo/AllData';
import EditEventInfo from './EventInfo/EditData';
import ViewEventInfo from './EventInfo/ViewData';

import EventRegistration from './EventRegistration/AllData';
import EditEventRegistration from './EventRegistration/EditData';
import ViewEventRegistration from './EventRegistration/ViewData';

import News from './News/AllData';
import EditNews from './News/EditData';
import ViewNews from './News/ViewData';
import AddNews from './News/AddData';

import Services from './Services/AllData';
import EditServices from './Services/EditData';
import ViewServices from './Services/ViewData';
import AddServices from './Services/AddData';

export class Admin_navbar extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <div className="p-3 mb-2 bg-gradient-light row shadow">
                        <NavLink exact to="/admin"><div className="m-3">Admin</div></NavLink>
                        <NavLink  to="/admin/Appointment"><div className="m-3">Doctor Appointment</div></NavLink>
                        <NavLink to="/admin/Dept_Appoint"><div className="m-3">Department Appointment</div></NavLink>
                        <NavLink to="/admin/Career"><div className="m-3">Career</div></NavLink>
                        <NavLink to="/admin/Contacts"><div className="m-3">Contacts</div></NavLink>
                        <NavLink to="/admin/EventInfo"><div className="m-3">Event Info</div></NavLink>
                        <NavLink to="/admin/EventRegistration"><div className="m-3">Event Registration</div></NavLink>
                        <NavLink to="/admin/News"><div className="m-3">News</div></NavLink>
                        <NavLink to="/admin/Services"><div className="m-3">Services</div></NavLink>
                        </div>
                    </Switch>
                    
                    <Route  path="/admin/Appointment" component={Appointment}/>
                    <Route  path="/admin/Appointment/view/:id" component={ViewAppointment}/>
                    <Route  path="/admin/Appointment/edit/:id" component={EditAppointment}/>

                    <Route exact path="/admin/Career" component={Career}/>
                    <Route exact path="/admin/Career/edit/:id" component={EditCareer}/>
                    <Route exact path="/admin/Career/view/:id" component={ViewCareer}/>

                    <Route exact path="/admin/Contacts" component={Contacts}/>
                    <Route exact path="/admin/Contacts/edit/:id" component={EditContacts}/>
                    <Route exact path="/admin/Contacts/view/:id" component={ViewContacts}/>

                    <Route exact path="/admin/Dept_Appoint" component={DeptAppoint}/>
                    <Route exact path="/admin/Dept_Appoint/edit/:id" component={EditDeptAppoint}/>
                    <Route exact path="/admin/Dept_Appoint/view/:id" component={ViewDeptAppoint}/>

                    <Route exact path="/admin/EventInfo" component={EventInfo}/>
                    <Route exact path="/admin/EventInfo/edit/:id" component={EditEventInfo}/>
                    <Route exact path="/admin/EventInfo/view/:id" component={ViewEventInfo}/>

                    <Route exact path="/admin/EventRegistration" component={EventRegistration}/>
                    <Route exact path="/admin/EventRegistration/edit/:id" component={EditEventRegistration}/>
                    <Route exact path="/admin/EventRegistration/view/:id" component={ViewEventRegistration}/>

                    <Route exact path="/admin/News" component={News}/>
                    <Route exact path="/admin/News/edit/:id" component={EditNews}/>
                    <Route exact path="/admin/News/view/:id" component={ViewNews}/>
                    <Route exact path="/admin/News/AddData" component={AddNews}/>

                    <Route exact path="/admin/Services" component={Services}/>
                    <Route exact path="/admin/Services/edit/:id" component={EditServices}/>
                    <Route exact path="/admin/Services/view/:id" component={ViewServices}/>
                    <Route exact path="/admin/Services/AddData" component={AddServices}/>



                </Router>

            </div>
            
        )
    }
}

export default Admin_navbar
