import React from "react" ;
import "./style.css";
import Pic from "./mypicture.png"

function Header() {
    return (
        <div>
            <header className="min-vh-100 d-flex flex-column justify-content-center align-items-center top">
                <div className="mainBanner ">
                    <h1 className="display-4 name">Jared Ackley</h1>
                    <figure className="headShot"><img className="myPic" src={Pic} alt={"Me"}/></figure>
                </div>
                <div className="typewriteContainer">
                    <h1>Hi! My name is Jared. I am a MERN Stack Dev! </h1>
                    <h1 className="typewrite" data-period={"2000"} data-type={'["Become More Visible","Gain a Creative Advantage","Give a Voice to Your Brand" ]'}><span className="wrap"></span>            
                    </h1>
                </div>
                <div className="socialIcons row py-2 px-4">
                    <a href="https://www.linkedin.com/in/jared-ackley-438364124/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://www.facebook.com/jared.ackley.5" target="_blank" rel="noreferrer">Facebook</a>
                    <a href="https://www.instagram.com/jrod3323/" target="_blank" rel="noreferrer">Instagram</a>
                    <a href="https://github.com/jrod3323" target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </header>
            <script>
                
            </script>
        </div>
    );
  }
  
  export default Header;