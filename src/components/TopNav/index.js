import React from "react";
import "./style.css"

function TopNav() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
        <a className="navbar-brand" href="/">Jared Ackley</a>
        <button className="navbar-toggler" type="button" data-toggle={"collapse"} data-target={"#navbarNav"} aria-controls={"navbarNav"} aria-expanded={"false"} aria-label={"Toggle navigation"}>
          <span className="navbar-toggler-icon"><i className="fas fa-bars" style={{"color":"#7C7B8E", fontSize:"28px"}}></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutMe">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/myPortfolio">My Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/myResume">My Resume</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contactMe">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default TopNav;