import React, {useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav/";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyPortfolio from "./components/MyPortfolio";
import MyResume from "./components/MyResume";
import ContactMe from "./components/ContactMe"
import ProjectData from "./projects.json";
import PortfolioContext from "./components/utils/PortfolioContext"


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

          <Route exact path={["/myResume"]}>
            <MyResume />
          </Route>

          <Route exact path={["/ContactMe"]}>
            <ContactMe />
          </Route>

          </Switch>
        
    </Router>
  );
}

export default App;
