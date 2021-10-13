import React from 'react'
import {useApplication,useCurrentlySelectedSet} from "../dataHook";
function UpperOption() {
    const application=useApplication();
    const setSelected=useCurrentlySelectedSet();

    function changeApp(e)
    {
        setSelected(e.target.value);
    }

    return (
        <div>
            <br/>
           <center> <select onChange={changeApp}>
                <option value="0">Choose Post</option>
                {Object.keys(application).map((value)=>{
                    return <option key={value} value={value}>{value}</option>
                })}
            </select></center> 
        </div>
    )
}

export default UpperOption;
