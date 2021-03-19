import React , {useState,useEffect} from "react" ;
import "./style.css";

function MyResumeTop() {

    return (
        <div className="resumeBox">
                <p className="lead"> 
                    <a href="/myResume/Work" ><button className="btn btn-info btn-lg"  >Work History</button></a>
                    <a href="/myResume/Education" ><button className="btn btn-info btn-lg"  >Education</button></a>
                    <a href="/myResume/Skills" ><button className="btn btn-info btn-lg"  >Certificates and Skills</button></a>
                </p> 
        </div>
        );
  }
  
  export default MyResumeTop;