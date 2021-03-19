import React , {useState,useEffect} from "react" ;
import "./style.css";
import Schools from "../../school.json"

function Education() {

    const [ schoolState , setSchoolState] = useState({
        schools: Schools
    })
    return (
        <div>
            <div className="resumseBox">
                <ul className="list-group">
                    {schoolState.schools.map(item => 
                        <li class="list-group-item">
                            <p>{`${item.school} - ${item.degree} - ${item.timeframe}`}</p>
                        </li>
                    )
                    }
                </ul>
        </div>
        </div>
        );
  }
  
  export default Education;