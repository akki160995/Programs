import React, { useState } from "react";
import axios from 'axios';

const Contact = () =>{
  const [userRegistration, setuserRegistration] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Message: ""
  });

  const [records,SetRecords] = useState([]);

  const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setuserRegistration({ ...userRegistration, [name]: value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newRecord = {...userRegistration}
    SetRecords([...records, newRecord]);
    console.log(newRecord);
    axios.post('http://localhost/www/Wecare/Contacts/insert_data.php',newRecord)
    .then(
      response =>{
        console.log(response)
    })
    .catch(error=>{
      console.log(error)
      }
    )
    setuserRegistration({ FirstName:"",LastName:"",Email:"",Phone:"", Message:""});
  }
  
  return ( 
    <div className="container">
      <h4 className="Header-s mt-4">Contact Us</h4>
      <form action="" className="form-group" onSubmit={handleSubmit}>  
        
          
          <div className="row">

            <div className="form-group col-lg-6">
              <label>First Name: </label>   
              <input type="text" placeholder="Enter Your Name" 
              value ={userRegistration.FirstName} 
              onChange={handleInput}
              className="form-control"
              name="FirstName" id="FirstName"
            />  
            </div>
            <div className="form-group col-lg-6">
              
          <label>Last Name:</label>
          <input type="text" placeholder="Enter Your Name"  
            value ={userRegistration.LastName} 
            onChange={handleInput}
            className="form-control"
            name="LastName" id="LastName"
          />  
          </div>
            <div className="form-group col-lg-6">
          <label>Email Id:</label>
          <input type="text" placeholder="Enter Email" 
            value ={userRegistration.Email} onChange={handleInput} 
            name="Email" id="Email"
            className="form-control"
          />  
          </div>
            <div className="form-group col-lg-6">
                
          <label>Phone:</label>
          <input type="text" placeholder="Enter Phone Number"  
            value ={userRegistration.Phone} onChange={handleInput}
            name="Phone" id="Phone"
            className="form-control"
          />  
          </div>
            <div className="form-group col-lg-12">
          
          <label>Message:</label>
          <textarea id="Message" placeholder="Enter Your Address" 
            value ={userRegistration.Address} onChange={handleInput}
            name="Message"  
            className="form-control"
          />  
          </div>
          </div>
               
          <button type="submit" className="btn btn-primary">Submit</button>  
  
      </form>
    </div>
              
  );
}  
        

export default Contact;