import React,{useState} from 'react'
import {useForm}  from "react-hook-form";
import { restCon } from '../../../../../restCon';

function Form(props) {
    const { register, handleSubmit} = useForm(); 
    const [status,setStatus]=useState();
   
   async function onSubmit(e)
    {
        setStatus("...Submitting");
        e["post"]=props.post;
        const r=await restCon(e,"POST","applications");
        props.form(true);
        localStorage[props.id]=true;
        setStatus("");
    }

    return (
             <form onSubmit={handleSubmit(onSubmit)}>
             <label>Name</label><br/>
             <input {...register("name", { required: true })} /><br/>
             <label>Expected Salary</label><br/>
             <input type="number" {...register("expectedSalary", { required: true })} placeholder="In $" /><br/>
             <label>Notice Period</label><br/>
             <input {...register("noticePeriod", { required: true })} placeholder="In days" /><br/>
             <label>Qualification</label><br/>
             <input {...register("qualification", { required: true })} /><br/>
             <input type="submit" /><br/>
             {status}
             </form>
    )
}

export default Form;
