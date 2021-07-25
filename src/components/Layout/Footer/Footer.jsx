import React, { Component } from 'react';
import './footerx.css';
import logo from '../../Project/Images/logo.png';
import {FaAmericanSignLanguageInterpreting} from 'react-icons/fa';
import {FaLanguage} from 'react-icons/fa';
import {FaStethoscope} from 'react-icons/fa';
import {FaFax} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import TwitterIcon from '@material-ui/icons/Twitter';
import CallIcon from '@material-ui/icons/Call';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid">
                <hr/>
                <div className="row">
                    <div className=" col-xl-4  col-md-6 border-right ">
                        <div className="logo">
                            <a href="./"><img src={logo} alt="Logo"/></a>
                        </div>
                        <div className="col d-flex flex-nowrap  border-top ">
                            <div className=" border-right icons"><a href="./"><FaAmericanSignLanguageInterpreting className="symbol"/> <span className="iconstext">Interpreter</span></a></div><hr/>
                            <div className="icons"><a href="./"><FaLanguage className="symbol" /> <span className="iconstext">Language</span></a></div><hr/>
                        </div>
                    </div>


                    <div className="col-xl-4 col-md-6 border-right">
                    <div  className="Footerheading">Quicklinks </div>
                        <div className="row">
                            <div className="col FooterList">
                                <div><a href="/services">A-Z listing</a></div><hr/>

                                <div><a href="./contact">Parking</a></div><hr/>

                                <div><a href="./">Visiting Hours</a></div><hr/>

                                <div><a href="./">Finding Around</a></div><hr/>
                            </div>
                            <div className="col FooterList">

                                <div><a href="./">Patient Support</a></div><hr/>

                                <div><a href="./">Covid 19 Support</a></div><hr/>

                                <div><a href="./">Condition Service</a></div><hr/>

                                <div><a href="./" >Emegency</a></div><hr/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="Footerheading">Contact Us</div>
                        <div className="row">
      
                            <div className="col FooterList">
                                <div><a href="./"><CallIcon /> +62 8888 999</a></div><hr/>

                                <div><a href="./"><FaStethoscope /> +62 8888 333</a></div><hr/>

                                <div><a href="./"><FaFax /> +62 8888 444</a></div><hr/>

                            </div>
                            <div className="col-md-6 FooterList">
                                <div>
                                    <a href="./">
                                        <LocationOnIcon />Riverside Building,London, SE-90
                                    </a><hr/>
                                </div>
                                <div className="row ml-3">
                                        <a href="./" className="p-0 "><FaFacebookF/></a>
                                        <a href="./" className="p-0"><TwitterIcon/></a>
                                        <a href="./" className="p-0"><InstagramIcon/></a> 
                                </div>
                                
                            </div>   
                        </div>            
                    </div>
                </div>

                <div class=" row ">
                      <div className="col-sm-4">
                          <div className="row FooterList p-2 mr-2">
                          <div className="p-2"><a href="./" >Copyright</a></div>
                            <div className="p-2"><a href="./">Accessibility</a></div>
                            <div className="p-2"><a href="./" >Disclaimer</a></div>
                            <div className="p-2"><a href="./">Privacy</a></div>
                            <div className="p-2"><a href="./">Sitemap</a></div>
                        </div>
                        
                        <p className="p-2 legals">&copy; WeCare London Hospital 2021 (CC)<br/>London Department for Health and Ageing</p>
    
                        </div>
                            <span className="col-sm-8 legals"><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit sed. Dictum varius duis at consectetur lorem donec massa. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ultrices dui sapien eget mi proin sed libero enim sed. A erat nam at lectus urna duis convallis. Ac turpis egestas maecenas pharetra convallis. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Facilisi etiam dignissim diam quis.</i> </span>
                        
                    </div>


            </div>
        )
    }
}

export default Footer
