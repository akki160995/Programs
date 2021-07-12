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
    <>
      <form action="" onSubmit={handleSubmit}>  
        <h1>Contact Us</h1>  
          <label>First Name: </label>   
          <input type="text" placeholder="Enter Your Name" 
            value ={userRegistration.FirstName} 
            onChange={handleInput}
            name="FirstName" id="FirstName"
          />  
          <br/><br/>
              
          <label>Last Name:</label>
          <input type="text" placeholder="Enter Your Name"  
            value ={userRegistration.LastName} 
            onChange={handleInput}
            name="LastName" id="LastName"
          />  
          <br/><br/>
          
          <label>Email Id:</label>
          <input type="text" placeholder="Enter Email" 
            value ={userRegistration.Email} onChange={handleInput} 
            name="Email" id="Email"
          />  
          <br/><br/>
                
          <label>Phone:</label>
          <input type="text" placeholder="Enter Phone Number"  
            value ={userRegistration.Phone} onChange={handleInput}
            name="Phone" id="Phone"
          />  
          <br/><br/>
          
          <label>Message:</label>
          <textarea id="Message" placeholder="Enter Your Address" 
            value ={userRegistration.Address} onChange={handleInput}
            name="Message"  
          />  
          <br/><br/>
               
          <button type="submit">Submit</button>  
  
      </form>
    </>
              
  );
}  
        

export default Contact;