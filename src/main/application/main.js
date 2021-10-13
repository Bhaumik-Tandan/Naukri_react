import React,{useState,useEffect} from 'react'
import UpperOption from './upperoption/main';
import Applications from './applications/application';
import { restCon } from '../../restCon';
import {useApplicationSet} from "./dataHook";
function AppMain() {
    const [status,setStatus]=useState(1);
    const ApplicationSet=useApplicationSet();

    useEffect(()=>{
        function dataToJSON(data)
        {
            const jsonData={};
            data.forEach(function(application) {
                const appJSON={
                    "expectedSalary": application["expectedSalary"],
                    "name": application["name"],
                    "noticePeriod": application["noticePeriod"],
                    "qualification": application["qualification"],
                };

                if(jsonData.hasOwnProperty(application["post"]))
                jsonData[application["post"]].push(appJSON);
                else
                jsonData[application["post"]]=[appJSON];
              });
              ApplicationSet(jsonData);
        }

        async function fetchData() 
        {
           const res= await restCon(undefined,"GET","applications");
           const data=await res.json();
           dataToJSON(data);
           setStatus(0);
        }

        fetchData();

    },[]);

    return (
        <div>
            {status?<>Loading..</>:<><UpperOption/><Applications/></>}
        </div>
    )
}

export default AppMain;
