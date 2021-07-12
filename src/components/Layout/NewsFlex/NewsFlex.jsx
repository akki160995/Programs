import React, { Component } from 'react';
import './NewsFlex.css';
import {FaRegNewspaper} from 'react-icons/fa';


export class NewsFlex extends Component {
    render() {
        return (
            <div>
                <div className="container" >
                    <div className="box">
                        <div className="row">
                        <div className=" col-md-4 Head_left">LETEST NEWS</div> 
                        <div className=" col-md-8 Head_right"><a href="/news" className="a_color">View All News Articles <FaRegNewspaper /></a></div>
                        </div>
                        <div className="header"></div>
                        <div className="row">
                        <div className="col-xl-4 col-md-6 ">
                            <div className="News_heading">
                            <a href="./news" className="a_color">New Video Showcases Building’s Role In Pandemic Response<br/>
                            <small>April 18, 2021</small><br/>
                            Read More »
                            </a>
                            </div>

                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div  className="News_heading">
                            <a href="/news" className="a_color">New Video Showcases Building’s Role In Pandemic Response<br/>
                            <small>April 18, 2021</small><br/>
                            Read More »
                            </a>
                            </div>

                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div  className="News_heading">
                            <a href="/news" className="a_color">New Video Showcases Building’s Role In Pandemic Response<br/>
                            <small>April 18, 2021</small><br/>
                            Read More »
                            </a>
                            </div>

                        </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default NewsFlex
