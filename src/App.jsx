import React from "react";
import './App.css';
import './components/Project/nav.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Project/Home";
import About from "./components/Project/About";
import Career from "./components/Project/Career";
import Service from "./components/Project/Service";
import News from "./components/Project/News";
import News1 from "./components/Project/News1";
import News2 from "./components/Project/News2";
import News3 from "./components/Project/News3";
import Career_layout from "./components/Project/Career_layout";
import Covid_19_report from "./components/Project/Covid_19_report";
import Doctor_template from "./components/Project/Doctor_template";
import Doctor_profile from "./components/Project/Doctor_profile";
import Department_template from "./components/Project/Department_template";
import Department_profile from "./components/Project/Department_profile";
import Event_dates from "./components/Project/Event_dates";
import Event_layout from "./components/Project/Event_layout";
import Contact from "./components/Project/Contact";
//import Contact from './components/Pages/Contact';
import Error from "./components/Project/Error";

import Admin from './components/Admin/Admin';

const App = () => {
  return (
    <>
    <BrowserRouter>
      
      <Switch>
          <Route exact path="/WeCare" component={Home}/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/career" component={Career} />
          <Route path="/service" component={Service} />
          <Route path="/news" component={News}/>
          <Route path="/new-video-showcases-buildings-role-in-pandemic-response/" component={News1}/>
          <Route path="/mental-health-co-responder-program-extended/" component={News2}/>
          <Route path="/locally-made-masks-introduced/" component={News3}/>
          <Route path="/career-layout" component={Career_layout}/>
          <Route path="/covid-19-report" component={Covid_19_report}/>
          <Route path="/doctor_template" component={Doctor_template}/>
          <Route path="/doctor_profile_list" component={Doctor_profile}/>
          <Route path="/department-template-list" component={Department_template}/>
          <Route path="/department-profile-layout" component={Department_profile}/>
          <Route path="/event-dates-layout" component={Event_dates}/>
          <Route path="/event-layout" component={Event_layout}/>
          <Route path="/contact" component={Contact} />
                    
          <Route exact path="/admin" component={Admin}/>
          
          <Route component={Error} />
      </Switch>
    </BrowserRouter>
    </>
  );
}
export default App;
