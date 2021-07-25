import React from 'react';
import "./Menu_Name.css";
import "./Doctor_template.css";
import Navbar from './Navbar';
import Appointment from '../Layout/forms/Appointment';
import headertabs from './Images/headertabs5.jpg';
import doctor1 from './Images/doctor1.jpg';
import doctor2 from './Images/doctor2.jpg';
import doctor3 from './Images/doctor3.jpg';
import doctor4 from './Images/doctor4.jpg';
import doctor5 from './Images/doctor5.jpg';
import doctor6 from './Images/doctor6.jpg';
import doctor7 from './Images/doctor7.jpg';
import doctor8 from './Images/doctor8.jpg';
import doctor9 from './Images/doctor9.jpg';
import { NavLink } from "react-router-dom"; 
import Stetoskop from './Images/iconstetoskop.png';
import Ambulance from './Images/iconambulance.png';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';
import Footer from '../Layout/Footer/Footer';

const Doctor_template = () => {
  return(
    <>
        <Navbar/>

        <div className="header_flex">
            <div className="container-fluid" >
                <div className="row align-items-center ">
                    <div className="col-lg-1"></div>
                    <div className=" col-lg-6 col-md-6 col-sm-6 ">
                            <span className="main_heading "><b>DOCTOR LIST<br/><small>Home &gt; Doctor List</small></b></span>
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
                        <div className="Doctor_template">
                            <div className="alphabates row">
                                <div>
                                    <h3>
                                        <NavLink exact activeClassName="active_class" to="/doctor-template-list"> A </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> B </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> C </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> D </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> E </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> F </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> G </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> H </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> I </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> J </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> K </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> L </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> M </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> N </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> O </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> P </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> Q </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> R </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> S </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> T </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> U </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> V </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> W </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> X </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> Y </NavLink>
                                        <NavLink exact activeClassName="active_class" to="/"> Z </NavLink>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="Detailing">
                            <div className="leftdetailing">
                                <h4> A </h4><hr  color="#f5ecec"/><br/>
                                <div className="doctoroinfoimage1">
                                    <div className="drleftimg1">
                                        <NavLink to="/doctor-template-list">
                                            <img src={doctor1} height="200px" width="200px" alt="Doctor1" /></NavLink>
                                    </div>
                                    <div className="drrightimg1">
                                        <NavLink to="/doctor-template-list">Aaron Neville, dr</NavLink><br/>
                                    <span>Children Specialist</span>
                                </div>
                            </div>
                            <div className="doctoroinfoimage1">
                                <div className="drleftimg1">
                                        <NavLink to="/doctor-template-list">
                                            <img src={doctor2} height="200px" width="200px" alt="Doctor2"/></NavLink>
                                </div>
                                <div className="drrightimg1">
                                    <NavLink to="/doctor-template-list">Adriana Caselotti, dr</NavLink><br/>
                                    <span>Cancer Specialist</span>
                                </div>
                            </div>
                            <div className="doctoroinfoimage1">
                                <div className="drleftimg1">
                                    <NavLink to="/doctor-template-list">
                                        <img src={doctor3} height="200px" width="200px" alt="Doctor3"/></NavLink>
                                </div>
                                <div className="drrightimg1">
                                    <NavLink to="/doctor-template-list">Aaron Carter, dr</NavLink><br/>
                                    <span>Cancer Specialist</span>
                                </div>
                            </div>
                            <div className="doctoroinfoimage1">
                                <div className="drleftimg1">
                                    <NavLink to="/doctor-template-list">
                                        <img src={doctor4} height="200px" width="200px" alt="Doctor4"/></NavLink>
                                </div>
                                <div className="drrightimg1">
                                    <NavLink to="/doctor-template-list">Ace Miller, dr</NavLink><br/>
                                    <span>Geriatric Specialist</span>
                                </div>
                            </div>
                            <div className="doctoroinfoimage1">
                                <div className="drleftimg1">
                                    <NavLink to="/doctor-template-list">
                                        <img src={doctor5} height="200px" width="200px" alt="Doctor5"/></NavLink>
                                </div>
                                <div className="drrightimg1">
                                    <NavLink to="/doctor-template-list">Abigail Cornell, dr</NavLink><br/>
                                    <span>Burn Specialist</span>
                                </div>
                            </div>
                            <div className="doctoroinfoimage1">
                                <div className="drleftimg1">
                                    <NavLink to="/doctor-template-list">
                                        <img src={doctor6} height="200px" width="200px" alt="Doctor6"/></NavLink>
                                </div>
                                <div className="drrightimg1">
                                    <NavLink to="/doctor-template-list">Aadila Dosani, dr</NavLink><br/>
                                    <span>Virology</span>
                                </div>
                            </div>
                            <div className="doctoroinfoimage1">
                                <div className="drleftimg1">
                                    <NavLink to="/doctor-template-list">
                                        <img src={doctor7} height="200px" width="200px" alt="Doctor7"/></NavLink>
                                </div>
                                <div className="drrightimg1">
                                    <NavLink to="/doctor-template-list">Adam Busch, dr</NavLink><br/>
                                    <span>Virology</span>
                                </div>
                            </div>
                            <div className="doctoroinfoimage1">
                                <div className="drleftimg1">
                                    <NavLink to="/doctor-template-list">
                                        <img src={doctor8} height="200px" width="200px" alt="Doctor8"/></NavLink>
                                </div>
                                <div className="drrightimg1">
                                    <NavLink to="/doctor-template-list">Abraham Lincoln, dr</NavLink><br/>
                                    <span>Heart Specialist</span>
                                </div>
                            </div>
                            <div className="doctoroinfoimage1">
                                <div className="drleftimg1">
                                    <NavLink to="/doctor-template-list">
                                        <img src={doctor9} height="200px" width="200px" alt="Doctor9"/></NavLink>
                                </div>
                                <div className="drrightimg1">
                                    <NavLink to="/doctor-template-list">Adam Lambert, dr</NavLink><br/>
                                    <span>Cancer Specialist</span>
                                </div>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                    
                    <Appointment/>
                        
                    </div>

                                <div className="col-lg-4 col-md-6">
                        <div className="colbox">
                            <div className="Header_element">
                                <strong>Doctor From A to Z</strong> 
                            </div>
                            <div>
                                <div className="inline_heading">
                                    Emergency Hotline
                                </div>
                                <div className="nameabout col">
                                
                                    Emergency:<a href="/Contact"> 777 888 999</a><hr/>
                                    Covid 19:<a href="/Contact"> 777 888 111</a>
                                   
                                </div>

                                <div className="Search">
                                    <form action="/news" method="get">
                                        <input
                                            type="text"
                                            id="header-search"
                                            placeholder="Keyword(S)"
                                            name="s"
                                        />
                                        <button type="submit"><SearchOutlinedIcon/></button>
                                    </form>
                                </div>
                                <div className="Specialist">
                                    <h3>Doctor By Category</h3>
                                </div>
                                <div className="Specialistname">
                                    <NavLink to="/doctor-template-list"> Children Specialist</NavLink><br/><hr/>
                                    <NavLink to="/doctor-template-list"> Cancer Specialist</NavLink><br/><hr/>
                                    <NavLink to="/doctor-template-list"> Heart Specialist</NavLink><br/><hr/>
                                    <NavLink to="/doctor-template-list"> Dentist Specialist</NavLink><br/><hr/>
                                    <NavLink to="/doctor-template-list"> Geriatric Specialist</NavLink><br/><hr/>
                                    <NavLink to="/doctor-template-list"> Obstetrician Specialist</NavLink><br/><hr/>
                                    <NavLink to="/doctor-template-list"> Covid 19 Specialist</NavLink><br/><hr/>
                                    <NavLink to="/doctor-template-list"> Surgery Specialist</NavLink><br/>
                                </div>
                                
                                <div>
                                    <div className="stetoscope">
                                        <div className="">
                                            <img src={Stetoskop} alt="Stetoscope"/>
                                        </div>
                                        
                                        <div className="icon_text">
                                            <span>Booking</span><br/>
                                            <span>your dates Here</span>
                                        </div>
                                    </div>

                                    <div className="ambulance">
                                        <div>
                                            <img src={Ambulance} alt="Stetoscope"/>
                                        </div>
                                        
                                        <div className="icon_text">
                                            <span>Do you have</span><br/>
                                            <span>an Emergency?</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="department">
                                    <h3>Doctor By Department</h3>
                                </div>
                                <div className="departmentName">
                                    <NavLink to="/doctor-template-list"> Geriatric Department</NavLink><br/><hr width="580px"/>
                                    <NavLink to="/doctor-template-list"> Allergists Department</NavLink><br/><hr width="580px"/>
                                    <NavLink to="/doctor-template-list"> Dermatologists Department</NavLink><br/><hr width="580px"/>
                                    <NavLink to="/doctor-template-list"> Infectious Disease Department</NavLink><br/><hr width="580px"/>
                                    <NavLink to="/doctor-template-list"> Ophthalmologists Department</NavLink><br/><hr width="580px"/>
                                    <NavLink to="/doctor-template-list"> Ophthalmologists Department</NavLink><br/><hr width="580px"/>
                                    <NavLink to="/doctor-template-list"> Obstetrician/Gynecologists</NavLink><br/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <NewsFlex/>
                <Footer/>
        </div>
    </>
    );
    };

    export default Doctor_template;