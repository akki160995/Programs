import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import "./Menu_Name.css";
import "./News.css";
import headertabs from './Images/headertabs4.jpg';
import { NavLink } from "react-router-dom";
import Footer from '../Layout/Footer/Footer';

const News = () => {

    
  const [news,setNews]= useState([])

  useEffect(()=>{
      loadNews();
  },[]);

  const loadNews = async () =>{
      const result = await axios.get("http://localhost/www/Wecare/News/all-news.php");
      setNews(result.data);
  };

  return (
    <>  
        <Navbar/>
        <div className="header_flex">
            <div className="container-fluid" >
                <div className="row align-items-center ">
                    <div className="col-lg-1"></div>
                    <div className=" col-lg-6 col-md-6 col-sm-6 ">
                        <span className="main_heading "><b>SERVICE	<br/><small>Home &gt; Service</small></b></span>
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
                    <div className="left-Heading">Subscribe Newsletter</div>
                    <div className="emailtext mb-3">
                        <input type="text" id="name" name="email" placeholder="Email"></input>
                        <div className="btnsend"><NavLink to="/department-template-list">Send</NavLink></div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="colbox">
                        <div className="Header_element">
                            <strong>ALL NEWS FROM WCLH</strong> 
                        </div>                    
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </div>
        
        <div>
            <div className="container-fluid">
            <div className="row  ">
            {
            news.map((news,index)=>(
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card-body mr-2 ml-2">
                    <h5 class="card-title showcase">{news.title}</h5>
                    <div className="commentdate1">
                        <p>{news.date} / No Comments</p>
                    </div>
            
                    <p class="card-text max-chars">{news.body}</p>
                    <a href={`/news/view/${news.id}`} class="">Read...</a>
                    <NavLink className="btn btn-primary mr-2" to={`/news/view/${news.id}`}>View</NavLink>
                </div>  
            </div>
            ))
            }
        </div>
        </div>
        </div>

        

        <div className="newsdesc">
            <div className="row">
                    <div className="col-md-4 mb-3 ">
                          <div className="showcase">
                               <NavLink to="/new-video-showcases-buildings-role-in-pandemic-response/">New Video Showcases<br/>Building’s Role In Pandemic <br/>Response</NavLink>
                          </div>
                          <div className="commentdate1">
                                <h4>April 18, 2021 / No Comments</h4>
                                <p>Lorem Ipsum Dolor Sit Amet,Consectetur Adipiscing Elit,<br/> Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore<br/> Magna Aliqua. Scelerisque Purus Semper Eget Duis At</p>
                                <NavLink to="/new-video-showcases-buildings-role-in-pandemic-response/">Read More » </NavLink>
                          </div>
                    </div>
                    <div className="col-md-4 mb-3 ">
                          <div className="showcase">
                               <NavLink to="/mental-health-co-responder-program-extended/">Mental Health Co-Responder<br/>program extended	</NavLink>
                          </div>
                          <div className="commentdate1">
                                <h4>April 18, 2021 / No Comments</h4>
                                <p>Lorem Ipsum Dolor Sit Amet,Consectetur Adipiscing Elit,<br/> Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore<br/> Magna Aliqua. Scelerisque Purus Semper Eget Duis At</p>
                                <NavLink to="/mental-health-co-responder-program-extended/">Read More » </NavLink>
                          </div>
                    </div>
                    <div className="col-md-4 mb-3 mr-3 ml-3">
                          <div className="showcase">
                               <NavLink to="/locally-made-masks-introduced/">Locally Made Masks<br/>Introduced	</NavLink>
                          </div>
                          <div className="commentdate1">
                                <h4>April 18, 2021 / No Comments</h4>
                                <p>Lorem Ipsum Dolor Sit Amet,Consectetur Adipiscing Elit,<br/> Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore<br/> Magna Aliqua. Scelerisque Purus Semper Eget Duis At</p>
                                <NavLink to="/locally-made-masks-introduced/">Read More » </NavLink>
                          </div>
                    </div>
            </div>
            <div className="newsderight">
                  <div className="newsdesc4">
                          <div className="showcase">
                               <NavLink to="">More Calhn Nurses Help<br/>Victoria’s Covid-19 Outbreak</NavLink>
                          </div>
                          <div className="commentdate1">
                                <h4>April 18, 2021 / No Comments</h4>
                                <p>Lorem Ipsum Dolor Sit Amet,Consectetur Adipiscing Elit,<br/> Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore<br/> Magna Aliqua. Scelerisque Purus Semper Eget Duis At</p>
                                <NavLink to="">Read More » </NavLink>
                          </div>
                  </div>
                  <div className="newsdesc5">
                          <div className="showcase">
                               <NavLink to="">World-leading Research<br/>Into New Diabetes Drug</NavLink>
                          </div>
                          <div className="commentdate1">
                                <h4>April 18, 2021 / No Comments</h4>
                                <p>Lorem Ipsum Dolor Sit Amet,Consectetur Adipiscing Elit,<br/> Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore<br/> Magna Aliqua. Scelerisque Purus Semper Eget Duis At</p>
                                <NavLink to="">Read More » </NavLink>
                          </div>
                  </div>
                  <div className="newsdesc6">
                          <div className="showcase">
                               <NavLink to="">Trial Partnering Mental<br/>Health Clinicians	</NavLink>
                          </div>
                          <div className="commentdate1">
                                <h4>April 18, 2021 / No Comments</h4>
                                <p>Lorem Ipsum Dolor Sit Amet,Consectetur Adipiscing Elit,<br/> Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore<br/> Magna Aliqua. Scelerisque Purus Semper Eget Duis At</p>
                                <NavLink to="">Read More » </NavLink>
                          </div>
                  </div>
            </div>
              
            <div className="last">
                  <div className="newsdesc7">
                          <div className="showcase">
                               <NavLink to="">Global Webinars Provide The<br/>Invaluable Learnings</NavLink>
                          </div>
                          <div className="commentdate1">
                                <h4>April 17, 2021 / No Comments</h4>
                                <p>Lorem Ipsum Dolor Sit Amet,Consectetur Adipiscing Elit,<br/> Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore<br/> Magna Aliqua. Scelerisque Purus Semper Eget Duis At</p>
                                <NavLink to="">Read More » </NavLink>
                          </div>
                  </div>
                  <div className="newsdesc8">
                          <div className="showcase">
                               <NavLink to="">Australian-first 3d-printed<br/>Polymer Breastbone<br/>Procedure</NavLink>
                          </div>
                          <div className="commentdate1">
                                <h4>April 17, 2021 / No Comments</h4>
                                <p>Lorem Ipsum Dolor Sit Amet,Consectetur Adipiscing Elit,<br/> Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore<br/> Magna Aliqua. Scelerisque Purus Semper Eget Duis At</p>
                                <NavLink to="">Read More » </NavLink>
                          </div>
                  </div>
                  <div className="newsdesc9">
                          <div className="showcase">
                               <NavLink to="">International partnership to<br/>help  young cancer patients</NavLink>
                          </div>
                          <div className="commentdate1">
                                <h4>April 16, 2021 / No Comments</h4>
                                <p>Lorem Ipsum Dolor Sit Amet,Consectetur Adipiscing Elit,<br/> Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore<br/> Magna Aliqua. Scelerisque Purus Semper Eget Duis At</p>
                                <NavLink to="">Read More » </NavLink>
                          </div>
                  </div>
            </div>
        </div>
        
        <Footer/>
        </>
  );
  
};

export default News;