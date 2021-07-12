import React from 'react';
import headertabs8 from './Images/headertabs8.jpg';
import doctor2 from './Images/doctor2.jpg';
import "./News1.css";
import "./Menu_Name.css";
import { NavLink } from "react-router-dom";
import {FaCalendar} from 'react-icons/fa';
import {FaRegClock} from 'react-icons/fa';
import {FaRegCommentDots} from 'react-icons/fa';
import {FaAmericanSignLanguageInterpreting} from 'react-icons/fa';
import {FaLanguage} from 'react-icons/fa';
import {FaFax} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import TwitterIcon from '@material-ui/icons/Twitter';
import CallIcon from '@material-ui/icons/Call';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {FaStethoscope} from 'react-icons/fa';
import logo from './Images/logo.png';


const Newslocallymade = () => {
  return (
    <>
    <div className="Menu_Namenews">
            <div className="namenewsdisplay">
                <h1>Locally Made Masks Introduced</h1>
                <h3><NavLink to="/news"><FaCalendar size="20px"/>&nbsp;&nbsp;April 18,&nbsp;2021</NavLink>&nbsp;&nbsp;&nbsp;<span><FaRegClock size="25px"/>&nbsp;1:32 pm</span><NavLink to="/locally-made-masks-introduced/">&nbsp;&nbsp;&nbsp;<FaRegCommentDots size="20px"/>&nbsp;No Comments</NavLink></h3>
                
            </div>
            <div className="imgnewsvideo">
                <img src={headertabs8} alt="header_tabs" height="450px" width="620px"/>
            </div>
      </div>
      <div className="showcaseinfo">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br/>magna aliqua. Scelerisque purus semper eget duis at tellus at urna. Erat imperdiet sed euismod nisi. Turpis<br/>egestas maecenas pharetra convallis posuere morbi. Amet facilisis magna etiam tempor orci eu lobortis.<br/>Neque sodales ut etiam sit. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Odio aenean<br/>sed adipiscing diam. Eu mi bibendum neque egestas congue quisque egestas diam in. Augue eget arcu dictum<br/>varius duis. Id aliquet risus feugiat in ante.</p>
            <p>Viverra orci sagittis eu volutpat odio. Aliquam malesuada bibendum arcu vitae elementum. Imperdiet massa<br/> tincidunt nunc pulvinar sapien et ligula. Eu mi bibendum neque egestas congue quisque egestas diam in.<br/>Tincidunt vitae semper quis lectus nulla at. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec.<br/>Mi eget mauris pharetra et ultrices neque ornare aenean. Sed faucibus turpis in eu mi bibendum neque<br/>egestas congue. Nullam non nisi est sit amet facilisis magna etiam. Diam maecenas sed enim ut sem viverra<br/>aliquet eget. Pharetra pharetra massa massa ultricies mi quis. Ligula ullamcorper malesuada proin libero nunc<br/>consequat. Dolor sit amet consectetur adipiscing elit ut aliquam. Tincidunt id aliquet risus feugiat in ante.<br/>Facilisi morbi tempus iaculis urna id volutpat lacus. In nibh mauris cursus mattis molestie a iaculis at. Eu turpis<br/>egestas pretium aenean pharetra magna. Eu lobortis elementum nibh tellus molestie nunc non blandit massa.<br/>Id cursus metus aliquam eleifend mi in nulla posuere. Sagittis orci a scelerisque purus.</p>

      </div>
      <div className="newsvideopara">
          <div className="shownewsleft">
              <img src={doctor2} alt="header_tabs" height="100px" width="100px"></img>
          </div>
          <div className="shownewsright">
            <span>dr. Evelyn Sanders</span>
            <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Dolor</p>
            </div>
      </div>
      <div className="replyleave">
        <h2>Leave a Reply</h2>
        <p>Your email address will not be published.Required fields are marked *</p>
      </div>

      <div className="Footer"> <br/>
            <div className="Container1">
                <div className="Cleft">
                    <div className="top">
                        <NavLink to="/"><img src={logo} alt="Logo"/></NavLink>
                    </div>
                    <div className="mid">
                        <NavLink to="/locally-made-masks-introduced/"><h3><FaAmericanSignLanguageInterpreting size="50"/> &nbsp;Interpreter</h3></NavLink>
                    </div>
                    <div className="center">
                    <NavLink to="/locally-made-masks-introduced/"><h3><FaLanguage size="50" /> &nbsp;Language</h3></NavLink>
                    </div>
                </div>
                <div className="Cmid">
                        <div className="head">
                        <h3>Quicklinks</h3>
                        </div>
                        <div className="link">
                            <div className="leftlink">
                                <NavLink to="/locally-made-masks-introduced/">A-Z listing</NavLink><hr/>
                                <NavLink to="/locally-made-masks-introduced/">Parking</NavLink><hr/>
                                <NavLink to="/locally-made-masks-introduced/">Visiting Hours</NavLink><hr/>
                                <NavLink to="/locally-made-masks-introduced/">Finding Around</NavLink>  
                            </div>   
                            <div className="rightlink">
                                <NavLink to="/locally-made-masks-introduced/">Patient Support</NavLink><hr/>
                                <NavLink to="/locally-made-masks-introduced/">Covid-19 Support</NavLink><hr/>
                                <NavLink to="/locally-made-masks-introduced/">Condition Service</NavLink><hr/>
                                <NavLink to="/locally-made-masks-introduced/">Emegency</NavLink>
                            </div> 
                        </div>
                </div>
                <div className="Cright">
                        <div className="heading">
                        <h3>Contact Us</h3>
                        </div>
                        <div className="contactdetail">
                            <div className="numbers">
                                <NavLink to="/locally-made-masks-introduced/"><CallIcon />&nbsp;&nbsp;+62 8888 999</NavLink><br/><hr/>
                                <NavLink to="/locally-made-masks-introduced/"><FaStethoscope />&nbsp;&nbsp;&nbsp;+62 8888 333</NavLink><br/><hr/>
                                <NavLink to="/locally-made-masks-introduced/"><FaFax />&nbsp;&nbsp;&nbsp;+62 8888 444</NavLink>
                            </div>
                            <div className="place">
                                <NavLink to="/locally-made-masks-introduced/"><LocationOnIcon />&nbsp;&nbsp;Riverside Building,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>London, SE-90</span></NavLink>
                                <br/><br/><br/>
                                <div className="icons">
                                    <NavLink to="/locally-made-masks-introduced/"><FaFacebookF/></NavLink>
                                    <NavLink to="/locally-made-masks-introduced/"><TwitterIcon/></NavLink>
                                    <NavLink to="/locally-made-masks-introduced/"><InstagramIcon/></NavLink>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="Container2">
                    <div className="Side1">
                        <NavLink to="/locally-made-masks-introduced/">Copyright</NavLink>
                        <NavLink to="/locally-made-masks-introduced/">Accessibility</NavLink>
                        <NavLink to="/locally-made-masks-introduced/">Disclaimer</NavLink>
                        <NavLink to="/locally-made-masks-introduced/">Privacy</NavLink><br/><br/>
                        <NavLink to="/locally-made-masks-introduced/">Sitemap</NavLink>
                        <div className="bottom">
                            <p>© WeCare London Hospital 2021 (CC)<br/> London Department for Health and Ageing</p>
                        </div>
                    </div>
                    <div className="Side2">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit sed. Dictum varius duis at consectetur lorem donec massa. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ultrices dui sapien eget mi proin sed libero enim sed. A erat nam at lectus urna duis convallis. Ac turpis egestas maecenas pharetra convallis. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Facilisi etiam dignissim diam quis. </span>						
                    </div>
            </div>
        </div>
      


        
    
    </>
  );
  
};

export default Newslocallymade;