import {React,useState} from 'react'
//https://react-hook-form.com/
import {useForm}  from "react-hook-form";
import { restCon } from '../../restCon';
import Loading from '../../loading/main';
import "./company.css";

function Company() {
  const { register, handleSubmit} = useForm();  
  const [status,setStatus]=useState();
  const [loading,setLoading]=useState(false);
  async function onSubmit(e)
  {
    setLoading(true);
    const r=await restCon(e,"POST","jobs");
    if(r.status==400)
    setStatus("Post already exists");
    else
    setStatus("Job added");
    setLoading(false);
  }

    return (
        <div>
          {loading? <Loading text="Submitting"/>:
           <center> <h1>Add Job</h1>
           <form onSubmit={handleSubmit(onSubmit)}>
             <label>Post</label><br/>
           <input {...register("post", { required: true })} /><br/>
           <label>Salary</label><br/>
           <input type="number" {...register("salary", { required: true })} placeholder="In $" /><br/>
           <label>Location</label><br/>
           <input {...register("location", { required: true })} /><br/><br/>
           <input type="submit" /><br/>
           {status}
      </form></center>}
        </div>
    )
}
export default Company;
