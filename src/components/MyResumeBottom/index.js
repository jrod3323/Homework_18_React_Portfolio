import React , {useState,useEffect} from "react" ;
import "./style.css";

function MyResumeBottom() {

    return (
        <div className="resumeBox">
                <p className="lead"> 
                    <a href={"/assets/documents/Jared-Ackley res.pdf"} download><button className="btn btn-info btn-lg"  >Download Resume</button></a>
                    <a href={"/viewResume"} target="_blank" rel="noreferrer"><button className="btn btn-info btn-lg"  >View Resume</button></a>
                </p> 
        </div>
        );
  }
  
  export default MyResumeBottom;