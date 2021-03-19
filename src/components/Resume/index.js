import React , {useState,useEffect} from "react" ;
import "./style.css";

function Resume() {
    return (
        <div>
            <object data="/assets/documents/Jared-Ackley res.pdf" type="application/pdf" width="100%" height="800px">
                <p>Your web browser doesn't have a PDF Plugin.  Instead you can <a href="/assets/documents/Jared-Ackley res.pdf">click here to download the PDF File.</a></p>
            </object>
        </div>
        );
  }
  
  export default Resume;