import React , {useState,useEffect} from "react" ;
import "./style.css";
import Jobs from "../../work.json"

function WorkHistory() {

    const [ jobState , setJobState] = useState({
        jobs: Jobs
    })

    return (
        <div className="resumseBox">
                <ul className="list-group">
                    {jobState.jobs.map(job => 
                        <li class="list-group-item">
                            <p>{job.position}</p>
                            <p>{job.timeframe}</p>
                            <p>{job.details}</p>
                        </li>
                    )
                    }
                </ul>
        </div>
        );
  }
  
  export default WorkHistory;