import React from 'react'
import {useApplication,useCurrentlySelected} from "../dataHook";
import Individual from './individualApplication/individual';
function Applications() {
    const CurrentlySelected=useCurrentlySelected();
    const application=useApplication();
    return (
        <div>
            <br/>
           <center> {CurrentlySelected=="0"?"":<>
            {application[CurrentlySelected].map((data,index)=>{
                    return <Individual data={data} key={index}/>
                })}</>}
            </center> 
        </div>
    )
}

export default Applications;
