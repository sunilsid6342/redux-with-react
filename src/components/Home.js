import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const Home = () => {
  const contacts=useSelector(state=>state);
  const dispatch=useDispatch();
  console.log(contacts);

  const deleteItem=(ids)=>{
    console.log(ids);
    dispatch({type:"DELETE_CONTACT",payload:ids})
    toast.success("Contact Delete Successfull");
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 my-5 text-right'>
                <Link to="/add" style={{float:"right"}} className='btn btn-outline-dark'>Add Contact</Link>
            </div>
            <div className='col-md-10 mx-auto'>
                <table className='table table-hover'>
                  <thead className='text-white bg-dark text-center'>
                    <tr>
                      <th scope='col'>#</th>
                      <th scope='col'>Name</th>
                      <th scope='col'>Phone Number</th>
                      <th scope='col'>Email</th>
                      <th scope='col'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      contacts.map((item,id)=>(
                        <tr key={id}>
                            <td>{id+1}</td>
                            <td>{item.name}</td>
                            <td>{item.number}</td>
                            <td>{item.email}</td>
                            <td>
                              <Link to={'/edit/'+item.id} className="btn btn-small m-1 btn-primary mr-2" >Edit</Link>
                              <button type='button' onClick={()=>deleteItem(item.id)} className="btn btn-small btn-danger m-1 mr-2" >Delete</button>
                            </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
            </div>
        </div>

    </div>
  )
}

export default Home