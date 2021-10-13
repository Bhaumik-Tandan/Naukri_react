import React from 'react'
import {useEffect,useState} from "react";
function Apply(props) {

    const [applied,setApplied]=useState(0);

    useEffect(() => {
        if(localStorage[props.id])
        setApplied(1);        
    }, [props.formFlag]);

    return (
        <div>
            {applied==1?<>Applied</>:<button onClick={()=>props.form(p=>!p)}>Apply</button>}
        </div>
    )
}

export default Apply;
