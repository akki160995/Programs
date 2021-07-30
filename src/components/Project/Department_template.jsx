import React from 'react';
import "./Menu_Name.css";
import "./Department_template.css";
import Navbar from './Navbar';
import headertabs from './Images/headertabs9.jpg';
import { NavLink } from "react-router-dom"; 
import Stetoskop from './Images/iconstetoskop.png';
import Ambulance from './Images/iconambulance.png';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NewsFlex from '../Layout/NewsFlex/NewsFlex';
import Footer from '../Layout/Footer/Footer';
import DepartmentFrm from '../Layout/forms/Department';
import poster5 from './Images/post-5.jpg';


const Department_template = () => {
  return(
    <>
        <Navbar/>

        <div className="header_flex">
                <div className="container-fluid" >
                    <div className="row align-items-center ">
                        <div className="col-lg-1"></div>
                        <div className=" col-lg-6 col-md-6 col-sm-6 ">
                            <span className="main_heading "><b>DEPARTMENT LIST<br/><small>Home &gt; Department List</small></b></span>
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
                        <div className="left-Heading">Contact <span>WCLH</span></div>
                        
                        <div className="">
                            <div className="Alphabates">
                                <div>
                                    <h3>
                                        <NavLink exact activeClassName="active_class" to="/department-template-list"> A </NavLink>
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


                                <div className="Information">
                                    <div className="">
                                        <h4> A </h4><hr  color="#f5ecec"/>
                                        <div className="title1">
                                            <h4>Anaesthetics</h4>
                                        </div>
                                        <div className="para4">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>						                
                                        </div>
                                        <div className="Button">
                                            <div className="btnView">
                                                <NavLink to="/department-template-list">Quick View </NavLink>
                                            </div>
                                        <div className="Link">
                                            <NavLink to="/department-template-list">More Info</NavLink>
                                        </div>
                                    </div>
                                    <div className="title1">
                                        <h4>Acute medical unit </h4>
                                    </div>
                                    <div className="para4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>						                
                                    </div>
                                    <div className="Button">
                                        <div className="btnView">
                                            <NavLink to="/department-template-list">Quick View </NavLink>
                                        </div>
                                        <div className="Link">
                                            <NavLink to="/department-template-list">More Info</NavLink>
                                        </div>
                                    </div>
                                    <div className="title1">
                                        <h4>Adult Burns Centre </h4>
                                    </div>
                                    <div className="para4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>						                
                                    </div>
                                    <div className="Button">
                                        <div className="btnView">
                                            <NavLink to="/department-template-list">Quick View </NavLink>
                                        </div>
                                        <div className="Link">
                                            <NavLink to="/department-template-list">More Info</NavLink>
                                        </div>
                                    </div>
                                    <div className="title1">
                                        <h4>Aged care service </h4>
                                    </div>
                                    <div className="para4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>						                
                                    </div>
                                    <div className="Button">
                                        <div className="btnView">
                                            <NavLink to="/department-template-list">Quick View </NavLink>
                                        </div>
                                        <div className="Link">
                                            <NavLink to="/department-template-list">More Info</NavLink>
                                        </div>
                                    </div>
                                    <div className="title1">
                                        <h4>Allergy &amp; Immunology</h4>
                                    </div>
                                    <div className="para4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>						                
                                    </div>
                                    <div className="Button">
                                        <div className="btnView">
                                            <NavLink to="/department-template-list">Quick View </NavLink>
                                        </div>
                                        <div className="Link">
                                            <NavLink to="/department-template-list">More Info</NavLink>
                                        </div>
                                    </div>
                                    <div className="title1">
                                        <h4>Allergy and Immunology outpatient clinics</h4>
                                    </div>
                                    <div className="para4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>						                
                                    </div>
                                    <div className="Button">
                                        <div className="btnView">
                                            <NavLink to="/department-template-list">Quick View </NavLink>
                                        </div>
                                        <div className="Link">
                                            <NavLink to="/department-template-list">More Info</NavLink>
                                        </div>
                                    </div>
                                    <div className="title1">
                                        <h4>Allied Health</h4>
                                    </div>
                                    <div className="para4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>						                
                                    </div>
                                    <div className="Button">
                                        <div className="btnView">
                                            <NavLink to="/department-template-list">Quick View </NavLink>
                                        </div>
                                        <div className="Link">
                                            <NavLink to="/department-template-list">More Info</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="colbox">
                            <div className="Header_element">
                                <strong>WCLH Hotline</strong> 
                            </div>
                            <div className="Heading1">
                                <h3>Department from to A-Z</h3>
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
                            <div className="inline_heading">
                                <h3>Department By Category</h3>
                            </div>
                            <div className="nameabout col">
                                <NavLink to="/department-template-list"> Children Specialist</NavLink><br/><hr/>
                                <NavLink to="/department-template-list"> Cancer Specialist</NavLink><br/><hr/>
                                <NavLink to="/department-template-list"> Heart Specialist</NavLink><br/><hr/>
                                <NavLink to="/department-template-list"> Dentist Specialist</NavLink><br/><hr/>
                                <NavLink to="/department-template-list"> Geriatric Specialist</NavLink><br/><hr/>
                                <NavLink to="/department-template-list"> Obstetrician Specialist</NavLink><br/><hr/>
                                <NavLink to="/department-template-list"> Covid 19 Specialist</NavLink><br/><hr/>
                                <NavLink to="/department-template-list"> Surgery Specialist</NavLink><br/>
                            </div>
                            
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
                    </div>
                </div>
            </div>                
        
        <NewsFlex/>
        <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6">
                        <DepartmentFrm/>
                    </div>
                    <div className="col-md-4 col-sm-6 posterform">
                        <img src={poster5} alt="poster5" className=""/>
                    </div>
                    </div>

                </div>
        
        <Footer/>
  </>
  );
};

export default Department_template;