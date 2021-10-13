import React,{useState,useEffect} from 'react'
import { restCon } from '../../restCon';
import DisplayJobs from './dispJobs/displayJobs';
import Loading from '../../loading/main';
function Apply() {

    const [data,setData]=useState(0);
    
    useEffect(()=>{

        async function fetchData() 
        {
           const res= await restCon(undefined,"GET","jobs");
           const data=await res.json();
           setData(data);
        }

        fetchData();

    },[]);

    return (
        <div>
            {data==0?<Loading text="Loading Jobs"/>:<DisplayJobs data={data}/>}
        </div>
    )
}

export default Apply;
