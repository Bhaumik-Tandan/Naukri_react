import React from 'react'
import IndividualCards from './individualCards/individualCards';
import "../../application/applications/pagging/pagging.css";
function DisplayJobs(prop) {
    return (
        <div>
           <center className="grid-container"> 
                {prop.data.map((data,index)=>{
                    return <IndividualCards class="grid-item" key={index} data={data}/>
                })}
            </center> 
        </div>
    )
}

export default DisplayJobs;
