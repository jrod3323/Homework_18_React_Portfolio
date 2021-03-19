import React, {useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav/";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyPortfolio from "./components/MyPortfolio";
import data from "./projects.json";
import CTP from "./components/MyPortfolio/Covid_Travel_Planner_Demo.gif";
import FMF from "./components/MyPortfolio/fmf-gif.gif";
import WDB from "./components/MyPortfolio/hw6weatherdashboard.gif"


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

      </Switch>
    </Router>
  );
}

export default App;
