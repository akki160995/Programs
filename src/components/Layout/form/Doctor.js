import React, { useState } from "react";
//import Error from "./Error";
const Doctor = () =>{
        
    const [userRegistration,setuserRegistration] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        Address:"",
        Specification:"",
        Head_Flag: "",
        Department: "",
        photo: ""
    });

    const [records,setRecords] = useState([]);
          const handleInput = (e) =>{
              const name = e.target.name;
              const value = e.target.value;
              console.log(name,value);
            setuserRegistration({ ...userRegistration, [name]: value});

          }

          const handleSubmit = (e) =>{
            e.preventDefault();
            const newRecord = {...userRegistration,id:new Date().getTime().toString()}
            console.log(records);
            setRecords([...records, newRecord]);
          console.log(records);
          setuserRegistration({ FirstName:"",LastName:"",Email:"",Phone:"",Address:"",Specification:"",Head_Flag:"",Department:"",Photo:""});
        }

        


        
        return ( 
            <>
            <form action="" onSubmit={handleSubmit}>  
              <h1>Job Apply Now</h1>  
              <label>First Name: </label>   
                  <input type="text" placeholder="Enter Your Name" 
                  value ={userRegistration.FirstName} 
                  onChange={handleInput}
                  name="FirstName" id="FirstName"/>  
             <br/><br/>
              <label>Last Name:</label>
                  <input type="text" placeholder="Enter Your Name"  
                  value ={userRegistration.LastName} 
                  onChange={handleInput}
                  name="LastName" id="LastName"/>  
                <br/><br/>
                <label>Email Id:</label>
                  <input type="text" placeholder="Enter Email" 
                  value ={userRegistration.Email} onChange={handleInput} 
                  name="Email" id="Email"/>  
                <br/><br/>
                <label>Phone:</label>
                  <input type="text" placeholder="Enter Phone Number"  
                  value ={userRegistration.Phone} onChange={handleInput}
                  name="Phone" id="Phone"/>  
                <br/><br/>
                <label>Address:</label>
                  <textarea id="Address" placeholder="Enter Your Address" 
                  value ={userRegistration.Address} onChange={handleInput}
                  name="Address" />  
                <br/><br/>
                <label>Specification:</label>
                  <input type="text" placeholder="Enter Your Specification"  
                  value ={userRegistration.Specification} onChange={handleInput}
                  name="Specification" id="Specification"/>  
                <br/><br/>
                <label>Head_Flag:</label>
                  <input type="text" placeholder="Enter Head Flag Here" 
                  value ={userRegistration.Head_Flag} onChange={handleInput} 
                  name="Head_Flag" id="Head_Flag"/>  
                <br/><br/>
                <label>Department:</label>
                  <input type="text" placeholder="enter Department here" 
                  value ={userRegistration.Department} onChange={handleInput} 
                  name="Department" id="Department"/>  
                <br/><br/>
                <label>Photo:</label>
                  <input type="file" onChange="readURL(this);"/> 
                  <img id="blah" src="http://placehold.it/180"
                  alt="your image"/> 
                <br/><br/>
  
               

  
              <input type="submit"  value="Submit" />  
            
            </form>
            <div>
              {
                  records.map((curElem) => {
                    return ( 
                      <div className="showDataStyle">
                      <p>{curElem.FirstName}</p>
                      <p>{curElem.LastName}</p>
                      <p>{curElem.Email}</p>
                      <p>{curElem.Phone}</p>
                      <p>{curElem.Address}</p>
                      <p>{curElem.Specification}</p>
                      <p>{curElem.Head_Flag}</p>
                      <p>{curElem.Department}</p>
                      <p>{curElem.Photo}</p>
                      </div>
                    )
                  })
              }
            </div>
            </>
              
          );
        }  
        export default Doctor;