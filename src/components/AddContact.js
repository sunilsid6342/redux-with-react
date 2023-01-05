import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const AddContact = () => {
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [number, setNumber]=useState("");
    const history=useNavigate();
    const dispatch=useDispatch();
    
    const contacts = useSelector((state)=>state);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const checkmail=contacts.find((contacts)=>contacts.email===email);
        const checkname=contacts.find((contacts)=>contacts.name===name);
        const checknumber=contacts.find((contacts)=>contacts.number===parseInt(number));

        if(!name || !email || !number)
        {
            return toast.warning("Please fill in all fields");
        }

        if(checkmail)
        {
            return toast.error("Plase check email")
        }
        if(checkname)
        {
            return toast.error("Plase check name")
        }
        if(checknumber)
        {
            return toast.error("Plase check number")
        }

        const data={
            id: contacts[contacts.length-1].id+1,
            name,
            email,
            number
        }

        dispatch({type:"ADD_CONTACT",payload:data});
        toast.success("Student Record Succesfull");
        history("/");
    }
    
  return (
    <div className='container'>
        <div className='row'>
            <h1 className='display-3 my-5 text-center'>
                Add Student
            </h1>
            <div className='col-md-6 shadow mx-auto p-5'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input type="text" placeholder="Name" className='form-control m-1'
                        value={name} onChange={(e)=>{setName(e.target.value)}} />
                    </div>
                    <div className='form-group'>
                        <input type="email" placeholder="Email" className='form-control m-1' 
                        value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div className='form-group'>
                        <input type="number" placeholder="Phone Number" className='form-control m-1' 
                        value={number} onChange={(e)=>{setNumber(e.target.value)}} />
                    </div>
                    <div className='form-group'>
                        <input type="Submit" value="Add Student" className="form-control m-1 btn btn-block btn-dark"/>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}

export default AddContact