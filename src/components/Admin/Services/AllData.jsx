import React,{ useState,useEffect }  from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const AllData = () => {
  const [news,setNews]= useState([])

    useEffect(()=>{
        loadNews();
    },[]);

    const loadNews = async () =>{
        const result = await axios.get("http://localhost/www/Wecare/Services/all-data.php");
        setNews(result.data);
    };

    const deletedata = async id =>{
        await axios.get(`http://localhost/www/Wecare/Services/delete-data.php?id=${id}`);
        loadNews();
    }


      return (
    <div>
        
      <div className="container-fluid">
            <div>
                <Link className="btn btn-primary mr-2" to={`/admin/Services/AddData`}>ADD</Link>
            </div>
            <div className="py-4">
                <hr/>
                <table className="table shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th>Action</th>
                        </tr>  
                    </thead>
                    <tbody>
                        {
                            news.map((news,index)=>(
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{news.Heading}</td>
                                    <td>{news.Description}</td>
                                    <td >
                                        <Link className="btn btn-primary mr-2" to={`/admin/Services/view/${news.id}`}>View</Link>
                                        <Link
                                            class="btn btn-outline-primary mr-2"
                                            to={`/admin/Services/edit/${news.id}`}>
                                            Edit
                                        </Link>
                                        <button className="btn btn-outline-primary" onClick={()=>deletedata(news.id)}>Delete</button>
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
