import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditContact = () => {
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [number, setNumber]=useState("");
    const history=useNavigate();
    const dispatch=useDispatch();

    const { id }=useParams();
    const contacts=useSelector(state=>state);
    const currentcontact=contacts.find((contacts)=>contacts.id===parseInt(id));

    useEffect(()=>{
        if(currentcontact)
        {
            setName(currentcontact.name)
            setEmail(currentcontact.email)
            setNumber(currentcontact.number)
        }
    },[currentcontact]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const checkmail=contacts.find((contacts)=>contacts.id!==parseInt(id) && contacts.email===email);
        const checkname=contacts.find((contacts)=>contacts.id!==parseInt(id) && contacts.name===name);
        const checknumber=contacts.find((contacts)=>contacts.id!==parseInt(id) && contacts.number===parseInt(number));

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
            id: parseInt(id),
            name,
            email,
            number
        }

        dispatch({type:"UPDAtE_CONTACT",payload:data});
        toast.success("Student Record Update Succesfull");
        history("/");
    }

    return (
        <div className='container'>
            {
                currentcontact ? (<>
                <div className='row'>
                <h1 className='display-3 my-5 text-center'>
                    Edit Student {id}
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
                            <input type="Submit" style={{float:"left"}} value="Update Student" className="m-1 btn btn-dark" />
                            <Link to="/" style={{float:"right"}} className="m-1 btn btn-danger ml-3" >Cancel</Link>
                        </div>
                        
                    </form>
                </div>
            </div>
                </>):<h1>Student {id} does not exist</h1>
            }

        </div>
    )
}

export default EditContact