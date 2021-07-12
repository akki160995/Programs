import React,{ useState,useEffect }  from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const AllData = () => {
  const [Data,setData]= useState([])

    useEffect(()=>{
        loadData();
    },[]);

    const loadData = async () =>{
        const result = await axios.get("http://localhost/www/Wecare/DeptAppoint/all-data.php");
        setData(result.data);
    };

    const deletedata = async id =>{
        await axios.get(`http://localhost/www/Wecare/DeptAppoint/delete-data.php?id=${id}`);
        loadData();
    }


      return (
    <div>
      <div className="container-fluid">
            <div className="py-4">
                <hr/>
                <table className="table shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Department</th>
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
                                    <td>{Data.department}</td>
                                    <td >
                                        <Link className="btn btn-primary mr-2" to={`/admin/Dept_Appoint/view/${Data.id}`}>View</Link>
                                        <Link
                                            class="btn btn-outline-primary mr-2"
                                            to={`/admin/Dept_Appoint/edit/${Data.id}`}>
                                            Edit
                                        </Link>
                                        <button className="btn btn-outline-primary" onClick={()=>deletedata(Data.id)}>Delete</button>
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
