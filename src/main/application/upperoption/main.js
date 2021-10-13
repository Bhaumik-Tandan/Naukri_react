import React from 'react'
import {useApplication,useCurrentlySelectedSet} from "../dataHook";
import {usePageNoSet} from "../applications/pagging/pageNoHook";
function UpperOption() {
    const application=useApplication();
    const setSelected=useCurrentlySelectedSet();
    const setPageNo=usePageNoSet();
    function changeApp(e)
    {
        setSelected(e.target.value);
        setPageNo(0);//set page no. on change
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
