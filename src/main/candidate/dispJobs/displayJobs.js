import React from 'react'
import IndividualCards from './individualCards/individualCards';
function DisplayJobs(prop) {
    return (
        <div>
           <center> 
                {prop.data.map((data,index)=>{
                    return <IndividualCards key={index} data={data}/>
                })}
            </center> 
        </div>
    )
}

export default DisplayJobs;
