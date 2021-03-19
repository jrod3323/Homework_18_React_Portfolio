import React , {useState,useEffect} from "react" ;
import "./style.css";

function Skills() {
    return (
        <div>
            <h4>Certificates</h4>
            <ul class="certifications">
                <li> <a target="_blank" href="https://www.coursera.org/account/accomplishments/certificate/5LS678FNQXSP" rel="noreferrer"> University of Michigan - Introduction to Structured Query Language - Issued May 2020</a></li>
                <li><a target="_blank" href="https://www.coursera.org/account/accomplishments/certificate/QQZFUQ88GQUN" rel="noreferrer"> University of Michigan - Building Web Applications in PHP - Issued April 2020</a></li>
                <li><a target="_blank" href="https://www.coursera.org/account/accomplishments/specialization/89W6U3XQPLN5" rel="noreferrer"> Google - Gsuite Administration Specialization - Issued Feb 2020</a></li>
            </ul>  
            <h4>Technical Skills</h4>
            <ul class="education">
                <li>Management Skills: IT Project Management, Process Development and Streamlining, Git Repo Management</li>
                <li>Front End Skills: HTML5, CSS3, JavaScript, Bootstrap, Materialize, Bulma, Handlebars, React, SASS, JQuery</li>
                <li>Back End Skills: Node.JS, SQL, PHP, JSON, AJAX, API development, MongoDB, MySQLWorkbench, NoSQL</li>
            </ul> 
</div>
        );
  }
  
  export default Skills;