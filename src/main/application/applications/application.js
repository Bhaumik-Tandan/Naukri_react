import React from 'react'
import {useApplication,useCurrentlySelected} from "../dataHook";
import Pagging from './pagging/pagging';
function Applications() {
    const CurrentlySelected=useCurrentlySelected();
    const application=useApplication();
    
    return (
        <div>
            <br/>
           <center> {CurrentlySelected=="0"?
           "":          
               <Pagging data={application[CurrentlySelected]}/>
            }
            </center> 
        </div>
    )
}

export default Applications;
