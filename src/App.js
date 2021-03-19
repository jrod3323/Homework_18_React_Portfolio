import React, {useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav/";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyPortfolio from "./components/MyPortfolio";
import MyResumeTop from "./components/MyResumeTop";
import MyResumeBottom from "./components/MyResumeBottom";
import ContactMe from "./components/ContactMe";
import Resume from "./components/Resume";
import WorkHistory from "./components/WorkHistory";
import Skills from "./components/Skills";
import Education from "./components/Education"


function App() {


  

  return (
    
    <Router>
        <TopNav />

        
          <Switch>

          <Route exact path={["/"]}>
            <Header />
          </Route>

          <Route exact path={["/aboutMe"]}>
            <AboutMe />
          </Route>

          <Route exact path={["/myPortfolio"]}>
            <MyPortfolio />
          </Route>

          <Route exact path={["/myResume","/myResume/Work"]}>
            <MyResumeTop/>
            <WorkHistory/>
            <MyResumeBottom/>
          </Route>

          <Route exact path={["/myResume/Education"]}>
            <MyResumeTop/>
            <Education/>
            <MyResumeBottom/>
          </Route>

          <Route exact path={["/myResume/Skills"]}>
            <MyResumeTop/>
            <Skills/>
            <MyResumeBottom/>
          </Route>

          <Route exact path={["/ContactMe"]}>
            <ContactMe />
          </Route>

          <Route exact path={["/viewResume"]}>
            <Resume />
          </Route>

          </Switch>
        
    </Router>
  );
}

export default App;
