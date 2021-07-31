import React,{ useState,useEffect }  from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const AllData = () => {
  const [Data,setData]= useState([])

    useEffect(()=>{
        loadData();
    },[]);

    const loadData = async () =>{
        const result = await axios.get("http://localhost/www/Wecare/Contacts/all-data.php");
        setData(result.data);
    };

    const deletedata = async id =>{
        await axios.get(`http://localhost/www/Wecare/Contacts/delete-data.php?id=${id}`);
        loadData();
    }


      return (
    <div>
        <div className="container-fluid">
            <div className="mt-5 mb-5 float-right mr-3">
                <Link className="btn btn-primary mr-2" to={`/admin/Contacts/AddData`}>ADD NEW RECORD</Link>
            </div>
            
            <div className="py-4">
                <hr/>
                <table className="table shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Message</th>
                            <th>Action</th>
                        </tr>  
                    </thead>
                    <tbody>
                        {
                            Data.map((Data,index)=>(
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{Data.firstname} {Data.lastname}</td>
                                    <td>{Data.email}</td>
                                    <td>{Data.phone}</td>
                                    <td>{Data.message}</td>
                                    <td >
                                        <Link className="btn btn-primary mr-2" to={`/admin/Contacts/view/${Data.id}`}>View</Link>
                                        <Link
                                            class="btn btn-outline-primary mr-2"
                                            to={`/admin/Contacts/edit/${Data.id}`}>
                                            Edit
                                        </Link>
                                        <button className="btn btn-danger" onClick={()=>deletedata(Data.id)}>Delete</button>
                                    </td>
                                    
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>            
        </div>
      
    </div>
  )
}

export default AllData
